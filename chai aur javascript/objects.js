//const tinderUser=new Object();
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isloogedin=false
// console.log(tinderUser);
const regularuser={
    email:"some@gmail.com",
    fullname:
    {
        userfullname:"hitesh",
        firstname:"hitesh",
        lastname:"choudhary"
    }
}
console.log(regularuser.fullname.userfullname.firstname);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("id2"));

const course={
coursename:"javascript",
price:1000,
}
const{
    coursename:course1
}=vansh
console.log(course1);
