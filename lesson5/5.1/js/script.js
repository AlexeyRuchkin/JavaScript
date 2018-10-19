let questions = prompt("Ваше отношение к технике Apple"), 
    body = document.querySelector("body"),
    header = document.getElementsByTagName("header"),
    column = document.getElementsByClassName("column"),
    adv = document.querySelector(".adv"),
    promt = document.getElementById("prompt"),
    title = document.getElementById("title"),    
    ul = document.querySelector(".menu"),
    it = document.getElementsByTagName("li"),
    li = document.createElement("li"),
    litext = document.createTextNode("Пятый пункт");

body.style.backgroundImage = "url(./img/apple_true.jpg)";

li.classList.add("menu-item");
ul.appendChild(li);
li.appendChild(litext);
ul.insertBefore(it[2], it[1]);
column[1].removeChild(adv);

title.innerHTML = "Мы продаем только подлинную технику Apple";
promt.innerHTML = questions;

console.log(questions);







 console.log(li);