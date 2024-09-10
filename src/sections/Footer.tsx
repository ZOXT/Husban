import { title } from "process";
import ArrowUprightIcon from '@/assets/icons/arrow-up-right.svg'

const FooterLinks = [
  {
    title: 'LinkedIn',
    href:'https://pk.linkedin.com/in/husban-baig-878354280',
  },
  {
    title: 'Mail',
    href:'https://mail.google.com/mail/?view=cm&fs=1&to=baighusban2@gmail.com',
  },
  {
    title: 'Instagram',
    href:'https://www.instagram.com/husbaan_webdesign/',
  },
  {
    title: 'Github',
    href:'https://github.com/ZOXT',
  }
]

export const Footer = () => {
  return <footer className="relative  overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] left-1/2 right-1/2 bottom-0 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" ></div>
    <div className="container">
    <div className=" border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
      <div className="text-white/40">&copy; 2024, All rights reserved.</div>
      <nav className="flex flex-col md:flex-row items-center gap-8 ">
        {FooterLinks.map((link)=>(
          <a href={link.href} target="_blank" key={link.title} className="inline-flex items-center gap-1.5 cursor-pointer">
          <span  className="font-semibold" >{link.title}</span>
          <ArrowUprightIcon className="size-4"/>
          </a>
        ))}

      </nav>
    </div>
    </div>
  </footer>;
};
