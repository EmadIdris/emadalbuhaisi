import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Badge from "../components/Badge";
import Icon from "../components/Icon";
import { certifications } from "../data/certifications";
import { certificateView } from "../data/certificateView";
import { projects } from "../data/projects";

const CertificateDetail = () => {
  const { slug } = useParams();
  const cert = useMemo(() => certifications.find((item) => item.slug === slug), [slug]);

  if (!cert) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Section id="certificate">
          <Container>
            <h1 className="section-title">{certificateView.notFound.title}</h1>
            <p className="section-subtitle">{certificateView.notFound.subtitle}</p>
            <Link to="/certificates" className="mt-6 inline-flex text-sm font-semibold text-azure">
              {certificateView.detailLabels.back}
            </Link>
          </Container>
        </Section>
        <Footer />
      </div>
    );
  }

  const related = projects.filter((project) => cert.relatedProjects.includes(project.slug));

  return (
    <div className="min-h-screen">
      <Navbar />
      <Section id="certificate">
        <Container>
          <Link to="/certificates" className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
            {certificateView.detailLabels.back}
          </Link>
          <div className="mt-6 flex flex-wrap items-start gap-6">
            <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full ${cert.bg}`}>
              <Icon name={cert.icon} className={cert.color} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {cert.title}
              </h1>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                {cert.issuer} · {cert.level} · {cert.category}
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="surface p-6">
              <p className="text-sm text-slate-600 dark:text-slate-300">{cert.description}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                  {certificateView.detailLabels.skills}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
              {related.length ? (
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                    {certificateView.detailLabels.relatedProjects}
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm">
                    {related.map((project) => (
                      <Link key={project.slug} to={project.link} className="font-semibold text-azure">
                        {project.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="surface flex flex-col gap-4 p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                  {certificateView.detailLabels.verification}
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{cert.verificationProvider}</p>
              </div>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-azure px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-azure-dark"
              >
                {certificateView.detailLabels.viewPdf}
              </a>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
};

export default CertificateDetail;
