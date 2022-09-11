const express = require("express");

const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
app.use(express.urlencoded({ extended: false }));
let Users = [
  {
    id: 1,
    username: "john",
    password: "john1234",
    isAdmin: true,
  },
  {
    id: 2,
    username: "Jane",
    password: "john1234",
    isAdmin: false,
  },
];
let refreshTokens = [];
app.post("/api/refresh", (req, res) => {
  //take the token
  const refreshtoken = req.body.token;
  //send err if no token or not valid
  if (!refreshtoken) return res.send(401).json("Your are not authenticate");
  if (!refreshTokens.includes(refreshtoken)) {
    return res.status(403).json("Refresh Token is not valid");
  }

  jwt.verify(refreshtoken, "Prabha1234", (err, user) => {
    err && console.log("err");
    refreshTokens = refreshTokens.filter((token) => token !== refreshtoken);

    const newaccessToken = generateTokens(user);
    const newrefreshTokens = generateRefreshTokens(user);

    refreshTokens.push(newrefreshTokens);

    res.status(200).json({
      accesstoken: newaccessToken,
      refreshTokens: newrefreshTokens,
    });
  });
  //if eveything ok create new access token,refresh token send to user
});

const generateTokens = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "PrabhatSingh", {
    expiresIn: "15m",
  });
};
const generateRefreshTokens = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "Prabha1234");
};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = Users.find((u) => {
    return u.username == username && u.password == password;
  });
  if (user) {
    //generate and access token
    const accesstoken = generateTokens(user);
    const refreshToken = generateRefreshTokens(user);

    refreshTokens.push(refreshToken);

    res.send({
      username: user.username,
      isAdmin: user.isAdmin,
      accesstoken,
      refreshToken,
    });
  } else {
    res.status(400).send("Username or password is incorrect");
  }
});

const verify = (req, res, next) => {
  const headers = req.headers.authorization;
  if (headers) {
    const token = headers.split(" ")[1];
    jwt.verify(token, "PrabhatSingh", (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("Your are not authenticated");
  }
};
app.delete("/api/users/:userId", verify, (req, res) => {
  if (req.user.isAdmin || req.user.id === req.params.userId) {
    res.status(200).json("user has been delete");
  } else {
    res.status(403).json("Your are not allowed to delete the user");
  }
});

app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token != refreshToken);
  res.status(200).json("Your logged out successfully");
});
app.listen(5000, () => console.log("Backend sErver is Ready"));
