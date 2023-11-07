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
    kenP.innerHTML = "Ken werd geintroduceerd als Barbie's vriendje in 1961. Deze Ken pop was wel 30,5cm lang. Hij had plastic haar in blond en brunette en was gekleed in een rode zwembroek met een gele handdoek en sandalen. Speedo's are in! ";
    kenImg.src = "./images/Magazines/jaren60.jpeg";
}



// Ken 2

var ken2button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(2) button");

ken2button.onclick = toonKen2Info; 

function toonKen2Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 70 '";
    kenP.innerHTML = "Over de jaren heen is Ken zijn haar in veel verschillende variaties getoond. Wel negen kleuren haar zijn voorbij gekomen, waaronder geel. Een van de meest memorabele Kens' is 'Mod hair Ken' die beschikbaar was met plak snor, zijstaarten en een plak baard. ";
    kenImg.src = "./images/Magazines/jaren70.jpeg";
}

// Ken 3

var ken3button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(3) button");

ken3button.onclick = toonKen3Info; 

function toonKen3Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 80 '";
    kenP.innerHTML = "De eerste Ken pop met een donkere huidskleur kwam op de markt. Deze pop was beschikbaar in drie etniciteiten: een blonde pop met blauwe ogen, een pop met een donkere huidskleur en afro, en een Latijns Amerikaanse versie.";
    kenImg.src = "./images/Magazines/jaren80.jpeg";
}


// Ken 4

var ken4button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(4) button");

ken4button.onclick = toonKen4Info; 

function toonKen4Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 90 '";
    kenP.innerHTML = "Deze 'Totally hair Ken' kwam met een nieuwe haarstijl en een full-sized gel pot. Zijn paarse parachute broek springt in het oog en sluit helemaal aan bij de mode van het moment.";
    kenImg.src = "./images/Magazines/jaren90.jpeg";
}

// Ken 5

var ken5button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(5) button");

ken5button.onclick = toonKen5Info; 

function toonKen5Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 00 '";
    kenP.innerHTML = "In 2004 komt het nieuws uit dat Barbie en Ken uit elkaar zijn. In 2006 komt Ken met een nieuwe look geinspireerd door Justin Timberlake en een dramatische boodschap: hij wil Barbie terug!";
    kenImg.src = "./images/Magazines/jaren00.jpeg";
}

// Ken 6

var ken6button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(6) button");

ken6button.onclick = toonKen6Info; 

function toonKen6Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 10 '";
    kenP.innerHTML = "Ken krijgt er twee nieuwe lichaamstypes bij en nieuwe haarstijlen waaronder de cornrows en een manbun. Ken krijgt er zelfs een eigen Facebook en Instagram account bij.";
    kenImg.src = "./images/Magazines/jaren10.jpeg";
}


// Ken 7

var ken7button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(7) button");

ken7button.onclick = toonKen7Info; 

function toonKen7Info() {
    console.log("test");
    kenH2.innerHTML = "Jaren 20 '";
    kenP.innerHTML = "Ken is meer inclusief dan ooit tevoren. Hij heeft 3 verschillende lichaamstypes, 9 verschillende huidskleuren, 10 oogkleuren, 27 haarkleuren en 20 haarstijlen.";
    kenImg.src = "./images/Magazines/jaren20.png";
}

// Ken 8

var ken8button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(8) button");

ken8button.onclick = toonKen8Info; 

function toonKen8Info() {
    console.log("test");
    kenH2.innerHTML = "2023 Barbie movie";
    kenP.innerHTML = "Met de nieuwe Barbie film wordt er natuurlijk ook een nieuwe Ken pop uitgebracht.";
    kenImg.src = "./images/Magazines/2023.webp";
}

        
//     var ken8Button = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(8) button");
//     var geluid = document.querySelector("section:nth-of-type(1) ol li:nth-of-type(8) button audio"); 

//     ken8Button.onclick = geluid;
   
//     function geluid() {

//         if (geluid.paused) { geluid.play(); }
//         else {geluid.pause(); }  
// }