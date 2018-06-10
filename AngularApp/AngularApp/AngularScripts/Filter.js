// Home.js
var myFilter = myHome.filter("Gender", function () {
    return function (gender) {
        switch (gender)
        {
            case 1: return "MALE";
            case 2: return "Female";
        }
    }
});
myHome.filter("CapsFirstChar", function () {
    return function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
});
myHome.filter("FormatDate", function () {
    return function (name) {
        return Date(name * 1000); 
    }
});