
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification" | "certificate";
  year: string;
  description: string;
  certificateLink: string,
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  // {
  //   id: 1,
  //   title: "2nd Place - Algothon Codefest",
  //   type: "competition",
  //   year: "2024",
  //   description: "Secured second place in the competitive programming event.",
  //   icon: Trophy,
  // },
  // {
  //   id: 2,
  //   title: "3rd Place - INTELLECT 1.0 Hackathon",
  //   type: "competition", 
  //   year: "2024",
  //   description: "Won third place for developing an innovative solution during the 24-hour hackathon.",
  //   icon: Trophy,
  // },
  // {
  //   id: 3,
  //   title: "Dean's List",
  //   type: "academic",
  //   year: "2023",
  //   description: "Recognized for academic excellence with placement on the Dean's List.",
  //   icon: Star,
  // },
  {
    id: 1,
    title: "HTML, CSS, and Javascript for Web Developers",
    type: "certificate",
    year: "2024",
    description: "Learn to build responsive and interactive websites using HTML, CSS, and JavaScript, with real-world web development skills.",
    certificateLink: "https://coursera.org/share/4d7173540f4b43a443de48aa79bccefe",
    icon: Award,
  },
  {
    id: 2,
    title: "SQL Certificate from HackerRank",
    type: "certificate",
    year: "2024",
    description: "This certification tests your ability to query, join, and manipulate data in SQL, demonstrating your skills in real-world database management and analysis.",
    certificateLink: "https://www.hackerrank.com/certificates/4062ca893ad7",
    icon: Award,
  },
  {
    id: 3,
    title: "Dynamic Programming, Greedy Algorithms",
    type: "certificate",
    year: "2024",
    description: "A method for solving complex problems by breaking them down into simpler subproblems, storing their results to avoid redundant work and optimize performance.",
    certificateLink: "https://coursera.org/share/2196a50890e01f92d4f0215812abd28e",
    icon: Award,
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    type: "certificate",
    year: "2024",
    description: "Learn the basics of Generative AI, its applications, and key models in under an hour, with practical tools from Google.",
    certificateLink: "https://coursera.org/share/97bf74ae0f146245c701fb7c2383d785",
    icon: Award,
  },
  {
    id: 5,
    title: "Prompt Engineering for ChatGPT",
    type: "certificate",
    year: "2024",
    description: "Learn how to design effective prompts to get better results from ChatGPT, with practical techniques and real-world examples.",
    certificateLink: "https://coursera.org/share/8b763d2974cd804af057e1550ee2b855",
    icon: Award,
  },
];
