import ArrowUpright from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div id="contact"
    >
      <div className="container py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
  Looking to kick off your next project? Shoot me an email at <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-transparent bg-clip-text">baighusban2@gmail.com</span>, and let's get started!
</p>

            </div>
            <div className="">
            <button  className="inline-flex text-white bg-gray-900 items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950">
              <span className="font-semibold"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=baighusban2@gmail.com">Contact Me</a></span>
              <ArrowUpright className="size-4" />
            </button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};
