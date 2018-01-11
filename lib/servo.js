const makePwmDriver = require('adafruit-i2c-pwm-driver')


module.exports = function(options){
	
	options = options || {};
	options.address = options.address || 0x40;
	options.device = options.device || '/dev/i2c-1';
	
	var pwmDriver = makePwmDriver({ address: options.address, device: options.device })

	return {
		init: function(){
			return init().then(function(){
				reset();
			});
		},
		
		off: function(){
			return reset();
		},
		
		random: function(interval){
			return reset().then(function(){
				return animate(interval);
			});
		}
	}
};