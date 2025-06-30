document.addEventListener("DOMContentLoaded", () => {
  // Fade in elements on load
  setTimeout(() => {
    document.querySelectorAll(".hero-text, .hero-image-container").forEach((el) => {
      el.classList.add("fade-in")
    })
  }, 100)

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector(".mobile-menu-button")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  }

  // Smooth scrolling for navigation
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })

      // Close mobile menu if open
      if (mobileMenu && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active")
      }
    }
  }

  // Add click event to all navigation links
  document.querySelectorAll(".nav-link, .btn[data-section]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const sectionId = link.getAttribute("data-section")
      scrollToSection(sectionId)
    })
  })

  // Oráculo functionality
  const oraculoButton = document.getElementById("consultar-oraculo")
  const oraculoMessage = document.getElementById("oraculo-message")

  if (oraculoButton && oraculoMessage) {
    const messages = [
      '"Tu alma busca la dulzura del coco celestial para conectar con la energía lunar de esta noche."',
      '"Las nueces terrenales te ayudarán a enraizarte en momentos de cambio."',
      '"El chocolate místico te dará la fuerza para enfrentar los desafíos que se avecinan."',
      '"Hoy necesitas la energía solar de las semillas para iluminar tu camino."',
      '"La canela en tu galleta activará tu tercer ojo y te conectará con tu intuición."',
    ]

    oraculoButton.addEventListener("click", () => {
      // Animate the message change
      oraculoMessage.style.opacity = "0"

      setTimeout(() => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)]
        oraculoMessage.textContent = randomMessage
        oraculoMessage.style.opacity = "1"
      }, 300)
    })
  }

  // Form submission
  const contactForm = document.getElementById("contacto-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple form validation
      const inputs = contactForm.querySelectorAll("input, textarea")
      let isValid = true

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false
          input.style.borderColor = "red"
        } else {
          input.style.borderColor = ""
        }
      })

      if (isValid) {
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]')
        const originalText = submitButton.textContent

        submitButton.disabled = true
        submitButton.textContent = "Enviando..."

        setTimeout(() => {
          alert("¡Mensaje enviado con éxito! Gracias por contactarnos.")
          contactForm.reset()
          submitButton.disabled = false
          submitButton.textContent = originalText
        }, 1500)
      }
    })
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all sections for scroll animations
  document.querySelectorAll("section > .container").forEach((section) => {
    section.classList.add("hero-text") // Reuse the fade-in animation
    observer.observe(section)
  })
})
// Efecto flip del oráculo
const oraculoFlip = document.getElementById("oraculo-flip");
const mensajeElemento = document.getElementById("mensaje-oraculo");

const mensajesOraculo = [
  '"Hoy tu espíritu necesita dulzura para sanar. Abraza tu calma."',
  '"Estás alineado con la energía solar. Confía en tu brillo."',
  '"La luna te guía esta noche. Escucha tus sueños."',
  '"La tierra nutre tu alma. Enraízate y crece."',
  '"La intuición es tu brújula. Confía en lo que sientes."',
  '"La gratitud abre portales. Agradece y recibirás con el corazón."'
];

if (oraculoFlip && mensajeElemento) {
  oraculoFlip.addEventListener("click", () => {
    oraculoFlip.classList.toggle("flipped");

    if (oraculoFlip.classList.contains("flipped")) {
      const random = mensajesOraculo[Math.floor(Math.random() * mensajesOraculo.length)];
      mensajeElemento.textContent = random;
    }
  });
}
