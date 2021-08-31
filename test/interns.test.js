const { expect, test, it } = require("@jest/globals");
const Interns = require("../lib/intern");
const intern = new Intern('ralph', '8054264', 'mrralphpierre@gmail.com', 'University of Miami');

it('test if we can get the constrcutor values for the employee object', () => {
    expect(intern.name).toBe('ralph');
    expect(intern.id).toBe('8054264');
    expect(intern.email).toBe('mrralphpierre@gmail.com');
    expect(intern.school).toBe('University of Miami');

});


it('test if we can get the name from the getName() method' ,() => {
    expect(intern.getName).toBe('ralph');

});

it('test if we can get the name from the getId() method' ,() => {
    expect(intern.getID).toBe('8054264');

});

it('test if we can get the name from the getEmail() method' ,() => {
    expect(intern.getEmail).toBe('mrralphpierre@gmail.com');

});

it('test if we can get the name from the getschool() method' ,() => {
    expect(intern.getschool).toBe('University of Miami');

});


it('test if we can get the name from the getRole() method' ,() => {
    expect(intern.getRole).toBe('Intern');

});
