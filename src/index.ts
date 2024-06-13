const mysql = require('mysql2');
import type { ResultSetHeader, RowDataPacket } from 'mysql2';

interface Entry extends RowDataPacket {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    email: string;
  }
const  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',       // use the local user
    password: 'local_password', // use the local password
    database : 'TS_CRM'
});
 
    
pool.execute('SELECT * FROM employees;', (err, results) =>{
  if (err) {
    console.log('error getting to db', err);
    throw err;
  }
  console.log(results);
  
  const employees = results as Entry[];
  console.log(employees);
})

pool.execute ('INSERT INTO employees (first_name, last_name, age, email) VALUES ('Krz')'



)





