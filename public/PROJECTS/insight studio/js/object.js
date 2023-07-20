// const course = {
//     lecture : 10,
//     section : 3,
//     title : 'javascript',
//     notes : {
//         introduction : 'welcome to js'
//     },
//     enroll(){
//         console.log('your successfully enrolled');
//     }

// }
// console.log(course);
// alert(course.enroll());
// course.name='maruti';
// console.log(course);

// factory fnction
// function createCourse( name,lecture,section,title){
//     return {
//         courseName : name,
//         lecture : lecture,
//         section : section,
//         title : title,
//         notes : {
//             introduction : 'welcome',
//         },
//         enroll(){
//             console.log('your are successfully enrolled');
//         }
//     }
    
// }
// let course1 = createCourse( 'java',10,1,'core java');


// function CreateCourse(name,lecture,title){
//     this.courseName = name,
//     this.courseLecture = lecture,
//     this.courseTitle = title
// }
// let course1 = new CreateCourse('htlm',20,'everythin about html');
// let course2 = new CreateCourse('css',10,'everythin about css');

// const product = {
//     itemName : 'Mobile',
//     price : 10000,
//     discount : 20,
//     itemCode : 'A12X'
// }
// function production(name,itmPrice,itmDiscount,code){
//     return {
//         itemName : name,
//         price : itmPrice,
//         discount : itmDiscount,
//         itemCode : code
//     }
// }
// const product1 = production('flower',20,10,'123X');
// function CreateProduct(name,price,discount,code){
//     this.itemName = name;
//     this.price = price;
//     this.discount = discount;
//     this.itemCode = code;
//     this.discountValue = function(){
//         return price*discount/100;
        
//     }
// }
// const product1 = new CreateProduct('bike',200000,50,'X67E');

// const abc = class Product {
//     constructor(name,brand,price){
//         this.name = name;
//         this.brand = brand;
//         this.price = price;
//     }
// }


// const pencil = new abc('pencil','nataraj',5);

// let arr = [
//     {   name:'renu',
//         class:10,
//         color:'white'
//     },
//     {   name:'heena',
//         class:8,
//         color:'gray'
//     },
//     {   name:'meena',
//         class:9,
//         color:'green'
//     },
//     {   name:'teena',
//         class:7,
//         color:"yellow"
//     }
// ]

// console.log(arr.find((element)=>{
// let a = element.name === 'renu';
// return a}
// ));

// const characters = [
//     {
//         name : 'Tarak Mehta',
//         height : 172,
//         mass : 77,
//         eye_color : 'brown',
//         gender : 'male'
//     },
//     {
//         name : 'Jetha lal ',
//         height : 145,
//         mass : 136,
//         eye_color : 'black',
//         gender : 'male'
//     },
//     {
//         name : 'Babita ji',
//         height : 150,
//         mass : 49,
//         eye_color : 'grey',
//         gender : 'female'
//     },
//     {
//         name : 'Krishnan iyer',
//         height : 168,
//         mass : 84,
//         eye_color : 'black',
//         gender : 'male'
//     }
// ];

// // get an array of all names
// console.log(characters.map((element)=>{
//     return element.mass*2;
// }
// ));

// let value = document.querySelector('.container')

// console.log(value.children[0].nextElementSibling );
// console.log(value.firstElementChild );

let tag = document.createElement('a')
tag.id = 'myh2';
tag.className = "myh2class"
tag.setAttribute('href','https://www.codewithharry');
let tect = document.createTextNode('codewithharry');
tag.appendChild(tect);

// const value = document.querySelector('.container');
// value.replaceWith(document.querySelector('h1'), tag);

let ff = document.querySelector('.yy');
// ff.removeChild(document.querySelector('.renu'));

ff.appendChild(tag);