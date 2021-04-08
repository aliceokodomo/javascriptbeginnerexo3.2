document.getElementById("btn_hide")
        .addEventListener("click", function() {
  document.getElementById("text_hiding").hidden = true;
});
document.getElementById("btn_display")
        .addEventListener("click", function(){
  document.getElementById("text_hiding").hidden = false;
});
