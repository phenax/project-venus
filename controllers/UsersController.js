
const _Controller= require('./_Controller');

module.exports= class extends _Controller  {

	
	profile(req, res) {
		
		res.render('ProfilePage', {
			user: {
				name: 'HGeloasd ',
				bio: 'HGeloasd AFSFHDGFHJG',
				image: 'default-profile.png',
			}
		});
	}
};
