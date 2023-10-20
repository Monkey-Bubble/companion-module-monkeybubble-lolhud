const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
	self.setPresetDefinitions({
		totalgold_toggle: {
			type: 'button',
			category: 'Toggles',
			name: 'Total Gold',
			style: {
				text: 'Total Gold',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'totalgold_toggle',
							options: {
								action: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					type: 'totalgold_state',
					options: {},
				},
			],
		},
		goldDif_toggle: {
			type: 'button',
			category: 'Toggles',
			name: 'Gold Difference',
			style: {
				text: 'Gold Difference',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'goldDif_toggle',
							options: {
								action: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					type: 'goldDif_state',
					options: {},
				},
			],
		},
		tab_obs1_toggle: {
			type: 'button',
			category: 'Toggles',
			name: 'Tab Observer 1',
			style: {
				text: 'Tab Observer 1',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tab_obs1_toggle',
							options: {
								action: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					type: 'tab_obs1_state',
					options: {},
				},
			],
		},
		tab_obs2_toggle: {
			type: 'button',
			category: 'Toggles',
			name: 'Tab Observer 2',
			style: {
				text: 'Tab Observer 2',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tab_obs2_toggle',
							options: {
								action: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					type: 'tab_obs2_state',
					options: {},
				},
			],
		},
		baron_toggle: {
			type: 'button',
			category: 'Toggles',
			name: 'Baron Nashor Buff',
			style: {
				text: 'Baron Nashor Buff',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'baron_toggle',
							options: {
								action: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					type: 'baron_state',
					options: {},
				},
			],
		},
		xpLevel_toggle: {
			type: 'button',
			category: 'Toggles',
			name: 'XP & Level',
			style: {
				text: 'XP & Level',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'xpLevel_toggle',
							options: {
								action: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					type: 'xpLevel_state',
					options: {},
				},
			],
		},
		tfdamage_toggle: {
			type: 'button',
			category: 'Toggles',
			name: 'Damage Dealt Last Teamfight',
			style: {
				text: 'Damage Dealt Last Teamfight',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tfdamage_toggle',
							options: {
								action: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					type: 'tfdamage_state',
					options: {},
				},
			],
		},
		totalgold_on: {
			type: 'button',
			category: 'On',
			name: 'Total Gold',
			style: {
				text: 'Total Gold - On',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'totalgold_toggle',
							options: {
								action: 'on',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		goldDif_on: {
			type: 'button',
			category: 'On',
			name: 'Gold Difference',
			style: {
				text: 'Gold Difference - On',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'goldDif_toggle',
							options: {
								action: 'on',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		tab_obs1_on: {
			type: 'button',
			category: 'On',
			name: 'Tab Observer 1',
			style: {
				text: 'Tab Observer 1 - On',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tab_obs1_toggle',
							options: {
								action: 'on',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		tab_obs2_on: {
			type: 'button',
			category: 'On',
			name: 'Tab Observer 2',
			style: {
				text: 'Tab Observer 2 - On',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tab_obs2_toggle',
							options: {
								action: 'on',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		baron_on: {
			type: 'button',
			category: 'On',
			name: 'Baron Nashor Buff',
			style: {
				text: 'Baron Nashor Buff - On',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'baron_toggle',
							options: {
								action: 'on',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		xpLevel_on: {
			type: 'button',
			category: 'On',
			name: 'XP & Level',
			style: {
				text: 'XP & Level - On',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'xpLevel_toggle',
							options: {
								action: 'on',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		tfdamage_on: {
			type: 'button',
			category: 'On',
			name: 'Damage Dealt Last Teamfight',
			style: {
				text: 'Damage Dealt Last Teamfight - On',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tfdamage_toggle',
							options: {
								action: 'on',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		totalgold_off: {
			type: 'button',
			category: 'Off',
			name: 'Total Gold',
			style: {
				text: 'Total Gold - Off',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'totalgold_toggle',
							options: {
								action: 'off',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		goldDif_off: {
			type: 'button',
			category: 'Off',
			name: 'Gold Difference',
			style: {
				text: 'Gold Difference - Off',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'goldDif_toggle',
							options: {
								action: 'off',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		tab_obs1_off: {
			type: 'button',
			category: 'Off',
			name: 'Tab Observer 1',
			style: {
				text: 'Tab Observer 1 - Off',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tab_obs1_toggle',
							options: {
								action: 'off',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		tab_obs2_off: {
			type: 'button',
			category: 'Off',
			name: 'Tab Observer 2',
			style: {
				text: 'Tab Observer 2 - Off',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tab_obs2_toggle',
							options: {
								action: 'off',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		baron_off: {
			type: 'button',
			category: 'Off',
			name: 'Baron Nashor Buff',
			style: {
				text: 'Baron Nashor Buff - Off',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'baron_toggle',
							options: {
								action: 'off',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		xpLevel_off: {
			type: 'button',
			category: 'Off',
			name: 'XP & Level',
			style: {
				text: 'XP & Level - Off',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'xpLevel_toggle',
							options: {
								action: 'off',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		tfdamage_off: {
			type: 'button',
			category: 'Off',
			name: 'Damage Dealt Last Teamfight',
			style: {
				text: 'Damage Dealt Last Teamfight - Off',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							action: 'tfdamage_toggle',
							options: {
								action: 'off',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
	})
}
