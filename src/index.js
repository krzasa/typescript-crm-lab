"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql2');
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // use the local user
    password: 'local_password', // use the local password
    database: 'TS_CRM'
});
var question = function (query) {
    return new Promise(function (resolve) { return rl.question(query, resolve); });
};
var allEmployees = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pool.execute('SELECT * FROM employees;', function (err, results) {
                    if (err) {
                        console.log('error getting to db', err);
                        throw err;
                    }
                    //   console.log(results);
                    var employees = results;
                    console.log(employees);
                    //   addEmployees()
                    //   process.exit()
                    mainMenu();
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// allEmployees()
var addEmployees = function () { return __awaiter(void 0, void 0, void 0, function () {
    var firstname, lastname, ageV, _a, emailV;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, question('What is your first name? ')];
            case 1:
                firstname = _b.sent();
                return [4 /*yield*/, question('What is your last name? ')];
            case 2:
                lastname = _b.sent();
                _a = parseInt;
                return [4 /*yield*/, question('What is your age? ')];
            case 3:
                ageV = _a.apply(void 0, [_b.sent()]);
                return [4 /*yield*/, question('What is your email? ')];
            case 4:
                emailV = _b.sent();
                pool.execute('INSERT INTO employees (first_name, last_name, age, email) VALUES (?,?,?,?)', [firstname, lastname, ageV, emailV]), function (err, results) {
                    if (err) {
                        console.log('error getting to db', err);
                        throw err;
                    }
                };
                console.log("Successfully added to database");
                process.exit();
                return [2 /*return*/];
        }
    });
}); };
// addEmployees()
var mainMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var menuQuery, menuItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, question("What do you want to do? 1: view an employee?, 2: add a new employee, 3: Delete an employee 5: Exit: ")];
            case 1:
                menuQuery = _a.sent();
                menuItem = "menuQuery";
                switch (menuQuery) {
                    case '1':
                        allEmployees();
                        break;
                    case '2':
                        addEmployees();
                        break;
                    case '3':
                        console.log('Delete employee coming soon');
                        break;
                    case '5':
                        console.log('Goodbye');
                        process.exit();
                    default:
                        console.log("".concat(menuQuery, " is not a valid response"));
                }
                return [2 /*return*/];
        }
    });
}); };
mainMenu();
