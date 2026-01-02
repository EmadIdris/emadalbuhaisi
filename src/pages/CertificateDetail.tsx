import { useMemo, useState } from "react";
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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
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
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-azure/60 hover:text-azure dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {certificateView.detailLabels.previewPdf}
              </button>
            </div>
          </div>
        </Container>
      </Section>
      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={certificateView.detailLabels.previewPdf}
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200/70 px-6 py-4 dark:border-slate-800/70">
              <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">{cert.title}</h2>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="text-xs font-semibold uppercase text-azure"
              >
                {certificateView.detailLabels.closePreview}
              </button>
            </div>
            <iframe title={cert.title} src={cert.pdfUrl} className="h-[70vh] w-full" />
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default CertificateDetail;
