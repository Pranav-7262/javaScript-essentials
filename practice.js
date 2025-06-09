let data = "very important information";
class user{
    constructor(name,cgpa){
        this.name=name;
        this.cgpa=cgpa;
    }

viewdata() {
    console.log("data->",data);
}
viewaSkills() {
  const arroeremder = (a,b) => {
    return a%b;
  }
  console.log(arroeremder(2,5));
}
viewaction(){
    let a = [1,2,3,4,5,6,7,8,9,10];
    let s=0;
    for(let i of a){
        s = s+i;
        i++;


    }
    console.log(s);
}
};
class admin extends user{
    constructor(name,cgpa){
        super(name,cgpa);
    }
    editdata(){
        let imp = "Some new Value";
        console.log(imp);
    }
}
let student1 = new user("Pranav",9,99);
let student2 = new user("Pratik",9.88);
let student3 = new user("Yash",9.00);
let admin1 = new admin("Boss",9.00);
let admin2 = new admin("top",10.00);

//Try-Catch

// let a= 12;
// let b = 6;
// console.log("a->",a);
// console.log("b->",b);
// console.log("a+b->",a+b);
// try{         //try catch syntax
// console.log("a-b->",a-v);
// }
// catch(err){
//     console.log(err);
// }
// console.log("a*b->",a*b);
// console.log("a/b->",a/b);
// console.log("a%b->",a%b);