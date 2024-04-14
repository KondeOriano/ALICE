function toggleImage() {
    var select = document.getElementById("image-select");
    var selectedValue = select.value;
    var divs = document.getElementsByClassName("image-container");
  
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none";
    }
  
    if (selectedValue !== "none") {
      var selectedDiv = document.getElementById(selectedValue);
      selectedDiv.style.display = "block";
    }
  }
  