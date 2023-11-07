// JavaScript Document
console.log("Howdy!");


// info
var kenH2 = document.querySelector("section:nth-of-type(2) div:nth-of-type(2) h2");

var kenP = document.querySelector("section:nth-of-type(2) div:nth-of-type(2) p");

var kenImg = document.querySelector("section:nth-of-type(2) div:nth-of-type(1) img");
// kens

// Ken 1
var ken1button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(1) button");

ken1button.onclick = toonKen1Info; 

function toonKen1Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 60 '";
    kenP.innerHTML = "Verhaaltje over ken jaren 60";
    kenImg.src = "./images/Magazines/jaren60.jpeg";
}



// Ken 2

var ken2button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(2) button");

ken2button.onclick = toonKen2Info; 

function toonKen2Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 70 '";
    kenP.innerHTML = "Verhaaltje over ken jaren 70";
    kenImg.src = "./images/Magazines/jaren70.jpeg";
}


// Ken 3

var ken3button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(3) button");

ken3button.onclick = toonKen3Info; 

function toonKen3Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 80 '";
    kenP.innerHTML = "Verhaaltje over ken jaren 80";
    kenImg.src = "./images/Magazines/jaren80.jpeg";
}


// Ken 4

var ken4button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(4) button");

ken4button.onclick = toonKen4Info; 

function toonKen4Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 90 '";
    kenP.innerHTML = "Verhaaltje over ken jaren 90";
    kenImg.src = "./images/Magazines/jaren90.jpeg";
}

// Ken 5

var ken5button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(5) button");

ken5button.onclick = toonKen5Info; 

function toonKen5Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 00 '";
    kenP.innerHTML = "Verhaaltje over ken jaren 00";
    kenImg.src = "./images/Magazines/jaren00.jpeg";
}

// Ken 6

var ken6button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(6) button");

ken6button.onclick = toonKen6Info; 

function toonKen6Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 10 '";
    kenP.innerHTML = "Verhaaltje over ken jaren 10";
    kenImg.src = "./images/Magazines/jaren10.jpeg";
}


// Ken 7

var ken7button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(7) button");

ken7button.onclick = toonKen7Info; 

function toonKen7Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 20 '";
    kenP.innerHTML = "Verhaaltje over ken jaren 20";
    kenImg.src = "./images/Magazines/jaren20.png";
}