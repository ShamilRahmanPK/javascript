console.log(this);

var user = {
    firstName: "Shamil",
    courseCount: 4,
    getCourseCount: function() {
        console.log("line 7", this);
        function sayhello() {
            console.log("Hello");
            console.log("line 10", this);
        }
        sayhello();
    },
};

user.getCourseCount();