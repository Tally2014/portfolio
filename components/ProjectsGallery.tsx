import React from "react";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";

type ProjectType = {
  image: StaticImageData;
  title: string;
  description: string;
};

// Define the props for the ProjectsGallery component
type ProjectsGalleryProps = {
  projects: ProjectType[];
};

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg my-5">
            <Image
              src={project.image}
              alt={`${project.title}'s Image`}
              quality={95}
              className="h-auto w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">
                  {project.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {project.description}
              </p>
            </div>
          </article>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectsGallery;
