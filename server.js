require('dotenv').config();


const express = require('express');

const mysql = require('mysql')


const app = express()








const { faker } = require('@faker-js/faker');



console.log(faker.internet.email());






const con = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'join_us'
});



con.connect(function (err) {
    if (err) throw err;
    console.log('Database connected😄');
    const sql = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log('The time is: ', result[0].time);
        console.log('The date is: ', result[0].date);
        console.log('The now is: ', result[0].now);

    })
})