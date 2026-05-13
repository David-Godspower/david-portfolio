
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navLinks").classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

const revealOptions = {
  threshold: 0.12,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target);
    }
  });
}, revealOptions);

document.querySelectorAll(".reveal, .project-card, .stat-card, .experience-card, section")
  .forEach((el) => revealObserver.observe(el));

const animateCount = (counter) => {
  const target = +counter.getAttribute("data-target");
  const numberEl = counter.querySelector(".number");
  const duration = 2000; 
  const startTime = performance.now();

  const update = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    numberEl.textContent = Math.floor(easeProgress * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      numberEl.textContent = target;
    }
  };
  requestAnimationFrame(update);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".count").forEach(c => counterObserver.observe(c));

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const submitBtn = contactForm.querySelector("button");
    const originalText = submitBtn.textContent;

    if (typeof gtag !== "undefined") {
      gtag("event", "contact_form_submission", {
        event_category: "engagement",
        event_label: "Contact Form",
      });
    }

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);

    try {
      const res = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        window.location.href = "thankyou.html";
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      alert("Oops, something went wrong. Please check your connection or try again later.");
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

const downloadCvBtn = document.getElementById("download-cv");

if (downloadCvBtn) {
  downloadCvBtn.addEventListener("click", function (e) {
    e.preventDefault(); 

    if (typeof gtag !== "undefined") {
      gtag("event", "download_cv", {
        event_category: "engagement",
        event_label: "Download CV Button",
      });
    }

    const link = document.createElement("a");
    link.href = "files/David Godspower Ajala - Resume.pdf";
    link.download = "David_Godspower_Ajala_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Download initiated: David_Godspower_Ajala_Resume.pdf");
  });
}

const yearDisplay = document.getElementById("year");
if (yearDisplay) {
  yearDisplay.textContent = new Date().getFullYear();
}