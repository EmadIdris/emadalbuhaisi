import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Badge from "../components/Badge";
import Icon from "../components/Icon";
import { projects } from "../data/projects";
import { projectDetails } from "../data/projectDetails";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Section id="project">
          <Container>
            <h1 className="section-title">{projectDetails.notFoundTitle}</h1>
            <p className="section-subtitle">{projectDetails.notFoundSubtitle}</p>
            <Link to="/" className="mt-6 inline-flex text-sm font-semibold text-azure">
              {projectDetails.backLabel}
            </Link>
          </Container>
        </Section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Section id="project">
        <Container>
          <Link to="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
            {projectDetails.backLabel}
          </Link>
          <div className="mt-6 flex flex-wrap items-start gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-azure/10 text-azure">
              <Icon name={project.icon} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {project.name}
              </h1>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{project.description}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                {projectDetails.architectureLabel}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.architecture}
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                {projectDetails.impactLabel}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.impact}</p>
            </div>
            <div className="surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                {projectDetails.stackLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
