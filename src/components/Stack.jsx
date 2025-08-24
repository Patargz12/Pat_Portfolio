"use client";

import {
  Code2,
  Briefcase,
  Layout,
  Database,
  PenToolIcon as Tools,
  Brain,
} from "lucide-react";

import { styles } from "../styles";

// Define the tech stack data with more professional categorization
const techStackData = {
  experience: {
    title: "Experience",
    items: [
      {
        role: "Mobile Development Lead",
        company: "Rivan Cyber Training Institute",
        period: "June 2023 - June 2024",
        achievements: [
          "Organized an Angular IT event with canadian software engineer",
          "Established study jams on topics about Git Technologies",
          "Performed freelancing on web development",
        ],
      },
      {
        role: "Member",
        company: "Google Developer Student Club",
        period: "",
        achievements: [],
      },
    ],
  },
  skills: [
    {
      category: "Frontend Development",
      icon: <Layout className="h-5 w-5" />,
      description: "Building responsive and interactive user interfaces",
      items: [
        {
          name: "Core Technologies",
          skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
        },
        {
          name: "Frameworks & Libraries",
          skills: ["ReactJS", "NextJS", "NuxtJS", "TailwindCSS"],
        },
        {
          name: "Mobile & Cross-platform",
          skills: ["React Native", "Flutter", "Ionic"],
        },
      ],
    },
    {
      category: "Backend Development",
      icon: <Database className="h-5 w-5" />,
      description: "Server-side applications and API development",
      items: [
        {
          name: "Technologies",
          skills: ["PHP", "Python", "Node.js"],
        },
        {
          name: "Frameworks",
          skills: ["Laravel", "Express.js"],
        },
        {
          name: "Databases",
          skills: ["MySQL", "MongoDB", "NoSQL", "Supabase"],
        },
        {
          name: "API Development",
          skills: ["RESTful API", "GraphQL"],
        },
      ],
    },
    {
      category: "Developer Tools & DevOps",
      icon: <Tools className="h-5 w-5" />,
      description: "Tools and practices for efficient development workflow",
      items: [
        {
          name: "Version Control",
          skills: ["Git", "GitHub", "GitLab"],
        },
        {
          name: "Development Tools",
          skills: ["VS Code", "Postman", "Figma"],
        },
        {
          name: "Build Tools",
          skills: ["Vite", "Webpack"],
        },
        {
          name: "Deployment",
          skills: ["Vercel", "CI/CD Pipelines"],
        },
      ],
    },
    {
      category: "Core Computer Science",
      icon: <Brain className="h-5 w-5" />,
      description: "Fundamental concepts and principles",
      items: [
        {
          name: "Programming Concepts",
          skills: ["OOP", "MVC", "Data Structures", "Algorithms"],
        },
        {
          name: "Operating Systems",
          skills: ["Linux", "Ubuntu", "Windows", "Red Hat Linux", "Mac"],
        },
        {
          name: "Development Methodologies",
          skills: ["Agile", "Scrum"],
        },
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      description: "Artificial Intelligence and Machine Learning Development",
      items: [
        {
          name: "Frameworks & Libraries",
          skills: ["TensorFlow", "OpenCV"],
        },
        {
          name: "Algorithms & Models",
          skills: ["CNN Algorithm", "Neural Networks", "Computer Vision"],
        },
      ],
    },
    {
      category: "No-Code & Visual Development",
      icon: <Layout className="h-5 w-5" />,
      description: "Visual development and content management platforms",
      items: [
        {
          name: "Content Management Systems",
          skills: ["WordPress", "WebFlow"],
        },
        {
          name: "Page Builders",
          skills: ["Elementor", "Beaver Builder", "Colibri"],
        },
        {
          name: "Website Builders",
          skills: ["Wix", "Webflow"],
        },
      ],
    },
  ],
};

export default function TechStack() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Experience Section */}

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <h2 className={styles.sectionHeadText}>Technical Expertise.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {techStackData.skills.map((category, index) => (
              <div
                key={index}
                className="bg-[#1d1836] backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i}>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        {item.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-gray-800/20 border border-gray-700 rounded-full text-sm text-gray-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
