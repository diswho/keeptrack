import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}
function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
    // console.log(project);
  };

  const cancelEdit = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div className="cols-sm" key={project.id}>
          {project === projectBeingEdited ? (
            <ProjectForm project={project} onCancel={cancelEdit} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
