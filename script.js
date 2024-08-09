var modal = document.getElementById("myModal");
var boxContent = document.getElementById("boxContent");
var btn = document.getElementById("aboutUs");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == boxContent) {
    modal.style.display = "none";
  }
}
