import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Text from './Text';
import Section from './Section';
import Link from './Link';
import Project from './portfolio/Project';
import ProjectText from './portfolio/ProjectText';
import ProjectPreview from './portfolio/ProjectPreview';
import techozon from '../assets/images/portfolio/techozon.JPG';
import toddlersLearning from '../assets/images/portfolio/toddlersLearning.JPG';
import yoom from '../assets/images/portfolio/yoom.JPG';
import cryptoverse from '../assets/images/portfolio/cryptoverse.JPG';
import youtube from '../assets/images/portfolio/youtube.JPG';
import editor from '../assets/images/portfolio/editor.JPG';
import brainwave from '../assets/images/portfolio/brainwave.JPG';

const projects = [
  {
    title: "Techozon",
    technologies: "HTML, Bootstrap, JavaScript",
    description: "A software company's website having their portfolio with beautiful and modern UI and contact, blogs, Job Post features.",
    liveLink: "https://techozon.com",
    imageSrc: techozon,
    altText: "screenshot of Techozon homepage",
  },
  {
    title: "Toddler's Learning",
    technologies: "React, JavaScript, Firebase, FireStore",
    description: "An ultimate for early age learners having course modules where students can learn and enhance their learning journey.",
    githubLink: "https://github.com/musa-sohail/Toddler-Learning",
    imageSrc: toddlersLearning,
    altText: "screenshot of Toddler Learnng homepage",
  },
  {
    title: "Brainwave",
    technologies: "React, Tailwind, JavaScript",
    description: "A sweet, modern looking AI landing page which showcases the future of web development.",
    liveLink: "https://brainwave-ux.netlify.app",
    imageSrc: brainwave,
    githubLink: "https://github.com/musa-sohail/brainwave",
    altText: "screenshot of Techozon homepage",
  },
  {
    title: "Yoom - A zoom Clone",
    technologies: "Next, JavaScript, Web RTC",
    description: "Zoom Clone wit clerk authentication system, redesigned UI and all functionalities of zoom itself.",
    // liveLink: "https://techozon.com",
    imageSrc: yoom,
    githubLink: "https://github.com/musa-sohail/zoom",
    altText: "screenshot of yoom homepage",
  },
  {
    title: "Youtube 2.0",
    technologies: "React, JavaScript, Material UI, RapidAPI",
    description: "Youtbe Clone with new and fresh design without compromising any functionality and have in built video player",
    githubLink: "https://github.com/musa-sohail/youtube-redesigned",
    imageSrc: youtube,
    altText: "screenshot of Youtube homepage",
  },
  {
    title: "Crypto Verse",
    technologies: "React, JavaScript, RapidAPI",
    description: "A user friendly crypto platform having all exchanges, news and charts displaying all information about the specific currency.",
    githubLink: "https://github.com/musa-sohail/crypto-verse",
    imageSrc: cryptoverse,
    altText: "screenshot of cryptoverse homepage",
  },
  {
    title: "AI SAAS Photo and Video Editor",
    technologies: "Next, Cloudinary.ai,",
    description: "A simple ai photo and video editor using cloudinary ai with alot of editing features and simple yet professional looking UI",
    githubLink: "https://github.com/musa-sohail/cloudinary-ai-editor",
    imageSrc: editor,
    altText: "screenshot of editor homepage",
  },
 
  // Add more projects here
];

function Portfolio() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Personal Projects" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          Below is a selection of some recent and larger projects that I have worked on. For more detail on everything that I have done, as well as what I am currently working on, check out my GitHub at <Link targetBlank href="https://github.com/musa-sohail">https://github.com/musa-sohail</Link>
        </Text>
      </Section>

      {projects.map((project, index) => (
        <Section key={index}>
          <Project>
            <ProjectText
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
            <ProjectPreview src={project.imageSrc} alt={project.altText} />
          </Project>
        </Section>
      ))}
    </div>
  );
}

export default Portfolio;
