
const btn = document.createElement('button');
btn.textContent = '🌙 Dark Mode';
btn.style.position = 'fixed';
btn.style.top = '15px';
btn.style.right = '6px';
btn.style.zIndex = 1000;
btn.style.padding = '4px 4px';
btn.style.borderRadius = '6px';
btn.style.border = 'none';
btn.style.background = '#283169ff';
btn.style.color = '#fff';
btn.style.cursor = 'pointer';
btn.style.fontWeight = 'bold';

document.body.appendChild(btn);

btn.onclick = () => {
  document.body.classList.toggle('dark-mode');
}

if (!document.getElementById('dark-css')) {
  const style = document.createElement('style');
  style.id = 'dark-css';
  style.textContent = `
    .dark-mode {
      background: #161616 !important;
      color: #f5f6fa !important;
    }
    .dark-mode header, .dark-mode nav, .dark-mode footer {
      background: #22223b !important;
      color: #fff !important;
    }
    .dark-mode section, .dark-mode .project {
      background: #161b22 !important;
      color: #fff !important;
      border: 1px solid #292929 !important;
    }
    .dark-mode a, .dark-mode .project a {
      color: #18cda0ff !important;
    }
    .dark-mode .edu li{
         background: #22223b !important;
    }
         .dark-mode nav {
    background-color: rgba(22, 22, 22, 0.8) !important;
  }
  `;
  document.head.appendChild(style);
}


document.getElementById("year").textContent = new Date().getFullYear();



const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
