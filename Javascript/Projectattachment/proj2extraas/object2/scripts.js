var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
};
User.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firsName}`);
};

var Shamil = new User("Hitesh", 2);
Shamil.getCourseCount();


if (Shamil.hasOwnProperty("firstName")) {
    Shamil.getFirstname;
};

var sam = new User("Sam, 3");
sam.getCourseCount();
sam.getFirstname();
