// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('David', 90, 'nicole.elisaw@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('get employee name', () => {
    const employee = new Employee('David', 90, 'david@workemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('get employee ID', () => {
    const employee = new Employee('David', 90, 'david@workemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('get employee email', () => {
    const employee = new Employee('David', 90, 'david@workemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('David', 90, 'david@workemail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

