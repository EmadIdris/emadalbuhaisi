import Container from "./Container";
import { profile } from "../data/profile";

const Hero = () => {
  return (
    <section className="section-anchor pt-16 sm:pt-20">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">{profile.heroLabel}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-600 dark:text-slate-300">{profile.title}</p>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">{profile.heroValueProp}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-azure px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-azure-dark"
            >
              {profile.heroCtas.contactLabel}
            </a>
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200/80 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-azure/60 hover:text-azure dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-200"
            >
              {profile.heroCtas.linkedInLabel}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>
        </div>
        <div className="surface flex flex-col justify-between gap-6 p-6">
          <div className="flex items-center gap-4">
            <img
              src={profile.avatarUrl}
              alt={profile.avatarAlt}
              className="h-20 w-20 rounded-2xl object-cover shadow-glow"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                {profile.focusArea.label}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                {profile.focusArea.title}
              </h2>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.focusArea.description}
          </p>
          <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
            {profile.focusArea.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/70 dark:bg-slate-800/40"
              >
                <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">{card.title}</p>
                <p className="mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
