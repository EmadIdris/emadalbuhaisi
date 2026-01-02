import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import Badge from "./Badge";
import Icon from "./Icon";
import { skills } from "../data/skills";
import { sections } from "../data/sections";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading title={sections.skills.title} subtitle={sections.skills.subtitle} />
        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.category}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-azure/10 text-azure">
                    <Icon name={skill.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.category}</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                  {sections.skills.badgeLabel}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
