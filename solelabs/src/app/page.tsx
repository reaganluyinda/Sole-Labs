"use client";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
function Home() {
  const [selectedService, setSelectedService] = useState();

  const services = [
    { id: 1, title: "Web-Designing" },
    { id: 2, title: "Graphic Design" },
    { id: 3, title: "Mobile Apps" },
    { id: 4, title: "E-Commerce" },
  ];
  return (
    <div className="my-28">
      {/* Hero Section */}
      <div id="Hero-section" className="flex space-x-12">
        <div className="md: w-1/2">
          <h1 className="text-amber-400 text-5xl ">
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
            <h1 className="text-5xl">
              We live and Breathe Digital.
              <br /> The Internet is Our Home!
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

      {/* Service section */}
      <div className="mt-32">
        <h1 className="text-center font-bold text-3xl">Services</h1>
        <h2 className="text-5xl text-center mt-4">
          Working to build the Online <br />
          Value
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          {services.map((Service, id) => (
            <div
              key={id}
              className=" px-12 py-16 rounded-md cursor-pointer shadow-md"
            >
              <h1>{Service.title}</h1>
            </div>
          ))}
        </div>
        <div className="border-2 rounded-md my-12 max-w-4xl mx-auto">
          <h1>What you click</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
