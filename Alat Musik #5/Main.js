const volume = document.querySelector('.suara input')
let audio = new Audio("tunes/a.wav")

const playaudio = (key) =>{
    const not = document.querySelector(`[data-key="${key}"]`)
    audio.src = `tunes/${key}.wav`
    audio.play();
    not.classList.add('active')
    setTimeout(() => {
        not.classList.remove('active')
    }, 150);
}

// jalanin klo angka dipencet
document.addEventListener ("keypress", function(e){
    if (e.key == '1'){
        playaudio("a")
    }
    if (e.key == '2'){
        playaudio("s")
    }
    if (e.key == '3'){
        playaudio("d")
    }
    if (e.key == '4'){
        playaudio("f")
    }
    if (e.key == '5'){
        playaudio("g")
    }
    if (e.key == '6'){
        playaudio("h")
    }
    if (e.key == '7'){
        playaudio("j")
    }
    if (e.key == '8'){
        playaudio("k")
    }
    if (e.key == '9'){
        playaudio("l")
    }
    if (e.key == '0'){
        playaudio(";")
    }
    if (e.key == 'a'){
        playaudio("w")
    }
    if (e.key == 's'){
        playaudio("e")
    }
    if (e.key == 'd'){
        playaudio("t")
    }
    if (e.key == 'f'){
        playaudio("y")
    }
    if (e.key == 'g'){
        playaudio("u")
    }
    if (e.key == 'h'){
        playaudio("o")
    }
    if (e.key == 'j'){
        playaudio("p")
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value
}
volume.addEventListener("input", handleVolume)

//jalan klo tombol info dipencet
function tampilan(){
    let cara = document.getElementById('instruksi')
    cara.classList.toggle('show')
    setTimeout(() => {
        cara.classList.remove('show')
     }, 10000);
}

// const btn = document.getElementById('tombol1')
// const btn1 = document.getElementById('tombol2')
// const btn2 = document.getElementById('tombol3')
// const btn3 = document.getElementById('tombol4')
// const btn4 = document.getElementById('tombol5')
// const btn5 = document.getElementById('tombol6')
// const btn6 = document.getElementById('tombol7')
// const btn7 = document.getElementById('tombol8')

//jalanin klo tombol dipencet
// function playaudio(name){
//     if (name == 'do1'){
//         let doo = new Audio();
//         doo.src = "Tangga-Nada/Note_DO.mp3";
//         doo.play();
//         btn.style.background = '#ccc'
//         setTimeout(() => {
//             btn.style.backgroundColor = 'white';
//         }, 500);
//     }
//     if (name == 're'){
//         let re = new Audio();
//         re.src = "Tangga-Nada/Re.mp3";
//         re.play();
//          btn1.style.background = '#ccc'
//         setTimeout(() => {
//             btn1.style.backgroundColor = 'white';
//         }, 500);
//     }
//     if (name == 'mi'){
//         let mi = new Audio();
//         mi.src = "Tangga-Nada/mi.wav";
//         mi.play();
//         btn2.style.background = '#ccc'
//         setTimeout(() => {
//             btn2.style.backgroundColor = 'white';
//         }, 500);
//     }
//     if (name == 'fa'){
//         let fa = new Audio();
//         fa.src = "Tangga-Nada/fa.wav";
//         fa.play();
//         btn3.style.background = '#ccc'
//         setTimeout(() => {
//             btn3.style.backgroundColor = 'white';
//         }, 500);
//     }
//     if (name == 'sol'){
//         let sol = new Audio();
//         sol.src = "Tangga-Nada/sol.wav";
//         sol.play();
//         btn4.style.background = '#ccc'
//         setTimeout(() => {
//             btn4.style.backgroundColor = 'white';
//         }, 500);
//     }
//     if (name == 'la'){
//         let la = new Audio();
//         la.src = "Tangga-Nada/la.wav";
//         la.play();
//         btn5.style.background = '#ccc'
//         setTimeout(() => {
//             btn5.style.backgroundColor = 'white';
//         }, 500);
//     }
//     if (name == 'si'){
//         let si = new Audio();
//         si.src = "Tangga-Nada/si.MP3";
//         si.volume = 0.3
//         si.play();
//         btn6.style.background = '#ccc'
//         setTimeout(() => {
//             btn6.style.backgroundColor = 'white';
//         }, 500);
//     }
//     if (name == 'do2'){
//         let do2 = new Audio();
//         do2.src = "Tangga-Nada/do2.wav";
//         do2.play();
//         btn7.style.background = '#ccc'
//         setTimeout(() => {
//             btn7.style.backgroundColor = 'white';
//         }, 500);
//     }
// }