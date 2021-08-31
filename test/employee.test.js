const { expect, it } = require("@jest/globals");
const Employee = require("../lib/employee");
const employee = new Employee('ralph', '8054264', 'mrralphpierre@gmail.com');

it('test if we can get the constrcutor values for the employee object', () => {
    expect(employee.name).toBe('ralph');
    expect(employee.id).toBe('8054264');
    expect(employee.email).toBe('mrralphpierre@gmail.com');
});

it('test if we can get the name from the getName() method' ,() => {
    expect(employee.getName).toBe('ralph');

});

it('test if we can get the name from the getId() method' ,() => {
    expect(employee.getID).toBe('8054264');

});

it('test if we can get the name from the getEmail() method' ,() => {
    expect(employee.getEmail).toBe('mrralphpierre@gmail.com');

});

it('test if we can get the name from the getRole() method' ,() => {
    expect(employee.getRole).toBe('Employee');

});
