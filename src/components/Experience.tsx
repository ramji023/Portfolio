export default function Experience() {
  return (
    <>
      <section id="projects" className="px-4 md:px-15 py-0 md:py-10">
        <div className="flex items-center gap-2 py-5">
          <h2 className="text-lg md:text-3xl font-bold md:whitespace-nowrap">
            <span className="text-text-other/80">01.</span>Experience
          </h2>

          {/*straight line */}
          <div className=" h-px w-full bg-text-muted"></div>
        </div>

        <div className="mt-1 md:mt-6 flex flex-wrap gap-3">
          <ExperienceCard />
        </div>
      </section>
    </>
  );
}

function ExperienceCard() {
  return (
    <>
      <div className="mt-2 md:mt-5 flex flex-col gap-6">
        {/* Experience Card */}
        <div
          className="border border-border-other/40 rounded-lg p-6 
                  bg-black/40 backdrop-blur-sm 
                  hover:border-border-other transition duration-300"
        >
          {/* Job Title */}
          <h3 className="text-base md:text-xl font-semibold text-text-other">
            MERN Stack Developer
          </h3>

          {/* Company + Duration */}
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Technovartz Services •{" "}
            <span className="text-text-other">Sept 2025 – Nov 2025</span>
          </p>

          {/* Description */}
          <ul className="mt-4 text-sm md:text-base space-y-2 text-gray-300 list-disc list-inside">
            <li>
              Contributed to the development of a WhatsApp marketing platform
              using the MERN stack to manage bulk messaging campaigns.
            </li>
            <li>
              Integrated WhatsApp Business API to create reusable templates and
              automate personalized message delivery.
            </li>
            <li>
              Implemented contact segmentation, scheduling, and delivery
              tracking with optimized MongoDB queries.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
