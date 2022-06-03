li = document.querySelectorAll(".drum")

Array.from(li).forEach(function(element){
    element.addEventListener("click",function j() {
        makeSound(this.classList[0]);    
        addAnim(this.classList[0]);    
    });
    
})

document.addEventListener('keypress', function(event){
    makeSound(event.key);
    addAnim(event.key);
});

function makeSound(key){
    switch(key){
        case 'w':
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case 'a':
                var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break;
            case 's':
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'd':
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'j':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 'k':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case 'l':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            default:
                console.log('You messed up something');
        }
}

//Adding animation to pressed event;

function addAnim(event){
    var s = document.querySelector('.' + event);
    s.classList.add("pressed");
    setTimeout(function(){
        s.classList.remove("pressed");
    },200)
    
}


// Another approch.----------
// for (let i = 0; i< li.length;i++){
//     li[i].addEventListener("click",function j() {
//         alert("I got clicked!");
//    });
// }