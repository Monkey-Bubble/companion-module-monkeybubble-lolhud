module.exports = function (self) {
	self.setActionDefinitions({
		totalgold_toggle: {
			name: 'Toggle/On/Off Total Gold',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
					default: 'toggle',
				},
			],
			callback: async (event) => {
				const totalGold = self.getVariableValue('totalGold')
				if (totalGold === undefined) return
				if (event.options.action === 'toggle')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { totalGold: !totalGold } }))
				if (event.options.action === 'on')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { totalGold: true } }))
				if (event.options.action === 'off')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { totalGold: false } }))
			},
		},
		goldDif_toggle: {
			name: 'Toggle/On/Off Gold Difference',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
					default: 'toggle',
				},
			],
			callback: async (event) => {
				const goldDif = self.getVariableValue('goldDif')
				if (goldDif === undefined) return
				if (event.options.action === 'toggle')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { goldDif: !goldDif } }))
				if (event.options.action === 'on')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { goldDif: true } }))
				if (event.options.action === 'off')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { goldDif: false } }))
			},
		},
		tab_obs1_toggle: {
			name: 'Toggle/On/Off Tab Observer 1',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
					default: 'toggle',
				},
			],
			callback: async (event) => {
				const tab_obs1 = self.getVariableValue('tab_obs1')
				if (tab_obs1 === undefined) return
				if (event.options.action === 'toggle')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tab_obs1: !tab_obs1 } }))
				if (event.options.action === 'on')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tab_obs1: true } }))
				if (event.options.action === 'off')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tab_obs1: false } }))
			},
		},
		tab_obs2_toggle: {
			name: 'Toggle/On/Off Tab Observer 2',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
					default: 'toggle',
				},
			],
			callback: async (event) => {
				const tab_obs2 = self.getVariableValue('tab_obs2')
				if (tab_obs2 === undefined) return
				if (event.options.action === 'toggle')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tab_obs2: !tab_obs2 } }))
				if (event.options.action === 'on')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tab_obs2: true } }))
				if (event.options.action === 'off')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tab_obs2: false } }))
			},
		},
		baron_toggle: {
			name: 'Toggle/On/Off Baron Nashor Buff',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
					default: 'toggle',
				},
			],
			callback: async (event) => {
				const baron = self.getVariableValue('baron')
				if (baron === undefined) return
				if (event.options.action === 'toggle')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { baron: !baron } }))
				if (event.options.action === 'on') self.ws.send(JSON.stringify({ topic: 'command', payload: { baron: true } }))
				if (event.options.action === 'off')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { baron: false } }))
			},
		},
		xplevel_toggle: {
			name: 'Toggle/On/Off XP & Level',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
					default: 'toggle',
				},
			],
			callback: async (event) => {
				const xpLevel = self.getVariableValue('xpLevel')
				if (xpLevel === undefined) return
				if (event.options.action === 'toggle')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { xpLevel: !xpLevel } }))
				if (event.options.action === 'on')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { xpLevel: true } }))
				if (event.options.action === 'off')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { xpLevel: false } }))
			},
		},
		tfdamage_toggle: {
			name: 'Toggle/On/Off Damage Dealth Last Teamfight',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'toggle', label: 'Toggle' },
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
					default: 'toggle',
				},
			],
			callback: async (event) => {
				const tfdamage = self.getVariableValue('tfdamage')
				if (tfdamage === undefined) return
				if (event.options.action === 'toggle')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tfdamage: !tfdamage } }))
				if (event.options.action === 'on')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tfdamage: true } }))
				if (event.options.action === 'off')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { tfdamage: false } }))
			},
		},
		tfdamage_datapoint: {
			name: 'Set Start / End Point for Damage Dealth Last Teamfight',
			options: [
				{
					id: 'action',
					type: 'dropdown',
					label: 'Action',
					choices: [
						{ id: 'start', label: 'Start Point' },
						{ id: 'end', label: 'End Point' },
					],
					default: 'start',
				},
			],
			callback: async (event) => {
				if (event.options.action === 'start')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { damage_start: Date.now() } }))
				if (event.options.action === 'end')
					self.ws.send(JSON.stringify({ topic: 'command', payload: { damage_end: Date.now() } }))
			},
		},
	})
}
