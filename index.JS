//найти элемент используя css селектор
let sayHelloBtn = document.querySelector("#say-hello");
 
// изменить свойства элемента ( содержимое,класс, итд)
sayHelloBtn.textContent = 'SAY HELLO';
sayHelloBtn.className = "btn btn-red";
sayHelloBtn.classList.add("btn","btn-red");//remove, toggle

//изменить стиль элемента
sayHelloBtn.style.color = "tomato";
sayHelloBtn.style.fontsize = "25px";

//неизменяемые свойства 
console.log(sayHelloBtn.clientTop);
console.log(sayHelloBtn.getClientRects());

//creation of element

let example1Btn = document.createElement("button");
document.body.append(example1Btn);

//delete element

example1Btn.remove();

// add event action listener

sayHelloBtn.addEventListener("click", function(event){
  alert("Hello");
})
//создать кнопку добавить его к элементу боди и изменить текст этой кнопки
let example = document.querySelector ("#example");
example.textContent = "example";
document.body.append(example);

example.textContent = "example";
example.style.padding = "10px";
document.body.append(example);

example.addEventListener("click", function() {
  example.remove()
})
// создать список и добавить к боди

let list1 = document.createElement("ul");
document.body.append(list);
for (let i =1; i <= 10; i ++) {
  let listEl = document.createElement("li")
  listEl.textContent = `example - ${i}`;
  list.append(listEl);
}
//создать ul> li из массива 
let list2 = ["apple","pears","oranges","peaches"];
let list3 = document.createElement("ul");
document.body.append(list3)
for ( let a = 0; a < list2.length; a ++) {
  let listItems = document.createElement ("li");
  listItems.textContent = list2[a];
  list3.append(listItems);
}
// из списка вывести массив
// let par = document.createElement("p")
// let elParrent = document.querySelector("#example1") 
// let elements = elParrent.querySelectorAll("li")
// elements.forEach((el) => {
//   par.innerText = par.innerText + el.innerText + " "
// })
// document.body.append(par)

// найти элемент используя css селектор
const sayHelloBtn = document.querySelector("#say-hello");

// изменить свойства элемента (содержимое, класс, итд)
sayHelloBtn.textContent = "SAY HELLO";
sayHelloBtn.className = "btn btn-red";
sayHelloBtn.classList.add("btn", "btn-red"); // remove, toggle

// изменить стили элемента
sayHelloBtn.style.color = "tomato";
sayHelloBtn.style.fontSize = "20px";

// не-изменяемые свойства
console.log(sayHelloBtn.clientTop);
console.log(sayHelloBtn.getClientRects());

// создание элемента
const exampleBtn = document.createElement("button");
// document.body.append(exampleBtn);
document.body.prepend(exampleBtn);

// удаление элемента
exampleBtn.remove();

// добавление слушателя событий
sayHelloBtn.addEventListener("click", function (event) {
  alert("Hello");
});


// создать ul > li из массива
const list = ["Apples", "Pears", "Oranges", "Peaches"];
for (let i = 0; i < list.length; i++) {
  const element = list [i];

}

const result = [];
const exampleLiArray = document.querySelectorAll("#example li");
for (let i = 0; i < exampleLiArray.length; i++) {
  result.push(exampleLiArray[i].textContent);
}



// найти все элементы
const newItemInpt = document.querySelector("#new-item");
const itemsList = document.querySelector("#items");
const addItemBtn = document.querySelector("#add-item");

function removeItem() {
  this.parentElement.remove();
}

function addItem() {
  // проверить наличие значения input
  if (newItemInpt.value.trim() !== "") {
    // добавить li к ul
    const itemLi = document.createElement("li");
    itemsList.append(itemLi);

    // задать содержимое li исходя из значения input
    itemLi.textContent = newItemInpt.value;

    // сбросить значение input
    newItemInpt.value = "";

    // добавить button к li
    const removeBtn = document.createElement("button");
    itemLi.append(removeBtn);

    // задать текст и слушатель событий для button
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", removeItem);
  }
}

// добавить слушатель событий
addItemBtn.addEventListener("click", addItem);

// добавить слушатель событий для input
newItemInpt.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    addItem();
  }
});