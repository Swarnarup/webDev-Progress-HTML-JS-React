"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./Projecttag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DDos Attack Detection",
    description: "Understanding Pattern of DDoS attacks using Python Pandas ScikitLearn",
    image: "/images/projects/ddos.png",
    tag: ["All", "AI-ML"],
    gitUrl: "https://github.com/Swarnarup/DDos-Attack-detectioon-DSIII-project",
    previewUrl: "https://drive.google.com/file/d/1sNsNoA8zIRkad6tyLS3t4_Vdp3zU4h04/view?usp=sharing",
  },
  {
    id: 2,
    title: "Attendence System Using Face Recognition",
    description: "Understanding Pattern of DDoS attacks using Python Pandas ScikitLearn",
    image: "/images/projects/facerec.png",
    tag: ["All", "AI-ML", "Software"],
    gitUrl: "https://github.com/Swarnarup/Attendence_system-using-AI-ML",
    previewUrl: "https://github.com/Swarnarup/Attendence_system-using-AI-ML",
  },
  {
    id: 3,
    title: "Repercussion",
    description: "Made in Unity3D, Blender",
    image: "/images/projects/repercussion.jpeg",
    tag: ["All", "Gamedev"],
    gitUrl: "https://adityasahu.itch.io/repercussion",
    previewUrl: "https://adityasahu.itch.io/repercussion",
  },
  {
    id: 4,
    title: "Counceling Booking System",
    description: "Web based application. HTML-CSS Database in MongoDB",
    image: "/images/projects/adp_project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Swarnarup/Counselling_booking_session_ADP_project",
    previewUrl: "https://github.com/Swarnarup/Counselling_booking_session_ADP_project",
  },
  {
    id: 5,
    title: "Souls and Beyond",
    description: "Made in Unity, Blender",
    image: "/images/projects/sab.png",
    tag: ["All", "Gamedev"],
    gitUrl: "https://cg2d-iit-mandi.itch.io/souls-and-beyond",
    previewUrl: "https://cg2d-iit-mandi.itch.io/souls-and-beyond",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="Project_Section">
      <motion.div initial={{opacity:0, scale: 1.1}} animate={{opacity:1, scale: 1}}>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-col sm:flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="AI-ML"
            isSelected={tag === "AI-ML"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Software"
            isSelected={tag === "Software"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Gamedev"
            isSelected={tag === "Gamedev"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
           </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;