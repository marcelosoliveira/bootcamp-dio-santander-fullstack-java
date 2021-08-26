const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
      {
        id: 1,
        name: 'Introdução Angular 8',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        description: 'Pricipais abordagens básicas do Angular 8',
        code: 'xps-9988',
        duration: 5,
        rating: 4,
        releaseDate: '22/07/2021',
    },
    {
        id: 2,
        name: 'Trybe',
        imageUrl: '/assets/images/http.png',
        price: 36000,
        description: 'Escola que ensina a programar - Desenvolvedor Fullstack Web',
        code: 'fac-1234',
        duration: 1500,
        rating: 3.5,
        releaseDate: '10/09/2020',
    },
    {
        id: 3,
        name: 'Bootcamp Santander',
        imageUrl: '/assets/images/router.png',
        price: 0,
        description: 'Santander Bootcamp Fullstack Spring e Angular',
        code: 'STD-3245',
        duration: 400,
        rating: 5,
        releaseDate: '26/06/2021',
    },
    {
        id: 4,
        name: 'Bootcamp GFT',
        imageUrl: '/assets/images/animations.png',
        price: 0,
        description: 'Bootcamp STARTER#2 Java intensivo ao back-end',
        code: 'GFT-5678',
        duration: 400,
        rating: 5,
        releaseDate: '14/06/2021',
    },
    {
        id: 5,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 6,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 7,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 8,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 9,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];
