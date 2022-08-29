var desc = document.querySelector("#description");
desc.addEventListener("keypress", function(e) {
    var maxChars = 240;
  inputLength = desc.value.length;
  
  if(inputLength >= maxChars) {
      e.preventDefault();
  }
    
});