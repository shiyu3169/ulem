module.exports = function(app) {
  const userModel = require("../models/user/user.model.server");

  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post("/api/user", createUser);
  app.get("/api/user", findUsers);
  app.get("/api/user/:uid", findUserById);
  app.post("/api/login", passport.authenticate("local"), login);
  app.post("/api/logout", logout);
  app.post("/api/loggedIn", loggedIn);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);

  // Local Strategy
  passport.use(
    new LocalStrategy(function(username, password, done) {
      userModel.findUserByCredentials(username, password).then(user => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );

  function loggedIn(req, res) {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send("0");
    }
  }

  function login(req, res) {
    res.json(req.user);
  }

  function logout(req, res) {
    req.logOut();
    res.sendStatus(200);
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      user => {
        done(null, user);
      },
      err => {
        done(err, null);
      }
    );
  }

  function createUser(req, res) {
    const newUser = req.body;
    userModel
      .createUser(newUser)
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function findUsers(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    if (username && password) {
      userModel.findUserByCredentials(username, password).then(user => {
        res.json(user);
      });
      return;
    } else if (username) {
      userModel.findUserByUsername(username).then(user => {
        res.json(user);
      });
      return;
    }
    userModel.findUsers().then(users => {
      res.json(users);
    });
  }

  function findUserById(req, res) {
    const uid = req.params["uid"];
    userModel.findUserById(uid).then(user => {
      res.json(user);
    });
  }

  function updateUser(req, res) {
    const uid = req.params["uid"];
    const user = req.body;
    userModel.updateUser(uid, user).then(data => {
      res.json(user);
    });
  }

  function deleteUser(req, res) {
    const uid = req.params["uid"];
    userModel.deleteUser(uid).then(data => {
      res.send(data);
    });
  }
};
