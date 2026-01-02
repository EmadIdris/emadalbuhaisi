import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";
import Card from "./Card";
import Icon from "./Icon";
import { certifications } from "../data/certifications";
import { sections } from "../data/sections";

const Certifications = () => {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading title={sections.certifications.title} subtitle={sections.certifications.subtitle}>
          <Link
            to="/certificates"
            className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-azure/60 hover:text-azure dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200"
          >
            {sections.certifications.ctaLabel}
          </Link>
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.slug} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${cert.bg}`}>
                <Icon name={cert.icon} className={cert.color} />
              </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{cert.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cert.issuer} · {cert.level}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{cert.category}</span>
                <Link to={`/certificates/${cert.slug}`} className="font-semibold text-azure">
                  {sections.certifications.cardCtaLabel}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Certifications;
