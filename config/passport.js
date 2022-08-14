const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");
//Require your User Model here!

// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, cb) {
      // a user has logged in via OAuth!
      // refer to the lesson plan from earlier today in order to set this up
      const user = await User.findOne({ googleId: profile.id });
      if (user) return cb(null, user);
      try {
        const newUser = await User.create({
          name: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value, // <- this give us the email
          avatar: profile.photos[0].value,
        });
        return cb(null, newUser);
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user._id); // <- storing in our session cookie the logged in users id
});

passport.deserializeUser(function (userId, cb) {
  User.findById(userId, function (err, userDocument) {
    if (err) return cb(err);
    cb(null, userDocument); // <- this assins the userDocument to req.user = userDocument
  });
});
