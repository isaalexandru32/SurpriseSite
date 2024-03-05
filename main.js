let counter = document.getElementById('chair');
let sec = 10;
let h1Counter = document.getElementById('thing');
let vineBoom = new Audio('vine-boom.mp3');
let ohMahGawd = new Audio('ohmahgawd.mp3');

function osmanChair() {
    h1Counter.style.display = 'none';
    document.body.style.backgroundImage = "url(Mikey_Yackson_Osman_chair.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    vineBoom.play();
    ohMahGawd.play();
    
}

function funnyOnClick() {
    h1Counter.removeAttribute('onclick');
    changeCounter();
}


function changeCounter() {
    counter.textContent= sec;
    sec--;

    if (sec == -1) {
        osmanChair();
    }
    else {
        setTimeout(changeCounter, 1000)
}
}

/* changeCounter(); */

/* for (let i = 20; i >= 0; i--) {
    document.getElementById('chair').textContent = i;

} */

/* document.getElementById('chair').textContent = 'doodoo'; */
