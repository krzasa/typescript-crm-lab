const mysql = require('mysql2');
import * as readline from 'readline';
import type { ResultSetHeader, RowDataPacket } from 'mysql2';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
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
 
const question = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
  };




const allEmployees = async() =>{
await pool.execute('SELECT * FROM employees;', (err, results) =>{
  if (err) {
    console.log('error getting to db', err);
    throw err;
  }
//   console.log(results);
  
  const employees = results as Entry[];
  console.log(employees);
//   addEmployees()
//   process.exit()
mainMenu()
  
  

})

}
// allEmployees()


const addEmployees = async() => {
  const firstname = await question('What is your first name? ');
  const lastname = await question('What is your last name? ');
  const ageV = parseInt(await question('What is your age? '));
  const emailV = await question('What is your email? ');
  
    pool.execute('INSERT INTO employees (first_name, last_name, age, email) VALUES (?,?,?,?)', [firstname, lastname, ageV, emailV]), (err, results) =>{
        if (err) {
          console.log('error getting to db', err);
          throw err;
        }
    
    
  }
  console.log("Successfully added to database");
  mainMenu()
  
}

// addEmployees()

const mainMenu = async() => {
    const menuQuery = await question("What do you want to do? 1: view an employee?, 2: add a new employee, 3: Delete an employee 5: Exit: ")
    const menuItem: string = "menuQuery"
    switch (menuQuery) {
        case '1':
            allEmployees()
            break;
        case '2':
            addEmployees()
            break;
        case '3':
          console.log('Delete employee coming soon');
          break;

        case '5':
            console.log('Goodbye');
            process.exit();
            
        default:
          console.log(`${menuQuery} is not a valid response`);
          
      }
      
    };

mainMenu()



