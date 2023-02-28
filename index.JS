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

let exampleBtn = document.createElement("button");
document.body.append(exampleBtn);

//delete element

exampleBtn.remove();

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

let list = document.createElement("ul");
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
let array = []
