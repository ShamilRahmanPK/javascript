var User = {
    name: "",
    getUserName : function (){
        console.log(`user name is : ${this.name}`);
    },
};

var Shamil = Object.create(User);
console.log(Shamil);
Shamil.name = "Shamil Rahman";
Shamil.getUserName();

var sam = Object.create(User, {
    name: {value: "sammy"},
    courseCount: {value: 3},
});

sam.getUserName();