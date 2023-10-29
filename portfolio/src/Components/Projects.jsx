import React from 'react';
import dealDiveImg from '../assets/dealDive.png';
import filmSearchImg from '../assets/film-search.png';
import ProjectItem from './ProjectItem';

function Projects() {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'></p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={dealDiveImg} title="Deal Dive" />
                <ProjectItem img={filmSearchImg} title="Film Search" />
             
            </div>
        </div>
    );
}

export default Projects;
