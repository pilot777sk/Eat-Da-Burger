var mysql = require('mysql');
var connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'burgers_db',
});

connection.connect(function(err){
  if(err){
      console.log("ERROR!!! \n"+err);
      throw err;
  }
  else
      console.log("connected id: "+connection.threadId);
});


module.exports = connection;