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
  