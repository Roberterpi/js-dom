// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "Gigi";
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


// GETELEMENTBYID


// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "LALa";
// headerTitle.innerHTML = "<h3>Bye</h3>"
// header.style.borderBottom = "solid 3px black";


// GETELEMENTSBYCLASS


// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 1";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // Gives error
// // items.style.backgroundColor = "grey";

// // Instead we need a for loop to change the colour for all of them

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "grey";
// }


// GETELEMENTSBYTAGNAME


// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 1";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// // Gives error
// // items.style.backgroundColor = "grey";

// // Instead we need a for loop to change the colour for all of them

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "grey";
// }


// querySELECTOR


//use it for only one item. it grabs the first one. for example if there are multiple titles it will grab only the first title

// let header = document.querySelector("#main-header");
// // @ts-ignore
// header.style.borderBottom = "solid 10px #ccc";

// let input = document.querySelector("input");
// input.value = "Hello world";

// let submit = document.querySelector ('input[type="submit"]');
// // @ts-ignore
// submit.value = "Send";

// let item = document.querySelector(".list-group-item");
// // @ts-ignore
// item.style.color = "red";

// let lastItem = document.querySelector(".list-group-item:last-child");
// // @ts-ignore
// lastItem.style.color = "blue";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// // @ts-ignore
// secondItem.style.color = "green";


// querySelectorAll


// let titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hioio";

// let odd = document.querySelectorAll ("li:nth-child(odd)");
// let even = document.querySelectorAll ("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   // @ts-ignore
//   odd[i].style.backgroundColor = "purple";
//   // @ts-ignore
//   even[i].style.backgroundColor = "orange";
// }


// TRAVERSING THE DOM


// find out parentNode

let itemList = document.querySelector("#items");

// console.log(itemList.parentNode);
// // @ts-ignore
// itemList.parentNode.style.backgroundColor = "lightgrey";
// console.log(itemList.parentNode.parentNode.parentNode);


// find out parentElement

// console.log(itemList.parentElement);
// // @ts-ignore
// itemList.parentElement.style.backgroundColor = "lightgrey";
// console.log(itemList.parentElement);


// childNodes
// console.log(itemList.childNodes);
// pain in the arse to use it. instead use children

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hallo";
 
// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hallo";


// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// // @ts-ignore
// itemList.previousElementSibling.style.color = "green";


// createElement


// let newDiv = document.createElement("div");

// // Add class

// newDiv.className = "hello";

// // Add id

// newDiv.id = "hello1";

// // Add attr

// newDiv.setAttribute("title", "Hello div");

// // Create a text node

// let newDivText = document.createTextNode("Hello World");

// // Add text to div

// newDiv.appendChild(newDivText);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");


// console.log(newDiv);

// newDiv.style.fontSize = "50px";

// container.insertBefore(newDiv, h1);

let button = document.getElementById("button").addEventListener("click", buttonClick);

function buttonClick(){
  console.log("Button clicked");
}













