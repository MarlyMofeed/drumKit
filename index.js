/*detecting click*/
for(var i=0 ; i < document.querySelectorAll(".drum").length ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHtml = this.innerHTML; /* this sentence takes the object from clicking and brings the inner html which is the letter*/
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}
/*Detecting button press*/
document.addEventListener("keydown",function (event){
    makeSound(event.key); /*Key of the event done*/
    buttonAnimation(event.key);
});
function makeSound(key)
{
    switch (key)
        {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break; /*to get out of switch*/
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default: console.log(buttonInnerHtml);
        }

}

function buttonAnimation(currentKey)
{

    document.querySelector("."+currentKey).classList.add("pressed");
    //this function triggers a fuction that you specify its role after a certain time that you put it as sec input
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
}

