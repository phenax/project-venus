
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const authConfig= require('./keys').google;


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

