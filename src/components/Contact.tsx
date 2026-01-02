import { useState } from "react";
import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import Icon from "./Icon";
import { profile } from "../data/profile";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, label: string) => {
    if (!navigator.clipboard?.writeText) {
      setCopied(profile.contact.clipboardUnavailable);
      setTimeout(() => setCopied(null), 2000);
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(profile.contact.clipboardBlocked);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeading title={profile.contact.heading} subtitle={profile.contact.subtitle} />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <p className="text-sm text-slate-600 dark:text-slate-300">{profile.contact.intro}</p>
            <div className="mt-6 grid gap-4 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-700 transition hover:border-azure/60 hover:text-azure dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3">
                  <Icon name="email" />
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(profile.email, profile.contact.copiedEmail)}
                  aria-label="Copy email"
                  className="text-xs font-semibold uppercase text-azure"
                >
                  {profile.contact.copyLabel}
                </button>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-slate-700 transition hover:border-azure/60 hover:text-azure dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200">
                <a href={`tel:${profile.phone}`} className="flex items-center gap-3">
                  <Icon name="phone" />
                  {profile.phone}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(profile.phone, profile.contact.copiedPhone)}
                  aria-label="Copy phone"
                  className="text-xs font-semibold uppercase text-azure"
                >
                  {profile.contact.copyLabel}
                </button>
              </div>
              {copied ? (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">{copied}</p>
              ) : null}
            </div>
          </Card>
          <Card className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">LinkedIn</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                {profile.contact.linkedInTitle}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{profile.contact.linkedInCopy}</p>
            </div>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-azure px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-azure-dark"
            >
              <span className="flex items-center gap-2">
                <Icon name="linkedin" className="text-white" />
                {profile.contact.linkedInCta}
              </span>
            </a>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
