const ProgramDetails = [
  {
    title: 'Lecture',
    description:
      'Lecture on the topic of the day. In this session there will be a keynote presentation by the speaker and a brief description of the topic.',
    icon: './images/lecture.svg',
  },
  {
    title: 'Workshop',
    description:
      'Workshop on the topic of the day. In this session there will be a brief description of the topic and a workshop session.',
    icon: './images/workshop.svg',
  },
  {
    title: 'Forum',
    description:
      'Forum on the topic of the day. In this session there will be a brief description of the topic and a forum session. There will be lots of fun.',
    icon: './images/forum.svg',
  },
  {
    title: 'CC Ignite',
    description:
      'CC Ignite on the topic of the day. In this session there will be a brief description of the topic and a CC Ignite session. We will be having fun.',
    icon: './images/ignite.svg',
  },
  {
    title: 'CC Exhibtion',
    description:
      'CC Exhibtion on the topic of the day. In this session there will be a brief description of the topic and a CC Exhibtion session.',
    icon: './images/cc.svg',
  },
];

ProgramDetails.forEach((program) => {
  const card = `<div class='content-card'>
    <img src='${program.icon}' alt='${program.title}'>
    <h4 class='content-title'>${program.title}</h4>
    <p>
        ${program.description}
    </p>
  </div>`;
  document.querySelector('.content').innerHTML += card;
});

const Speakers = [
  {
    image: './images/speaker-1.jpeg',
    name: 'Dan Abramov',
    designation: 'Developer at Meta (React Core Team)',
    description:
      'Dan Abramov is a software engineer at Facebook. He is the creator of React, and the creator of the React library. He is also the creator of the Redux library.',
  },
  {
    image: './images/speaker-2.png',
    name: 'Sebastian Markbrenner',
    designation: 'Developer at Google',
    description:
      'Sebastian Markbrenner is a software engineer at Google. He is the creator of the Angular framework.',
  },
  {
    image: './images/speaker-3.png',
    name: 'Jared Vollmer',
    designation: 'Developer at Amazon',
    description:
      'Jared Vollmer is a software engineer at Amazon. He is the creator of the React Native framework.',
  },
  {
    image: './images/speaker-4.png',
    name: 'Jasmine K',
    designation: 'Developer at Medium',
    description:
      'Jasmine K is a software engineer at Medium. She is the creator of the Vue framework.',
  },
  {
    image: './images/speaker-5.png',
    name: 'Sara Soueidan',
    designation: 'Developer at Twitter',
    description:
      'Sara Soueidan is a software engineer at Twitter. She is the Bootstrap creator.',
  },
  {
    image: './images/speaker-6.png',
    name: 'Rodrigo Sousa',
    designation: 'Developer at Facebook',
    description:
      'Rodrigo Sousa is a software engineer at Facebook. He is the creator of the React Native framework.',
  },
];

Speakers.forEach((speaker) => {
  const card = `<div class='speaker-card'>
    <div class='speaker-img'>
      <img src='${speaker.image}' alt='speaker one' />
    </div>
    <div class='speaker-details'>
      <h3>${speaker.name}</h3>
      <em>${speaker.designation}</em>
      <p>${speaker.description}</p>
    </div>
  </div>`;
  document.querySelector('.speaker-list').innerHTML += card;
});
