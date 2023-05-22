const { to, set, from, fromTo } = gsap

const getVar = (key, elem = document.documentElement) => getComputedStyle(elem).getPropertyValue(key)

document.querySelectorAll('.radio').forEach(elem => {
    let svg = elem.querySelector('svg'),
        input = elem.querySelector('input')
    input.addEventListener('change', e => {
        fromTo(input, {
            '--border-width': '3px'
        }, {
            '--border-color': getVar('--c-active'),
            '--border-width': '12px',
            duration: .2
        })
        to(svg, {
            keyframes: [{
                '--top-y': '6px',
                '--top-s-x': 1,
                '--top-s-y': 1.25,
                duration: .2,
                delay: .2
            }, {
                '--top-y': '0px',
                '--top-s-x': 1.75,
                '--top-s-y': 1,
                duration: .6
            }]
        })
        to(svg, {
            keyframes: [{
                '--dot-y': '2px',
                duration: .3,
                delay: .2
            }, {
                '--dot-y': '0px',
                duration: .3
            }]
        })
        to(svg, {
            '--drop-y': '0px',
            duration: .6,
            delay: .4,
            clearProps: true,
            onComplete() {
                input.removeAttribute('style')
            }
        })
    })
})

document.querySelectorAll('.checkbox').forEach(elem => {
    let svg = elem.querySelector('svg'),
        input = elem.querySelector('input')
    input.addEventListener('change', e => {
        let checked = input.checked
        if(!checked) {
            return
        }
        fromTo(input, {
            '--border-width': '3px'
        }, {
            '--border-color': getVar('--c-active'),
            '--border-width': '12px',
            duration: .2,
            clearProps: true
        })
        set(svg, {
            '--dot-x': '14px',
            '--dot-y': '-14px',
            '--tick-offset': '20.5px',
            '--tick-array': '16.5px',
            '--drop-s': 1
        })
        to(elem, {
            keyframes: [{
                '--border-radius-corner': '14px',
                duration: .2,
                delay: .2
            }, {
                '--border-radius-corner': '5px',
                duration: .3,
                clearProps: true
            }]
        })
        to(svg, {
            '--dot-x': '0px',
            '--dot-y': '0px',
            '--dot-s': 1,
            duration: .4,
            delay: .4
        })
        to(svg, {
            keyframes: [{
                '--tick-offset': '48px',
                '--tick-array': '14px',
                duration: .3,
                delay: .2
            }, {
                '--tick-offset': '46.5px',
                '--tick-array': '16.5px',
                duration: .35,
                clearProps: true
            }]
        })
    })
})

document.querySelectorAll('.switch').forEach(elem => {
    let svg = elem.querySelector('svg'),
        input = elem.querySelector('input')
    input.addEventListener('pointerenter', e => {
        if(elem.animated || input.checked) {
            return
        }
        to(input, {
            '--input-background': getVar('--c-default-dark'),
            duration: .2
        })
    })
    input.addEventListener('pointerleave', e => {
        if(elem.animated || input.checked) {
            return
        }
        to(input, {
            '--input-background': getVar('--c-default'),
            duration: .2
        })
    })
    input.addEventListener('change', e => {
        let checked = input.checked
        let hide = checked ? 'default' : 'dot',
            show = checked ? 'dot' : 'default'
        fromTo(svg, {
            '--default-s': checked ? 1 : 0,
            '--default-x': checked ? '0px' : '8px',
            '--dot-s': checked ? 0 : 1,
            '--dot-x': checked ? '-8px' : '0px'
        }, {
            ['--' + hide + '-s']: 0,
            ['--' + hide + '-x']: checked ? '8px' : '-8px',
            duration: .25,
            delay: .15
        })
        fromTo(input, {
            '--input-background': getVar(checked ? '--c-default' : '--c-active'),
        }, {
            '--input-background': getVar(checked ? '--c-active' : '--c-default'),
            duration: .35,
            clearProps: true
        })
        to(svg, {
            keyframes: [{
                ['--' + show + '-x']: checked ? '2px' : '-2px',
                ['--' + show + '-s']: 1,
                duration: .25
            }, {
                ['--' + show + '-x']: '0px',
                duration: .2,
                clearProps: true
            }]
        })
    })
})
// (A) LOCK SCREEN ORIENTATION
function lock (orientation) {
    // (A1) GO INTO FULL SCREEN FIRST
    let de = document.documentElement;
    if (de.requestFullscreen) { de.requestFullscreen(); }
    else if (de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
    else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
    else if (de.msRequestFullscreen) { de.msRequestFullscreen(); }
  
    // (A2) THEN LOCK ORIENTATION
    screen.orientation.lock(orientation);
  }
  
  // (B) UNLOCK SCREEN ORIENTATION
  function unlock () {
    // (B1) UNLOCK FIRST
    screen.orientation.unlock();
  
    // (B2) THEN EXIT FULL SCREEN
    if (document.exitFullscreen) { document.exitFullscreen(); }
    else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
    else if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); }
    else if (document.msExitFullscreen) { document.msExitFullscreen(); }
  }
let toggled = false;
document.querySelector('#btn1').onclick = function(){
    if (toggled) {
        alert("haha");
        unlock();
    }else {
        colorWindow = window.open("http://192.168.100.168:8880/color?color=bg");
        setTimeout(() => colorWindow.close(), 200);
        lock("landscape");
    }
}
document.querySelector('#btn2').onclick = function(){
    if (toggled) {
        alert("haha");
    }else {
        colorWindow = window.open("http://192.168.100.168:8880/color?color=gelb");
        setTimeout(() => colorWindow.close(), 200);
    }
}
document.querySelector('#btn3').onclick = function(){
    if (toggled) {
        alert("haha");
    }else {
        colorWindow = window.open("http://192.168.100.168:8880/color?color=pink");
        setTimeout(() => colorWindow.close(), 200);
    }
}
document.querySelector('#btn4').onclick = function(){
    if (toggled) {
        alert("haha");
    }else {
        colorWindow = window.open("http://192.168.100.168:8880/color?color=rot");
        setTimeout(() => colorWindow.close(), 200);
    }
}
document.querySelector('#btn5').onclick = function(){
    if (toggled) {
        alert("haha");
    }else {
        colorWindow = window.open("http://192.168.100.168:8880/color?color=gruen");
        setTimeout(() => colorWindow.close(), 200);
    }
}
document.querySelector('#btn6').onclick = function(){
    if (toggled) {
        alert("haha");
    }else {
        colorWindow = window.open("http://192.168.100.168:8880/color?color=blau");
        setTimeout(() => colorWindow.close(), 200);
    }
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
        toggled = !toggled;
    } else {
        document.getElementById("1").innerHTML = "haha";
        document.getElementById("2").innerHTML = "haha";
        document.getElementById("3").innerHTML = "haha";
        document.getElementById("4").innerHTML = "haha";
        document.getElementById("5").innerHTML = "haha";
        document.getElementById("6").innerHTML = "haha";
        document.getElementById("7").innerHTML = "Colors";
        toggled = !toggled;
    }
}