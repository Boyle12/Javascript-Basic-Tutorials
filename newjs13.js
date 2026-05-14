// closure

// Closure ek aisa function hota hai jo apne paida hone wale environment (scope) ko yaad rakhta hai. Iska matlab hai ki agar kisi function ke andar dusra function banaya jaye, toh andar wala function apne bahar wale function ke variables ko access kar sakta hai, bhale hi bahar wala function execute ho kar khatam ho chuka ho.

function outer() {
    let counter = 4; 
    return function() { 
        counter++; 
        return counter;
    };
}

const increment = outer(); 
//console.log(increment()); 
//console.log(increment()); 


// promises

/* Promises ka asali kaam JavaScript mein Asynchronous Operations (wo kaam jo thoda waqt lete hain) ko manage karna hai. Jab hum koi aisa kaam karte hain jiska result turant nahi milta—jaise server se data mangwana ya database query karna—toh hum nahi chahte ki hamara pura program tab tak ruka rahe.

Isse kyu use kiya jata hai, uske mukhya karan niche diye gaye hain:

1. Program ko "Freeze" hone se rokne ke liye
JavaScript ek single-threaded bhasha hai, yani wo ek baar mein ek hi kaam karti hai. Agar hum server se data aane tak program ko rok denge, toh hamari website hang ya freeze ho jayegi. Promises is kaam ko background mein chalne dete hain aur jab kaam poora ho jata hai, tab result lautate hain.

2. "Callback Hell" se bachne ke liye
Purane JavaScript mein jab ek ke baad ek kai asynchronous kaam karne hote the, toh hum functions ke andar functions (callbacks) likhte jate the, jisse code bahut ganda aur mushkil ho jata tha (ise Callback Hell kehte hain). Promises "Chaining" (using .then()) ki suvidha dete hain, jisse code saaf aur padhne mein aasan ho jata hai.

3. States ko handle karne ke liye
Promises humein batate hain ki hamara kaam abhi kis halat (state) mein hai:

Pending: Kaam abhi chal raha hai.

Fulfilled (Resolved): Kaam safaltapoorvak poora ho gaya aur data mil gaya.

Rejected: Kaam fail ho gaya (jaise network error).

4. Behtar Error Handling
Promises mein .catch() ka option milta hai. Agar poori chain mein kahin bhi koi error aati hai, toh hum use ek hi jagah handle kar sakte hain, jo callbacks mein bahut mushkil hota tha.

5. Future Value ka "Vaada"
Promise ka matlab hi hai ek "vaada". Ye object humein guarantee deta hai ki ya toh humein mangwaya gaya data mil jayega (Resolve), ya phir koi error message mil jayega (Reject). Tab tak hamara baaki ka code bina ruke chalta rehta hai. */

/* Promise Chaining Kya Hai?

Promise chaining ek aisi technique hai jisme hum ek asynchronous task ke result ko dusre task mein pass karne ke liye kai saare .then() methods ko ek ke baad ek "chain" (shrankhla) ki tarah jod dete hain.
*/

/*
const fetchData =new Promise ((resolve, reject)=>{
  let success = true;
  setTimeout(()=>{
    if(success){
      resolve("Data fetch successfully");
    }else{
      reject ("Error fetching data");
    }
  },3000);
});


fetchData
  .then((data)=>{
  console.log(data);
})
  .catch(()=>{
    console.error(error);
  })
*/

  /* 
   .then(): Ye tab chalta hai jab promise Resolve hota hai.
   .catch(): Ye tab chalta hai jab promise Reject hota hai.
*/

  
  // Topic: Prototypal inheritance
/*
  function person(name){
    this.name = name;
  }
  person.prototype.greet = function (){
    console.log(`Hello my name is ${this.name}`);
  };
  let Abhinav = new person('Abhinav');
  //Abhinav.greet();
*/

  // Topic: AsyncAwait:
  
/*
  function fetchUserData() {
    return new Promise ((resolve , reject)=>{
      setTimeout(() => {
        resolve ({name: 'chaicode',url:"https://chaicode.com"})
      }, 3000);
    })
  };
  */
  // Always use await when use async
/*
  async function getUserData() {
    try {
      console.log(`Fetching user Data...`);
      const userData = await fetchUserData()
      console.log("user data:", userData);
      
    } catch (error) {
      console.log("Error fetching data",error);
    }
  }
  getUserData();
*/
  /*

  function fetchPostData(){
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve ("post Data fetched")
      }, 2000);
    })
  }
  function fetchCommentData() {
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve("Comment Data fetched.");
      }, 3000);
    })
  };


  async function getUserData() {
    try {
      console.log(`Fetching user Data...`);
      const userData = await fetchUserData()
      console.log("User data fetch successfully");
      
      console.log("user data:", userData);
      
    } catch (error) {
      console.log("Error fetching data",error);
    }
  }
  getUserData();

  async function getBlogData() {
    try {
      console.log("Fetching blog data");
      const blogData = await fetchPostData()
      const commentData = await fetchCommentData()
      console.log(blogData);
      console.log(commentData);

      console.log("fetch complete");
      
    } catch (error) {
     console.error("Error fetching blog data",error);
      
    }
  }
  getBlogData();

  */

  function orderPizza() {
    return new Promise((resolve)=>{
      setTimeout(() => resolve("pizza"), 2000);
    });
  }
  function orderDrink(){
    return new Promise((resolve)=>{
      setTimeout(()=> resolve("cold Drink"), 3000);
    });
  }

  function orderIcecream(){
    return new Promise((resolve)=>{
      setTimeout(()=> resolve("Ice Cream"),1500);
    });
  }

async function getFullMilk() {
  console.log("Teeno chiz ek sath de diye...");
  let [pizza, drink ,icecream] = await Promise.all([
    orderPizza(),
    orderDrink(),
    orderIcecream()
  ]);
  console.log(`Mil gaya: ${pizza}, ${drink}, ${icecream}`);
  console.log("sab kuch taiyar h...");
}

//getFullMilk();

// Iterator and generator in js

function* numberGenerator(){
  yield 1;
  yield 2;
  yield 3;
}
let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);

// Import and export

// Modern way

// default import
import multiply from "./mathsOperationsM.js";

// named import
import  {add , subtract} from "./mathsOperationsM.js";
console.log(multiply(2,2));
console.log(add(2,2));

// mathoperations.js

function add (a,b){
  return a+b
}
function subtract (a,b){
  return a-b
}

function multiply (a,b){
  return a*b
}

module.exports ={
  add,
  subtract,
  multiply
};