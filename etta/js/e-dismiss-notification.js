var notif = document.getElementById("notif");
// var view = document.getElementById("main");

function dismiss(){
  // if(view.classList.contains("blur")){
  //   view.classList.remove("blur");
  // }
  
  notif.classList.add("o-40");
  
  setTimeout(function () {
    notif.remove();
}, 500);
  
}


