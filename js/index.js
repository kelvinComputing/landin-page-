let button=document.getElementById('header-menu');
let menu = document.getElementById("menu-despegable");
menu.style.display="none";


button.addEventListener('click', function(){
    
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });




