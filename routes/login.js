exports.LoginUser = function (usernameForm, passwordForm, res, req) 
{

var express = require('express')
  , http = require('http')
  , util = require('util')
  , path = require('path')
  , mysql = require('mysql')
  , fs = require('fs');

var connection = mysql.createConnection(
  {
  host     : 'danu2.it.nuigalway.ie',
  user     : 'mydb1155',
  password : 'mydb11555',
  database : 'mydb1155',
  }
  );

var sql    = 'SELECT username, password FROM USERS WHERE username = ' + connection.escape(usernameForm) + 'AND password = ' + connection.escape(passwordForm);


connection.query(sql, function(err, rows, fields) {
  if (err) throw err;

  console.log('rows[0] output: ' ,rows[0]);
  console.log('rows output :', rows);
  //if (rows[0] == null ) 
  for (var i in rows)
  {
	console.log('SQL matches: ' ,rows[i]);
  }
  if (rows[0] == null ) 
  {
	//res.send("try again", 400);
	console.log('No matches - ACCESS DENIED.');
	res.redirect('/login');
  }
  else 
  {
	//res.send("User is logged in", 200);
	console.log('ACCESS GRANTED - logged in.');
	//console.log(sql);
  }
  });
};