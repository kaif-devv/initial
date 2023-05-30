for(i=0;i<= document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       new Audio("sounds/crash.mp3").play();
        
    });
}


