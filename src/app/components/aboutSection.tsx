import Divider from "./divider";
import { Heading, Body } from "./text";

const AboutSection = () => (
  <section className="mb-8">
    <div className="mb-4">
      <Heading bold>About Me</Heading>
      <Divider />
    </div>
    <Body size="large">
      A software developer with experience working in fast-paced startup
      environments. I build responsive React applications using Next.js,
      TypeScript, and Tailwind CSS, with a focus on reusable component libraries
      and clean user interfaces.
      <br />
      <br />
      My experience includes developing front-end components with Storybook,
      integrating REST APIs, and working with AWS services like Cognito and
      Lambda functions. I value clear communication and enjoy collaborating with
      teams to deliver quality solutions.
      <br />
      <br />
      Always eager to learn new technologies and take on challenging projects.
    </Body>
  </section>
);

export default AboutSection;
