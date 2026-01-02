import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import Icon from "./Icon";
import { experience } from "../data/experience";
import { sections } from "../data/sections";

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading title={sections.experience.title} subtitle={sections.experience.subtitle} />
        <div className="grid gap-6">
          {experience.map((role) => (
            <Card key={role.role}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-azure/10 text-azure">
                    <Icon name={role.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{role.role}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{role.company}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-200">{role.dates}</span>
                  <span className="ml-3">{role.location}</span>
                </div>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-azure" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
