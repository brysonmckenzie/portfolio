var pagetop, menu, yPos, remote;

window.onload = function() {
    
        document.getElementById('remote-nav').style.display = 'none';
      };

function yScroll(){
    pagetop = document.getElementById('pagetop');
    menu = document.getElementById('menu');
    yPos = window.pageYOffset;
    remote = document.getElementById('remote-nav')
    
    

    if(yPos > 150){
        
        
        pagetop.style.height = "70px";
        pagetop.style.paddingTop = "8px";
        menu.style.height = "0px";
        remote.style.display = 'block'
    } else {
        pagetop.style.height = "150px";
        pagetop.style.paddingTop = "50px";
        menu.style.height = "60px";
        remote.style.display = "none"
    }
}

window.addEventListener("scroll", yScroll);



        


