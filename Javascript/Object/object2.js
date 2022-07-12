var user = {
    firstName: "Shamil",
    lastName: "Rahman",
    role: "Admin",
    logincount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (coursename) {
        this.courseList.push(coursename);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
    },
    info: function () {
        return `${this.firstName}${this.lastName} has role as ${this.role} and logined ${this.logincount} times.login throught facebook is ${this.facebookSignedIn} and has ${this.courseList} courses`
    },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("ReactJS course");
user.buyCourse("Angular course")
console.log(user.getCourseCount());

console.log(user.info());





