var Servo = require('./servo.js');
var Voice = require('./voice.js');

module.exports = function(){
	
	// the main SAINT public object
	var me = {
		eyes: new Servo()

		, voice: new Voice({
			'happy': 'lib/R2D2a.wav'
		})
	}
	
	// Behaviour module
	me.behaviour = {
		
		// Behave idly
		idle: function(){
			
		}
	}
	
	// Inits all the components
	me.init = function(){
		return Promise.all([
			me.voice.init()
		]);
	}
	
	return me;
};
