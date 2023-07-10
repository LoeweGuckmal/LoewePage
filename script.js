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
function setColor(color){
    fetch("http://192.168.100.168:8880/color?color=" + color, {referrerPolicy: "unsafe_url"});
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