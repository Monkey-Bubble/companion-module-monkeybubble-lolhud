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
							actionId: 'totalgold_toggle',
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
					feedbackId: 'totalgold_state',
					options: {},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
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
							actionId: 'goldDif_toggle',
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
					feedbackId: 'goldDif_state',
					options: {},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
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
							actionId: 'tab_obs1_toggle',
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
					feedbackId: 'tab_obs1_state',
					options: {},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
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
							actionId: 'tab_obs2_toggle',
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
					feedbackId: 'tab_obs2_state',
					options: {},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
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
							actionId: 'baron_toggle',
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
					feedbackId: 'baron_state',
					options: {},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
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
							actionId: 'xplevel_toggle',
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
					feedbackId: 'xpLevel_state',
					options: {},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
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
							actionId: 'tfdamage_toggle',
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
					feedbackId: 'tfdamage_state',
					options: {},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 255, 255),
					},
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
							actionId: 'totalgold_toggle',
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
							actionId: 'goldDif_toggle',
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
							actionId: 'tab_obs1_toggle',
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
							actionId: 'tab_obs2_toggle',
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
							actionId: 'baron_toggle',
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
							actionId: 'xpLevel_toggle',
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
							actionId: 'tfdamage_toggle',
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
							actionId: 'totalgold_toggle',
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
							actionId: 'goldDif_toggle',
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
							actionId: 'tab_obs1_toggle',
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
							actionId: 'tab_obs2_toggle',
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
							actionId: 'baron_toggle',
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
							actionId: 'xpLevel_toggle',
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
							actionId: 'tfdamage_toggle',
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
