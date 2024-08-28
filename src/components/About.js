import React from "react";
import MarkdownHeader from "./MarkdownHeader";
import LineBreak from "./LineBreak";
import Section from "./Section";
import Text from "./Text";
import MarkdownButton from "./MarkdownButton";
import Comment from "./Comment";
import { portfolio, contact } from "../utils/directory";
import TabLink from "./TabLink";
import ResumePDF from "../assets/documents/UpdatedResume.pdf";

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader
          headingLevel="1"
          text="About"
          className="text-3xl md:text-5xl"
        />
        <LineBreak />
        <Text>
          Hi! My name is Muhammad Musa. I am a full stack software engineer,
          with a Bachelor of Science in Computer Science.
        </Text>
        <Text>
          I started coding professionally in 2020, and from that point on, I was
          hooked. Since then, I have been learning and building every
          opportunity I get. For some examples of recent work, see{" "}
          <TabLink className="font-bold text-yellow" tab={portfolio}>
            Portfolio.js
          </TabLink>
          .
        </Text>
        <Text>
          I am looking for positions as a backend or full stack software
          engineer. I am incredibly passionate about the work that I do and
          would love to chat about how I might be able to help the work that you
          do!
        </Text>

        <Text>
          For information on how to reach out, see{" "}
          <TabLink className="font-bold text-yellow" tab={contact}>
            Contact.md
          </TabLink>
          .
        </Text>
      </Section>

      <Section>
        <MarkdownButton
          as="a"
          href={ResumePDF}
          target="_blank"
          rel="noreferrer"
        >
          [Download Resume]
        </MarkdownButton>
      </Section>

      <Section>
        <MarkdownHeader
          headingLevel="2"
          text="Technologies"
          className="text-xl md:text-3xl"
        />
        <LineBreak />
        <Comment>
          While these are some of the languages I am the most comfortable with,
          I am constantly looking to expand my toolkit and am open to working
          with and learning new skills!
        </Comment>
        <Text>
          <span className="font-bold text-pink">Frontend Technologies:</span>{" "}
          HTML, CSS, JavaScript, Typescript, React.js, RTK, Next.js, Jquery,Bootstrap, Tailwind CSS, Shadcn UI, Daisy UI and Material UI.
        </Text>
        <Text>
          <span className="font-bold text-pink">Backend and Databases:</span>{" "}
          Node Js, Mongodb, Express Js, REST API, PostgreSql 
        </Text>
        <Text>
          <span className="font-bold text-pink">Additional:</span> Git, Github, Firebase, Firestore, Clerk, AI embeddings, Vector embeddings, Strapi CMS, PayloadCMS, Stripe payment integrations, Pinecone and langchain.
        </Text>
      </Section>
    </div>
  );
}

export default About;
