import { Link } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Badge from "../components/Badge";
import { certifications } from "../data/certifications";
import { certificateView } from "../data/certificateView";
import { sections } from "../data/sections";

const Certificates = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Section id="certificates">
        <Container>
          <SectionHeading
            title={certificateView.galleryTitle}
            subtitle={certificateView.gallerySubtitle}
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {certifications.map((cert) => (
              <Card key={cert.slug} className="flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${cert.bg}`}>
                    <Icon name={cert.icon} className={cert.color} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {cert.issuer} · {cert.level} · {cert.category}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{cert.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">{cert.verificationProvider}</span>
                  <Link to={`/certificates/${cert.slug}`} className="font-semibold text-azure">
                    {sections.certifications.cardCtaLabel}
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
};

export default Certificates;
