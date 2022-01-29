const { expect, test, it } = require("@jest/globals");
const Engineer = require("../lib/engineer");
const engineer = new Engineer('ralph', '8054264', 'mrralphpierre@gmail.com', 'University of Miami');

it('test if we can get the constrcutor values for the employee object', () => {
    expect(engineer.name).toBe('ralph');
    expect(engineer.id).toBe('8054264');
    expect(engineer.email).toBe('mrralphpierre@gmail.com');
    expect(engineer.getgithubName).toBe('rpierr33');

});


it('test if we can get the name from the getName() method' ,() => {
    expect(engineer.getName).toBe('ralph');

});

it('test if we can get the name from the getId() method' ,() => {
    expect(engineer.getID).toBe('8054264');

});

it('test if we can get the name from the getEmail() method' ,() => {
    expect(engineer.getEmail).toBe('mrralphpierre@gmail.com');

});

it('test if we can get the name from the getschool() method' ,() => {
    expect(engineer.getgithubName).toBe('rpierr33');

});


it('test if we can get the name from the getRole() method' ,() => {
    expect(engineer.getRole).toBe('Engineer');

});