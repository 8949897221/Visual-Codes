const user={
    username:"batman",
    price:100,
    welcome:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.username="superman";
const chai=()=>{
    let username="hitesh";
    console.log(this);
}
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(2,3));

    chai();