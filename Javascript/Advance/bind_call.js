const Shamil = {
    firstName: "Shamil",
    lastName: "Rahman",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        first name is ${this.firstName}
        last name is ${this.lastName}
        His role is ${this.role}
        and he is stufying ${this.courseCount} courses        
        `);
    },
};

const dj = {
    firstName: "rock",
    lastName: "DJ",
    role: "sub-admin",
    courseCount: 4,
};

// hitesh.getInfo();
// dj.getInfo();
// Shamil.getInfo.bind(dj)();
// or
var djInfo = Shamil.getInfo.bind(dj);
djInfo();
// bind gives you reference only

Shamil.getInfo.call(dj);
// call reads it directly