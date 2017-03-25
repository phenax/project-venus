
const GOOGLE_CLIENT_ID= '660210099204-uu9hs30rop1u93mbqhuv51a2nuq55v1l.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET= 'TXnaKd_7Dh633fGvutz6aEL-';


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports= (db) => {

	// Use the GoogleStrategy within Passport.
	//   Strategies in Passport require a `verify` function, which accept
	//   credentials (in this case, an accessToken, refreshToken, and Google
	//   profile), and invoke a callback with a user object.
	passport.use(
		new GoogleStrategy({
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: 'http://localhost:8080/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			db.models.User
				.findOrCreate({

					where: { googleId: profile.id },

					defaults: {
						googleId: profile.id,
						email: profile.id,
						username: profile.id,
						name: profile.displayName,
						image: profile.photos.length? profile.photos[0].value: 'default-pic.jpg',
					}
				})
				.spread((e, user) => done(e, user));
		}
	));

};

