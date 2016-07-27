module.exports = function(JkUser) {

	JkUser.sayHi =function(callback){

		// return 'hi';

		callback(null,'hi');
	}

	JkUser.remoteMethod(
		'sayHi',
		{
			'accepts':[],
			'returns':[
				{'arg':'result','type':'string'}
			],
			'http':{
				'verb':'get',
				'path':'/say-hi',
			}
		}

	)
};
