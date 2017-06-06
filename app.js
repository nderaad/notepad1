//-------------------------------------------------------//
// DEPENDENCIES
//-------------------------------------------------------//
var express                 = require('express');
var app                     = express();
var bodyParser              = require("body-parser");
var mongoose                = require("mongoose");
mongoose.Promise            = require("bluebird");//--using bluebird promises installed instead of native ES6 for 4X speed
var config                  = require("./config");//--establishing connection with config Folder that has credentials and location of MongoDB
var passport                = require("passport");
var localStrategy           = require("passport-local");
var passportLocalMongoose   = require("passport-local-mongoose");
var expressSession          = require("express-session");
var flash                   = require("connect-flash");
var User                    = require("./models/user");

app.disable('view cache');
app.use(bodyParser.urlencoded({extended: true}));//allows app to parse body of http requests (e.g. GET, POST, etc.)
app.use(express.static(__dirname + "/public")); //tells express to serve up public folder for accessing static files
app.set("view engine", "ejs");//sets template engine to ejs enabling ejs

//--PASSPORT CONFIG--------------------------------------//
app.use(require("express-session")({
  secret: "famjam",
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//this is middleware that will run on all routes below providing access to the information about the User (if any) to the route and then running next()
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

//-------------------------------------------------------//
// MONGODB CONNECTION
//-------------------------------------------------------//

//--establish connection with MondgoDB using config requirement above
mongoose.connect(config.getDbConnectionString());

//-------------------------------------------------------//
// ROUTES
//-------------------------------------------------------//

//--INDEX-------------------------------------------//
app.get("/",function(req,res){
  res.render("index");
});

//--LOGIN-------------------------------------------//
app.post("/login", passport.authenticate("local", {
  successRedirect: "/campgrounds",
  failureRedirect: "/login"
}), function(req, res){
});

//--CATCH------------------------------------------------//
app.get("*",function(req,res){
  res.send("Opps this page does not exist");
});

//-------------------------------------------------------//
// PORT LISTENER
//-------------------------------------------------------//

app.listen(3000, function(){
  console.log("YelpCamp server is listening on Port 3000")
});
