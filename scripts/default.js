const navSlide = ()=> {
  //main nav menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('nav-active');

      //main nav submenu toggle for 970px or below screen
      var dropdown = document.getElementsByClassName("submenu-btn");
      var i;

        for (i = 0; i < dropdown.length; i++) {
          dropdown[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
          } else {
          dropdownContent.style.display = "block";
          }
          });
      }
}
