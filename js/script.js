// ============ Start typed.js ==============//
var typed = new Typed(".element", {
  strings: ["Larry Daniels", "Deveploper", "Designer"],
  typeSpeed: 20,
  backSpeed: 30,
  loop: true,
});
// ============ End typed.js ==============//

//  =========== Start Scroll-Navbar ===========//
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
//  =========== End Scroll-Navbar ===========//

// =========== Start Counter.js ===========//
const counters = document.querySelectorAll('#counter .num');
const duration = 1000; 

function startCounting() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target'); 
    const increment = target / (duration / 50); 
    let current = 0;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        setTimeout(updateCount, 50);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

const section = document.getElementById('counter');
const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    startCounting();
    observer.unobserve(section); 
  }
}, {
  threshold: 0.5 
});

observer.observe(section);
// =========== End Counter.js ===========//

// =========== Start progress Bar ===========//
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            const target = bar.getAttribute("data-target");
            bar.style.width = target + "%";
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );
  const skillsSection = document.querySelector(".skills");
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});
// =========== End progress Bar ===========//

// =========== Start Model ===========//
document.addEventListener("DOMContentLoaded", function() {
  const modalTriggerLinks = document.querySelectorAll(".fa-magnifying-glass-plus");

  modalTriggerLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          openModal();
      });
  });
});

function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none"; 
}
// =========== Start Model ===========//

// =========== Strat Loading ===========//
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
// =========== End Loading ===========//
