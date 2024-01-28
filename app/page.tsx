import Intro from "@/components/Intro";
import ProjectIntro from "@/components/ProjectIntro";
import TechStack from "@/components/TechStack";
import TotalExperience from "@/components/TotalExperience";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <ProjectIntro />
      <TechStack />
      <TotalExperience />
    </main>
  );
}
