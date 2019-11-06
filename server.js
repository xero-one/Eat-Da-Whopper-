/*Set our constants that require important npm packages: express and handle-bars*/
const exphbs = require("express-handlebars");
const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(routes);

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(express.static("public"));

/*Calling the app to us handlebars engine*/
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

/*Call to set the app to listen for user's request*/
app.listen(PORT,function(){
    console.log("Listening to Port " + PORT);
  })