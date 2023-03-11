'use script';

const windowModal = document.querySelector('.mobile-nav');
const btnOpenMenu = document.querySelector('.hamburger-icon');
const btnCloseMenu = document.querySelector('.btn-close');
const modalContainer = document.querySelector('.modal-container');
const sectionLink = document.querySelector('.link');
const containerProject = document.querySelector('.projects-cards');
const overlay = document.querySelector('.overlay');

const openMenu = function () {
  windowModal.classList.remove('hidden');
};
const closeMenu = function () {
  windowModal.classList.add('hidden');
};
btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
sectionLink.addEventListener('click', closeMenu);


const projectInfo = [
 
  {
    id: 1,
    name: 'Listas',
    description: 'Aplicacion para hacer listas ',
    image: './assets/todo1.png',
    technologies: [
      'HTML/CSS',
      'Webpack',
      'JavaScript'],
  },
  {
    id: 2,
    name: 'Casa para todos',
    description: 'Pagina de una ong',
    image: './assets/homeforall.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
  },
  {
    id: 3,
    name: 'Piedra, Papel o Tijeras',
    description: 'Juego piedra, papel o tijeras',
    image: './assets/rps.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
  },
  {
    id: 4,
    name: 'Tic Tac Toe',
    description: 'Juego tic tac toe',
    image: './assets/tictactoe.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
  },
  {
    id: 5,
    name: 'Calculadora',
    description: 'Project of a simple calculator from The Odin Project Curriculum using the material I have learned in "fundamentas of Javascript Course". Use of simple functions for the functionality of the calculator.',
    image: './assets/Calculadora.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'],
  },
];

const displayModal = (id) => {
  projectInfo.forEach((work) => {
    if ((Number(id)) === work.id) {
      modalContainer.classList.add('active');
      overlay.classList.add('active');
      let html = '';
      html += `
    <button class="close-modal">&times</button>
    <h3 class="project-title">${projectInfo[id].name}</h3>
    <ul class="card-tech-modal">
      <li>${projectInfo[id].technologies[0]}</li>
      <li>${projectInfo[id].technologies[1]}</li>
      <li>${projectInfo[id].technologies[2]}</li>
    </ul>
    <img class="project-image" src="${projectInfo[id].image}">
    <p class="project-description">${projectInfo[id].description}</p>
    <div class="btns-modal">
    <button class="btn-modal seeLive"><a href="${projectInfo[id].liveVersion}">See live
    <i class="fa-regular fa-share-from-square"></i>
    </a></button>
    <button class="btn-modal seeSource"><a href="${projectInfo[id].source}">See source        <i class="fa-brands fa-github"></i></a></button>
    </div>
    <div class="next-prev-proj">
        <button class="prev-btn">
        <i class="fa-solid fa-arrow-left"></i>
        Previous project</button>
        <button class="prev-btn">Next Project
        <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>`;

      modalContainer.innerHTML = html;
    }
  });
  const btnCloseModal = document.querySelector('.close-modal');

  btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.classList.remove('active');
    overlay.classList.remove('active');
  });
};

projectInfo.forEach((work) => {
  const projectCard = document.createElement('div');
  projectCard.className = `project-card-${work.id}`;
  const html = `
    <div class="project-wrapper-${work.id}">
    <img id=project-pic class="pict project-picture-${work.id}" src = ${work.image} alt=${work.name}>
    <div class="project-card-details-${work.id}" id=project-card-details>
      <h4 class="project-name">${work.name}</h4>
      <ul class="card-tech">
      <li>${work.technologies[0]}</li>
       <li>${work.technologies[1]}</li>
       <li>${work.technologies[2]}</li>
      </ul>
      <button class="btn-see-project" id="${work.id}">See this project &#10132</button>
    </div>
    </div>`;
  containerProject.insertAdjacentHTML('afterbegin', html);
});

const btnSee = document.querySelectorAll('.btn-see-project');
btnSee.forEach((btn) => btn.addEventListener('click', (e) => {
  const { id } = e.target;
  displayModal(id);
}));

const navContainer = document.querySelector('.nav-links');

navContainer.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});


const nav = document.querySelector('.header-menu');

const hoverNav = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.header-menu').querySelectorAll('.nav-link');

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
  }
};

nav.addEventListener('mouseover', hoverNav.bind(0.5));
nav.addEventListener('mouseout', hoverNav.bind(1));

const navv = document.querySelector('.desk-header');
const navHeight = nav.getBoundingClientRect().height;
const header = document.querySelector('.introduction');

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navv.classList.add('sticky');
  else navv.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('form-section');
const email = document.getElementById('email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
  }
});


let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('textarea');

function dataLocalStore() {
  localStorage.setItem('name', JSON.stringify(localData));
}

form.addEventListener('change', () => {
  localData.name = nameInput.value;
  localData.email = emailInput.value;
  localData.message = messageInput.value;
  dataLocalStore();
});

if (JSON.parse(localStorage.getItem('name')) !== null) {
  localData = JSON.parse(localStorage.getItem('name'));
  nameInput.setAttribute('value', localData.name);
  emailInput.setAttribute('value', localData.email);
  messageInput.value = localData.message;
}
