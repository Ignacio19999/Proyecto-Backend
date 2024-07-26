const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/user.model');

passport.use(new GitHubStrategy({
    clientID: 'Iv1.ca7d293bc763668f',
    clientSecret: '710497abe62fd904fec57c441f220fb0e7a28fb1',
    callbackURL: 'https://github.com/apps/videogamers-test-app'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ githubId: profile.id });
        if (!user) {
            user = new User({
                githubId: profile.id,
                username: profile.username,
                email: profile.emails[0].value
            });
            await user.save();
        }
        done(null, user);
    } catch (err) {
        done(err, null);
    }
  }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});