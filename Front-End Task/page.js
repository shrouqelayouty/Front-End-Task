
function openNav() {
  var sidenav = document.getElementById("mySidenav");
  sidenav.style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function changeStyleOfImage() {
  var images = document.getElementsByClassName("images");
  var imagemActual = 0;
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
      this.classList.add("picContainer");
      imagemActual = i;      
    });
    images[i].classList.remove("picContainer");
  }
}
