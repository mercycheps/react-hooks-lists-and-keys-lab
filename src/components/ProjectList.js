import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      {projects.map(p => {
        return <ProjectItem
          key={p.id} 
          name={p.name}
          technologies={p.technologies}
          about={p.about}
        />
      })}
    </div>
  );
}

export default ProjectList;
