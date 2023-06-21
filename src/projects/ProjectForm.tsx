import React from 'react';
import { Project } from './Project';

interface ProjectFormProps {
  project: Project;
  onCancel: () => void;
}

function ProjectForm({ project, onCancel }: ProjectFormProps) {
  return (
    <form className="input-group vertical">
      <label htmlFor="name">Project Name</label>
      <input type="text" name="name" placeholder="enter name" />

      <label htmlFor="description">Project Description</label>
      <input type="text" name="description" placeholder="enter Description" />

      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter Budget" />

      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />

      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
