let variable = window;
let dom = document;
let head = document.head;
let body = document.body;

const $header = dom.querySelectorAll("header");
const $header_all = dom.querySelector("header");
const $header_class = dom.querySelector(".header");
const $header_id = dom.querySelector("#header")
const _class = dom.getElementsByClassName("header")
const $main = dom.querySelector("main");
const $divCard= dom.querySelectorAll("div.card >ul.list > li.list_item")

console.log(variable);
console.log(head);
console.log(body);
console.log(dom.title);
console.log(dom.header);

console.log($header);

console.log($header_class);

console.log($header_id);

console.log(_class);

console.log($header_all);

console.log(body.childNodes);

const arreglo = Array.from($main.childNodes);

const arreglo2= [...$main.childNodes]

arreglo.forEach((node) => node.nodeType === node.TEXT_NODE ? console.log(node) : false);

const lista2 = arreglo.filter((node) => node.nodeType === node.TEXT_NODE ? true : false)

console.log("Lista con filtrer");
console.log(lista2);

console.log($main.children);

console.log($main.parentElement);

console.log($main.previousElementSibling);

console.log($divCard);

const $form = dom.querySelector("#search")

$form.setAttribute("method", "POST")

$form.children[0].removeAttribute("placeholder");

$form.children[0].toggleAttribute("placeholder");

$form.children[0].setAttribute("autocomplete", "active");

console.log($form.classList);