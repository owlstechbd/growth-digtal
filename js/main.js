document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");
    questions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains("open");
            document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
            document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("active"));
            if (!isOpen) {
                answer.classList.add("open");
                this.classList.add("active");
            }
        });
    });
});


//slider

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      margin: 20,
     
      responsive: {
        0: {
          items: 1.1,
        },
        768: {
          items: 2.5,
        },
      },
    });
  });
  

//poup

    // Variable to store the name of the clicked button
    let clickedButtonName = "";

    // Select all elements with the class 'openPopup' and add event listeners to each
    document.querySelectorAll(".openPopup").forEach(function (element) {
      element.addEventListener("click", function () {
        // Capture the button name from the data attribute
        clickedButtonName = element.getAttribute("data-button-name");
    
        // Set the hidden input field value
        document.getElementById("buttonName").value = clickedButtonName;
    
        // Display the popup form
        document.getElementById("popupForm").style.display = "flex";
      });
    });
    
    // Close button within the popup
    document
      .querySelector(".popup-content .close-button")
      .addEventListener("click", function () {
        document.getElementById("popupForm").style.display = "none";
      });
    
    // Close the popup when clicking outside the popup content
    window.addEventListener("click", function (event) {
      if (event.target === document.getElementById("popupForm")) {
        document.getElementById("popupForm").style.display = "none";
      }
    });
  