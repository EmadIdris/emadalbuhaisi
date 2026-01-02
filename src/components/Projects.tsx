import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";
import Card from "./Card";
import Badge from "./Badge";
import Icon from "./Icon";
import { projects } from "../data/projects";
import { sections } from "../data/sections";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading title={sections.projects.title} subtitle={sections.projects.subtitle} />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name} className="flex h-full flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-azure/10 text-azure">
                    <Icon name={project.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {sections.projects.architectureLabel}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.architecture}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {sections.projects.impactLabel}
                </p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{project.impact}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
              <Link
                to={project.link}
                className="mt-6 inline-flex items-center text-sm font-semibold text-azure"
              >
                {project.ctaLabel}
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
