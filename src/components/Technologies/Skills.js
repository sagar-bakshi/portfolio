import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiNextDotJs, SiVmware } from "react-icons/si";
import { AiFillCloud } from "react-icons/Ai";

export const Skills = [
  {
    slug: "Cloud",
    Component: AiFillCloud,
    title: "Azure",
    Description: () => <>I work with multiple Cloud which includes Azure/AWS/Digital Ocean, Linux & Automation</>,
  },
  {
    slug: "nextjs",
    Component: SiNextDotJs,
    title: "NextJS",
    Description: () => (
      <>Currently learning NextJS & React for web development. </>
    ),
  },
  {
    slug: "vmware",
    Component: SiVmware,
    title: "Vmware",
    Description: () => (
      <>
        I can manage thousands of virtual Machines using Vmware and vSphere.
        Currently Working as Cloud Migration Engineer.
      </>
    ),
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => (
      <>I have written dozens of Shell scripts for various purposes.</>
    ),
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>I have used Firebase for auth, database & analytics in my apps.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
