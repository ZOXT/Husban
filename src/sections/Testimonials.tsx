import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from '@/assets/images/grain.jpg'
import { Card } from "@/components/Card";
import Image from "next/image";
import { Fragment } from "react";
const testimonials = [
  {
    name: "Alex Turner",
    position: "Design Head @ Native",
    text: "Husban was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Tami Ross",
    position: "CEO/Founder @ OHGHAD",
    text: "This was a great experience working with true talent that can read between the lines and be creative as well as listen to incorporate required details.",
    avatar: memojiAvatar2,
  },
  {
    name: "Igal S",
    position: "HR Manager @ InnovateCo",
    text: "Husban completed the work within the agreed-upon timeline, showing professionalism and reliability in meeting deadlines. He was receptive to feedback and collaborated effectively to refine the designs according to my preferences. The quality of his designs produced by the Husban was outstanding. He showed attention to detail and a commitment to delivering high-quality results.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Husban is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Husban's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
    <SectionHeader eyebrow="Happy Client" title="What Clients Say about Me" description="Don't just take my word for it. See what my clients have to say about my work."/>
    

    <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">

      <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
        {[...new Array(2)].fill(0).map((_,idx)=>(
           <Fragment key={idx}>

{testimonials.map((test)=>(

<Card key={test.name} className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300">
  <div className="flex gap-4 items-start">
    <div className="size-14 inline-flex bg-gray-700 rounded-full items-center justify-center flex-shrink-0">
  <Image src={test.avatar} alt={test.name} className="max-h-full" />
  </div>
  <div>
  <div className="font-semibold">{test.name}</div>
  <div className="text-sm text-white/50">{test.position}</div>
  </div>
  </div>
 
  <p className="mt-4 text-sm md:mt-6 md:text-base">{test.text}</p>

</Card>

))}


           </Fragment>
        ))}
      
      </div>
    </div>
    </div>
  </div>;
};
