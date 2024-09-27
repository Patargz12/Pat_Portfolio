import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  rivan,
  ue,
  gdsc,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  laravel,
  nextjs,
  python,
  bootstrap,
  wordpress,
  rivan_web,
  pokemon,
  pulp,
  roadspeak,
  ixhibit,
  netflix,
  youtube,
  rob,
  froi,
  pat_cafe,
  patgpt,
  jquery,
  ionic,
  pulp_clinic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Back-End Developer",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "Ionic",
    icon: ionic,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "wordpress",
    icon: wordpress,
  },
];

const isMobile = window.innerWidth <= 768; // Check if the device width is less than or equal to 768px

const visibleTechnologies = isMobile ? technologies.slice(0, 5) : technologies;

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Rivan Cyber Training Institute",
    icon: rivan,
    iconBg: "#383E56",
    date: "Jan 2024 - April 2024",
    points: [
      "Created a full-stack Laravel crash course.",
      "Configured virtual machines and Cisco devices",
      "Automated several commands for certain routing protocols using Python",
      "Handled domains, servers and websites.",
      "Configured Cisco Meraki and several topology diagrams",
      "Demonstrated the ability to hack/penetrate a wifi connection using Red Hat Linux.",
      "Got exposed in technologies around cybersecurity using Kali Linux",
      "Created websites using WordPress Colibri and Elementor.",
      "Exposure to several tools for DevOps like Wireshark, Docker and Kubernetes.",
      "Provided my assistance to IT professionals and Rivan students in CCNA and CCNP classes.",
      "Performed advance cabling of console and Fiber-optic cables.",
    ],
  },
  {
    title: "Mobile Development Lead",
    company_name: "Google Developer Student Club",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "June 2023 - June 2024",
    points: [
      "Established an IT event about Angular with a software engineer based in Canada.",
      "Developed a mobile application using Flutter and Firebase",
      "Created a small application using NoSQL database which is MongoDB.",
      "Exposure on technologies around JWT (JSON Web Token) and Vercel.",
      "Self-studied React Native and Typescript to prepare for my capstone requirements.",
      "Created several programs using MVC architecture and Single-page applications.",
      "Got a solid foundation on github and git technologies.",
      "Exposure in SDLC, Agile and Waterfall Methodology.",
      "Worked with CMS platforms.",
    ],
  },
  {
    title: "Robotics Instructor",
    company_name: "University of the East",
    icon: ue,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Configured a robotic device to maneuver, rotate and accelerate",
      "I instructed the grade 11 students about the properties and programs for the device",
      "Enhances my communication skill for both professionals and students.",
      "Performed basic IT troubleshooting.",
      "Mild exposure to Arduino.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Engr. Robert Ivan Victor",
    designation: "CEO",
    company: "CEO of Rivan Cyber Institute",
    image: rob,
    contact: "09778464888",
    email: "rivancorp@outlook.com",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Dr. Froilan De Guzman",
    designation: "COO",
    company: "Professor at UE Caloocan",
    image: froi,
    contact: "09176800131",
    email: "Froilan.deguzman@ue.edu.ph",
  },
];

const projects = [
  {
    name: "Rivan Talent",
    description:
      "A headhunting website I created using Wordpress Colibri for my internship at Rivan Cyber Institute, which also contains SMTP features.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "Colibri",
        color: "pink-text-gradient",
      },
    ],
    image: rivan_web,
    source_code_link: "https://rivanhrsource.com/",
  },
  {
    name: "Pokemon Game",
    description:
      "A basic game in which the user must guess which Pokemon is on their screen. It is also my first NextJs project. I put the answers on the console.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://pokemon-deploy-dnvh4u6rc-patargz12.vercel.app/",
  },
  {
    name: "Pulp Dental Clinic",
    description:
      "I developed a landing page for a dental clinic using ReactJS, utilizing five front-end libraries to enhance animations, components, and overall functionality. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: pulp_clinic,
    source_code_link: "https://pulp-clinic.vercel.app/",
  },
  {
    name: "RoadSpeak",
    description:
      "My capstone, which has an object detection feature, it introduces me to mobile development and text-to-speech technology. ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Yolov8",
        color: "pink-text-gradient",
      },
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
    ],
    image: roadspeak,
    source_code_link: "https://roadspeak.vercel.app/",
  },
  {
    name: "iXhibit",
    description:
      "A small social media platform for artist which has messaging features and advance SCRUD operations which I created for a school activity.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: ixhibit,
    source_code_link: "https://github.com/Patargz12/iXhibit",
  },
  {
    name: "Mini Netflix",
    description:
      "A movie web application that I created to practice API integration and Javascript. It is a mini Netflix website which contains data of several movies.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link:
      "https://mininetflix-pfx1yzkaa-patargz12s-projects.vercel.app/",
  },
  {
    name: "Youtube Clone",
    description:
      "A mobile application I created to practice using React Native and prepare for my capstone project.",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Patargz12/youtube-clone",
  },
  {
    name: "PatGPT",
    description:
      "A personal project of mine which is a chatgpt clone using text-davinci-003 ChatGPT API and ReactJS.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
    ],
    image: patgpt,
    source_code_link: "https://github.com/Patargz12/PatGPT",
  },
  {
    name: "PatCafe",
    description:
      "My personal project using Laravel Jetstream. I used this project for my Laravel masterclass, which is presented in my internship.",
    tags: [
      {
        name: "LaravelJetStream",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: pat_cafe,
    source_code_link: "https://github.com/Patargz12/PatCafe",
  },
];

export { services, visibleTechnologies, experiences, testimonials, projects };
