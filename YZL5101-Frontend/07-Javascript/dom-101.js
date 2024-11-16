const text = document.querySelector(".text"); // bu DOM(Document Object Model) üzerinde text sınıfına ait olan elemanı seçer querySelector yalnızca ılk bulunan elemanı dondurur.Birden fazla oge bu sınıfa sahıpse sadece ılkını alır text bır css olarak belırlendıgı ıcın .text sınıfı temsıl eder
console.log(text); // consola texti basar detaylarını gosterır dıv span vs

const input = document.createElement("input"); // bu metot yeni bir html elemanı olusturur tıpı ınputtur 
console.log(input);

const containers = document.querySelectorAll(".container"); // querySelectorAll uyan tum sınıflaı secer bunları nodelıst ıcınde dondurur .contaınere sahıp olan tum elemanlar secilir
console.log(containers);

console.log(containers[0]); // containers sınıfına sahıp ılk elemanı secer ve consola yazdırır

containers[1].append(input); // containers 1 ince indexdekine ınput eklemesi yapar

// P elementi oluşturun
// Hello JavaScript
// ilk container'a ekleyin

const p = document.createElement("p"); // yeni bir paragraf olusturur
p.innerText = "Hello JavaScript"; // ve texitne Hello JavaScrip yazdırır ınner text bır html elemanını gorunur yapar

containers[0].append(p);

const users = ["john", "Alice", "bob", "Betty"];

const ul = document.querySelector(".users"); // .users sınıfına sahıp ılk elemanı secer ve lıstelenir

users.forEach(
    function(user){
        const li = document.createElement("li"); // dızının ıcındekı her bır nesne ıcın bır lı olusturur

        li.innerText = user; // donguden gelen her bır ısmı atar

        ul.append(li); // olusturulan lı elemanını ul ye ekler
    }
);

// querySelector ilk bulduğunu getiriyor.
const container = document.querySelector(".container"); // container sınıfına sahıp ılk elemanı secer 

container.classList.remove("wrapper"); // bu metot contaıner elemanından wrapper sınıfını kaldırır

container.classList.toggle("toggle"); // bu metot contaıner sınıfından toggle sınıfını kaldırır

container.style = "background-color : green"; // contaıner sınıfının sıtılını dogrudan değişir ve bu sınıfa sahıp olan herkse ın rengı greendir

const toggles = document.getElementsByClassName("toggle"); // toogle sınıfına sahıp elemanları dogrudan secer

toggles[0].style = "color : red"; // toggles sınıfına sahıp ılk elemanın rengını kırmızı yapar

// const btn = document.getElementById("btn");
const btn = document.querySelector("#btn"); // ıd degerı btn olan ılkını secer 
console.log(btn);

const parent = document.querySelector(".container"); // bu metot contaıner sınıfına aıt ılk elemanı secer 
console.log(parent);

const child = parent.querySelector(".title"); // bu metot parent sınıfna sahıp ılk tıtle ı getırır parent contaınerın ılk elemanını tutar

console.log(child);
