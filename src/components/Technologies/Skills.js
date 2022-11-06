import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

export const Skills = [
  {
    slug: "Cloud",
    Component: DiAndroid,
    title: "Azure",
    Description: () => <>I work on Azure Cloud, Linux & Automation</>,
  },
  {
    slug: "nextjs",
    Component: RiFlutterFill,
    title: "NextJS",
    Description: () => (
      <>Currently learning NextJS & React for web development. </>
    ),
  },
  {
    slug: "vmware",
    Component: SiJava,
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
