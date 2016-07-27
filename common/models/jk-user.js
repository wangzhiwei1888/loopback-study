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

	JkUser.afterRemote(
		'create',
		function(ctx,user,next){
			ctx.result.verify({
				type:'email',
				from:'443883626@qq.com',
				to:'443883626@qq.com',
				redirect:'/'
			},next);
		}
	);
	

};
