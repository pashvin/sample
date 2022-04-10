const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const port = 4200;
const app = express();
const mySecret = "password";

const sessionConfig = {
  secret: mySecret,
  name: "appName",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "strict", // This will secure cookies
  },
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(session(sessionConfig));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("try to use /login?username=abc OR /welcome OR /logout");
});

// create Lambda can be in separate file
app.get("/login", (req, res) => {
  if (!req.query.name) {
    res.send("Please pass username in request like /login?name=yourname");
  }
  let jwtToken = jwt.sign({ user: req.query.name }, mySecret, {
    expiresIn: "1800s",
  });
  res.cookie("jwtToken", jwtToken, {
    maxAge: 24 * 60 * 60,
    overwrite: true,
    httpOnly: true,
  });
  res.send("this will create a JWT and store in cookie");
});

// Welcome Lambda can be in separate file
app.get("/welcome", (req, res) => {
  try {
    let decoded = jwt.verify(req.cookies.jwtToken, mySecret);
    if (decoded.user) {
      res.send("found user info. User: " + decoded.user);
    } else {
      res.send(`can't find user token`);
    }
  } catch (err) {
    res.send(`can't find user token`);
  }
});

// clear Lambda can be in separate file
app.get("/logout", (req, res) => {
  res.clearCookie("jwtToken");
  res.send("This will clear JWT from cookie");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
