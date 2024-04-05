"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
  }: ProjectProps) {
  return (
    <div  className="group mb-3 sm:mb-8 last:mb-0">
        <section className='bg-gray-100 max-w-[42] border border-black/5 rounded-lg overflow-hidden sm:h-[20rem] relative hover:bg-gray-200 transition '>
            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <Image src={imageUrl} alt={`${title}'s Image`} quality={95} className='absolute hidden sm:block top-8 -right-[100px] w-[28.25rem] rounded-t-lg shadow-2xl'/>
        </section>
    </div>
  )
}
