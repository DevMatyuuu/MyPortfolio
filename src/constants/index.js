import reactIcon from '../assets/react-icon.png'
import cssIcon from '../assets/css-icon.png'
import htmlIcon from '../assets/html-icon.png'
import jsIcon from '../assets/js-icon.png'
import tailwindIcon from '../assets/tailwind-icon.png'
import phpIcon from '../assets/php-icon.png'
import viteIcon from '../assets/vite-icon.png'
import tsIcon from '../assets/ts-icon.png'
import nextIcon from '../assets/next-icon.png'
import viteIcon2 from '../assets/vite-icon2.png'
import nextIcon2 from '../assets/next-icon2.png'
import htmlIcon2 from '../assets/html-icon2.png'
import cssIcon2 from '../assets/css-icon2.png'
import jsIcon2 from '../assets/js-icon2.png'
import reactIcon2 from '../assets/react-icon2.png'
import tsIcon2 from '../assets/ts-icon2.png'
import tailwindIcon2 from '../assets/tailwind-icon2.png'
import phpIcon2 from '../assets/php-icon2.png'
import asta1 from '../assets/projectsImg/asta1.jpg'
import asta2 from '../assets/projectsImg/asta2.jpg'
import asta3 from '../assets/projectsImg/asta3.jpg'
import asta4 from '../assets/projectsImg/asta4.jpg'
import cc1 from '../assets/projectsImg/cloud-chase1.jpg'
import cc2 from '../assets/projectsImg/cloud-chase2.jpg'
import cc3 from '../assets/projectsImg/cloud-chase3.jpg'
import cc4 from '../assets/projectsImg/cloud-chase4.jpg'



export const tech = [
    {
      id: 1,
      image:[htmlIcon],
      image2:[htmlIcon2],
      title:"HTML",
    },
    {
      id: 2,
      image:[cssIcon],
      image2:[cssIcon2],
      title:"CSS",
    },
    {
      id: 3,
      image:[jsIcon],
      image2:[jsIcon2],
      title:"JavaScript",
    },
    {
      id: 4,
      image:[reactIcon],
      image2:[reactIcon2],
      title:"React",
    },
    {
      id: 5,
      image:[phpIcon],
      image2:[phpIcon2],
      title:"PHP",
      
    },
    {
      id: 6,
      image:[tailwindIcon],
      image2:[tailwindIcon2],
      title:"Tailwind",
      
    },
    {
      id: 7,
      image:[viteIcon],
      image2:[viteIcon2],
      title:"Vite",
      TitleStyle:"mt-2"
    },
    {
      id: 8,
      image:[tsIcon],
      title:"TypeScript",
      image2:[tsIcon2],
      TitleStyle:"mt-2"
    },
    {
      id: 9,
      image:[nextIcon],
      image2:[nextIcon2],
      title:"NextJS",
      TitleStyle:"mt-2"
    }
  ]

export const educ = [
    {
        id: 1,
        date: 'Jun 2017 - Mar 2019',
        place: 'Jose Rizal University'
    },
    {
        id: 2,
        date: 'Aug 2019 - Aug 2023',
        place: 'Rizal Technological University - Boni'
    },
    {
        id: 3,
        date: 'Sept 2022 - Oct 2022',
        place: 'Erovoutika Electronics Robotics Automation | OJT'
    },
  ]

export const proj = [
  {
    id: 1,
    title: 'ASTA (A Simple Task Assistant)',
    desc:'ASTA is a simple To-Do web app that provides modern functionality in a minimalist design. It has a Drag and Drop and Dark mode features that guarantees convenience for the user.',
    stack: ['React', 'Typescript', 'Tailwind', 'Zustand', 'Material-Tailwind'],
    images: [asta1, asta2, asta3, asta4]
  },
  {
    id: 2,
    title: 'Cloud Chase',
    desc: 'Cloud chase is an online vape shop that offers various brands and fulfill your vaping needs with just few clicks.',
    stack: ['React', 'Tailwind', 'ContextAPI', 'Strapi', 'Material-Tailwind'],
    images: [cc1, cc2, cc3, cc4]
  },
]

export const services = [
  {
      id:1,
      number: '01',
      title:"Responsive Design",
      description:"Build reponsive designs for Desktop, Laptop, Tablet and Mobile.",
      duration: 400
  },
  {
      id:2,
      number: '02',
      title:"Detailed",
      description:"Double Check every details to provide clean and quality design.",
      duration: 700
  },
  {
      id:3,
      number: '03',
      title:"Flexibility",
      description:"Can adapt to any type of design such as modern or Minimalist.",
      duration: 1000
  },
]

