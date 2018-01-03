
module.exports = function(options){

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