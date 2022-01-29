const { expect, test, it } = require("@jest/globals");
const Manager = require("../lib/manager");
const manager = new Manager('ralph', '8054264', 'mrralphpierre@gmail.com');

it('test if we can get the constrcutor values for the employee object', () => {
    expect(manager.name).toBe('ralph');
    expect(manager.id).toBe('8054264');
    expect(manager.email).toBe('mrralphpierre@gmail.com');
    expect(manager.officeNumber).toBe('mrralphpierre@gmail.com');

});


it('test if we can get the name from the getName() method' ,() => {
    expect(manager.getName).toBe('ralph');

});

it('test if we can get the name from the getId() method' ,() => {
    expect(manager.getID).toBe('8054264');

});

it('test if we can get the name from the getEmail() method' ,() => {
    expect(manager.getEmail).toBe('mrralphpierre@gmail.com');

});

it('test if we can get the name from the getOfficeNumber() method' ,() => {
    expect(manager.getOfficeNumber).toBe('ralph');

});


it('test if we can get the name from the getRole() method' ,() => {
    expect(manager.getRole).toBe('Manager');

});
