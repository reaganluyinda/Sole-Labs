import Image from "next/image";
function About() {
  return (
    <div className="my-16 mx-4 md:mx-12 lg:mx-32">
      {/* header */}
      <h1 className=" text-[#01796f] text-4xl text-center mb-12">About Us</h1>
      {/* end of Header */}

      {/* About section */}
      <div id="About-section" className="flex flex-col md:flex-row gap-8 ">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/co-working.jpg"
            alt="Hero image"
            height={800}
            width={700}
            className="rounded-md"
          />
        </div>
        <div className="md:w-1/2 tracking-wide">
          <h1 className="text-xl font-semibold mb-2 text-[#33B3A9]">
            Who We Are
          </h1>
          <p className="text-lg mb-2">
            We&apos;re a passionate digital agency driven by creativity,
            technology, and a commitment to excellence.
          </p>
          <p>
            At Sole Labs, we help businesses and individuals bring their ideas
            to life through elegant web design, cutting-edge mobile apps,
            branding, and smart digital strategy. Our multidisciplinary team
            works closely with clients to craft custom solutions that engage
            users and deliver measurable results.
          </p>
        </div>
      </div>

      {/* why us section */}
      <div id="WhyUs-section" className="flex flex-col md:flex-row gap-8 mt-24">
        <div className="md:w-1/2">
          <h1 className="text-[#33B3A9] text-xl mb-2">Why Choose us?</h1>
          <p className="text-lg mb-2 tracking-wide">
            We have delivered IT projects of varying complexities for our very
            demanding and internet savvy clients.
          </p>
          <p className="tracking-wide">
            From startups to established enterprises, we've helped businesses of
            all sizes navigate the digital landscape. What sets us apart is our
            attention to detail, our personalized approach, and our relentless
            focus on delivering value.
          </p>
          <p className="tracking-wide">
            We blend creativity with technical expertise to build digital
            products that are visually stunning, functionally reliable, and
            strategically aligned with your goals. When you work with us, you
            get more than just a service provider — you get a team that cares.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/choose-us.jpg"
            alt="Hero image"
            height={654}
            width={500}
            className="rounded-md h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
