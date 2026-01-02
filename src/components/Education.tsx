import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import Icon from "./Icon";
import { education } from "../data/education";
import { sections } from "../data/sections";

const Education = () => {
  return (
    <Section id="education">
      <Container>
        <SectionHeading title={sections.education.title} subtitle={sections.education.subtitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((entry) => (
            <Card key={entry.program}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-azure/10 text-azure">
                    <Icon name={entry.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{entry.program}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{entry.institution}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{entry.dates}</div>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{entry.location}</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
                {entry.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-azure" aria-hidden="true" />
                    <span>{detail}</span>
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

export default Education;
