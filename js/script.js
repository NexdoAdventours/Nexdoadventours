const FORM_ENDPOINT = 'https://formsubmit.co/ajax/nexdoadventours@gmail.com';
// Google Sheets web app URL for storing newsletter subscribers (get from Extensions > Apps Script > Deploy > Web app)
// Create a sheet, paste the provided script, deploy, and paste the URL below:
const NEWSLETTER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxwyGKJ3pWSC1PdTw1lxH0ev0nQSl6EOQyC7Uf8a1pOY4CjBDDatr3wF5pT7rVRdqJ2ZA/exec';

document.addEventListener('DOMContentLoaded', function() {

  // ------- Hero Slideshow -------
  const slideshow = document.getElementById('heroSlideshow');
  if (slideshow) {
    const heroImages = [];
    for (let i = 1; i <= 168; i++) {
      heroImages.push('images/gallery/gallery-' + i + '.jpg');
    }
    // Shuffle and pick first 10
    const shuffled = heroImages.sort(() => Math.random() - 0.5).slice(0, 10);
    shuffled.forEach(function(src, index) {
      const div = document.createElement('div');
      div.className = 'slide' + (index === 0 ? ' active' : '');
      div.style.backgroundImage = "url('" + src + "')";
      slideshow.appendChild(div);
    });
    let currentSlide = 0;
    const slides = slideshow.querySelectorAll('.slide');
    setInterval(function() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  }

  // ------- Hamburger Menu -------
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ------- Active Nav Link -------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ------- Header Scroll Effect -------
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ------- FAQ Accordion (delegated) -------
  document.addEventListener('click', function(e) {
    const question = e.target.closest('.faq-question');
    if (!question) return;
    const item = question.closest('.faq-item');
    if (!item) return;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });

  // ------- Scroll Animation -------
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
    observer.observe(el);
  });

  // ------- Contact Form -------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('.btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(this);
      fetch(FORM_ENDPOINT, { method: 'POST', body: formData })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (d.success) {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#2D6A4F';
            setTimeout(function() {
              submitBtn.textContent = originalText;
              submitBtn.style.background = '';
              submitBtn.disabled = false;
              contactForm.reset();
            }, 3000);
          } else { throw new Error(d.message); }
        })
        .catch(function() {
          submitBtn.textContent = 'Error — try again';
          submitBtn.style.background = '#e74c3c';
          submitBtn.disabled = false;
        });
    });
  }

  // ------- Customize Trip Form -------
  const tripForm = document.getElementById('tripForm');
  if (tripForm) {
    tripForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('.btn');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      const formData = new FormData(this);
      fetch(FORM_ENDPOINT, { method: 'POST', body: formData })
        .then(function(r) { return r.json(); })
        .then(function(d) {
          if (d.success) {
            submitBtn.textContent = 'Trip Request Submitted!';
            submitBtn.style.background = '#2D6A4F';
            setTimeout(function() {
              submitBtn.textContent = originalText;
              submitBtn.style.background = '';
              submitBtn.disabled = false;
              tripForm.reset();
            }, 3000);
          } else { throw new Error(d.message); }
        })
        .catch(function() {
          submitBtn.textContent = 'Error — try again';
          submitBtn.style.background = '#e74c3c';
          submitBtn.disabled = false;
        });
    });
  }

  // ------- Newsletter Form -------
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      const msg = document.getElementById('newsletterMsg');
      const btn = this.querySelector('.btn');
      btn.textContent = 'Subscribing...';
      btn.disabled = true;

      function onSuccess() {
        msg.innerHTML = '<i class=\"fas fa-check-circle\"></i> Thanks, ' + email + '! You\'re subscribed.';
        msg.style.color = '#fff';
        newsletterForm.reset();
        btn.textContent = 'Subscribe';
        btn.disabled = false;
      }
      function onError() {
        msg.innerHTML = 'Something went wrong. Please try again.';
        msg.style.color = '#e74c3c';
        btn.textContent = 'Subscribe';
        btn.disabled = false;
      }

      if (NEWSLETTER_ENDPOINT) {
        const fd = new FormData();
        fd.append('email', email);
        fd.append('source', 'Nexdo Website');
        fetch(NEWSLETTER_ENDPOINT, { method: 'POST', mode: 'no-cors', body: fd })
          .then(onSuccess)
          .catch(onError);
      } else {
        const formData = new FormData(this);
        fetch(FORM_ENDPOINT, { method: 'POST', body: formData })
          .then(function(r) { return r.json(); })
          .then(function(d) {
            if (d.success) onSuccess(); else throw new Error(d.message);
            btn.textContent = 'Subscribe';
            btn.disabled = false;
          })
          .catch(onError);
      }
    });
  }

  // ------- Show More Reviews -------
  window.toggleReviews = function() {
    const hidden = document.querySelectorAll('.review-hidden');
    const btn = document.getElementById('showMoreBtn');
    const allHidden = Array.from(hidden).every(c => c.style.display === 'none' || !c.style.display);
    if (allHidden) {
      hidden.forEach(c => { c.style.display = 'block'; });
      btn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less';
    } else {
      hidden.forEach(c => { c.style.display = 'none'; });
      btn.innerHTML = '<i class="fas fa-chevron-down"></i> Show All Reviews';
      document.getElementById('reviews').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ------- Gallery Toggle -------
  window.toggleGallery = function() {
    const hidden = document.querySelectorAll('.gallery-hidden');
    const btn = document.getElementById('galleryBtn');
    const allHidden = Array.from(hidden).every(c => c.style.display === 'none' || !c.style.display);
    if (allHidden) {
      hidden.forEach(c => { c.style.display = 'block'; });
      btn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less';
    } else {
      hidden.forEach(c => { c.style.display = 'none'; });
      btn.innerHTML = '<i class="fas fa-images"></i> Show More Photos';
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ------- Lightbox -------
  window.openLightbox = function(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (lb && img) {
      img.src = src;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  window.closeLightbox = function() {
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // ------- Blog Toggle -------
  window.toggleBlog = function(id, el) {
    const content = document.getElementById(id);
    if (content.style.display === 'block') {
      content.style.display = 'none';
      el.innerHTML = 'Read More <i class="fas fa-arrow-right"></i>';
    } else {
      content.style.display = 'block';
      el.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    }
  }

  // ------- Destination Modal -------
  window.openDestModal = function(id) {
    const modal = document.getElementById('destModal');
    const body = document.getElementById('destModalBody');
    const data = document.getElementById('dest-' + id);
    if (modal && body && data) {
      body.innerHTML = data.innerHTML;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  window.closeDestModal = function() {
    const modal = document.getElementById('destModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Make gallery images clickable for lightbox (event delegation for dynamic content)
  document.getElementById('galleryGrid')?.addEventListener('click', function(e) {
    const img = e.target.closest('.gallery-item img');
    if (img) { e.stopPropagation(); openLightbox(img.src); }
  });

});