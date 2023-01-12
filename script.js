//Query selectore

// Example 1 tag
const tag1 = document.querySelector("h1");
console.log(tag1);

// Example 2 class
const class1 = document.querySelector(".class1");
console.log(class1);

// Example 3 id

const id1 = document.querySelector("#id1");
console.log(id1);

//
// querySelector all

const tag1 = document.querySelectorAll("h1");
console.log(tag1[2].innerText);

const class1 = document.querySelectorAll(".class1");
console.log(class1);

const tag1 = document.getElementsByTagName("h1");
console.log(tag1);

const class2 = document.getElementsByClassName("class1");
console.log(class2);

//
//childnodes
const id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.childNodes);

// children
const id1 = document.getElementById("list-id");
console.log(id1);
console.log(id1.children);

//  createElement
const newlist = document.createElement("li");
newlist.innerHTML = "list 5";
console.log(newlist.innerHTML);

//Appendchilld
//EXAMPLE 1
const newlist = document.createElement("li");
newlist.innerText = "list 6";
const listID = document.getElementById("list-id");
listID.appendChild(newlist);

//EXAMPLE 2
const id1 = document.getElementById("div-text");
const newHeading = document.createElement("h2");
newHeading.innerText = "This is Heading Tow";
id1.appendChild(newHeading);

//
//removechild
const id1 = document.getElementById("list-id");
const list = id1.children[4];
// console.log(list.innerHTML);
// console.log(id1);
id1.removeChild(list);

//replaceChild
const id1 = document.getElementById("list-id");
const list3 = id1.children[2];
const newlist = document.createElement("li");
newlist.innerText = "new list";
id1.replaceChild(newlist, list3);

// title
console.log(document.title);
document.title = "new javascript title";

// body
console.log(document.body);
document.body.innerHTML = "<h1> This is  only java script Heading <h1>";

const id1 = document.getElementById("id1");
id1.innerHTML = "";
id1.innerHTML = "<p> this is a paragraph<p>";
