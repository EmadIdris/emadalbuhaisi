import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import { profile } from "../data/profile";
import { sections } from "../data/sections";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionHeading title={sections.about.title} subtitle={sections.about.subtitle} />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{profile.aboutSummary}</p>
          </Card>
          <Card className="bg-azure text-white shadow-glow">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              {profile.aboutHighlight.label}
            </p>
            <h3 className="mt-4 text-2xl font-semibold">{profile.aboutHighlight.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">{profile.aboutHighlight.description}</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default About;
