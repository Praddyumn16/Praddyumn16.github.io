import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    threejs,
    bootstrap,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    python,
    wordpress,
    canva,
    postman,
    samsung,
    cisco,
    gfg,
    juntrax,
    p2p,
    codesnippet,
    kaooa,
    magicnotes,
    seamcarving,
    fileexplorer
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Internships",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "feedback",
      title: "Testimonials",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: web,
    },
    {
      title: "WordPress  Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML/CSS/JS",
      icon: html,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "tailwind",
      icon: tailwind,
    },
    {
      name: "postman",
      icon: postman,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "canva",
      icon: canva,
    }
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Samsung",
      icon: samsung,
      iconBg: "white",
      date: "June 2023 - Present",
      points: [
        "Working with the Voice Intelligence Team at SRIB."
      ],
    },
    {
      title: "Consulting Engineer Intern",
      company_name: "Cisco",
      icon: cisco,
      iconBg: "black",
      date: "Jan 2022 - June 2022",
      points: [
        
        "Developed a Frontend login component with user authentication using ReactJS and Tailwind CSS.",
        "Developed and tested Backend API's for data fetching and display on UI.",
        "Got trained in the Customer Experience team on Devops, Automation and Network Infrastructure."]
    },
    {
      title: "Associate Mentor",
      company_name: "GeeksforGeeks",
      icon: gfg,
      iconBg: "black",
      date: "May 2021 - July 2021",
      points: [
        "Taught a complete subject of 'Automata Theory' on their Youtube channel via live sessions.",
        "Provided improvements on the content of their premium courses under GATE exam category.",
        "Framed and reviewed questions for their GATE 2022 test series."
      ],
    },
    {
      title: "Summer Intern",
      company_name: "Juntrax Solutions",
      icon: juntrax,
      iconBg: "white",
      date: "April 2020 - August 2020",
      points: [
        "Made UI changes on the main website and created the initial documentation of their development setup.",
        "Integrated a chatbot and redesigned their blog website in Wordpress using Elementor.",
        "Created their product's how-to videos and worked on SEO optimization.",
        "Generated B2B sales leads and handled the social media marketing campaigns.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Praddyumn is intelligent, conducts himself with utmost professionalism, has the enthusiasm to learn, contribute and moreover the eagerness to take any task assigned to him.",
      name: "Anjana Desai",
      designation: "CEO",
      company: "Juntrax Solutions",
      image: "https://media.licdn.com/dms/image/C4D03AQGXHehmYG4qUA/profile-displayphoto-shrink_100_100/0/1653776074297?e=1692230400&v=beta&t=MgSEMbHmPohXUh_GYKF3A5TA6OlIg1f4XUjGoc1oECY",
    },
    {
      testimonial:
        "I was impressed by Praddyumn's ability to handle even the toughest clients—effortlessly. That skill often takes years to develop among professionals, but it seemed to come naturally to him.",
      name: "Sumanth Kanakamedala",
      designation: "Lead Developer",
      company: "Antar IOT",
      image: "https://media.licdn.com/dms/image/D5603AQGyCaADWWLSEg/profile-displayphoto-shrink_100_100/0/1684716977129?e=1692230400&v=beta&t=uYLn17nSuNkwVzvG_3dkNTdmjttLqQTeucAmoTA49AY",
    },
    {
      testimonial:
        "His enthusiasm and people-skills helped him effectively network to give us leads. He freely asks questions and is always eager to learn more.",
      name: "Sonal Shenoy",
      designation: "Marketing Consultant",
      company: "StartEarly",
      image: "https://media.licdn.com/dms/image/C5603AQGxgQuS7NZCZg/profile-displayphoto-shrink_100_100/0/1621870029185?e=1692230400&v=beta&t=mN90PAJocjhjr-KxQd_6eGrMUmqij1DIAGRDanmjXmo",
    },
  ];
  
  const projects = [
    {
      name: "Mini Bit Torrent",
      description:
        "A peer-to-peer file sharing system where users can share, upload and download files from the group they belong to. Download happens parallely with multiple pieces from multiple peers.",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "socketprogramming",
          color: "green-text-gradient",
        },
        {
          name: "multithreading",
          color: "pink-text-gradient",
        },
      ],
      image: p2p,
      source_code_link: "https://github.com/Praddyumn16/Mini-BitTorrent/",
      live_code_link: ""
    },
    {
      name: "Kaooa Game",
      description:
        "This is a 3-D visualization of a game called Kaooa which involves 7 crows and 1 vulture each playing turn by turn. Crows win if they manage to cover vulture from every side. Whereas the Vulture can kill crows and wins if there are 3 of them left.",
      tags: [
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "aframe.js",
          color: "blue-text-gradient",
        },
      ],
      image: kaooa,
      source_code_link: "https://github.com/Praddyumn16/kaooa_game",
      live_code_link: "https://praddyumn16.github.io/kaooa_game/",
    },
    {
      name: "Code Snippet Recommender",
      description:
        "A portal to search and upload code snippets based on tags. Searching can be done anonymously without login and Upload of a code snippet needs user authentication.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: codesnippet,
      source_code_link: "https://github.com/Praddyumn16/code-snippet-recommender",
      live_code_link: "https://github.com/Praddyumn16/File-Explorer#working-demo"
    },
    {
      name: "Seam Carving",
      description:
        "This project is an implementation of a very famous image extraction algorithm called seam carving which uses dynamic programming to perform resizing of images without losing meaningful content because of cropping or scaling.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "cpp",
          color: "green-text-gradient",
        },
      ],
      image: seamcarving,
      source_code_link: "https://github.com/Praddyumn16/seam_carving/",
      live_code_link: ""
    },
    {
      name: "Magic Notes",
      description:
        "A small note taking application which utilises the local storage of the browser to have a simple interface for adding, deleting and searching for notes.",
      tags: [
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "vanillajs",
          color: "blue-text-gradient",
        },
      ],
      image: magicnotes,
      source_code_link: "https://github.com/Praddyumn16/MagicNotes/",
      live_code_link: "https://praddyumn16.github.io/MagicNotes/"
    },
    {
      name: "File Explorer",
      description:
        "A terminal based File Explorer application that runs on Linux machines in two modes: Default - Normal mode(navigate by arrow/backspace/enter keys) and Command Mode(perform operations via entering shell commands)",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "systemcalls",
          color: "green-text-gradient",
        },
        {
          name: "linux",
          color: "pink-text-gradient",
        },
      ],
      image: fileexplorer,
      source_code_link: "https://github.com/Praddyumn16/fileexplorer/",
      live_code_link: "https://github.com/Praddyumn16/File-Explorer#working-demo"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };