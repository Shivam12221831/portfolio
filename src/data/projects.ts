
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "UrbanNom- Property Rental Site",
    description: "UrbanNom is a Node.js-based travel platform for booking hostels, apartments, and dorms across India. It features dynamic listings, user authentication, Cloudinary for image uploads, and Mapbox for location mapping, with a mobile-friendly, intuitive UI.",
    image: "/imgs/urbannom.jpg",
    tags: ["Node.js", "Express", "MongoDB", "RestAPIs"],
    links: {
      github: "https://github.com/Shivam12221831/UrbanNom",
      live: "",
    },
  },
  {
    id: 2,
    title: "Blogsphere- Blogging Platform",
    description: "A full-stack, dynamic blogging platform built with React, Node.js, and MongoDB, featuring secure user authentication, seamless CRUD operations, rich text editing, optimized performance, and a fully responsive, modern UI design.",
    image: "/imgs/blogsphere.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://github.com/Shivam12221831/React-Blogsphere",
      live: "",
    },
  },
  {
    id: 3,
    title: "Online Library Management",
    description: "A web-based system built with PHP, MySQL, HTML, CSS, and JavaScript, featuring admin and student roles for managing resources, tracking borrow/return activities, handling book requests, and offering a clean, responsive UI.",
    image: "/imgs/library.jpeg",
    tags: ["HTML/CSS","JavaScript", "PHP", "MySQL"],
    links: {
      github: "https://github.com/Shivam12221831/webdev_projects",
      live: ""
    },
  }
  // {
  //   id: 4,
  //   title: "Minders",
  //   description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
  //   image: "/imgs/p3.png",
  //   tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
  //   links: {
  //     github: "https://github.com/AathifZahir/Minders",
  //     live: "https://minders-sigma.vercel.app/",
  //   },
  // },
];
