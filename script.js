const { to, set, from, fromTo } = gsap

const getVar = (key, elem = document.documentElement) => getComputedStyle(elem).getPropertyValue(key)

let toggled = false;
function button(color){
    if (toggled) {
        alert("test");
    } else {
        setColor(color);
    }
}
async function setColor(color){
    fetch("https://192.168.100.168:8882/color?color=" + color);
}
document.querySelector('#btn7').onclick = function(){
    if(toggled) {
        document.getElementById("1").innerHTML = "Cyan";
        document.getElementById("2").innerHTML = "Gelb";
        document.getElementById("3").innerHTML = "Pink";
        document.getElementById("4").innerHTML = "Rot";
        document.getElementById("5").innerHTML = "Grün";
        document.getElementById("6").innerHTML = "Blau";
        document.getElementById("7").innerHTML = "Monopoly";
    } else {
        document.getElementById("1").innerHTML = "haha";
        document.getElementById("2").innerHTML = "haha";
        document.getElementById("3").innerHTML = "haha";
        document.getElementById("4").innerHTML = "haha";
        document.getElementById("5").innerHTML = "haha";
        document.getElementById("6").innerHTML = "haha";
        document.getElementById("7").innerHTML = "Colors";
    }
    toggled = !toggled;
}
let pressing1 = false;
let pressing2 = false;
document.addEventListener('keydown', function(event) {
    if (event.key == "F1") {
        pressing1 = true;
        pressing2 = true;
        fetch('https://192.168.100.168:8882/sdk?mode=up&amount=10&getColor=true').then(function (response) {
            return response.json();
        }).then(function (data) {
            document.body.style.backgroundColor = data[0];
        });
    }
});
function updateBg(){
    if(!pressing1 && !pressing2) {
        fetch('https://192.168.100.168:8882/sdk?mode=getColor').then(function (response) {
            return response.json();
        }).then(function (data) {
            document.body.style.backgroundColor = data[0];    
        })
    }
}
setInterval(updateBg, 200);
setInterval(function() {
    if(pressing1) {
        pressing1 = false;
    } else if(pressing2) {
        pressing2 = false;
    }
}, 1000);