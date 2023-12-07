function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 20;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();
newUser('Daniel', 17, 'MX');

function newAdmin(name = 'David', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();