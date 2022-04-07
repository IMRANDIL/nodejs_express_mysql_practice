require('dotenv').config();


const express = require('express');

const mysql = require('mysql')


const app = express()








const { faker } = require('@faker-js/faker');

// console.log(faker.date.past());

// console.log(faker.internet.email());






const con = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'join_us'
});



con.connect(function (err) {
    if (err) throw err;
    console.log('Database connected😄');
    // const sql = 'SELECT COUNT(*) AS total FROM users';
    // const sql = `INSERT INTO users (email) VALUES ("whey@gmail.com")`;

    //Inserting Lots of data.........500....

    // const person = {
    //     email: faker.internet.email(),
    //     created_at: faker.date.past()
    // };


    const data = [];

    for (let i = 0; i < 500; i++) {
        data.push([faker.internet.email(), faker.date.past()])
    }

    console.log(data.length);


    // const sql = `INSERT INTO users SET ?`;     //insert data dynamically....
    const sql = `INSERT INTO users (email,created_at) VALUES ?`;
    con.query(sql, [data], function (err, result, fields) {
        if (err) throw err;
        console.log(result);


    })
})