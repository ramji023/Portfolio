import HeroSection from "../components/HeroSection";
import ThreeDotsDivider from "../components/ThreeDotsDivider";
import WorkSection from "../components/WorkSection";
import ExperienceSection from "../components/ExperienceSection";
// import WritingSection from "../components/WritingSection";
import StackSection from "../components/StackSection";
import NewsletterFooter from "../components/NewsletterFooter";

export default function Dashboard() {
  return (
    <main className="max-w-2xl mx-auto">
      <HeroSection />
      <ThreeDotsDivider />
      <WorkSection />
      <ThreeDotsDivider />
      <ExperienceSection />
      <ThreeDotsDivider />
      {/* <WritingSection />
      <ThreeDotsDivider /> */}
      <StackSection />
      <NewsletterFooter />
    </main>
  );
}
