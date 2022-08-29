
// button press detector


var buttonNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  }
}

// keypress detector


document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})


function makeSound(key){

  switch (key) {
    case "q":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;
    case "w":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "e":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;
    case "z":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {

 var activeButton = document.querySelector("."+currentKey);

 activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed")
}, 100);


}
