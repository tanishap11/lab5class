var menu_state = false;

function MenuToggle() {
    console.log('menu state before if/else', menu_state)
    if (menu_state === false){
        MenuOpen();
    } else {
    MenuClose();
    }
    console.log('menu state before if/else', menu_state)
}


function MenuOpen() {
    document.querySelector("#menu2").style.display = "block";

    setTimeout(function(){
        document.querySelector("#menu2").style.opacity = 1;
    },100);

    menu_state = true;

}

function MenuClose() {
    setTimeout(function(){    
        document.querySelector("#menu2").style.display = "none";
    },300);

    document.querySelector("#menu2").style.opacity = 0;
    menu_state = false;

}