var user = "user";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("you get access to crate/delete course");
        break;
    case "trail":
        console.log("you get Trial access");
        break;
    case "user":
        console.log("you can consume course");
        break;
    default:
        console.log("denied access");
        break;
}