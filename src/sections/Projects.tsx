import msluxury from "@/assets/images/msluxury-car-rental.png";
import ohghad from "@/assets/images/ohghad-foundation.png";
import designjoy from "@/assets/images/designjoy.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpright from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "MS Luxury Motors",
    year: "2023",
    title: "Luxury Car Rental",
    results: [
      { title: "Developed site from scratch with custom design" },
      { title: "Optimized performance for faster loading" },
      { title: "Responsive design for seamless mobile experience" },
    ],
    link: "https://modernstandards.ae/",
    image: msluxury,
  },
  {
    company: "OHGHAD",
    year: "2024",
    title: "OHGHAD Foundation Website",
    results: [
      { title: "Built a fully custom website" },
      { title: "Tailored design to expand audience reach" },
      { title: "Integrated brand elements for stronger awareness" },
    ],
    link: "https://ohghad.org/",
    image: ohghad,
  },
  {
    company: "Design Joy",
    year: "2024",
    title: "Design Agency Landing Page",
    results: [
      { title: "Created a unique landing page from scratch" },
      { title: "Focused on site speed and performance" },
      { title: "Mobile-first design for improved traffic" },
    ],
    link: "https://www.designjoy.co/",
    image: designjoy,
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24  px-6 lg:px-16">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."/>
        
      </div>
      <div className="flex flex-col mt-10 gap-20 md:mt-22">
        {portfolioProjects.map((project,projectIndex) => (
          <Card
            key={project.title}
            className=" px-8 pb-0 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
              top : `calc(64px + ${projectIndex * 40 }px)`
            }}
          >
        
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-300 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent">
              <span>{project.company}</span>
              <span>&bull;</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result, index) => (
                <li key={index} className="flex gap-2 text-sm text-white/50 md:text-base">
                  <CheckCircleIcon className="size-5  md:size-6" />
                  {result.title}
                </li>
              ))}
            </ul>
            <a href={project.link} target="_blank">
              <button className="bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                <span>Visit Live Site</span>
                <ArrowUpright className="w-4 h-4" />
              </button>
            </a>
            </div>
            <div className="relative">
            <Image
              src={project.image}
              alt={project.title}
              
              className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
            />
            </div>
            </div>
          </Card>
          
        ))}
      </div>
    </section>
  );
};
