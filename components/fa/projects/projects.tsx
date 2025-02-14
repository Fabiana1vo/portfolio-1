import React from "react";

import ProjectPreview from "../../projects/projectPreview";

import { projects } from "@/data/projects";

import { project } from "@/types/project";

import { styles } from "@/styles";

function Projects() {
  return (
    <>
      <section className="md:px-2">
        <div className="md:ml-3 mt-5 flex flex-wrap flex-col lg:flex-row justify-center items-center gap-4 ltr">
          {projects.map((item: project, index: number) => (
            <ProjectPreview {...item} key={index} />
          ))}
        </div>
      </section>

      <div className={styles.divider} />
    </>
  );
}

export default Projects;
