import Image from "next/image";
function About() {
  return (
    <div className="my-16 mx-4 md:mx-12 lg:mx-32">
      {/* header */}
      <h1 className="text-blue-500 text-4xl text-center mb-12">About Us</h1>
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
          <h1 className="text-xl font-semibold mb-2">About Us</h1>
          <p className="text-lg mb-2">
            If you really really want to read it, Here it is then :)
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quaerat corporis aut ullam maxime, cumque temporibus sequi nihil
            dolorum voluptas dolores voluptate aliquid, incidunt nostrum libero!
            Dolores atque ab quo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit quaerat corporis aut ullam maxime, cumque
            temporibus sequi nihil dolorum voluptas dolores voluptate aliquid,
            incidunt nostrum libero! Dolores atque ab quo!
          </p>
        </div>
      </div>

      {/* why us section */}
      <div id="WhyUs-section" className="flex flex-col md:flex-row gap-8 mt-24">
        <div className="md:w-1/2">
          <h1 className="text-blue-500 text-xl mb-2">Why Choose us?</h1>
          <p className="text-lg mb-2 tracking-wide">
            We have delivered IT projects of varying complexities for our very
            demanding and internet savvy clients.
          </p>
          <p className="tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quaerat corporis aut ullam maxime, cumque temporibus sequi nihil
            dolorum voluptas dolores voluptate aliquid, incidunt nostrum libero!
            Dolores atque ab quo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit quaerat corporis aut ullam maxime, cumque
            temporibus sequi nihil dolorum voluptas dolores voluptate aliquid,
            incidunt nostrum libero! Dolores atque ab quo!
          </p>
          <p className="tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quaerat corporis aut ullam maxime, cumque temporibus sequi nihil
            dolorum voluptas dolores voluptate aliquid, incidunt nostrum libero!
            Dolores atque ab quo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit quaerat corporis aut ullam maxime, cumque
            temporibus sequi nihil dolorum voluptas dolores voluptate aliquid,
            incidunt nostrum libero! Dolores atque ab quo!
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/choose-us.jpg"
            alt="Hero image"
            height={654}
            width={550}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
