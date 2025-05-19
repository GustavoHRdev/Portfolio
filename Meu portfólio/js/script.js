document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const btn = document.getElementById('toggle-music');
  const icon = document.getElementById('icon-sound');

  const soundOn = `<path d="M3 10v4h4l5 5V5l-5 5H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.74 2.5-2.26 2.5-4.02z"/>`;
  const soundOff = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.74 2.5-2.26 2.5-4.02zM3 10v4h4l5 5V5l-5 5H3z"/>`;

  btn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      icon.innerHTML = soundOn;
      icon.classList.add('pulsando');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      music.pause();
      icon.innerHTML = soundOff;
      icon.classList.remove('pulsando');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Atualiza o estado inicial do botão
  if (!music.paused) {
    icon.classList.add('pulsando');
    btn.setAttribute('aria-pressed', 'true');
  } else {
    btn.setAttribute('aria-pressed', 'false');
  }

  // Digitação do título
  const title = "Olá! Eu sou o Gustavo Honorio.";
  const titleEl = document.getElementById("typing-title");
  let index = 0;

  function typeTitle() {
    if (index < title.length) {
      titleEl.textContent += title.charAt(index);
      index++;
      setTimeout(typeTitle, 50);
    }
  }

  typeTitle();

  // Animação de scroll
  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
});
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = document.querySelectorAll('#habilidades ul li');
        items.forEach(item => item.classList.add('slide-in'));
        // Parar de observar após ativar
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4 // 40% visível já ativa a animação
  });
  
document.querySelectorAll('#habilidades ul li').forEach((li, i) => {
  setTimeout(() => li.classList.add('slide-in'), 4000 + i * 500);
});

  const section = document.querySelector('#habilidades');
  if (section) observer.observe(section);
});
