/* =============================================
   COMMUNITY WELLBEING HUB — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ================================================
     1. HAMBURGER MENU (mobile)
     ================================================ */
  var hamburger = document.querySelector('.hamburger');
  var navList   = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navList.classList.toggle('open');
  });

  /* Close nav when a link is clicked on mobile */
  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
    });
  });

  /* ================================================
     2. ACCORDION — expand / collapse
     ================================================ */
  var accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var body   = this.nextElementSibling;
      var isOpen = this.classList.contains('open');

      /* Close all in this accordion group */
      var group = this.closest('.accordion');
      group.querySelectorAll('.accordion-btn').forEach(function (b) {
        b.classList.remove('open');
        b.nextElementSibling.classList.remove('open');
      });

      /* Open this one if it was closed */
      if (!isOpen) {
        this.classList.add('open');
        body.classList.add('open');
      }
    });
  });

  /* ================================================
     3. BOOKING FORM
     ================================================ */
  var bookingForm = document.getElementById('bookingForm');
  var successMsg  = document.getElementById('successMsg');

  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name  = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var event = document.getElementById('eventChoice').value;

      if (!name || !email || !event) {
        alert('Please fill in your Name, Email, and choose an Event.');
        return;
      }

      bookingForm.style.display = 'none';
      successMsg.style.display  = 'block';
    });
  }

  var resetBtn = document.getElementById('resetForm');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (bookingForm) {
        bookingForm.reset();
        bookingForm.style.display = 'block';
      }
      successMsg.style.display = 'none';
    });
  }

  /* ================================================
     4. CONTACT FORM
     ================================================ */
  var contactForm    = document.getElementById('contactForm');
  var contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display    = 'none';
      contactSuccess.style.display = 'block';
    });
  }

}); /* end DOMContentLoaded */
