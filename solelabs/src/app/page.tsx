import Image from "next/image";
function Home() {
  return (
    <div className="my-28">
      {/* Hero Section */}
      <div id="Hero-section" className="flex space-x-12">
        <div className="md: w-1/2">
          <h1 className="text-amber-400 text-2xl ">
            Digital Agency with Excellence Service
          </h1>
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
        <div className="md: w-1/2flex justify-center">
          <Image
            src="/Hero.jpg"
            alt="Hero image"
            height={800}
            width={700}
            className="rounded-md"
          />
        </div>
      </div>

      {/* About Us Section */}

      <div id="About Section" className="mt-32">
        <h1 className="text-4xl text-center">About Us</h1>
        <div className="flex mt-12">
          <div className="md: w-1/2">
            <Image
              src="/About.jpg"
              alt="About us image"
              height={754}
              width={573}
              className="rounded-md"
            />
          </div>
          <div className="space-y-4 md: w-1/2">
            <h1 className="text-2xl">
              We live and Breathe Digital. The Internet is Our Home
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              voluptate culpa magni quo quod dolorum minus iste a, eligendi
              praesentium, velit atque omnis sit aliquam unde iure. Quo, amet
              perferendis! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sunt voluptate culpa magni quo quod dolorum minus iste a,
              eligendi praesentium, velit atque omnis sit aliquam unde iure.
              Quo, amet perferendis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              voluptate culpa magni quo quod dolorum minus iste a, eligendi
              praesentium, velit atque omnis sit aliquam unde iure. Quo, amet
              perferendis! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sunt voluptate culpa magni quo quod dolorum minus iste a,
              eligendi praesentium, velit atque omnis sit aliquam unde iure.
              Quo, amet perferendis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
