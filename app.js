const faker = require('faker');
const mysql = require('mysql');
const express = require('express');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'join_us'
});



connection.end();