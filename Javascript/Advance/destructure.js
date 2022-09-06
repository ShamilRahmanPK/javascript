// const user = ["shamil", 3, "admin"];

// var [name, corseCount, role] = user;

// console.log(role);

const myUser = {
    name: "shamil",
    corseCount: 5,
    role: "admin",
};
console.log(myUser.corseCount);

const {name, courseCount, role} = myUser;
console.log(role);