
function effct(btn){
    $("."+btn).addClass('pressed');
    setTimeout(()=>{
        $("."+btn).removeClass('pressed');
    }, 150);

}

function playAudio(btn){
    switch(btn){
        case 'w':
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        case 'a':
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        case 's':
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        case 'd':
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        case 'j':
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
        case 'k':
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        case 'l':
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
        default:
            return;
    }
}

let kitLen = $('.drum').length;

for(i=0;i<kitLen;i++){
    $(".drum")[i].addEventListener("click",function(){
       let key = this.innerHTML;
       playAudio(key);
       effct(key);
    });
}

document.addEventListener('keypress',function(event){
    playAudio(event.key);
    effct(event.key);
});

