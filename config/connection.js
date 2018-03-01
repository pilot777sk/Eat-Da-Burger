var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection =
    mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};

connection.connect(function(err){
  if(err){
      console.log("ERROR!!! \n"+err);
      throw err;
  }
  else
      console.log("connected id: "+connection.threadId);
});


module.exports = connection;