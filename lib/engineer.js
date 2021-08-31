const Employee = require('./employee');
class Engineer extends Employee {
    constructor(name, id, email, githubName) {
        super(name, id, email);
        this.github = githubName;
    
    }

    getSchool() {
        return this.githubName;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;