const Employee = require('./employee');

class Intern extends Employee {
    constructor (name,id,email,school){
        super(name, id, email);
        this.school = school;
    }

    getName(){
        return `${this.name}`
    }
    getSchool() {
        return `${this.school}`
    }

    getRole() {
        return 'intern';
    }
}
module.exports = Intern;
