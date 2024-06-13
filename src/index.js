"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // use the local user
    password: 'local_password', // use the local password
    database: 'TS_CRM'
});
// pool.connect();
pool.execute('SELECT * FROM employees;', function (err, results) {
    if (err) {
        console.log('error getting to db', err);
        throw err;
    }
    console.log(results);
    var employees = results;
    console.log(employees);
});
// pool.end(); 
// (async () => {
//     try {
//       const entries = await getAll();
//       console.log(entries);
//     } catch (error) {
//       console.error(error);
//     }
//   })();
// const addEmployees = () => {
//   let first_name: string = prompt('Please input the first name')
//   let last_name: string = prompt('Please input the last name')
//   let age: number = prompt('Please input the age')
//   let email: string = prompt('Please input the email')
// connection.query ('INSERT INTO users ()')
// }
