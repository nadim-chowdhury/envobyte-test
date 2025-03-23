import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import GetYourAnswers from "@/components/GetYourAnswers";
import MainBanner from "@/components/MainBanner";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSteps from "@/components/ProcessSteps";
import ServicesSection from "@/components/ServicesSection";
import TeamSlider from "@/components/TeamSlider";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <main>
      <MainBanner />
      <ServicesSection />
      <GetYourAnswers />
      <PortfolioSection />
      <ProcessSteps />
      <TestimonialSlider />
      <TeamSlider />
      <FAQ />
      <ContactForm />
    </main>
  );
}
