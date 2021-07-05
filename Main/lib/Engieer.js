class Engineer{
    function engineer(name, id,  email, gitHub) {
    this.name = name;  
    this.id = id;
    this.email = email;    
    this.gitHub = gitHub;     
    }

    getRole(engineer);
}

module.exports = engineer;