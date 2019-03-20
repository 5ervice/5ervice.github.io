var following = document.getElementById("following");
var follow = document.getElementById("follow");

function select() {
  follow.classList.toggle("dn");
  following.classList.toggle("dib");

  if(following.classList.contains("dib")){
    follow.classList.remove("dib");
  }else{
    follow.classList.add("dib")
  }
}
