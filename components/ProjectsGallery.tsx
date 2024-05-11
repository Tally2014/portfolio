import React from 'react'
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from 'next/image';

type Project = {
  image: StaticImageData;
  title: string;
  description: string;
};

type ProjectProps = 
  {
    title: "Broadcasting Graphics" | "Full-Stack Development";
    imageUrl: StaticImageData,
  }
;
export default function ProjectsGallery({
  title, imageUrl
}: ProjectProps) {
  return (
    <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg my-5">
                <Image
                      src={imageUrl}
                      alt={`${title}'s Image`}
                      quality={95}
                      className="h-auto w-full object-cover"
                    />

              <div className="bg-white p-4 sm:p-6">
                <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                  mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                  dignissimos. Molestias explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </React.Fragment>
        ))}
      </div>    
  );
}
