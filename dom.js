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
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello 1";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

// Gives error
// items.style.backgroundColor = "grey";

// Instead we need a for loop to change the colour for all of them

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "grey";
}






