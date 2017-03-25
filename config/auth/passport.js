
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


// Google auth information
const authConfig= {
	clientID: '660210099204-uu9hs30rop1u93mbqhuv51a2nuq55v1l.apps.googleusercontent.com',
	clientSecret: 'TXnaKd_7Dh633fGvutz6aEL-',
	callbackURL: 'http://localhost:8080/auth/google/callback'
};


module.exports= (db) => {

	// Added serialization
	passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((user, done) => done(null, user));

	// Strategy implementation
	passport.use(
		new GoogleStrategy(authConfig, (access, refresh, profile, done) => {

			db.models.User
				.findOrCreate({
					where: { googleId: profile.id },
					defaults: {
						email: profile.emails[0].value,
						username: profile.id,
						name: profile.displayName,
						image: profile._json.image? profile._json.image.url: (profile.photos.length? profile.photos[0].value: '/img/default-pic.jpg'),
					}
				})
				.spread((user) => done(null, user.dataValues))
				.catch(e => done(e, null));
		}
	));

};

