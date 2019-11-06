/*Welcome to the connection js file!!!*/

/*After installing mysql tell javascript to init*/
const mysql = require("mysql");

/*Global variable the developer can maniputlat to establish a connection to the backend database*/
var connection;

/*Set up javascript to connect db locally if JAWSDB heroku app deploys*/
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      port: 3306,
      password: "Wolviver24",
      database: "notetaker_db"
    });
  }

  connection.connect(function(err) {
    if (err) {
        console.error("Cannot connect to the database: " + err.stack);
        return;
    }
        console.log("Connected to the Eat Da Whopper databse" + connection.threadId);
  });
  
  /*"module.exports" export the connection so it's available in other parts of the app*/
  module.exports = connection;