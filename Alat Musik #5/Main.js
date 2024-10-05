
const btn = document.getElementById('tombol1')
const btn1 = document.getElementById('tombol2')
const btn2 = document.getElementById('tombol3')
const btn3 = document.getElementById('tombol4')
const btn4 = document.getElementById('tombol5')
const btn5 = document.getElementById('tombol6')
const btn6 = document.getElementById('tombol7')
const btn7 = document.getElementById('tombol8')



function playaudio(name){
    if (name == 'do1'){
        let doo = new Audio();
        doo.src = "Tangga-Nada/Note_DO.mp3";
        doo.play();
        btn.style.background = '#ccc'
        setTimeout(() => {
            btn.style.backgroundColor = 'white';
        }, 500);
    }
    if (name == 're'){
        let re = new Audio();
        re.src = "Tangga-Nada/Re.mp3";
        re.play();
         btn1.style.background = '#ccc'
        setTimeout(() => {
            btn1.style.backgroundColor = 'white';
        }, 500);
    }
    if (name == 'mi'){
        let mi = new Audio();
        mi.src = "Tangga-Nada/mi.wav";
        mi.play();
        btn2.style.background = '#ccc'
        setTimeout(() => {
            btn2.style.backgroundColor = 'white';
        }, 500);
    }
    if (name == 'fa'){
        let fa = new Audio();
        fa.src = "Tangga-Nada/fa.wav";
        fa.play();
        btn3.style.background = '#ccc'
        setTimeout(() => {
            btn3.style.backgroundColor = 'white';
        }, 500);
    }
    if (name == 'sol'){
        let sol = new Audio();
        sol.src = "Tangga-Nada/sol.wav";
        sol.play();
        btn4.style.background = '#ccc'
        setTimeout(() => {
            btn4.style.backgroundColor = 'white';
        }, 500);
    }
    if (name == 'la'){
        let la = new Audio();
        la.src = "Tangga-Nada/la.wav";
        la.play();
        btn5.style.background = '#ccc'
        setTimeout(() => {
            btn5.style.backgroundColor = 'white';
        }, 500);
    }
    if (name == 'si'){
        let si = new Audio();
        si.src = "Tangga-Nada/si.MP3";
        si.volume = 0.3
        si.play();
        btn6.style.background = '#ccc'
        setTimeout(() => {
            btn6.style.backgroundColor = 'white';
        }, 500);
    }
    if (name == 'do2'){
        let do2 = new Audio();
        do2.src = "Tangga-Nada/do2.wav";
        do2.play();
        btn7.style.background = '#ccc'
        setTimeout(() => {
            btn7.style.backgroundColor = 'white';
        }, 500);
    }
}

document.addEventListener ("keypress", function(e){
    if (e.key == '1'){
        playaudio("do1")
    }
    if (e.key == '2'){
        playaudio("re")
    }
    if (e.key == '3'){
        playaudio("mi")
    }
    if (e.key == '4'){
        playaudio("fa")
    }
    if (e.key == '5'){
        playaudio("sol")
    }
    if (e.key == '6'){
        playaudio("la")
    }
    if (e.key == '7'){
        playaudio("si")
    }
    if (e.key == '8'){
        playaudio("do2")
    }
})

let cara = document.getElementById('instruksi')

function tampilan(){
    cara.classList.toggle('show');
    setTimeout(() => {
        cara.classList.remove('show')
     }, 10000);
}

   

  

