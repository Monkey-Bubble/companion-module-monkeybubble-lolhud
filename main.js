const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const WebSocket = require('ws')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariableDefinitions = require('./variables')
const UpdatePresets = require('./presets')

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}
	isInitialized = false

	wsRegex = '^wss?:\\/\\/([\\da-z\\.-]+)(:\\d{1,5})?(?:\\/(.*))?$'

	async init(config) {
		this.config = config

		this.initWebSocket()
		this.isInitialized = true
		this.updateStatus(InstanceStatus.Ok)

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
		this.updatePresets() // export presets
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
		this.isInitialized = false
		if (this.reconnect_timer) {
			clearTimeout(this.reconnect_timer)
			this.reconnect_timer = null
		}
		if (this.ws) {
			this.ws.close(1000)
			delete this.ws
		}
	}

	async configUpdated(config) {
		this.config = config
	}

	reconnect() {
		if (this.isInitialized) {
			if (this.reconnect_timer) {
				clearTimeout(this.reconnect_timer)
			}
			this.reconnect_timer = setTimeout(() => {
				this.initWebSocket()
			}, 5000)
		}
	}

	initWebSocket() {
		if (this.reconnect_timer) {
			clearTimeout(this.reconnect_timer)
			this.reconnect_timer = null
		}

		const url = `${this.config.url}/${this.config.stream}?topic=feedback,command,${this.config.topic.join(',')}`
		if (!url || url.match(new RegExp(this.wsRegex)) === null) {
			this.updateStatus(InstanceStatus.BadConfig, `WS URL is not defined or invalid`)
			return
		}

		this.updateStatus(InstanceStatus.Connecting)

		// close existing connection if any
		if (this.ws) {
			this.ws.close(1000)
			delete this.ws
		}
		this.ws = new WebSocket(url)

		this.ws.on('open', () => {
			this.updateStatus(InstanceStatus.Ok)
			this.log('debug', `Connection opened`)
			this.ws.send(JSON.stringify({ topic: 'command', payload: { feedback: Date.now() } }))
		})
		this.ws.on('close', (code) => {
			this.log('debug', `Connection closed with code ${code}`)
			this.updateStatus(InstanceStatus.Disconnected, `Connection closed with code ${code}`)
			this.reconnect()
			this.log('debug', `Attempt reconnect in 500ms`)
			this.updateStatus(InstanceStatus.Disconnected, `Attempt reconnect in 500ms`)
		})

		this.ws.on('message', this.messageReceivedFromWebSocket.bind(this))

		this.ws.on('error', (data) => {
			this.log('error', `WebSocket error: ${data}`)
		})
	}

	messageReceivedFromWebSocket(data) {
		if (this.config.debug_messages) {
			this.log('debug', `Message received: ${data}`)
		}

		let msgValue = null
		try {
			msgValue = JSON.parse(data)
		} catch (e) {
			msgValue = data
		}

		if (msgValue.topic && msgValue.topic === 'feedback') {
			if (msgValue.observer !== 'obs1')
				this.setVariableValue({ ['tab_' + msgValue.observer]: msgValue.payload['tab_' + msgValue.observer] })
			else this.setVariableValues(msgValue.payload)
			this.checkFeedbacks()
		}
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'url',
				label: 'Target URL',
				tooltip: 'The URL of the WebSocket server (ws[s]://domain[:port][/path])',
				width: 6,
				regex: '/' + this.wsRegex + '/',
			},
			{
				type: 'number',
				id: 'stream',
				label: 'Stream #',
				width: 3,
				default: 1,
				min: 1,
				max: 100,
			},
			{
				id: 'topic',
				type: 'multidropdown',
				label: 'Topics',
				tooltip: 'Topics to subscribe to',
				width: 3,
				choices: [
					{ id: 'obs1', label: 'Observer 1' },
					{ id: 'obs2', label: 'Observer 2' },
				],
			},
			{
				type: 'checkbox',
				id: 'debug_messages',
				label: 'Debug messages',
				tooltip: 'Log incomming and outcomming messages',
				width: 6,
			},
		]
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}

	updatePresets() {
		UpdatePresets(this)
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
