// 1)შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.

// 2)დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში 
// სახელის values.



// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// }
// person.sayHallo()






// 3) წაშალეთ ასაკის property.

// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// };

// delete person.age;
// console.log(person);



// 4)დაამატეთ ობიექტში job.
// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// }
// person.job= "educator"
// console.log(person)

// 5)დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.
// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// }
// person.job = "educator"

// person.getJobLength= function () {
//     return this.job.length
    
// }

// console.log(person.getJobLength())


// 6)ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// }
// person.job = "educator"


// console.log(Object.keys(person).length);

// 7)გაარკვიეთ ,აქვს თუარა ობიექტს gender property ,თუ არაქვს ,მაშინ შექმენით მეთოდი .
// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// }
// person.job = "educator"




// if (!person.hasOwnProperty('gender')) {
//     person.getGender = function() {
//         return "N/A";
//     };
// }

// console.log(person.getGender())
// 8)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.

// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// }
// person.job = "educator"




// if (!person.hasOwnProperty('gender')) {
//     person.getGender = function() {
//         return "N/A";
//     };
// }

// for (let kay in person){
//     console.log(kay);

// }

// 9)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.
// let person={
//     name: "mariami",
//     surname: "gurabanidze",
//     age:31,
//     sayHallo:function(){
//         console.log(this.name)
//     }

// }
// person.job = "educator"




// if (!person.hasOwnProperty('gender')) {
//     person.getGender = function() {
//         return "N/A";
//     };
// }

// for( let array in  person){
//     console.log(person[array])
// }