const module = [
  {
    name: "Infromation Technology",
    id: "infromation-technology",
    sessions: [
      {
        name: "UI/UX Design for Apps",
        moduleCode: "C218",
        id: "ui-ux-Design-for-Apps",
        desc: "The aspects of the learning experience continually changes, and has been forced to take some giant leaps in this past year. Learn how to develop new technology and experiences while keeping in mind that the end “product” is a human that is counting on you to learn.",
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer"
        },
      },
      {
        name: "Mobile App Development",
        moduleCode: "C346",
        id: "mobile-app-development",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer"
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "financial-technology",
    sessions: [
      {
        name: "Software Application Development",
        moduleCode: "C237",
        id: "software-application-development",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        speaker: {
          name: "Hannah Lim",
          title: "Lecturer",
        },
      },
      {
        name: "Payment Technologies",
        id: "payment-technologies",
        moduleCode: "C372",
        desc: "This module introduces students to different payment technologies and systems.",
        speaker: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
        },
      },
    ],
  },
];

export function getSession({ sessionId, dipId }) {
  return module
    .find(({ id }) => id === dipId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getModule(dipId) {
  return module.find(({ id }) => id === dipId);
}

export function getDiplomas() {
  return module.map(({ name, id }) => ({ name, id }));
}
