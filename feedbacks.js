const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
	self.setFeedbackDefinitions({
		totalgold_state: {
			name: 'Tally - Total Gold',
			type: 'boolean',
			label: 'Total Gold State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: (feedback, context) => {
				const totalGold = self.getVariableValue('totalGold')
				if (totalGold) {
					return true
				} else {
					return false
				}
			},
		},
		goldDif_state: {
			name: 'Tally - Gold Difference',
			type: 'boolean',
			label: 'Gold Difference State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: (feedback, context) => {
				const goldDif = self.getVariableValue('goldDif')
				if (goldDif) {
					return true
				} else {
					return false
				}
			},
		},
		tab_obs1_state: {
			name: 'Tally - Tab Observer 1',
			type: 'boolean',
			label: 'Tab Observer 1 State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: (feedback, context) => {
				const tab_obs1 = self.getVariableValue('tab_obs1')
				if (tab_obs1) {
					return true
				} else {
					return false
				}
			},
		},
		tab_obs2_state: {
			name: 'Tally - Tab Observer 2',
			type: 'boolean',
			label: 'Tab Observer 2 State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: (feedback, context) => {
				const tab_obs2 = self.getVariableValue('tab_obs2')
				if (tab_obs2) {
					return true
				} else {
					return false
				}
			},
		},
		baron_state: {
			name: 'Tally - Baron Nashor Buff',
			type: 'boolean',
			label: 'Baron Nashor Buff State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: (feedback, context) => {
				const baron = self.getVariableValue('baron')
				if (baron) {
					return true
				} else {
					return false
				}
			},
		},
		xpLevel_state: {
			name: 'Tally - XP & Level',
			type: 'boolean',
			label: 'XP & Level State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: (feedback, context) => {
				const xpLevel = self.getVariableValue('xpLevel')
				if (xpLevel) {
					return true
				} else {
					return false
				}
			},
		},
		tfdamage_state: {
			name: 'Tally - Damage Dealth Last Teamfight',
			type: 'boolean',
			label: 'Damage Dealth Last Teamfight State',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: (feedback, context) => {
				const tfdamage = self.getVariableValue('tfdamage')
				if (tfdamage) {
					return true
				} else {
					return false
				}
			},
		},
	})
}
