const Employee = require('./Employee.js');

class Manager extends Employee{
    function manager(name, id,  email, officeNumber) {
    this.name = name;  
    this.id = id;
    this.email = email;    
    this.officeNumber = officeNumber;     
    }

    getRole(manager);
}

module.exports = manager;