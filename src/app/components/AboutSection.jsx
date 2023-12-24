"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next JS</li>
        <li>React JS</li>
        <li>Javascript</li>
        <li>Tailwind Css</li>
        <li>Css</li>
        <li>Html</li>
        <li>UI with Figma</li>
        <li>UX</li>
        <li>Git and GitHub</li>
        <li>English, Spanish, Portuguese</li>
        <li>and much more...</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>3+ years at National University Of Quilmes</li>
        <li>Online Tutorials and self learning</li>
        <li>100's of hours of learning</li>
        <li>YouTube tutorials</li>
        <li>W3 Schools</li>
        <li>FreeCodeCamp.org</li>
        <li>Harward Programming Course</li>
        <li>chatGPT for learning</li>
        <li>UI/UX instagram accounts</li>
        <li>Javascript instagram accounts</li>
        <li>and much more...</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Self Learner</li>
        <li>I learn very quick</li>
        <li>Very strong communication skills</li>
        <li>Native on Spanish and Fluent on English</li>
        <li>I like to keep myself updated</li>
        <li>Good at working remotely</li>
        <li>Open to relocate if needed</li>
        <li>I have european citizenship and passport</li>
        <li>Teamwork is not a problem for me</li>
        <li>Good at taking the lead and learning from others</li>
        <li>and much more...</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/webdev.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Frontend Next JS Developer. I am sure I can offer your business a lot of value. I have 3+ years of experince in web development and I am on continous learning. From HTML to NEXT JS my goal is to provide you as much value as I can and more!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("soft-skills")}
              active={tab === "soft-skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
