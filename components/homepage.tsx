"use client";

import { motion } from "framer-motion";

const pillars = [
  "Storytelling",
  "Comics / Manga / Webtoons",
  "Animation",
  "Film / Visual Media",
  "Music / Sound",
  "Games / Interactive Worlds",
  "Culture / Mythology / Ideas",
  "Future Imagination / Technology",
];

const showcases = [
  {
    title: "Origin Fragments",
    description: "Early concept glyphs exploring Afro Arc's symbolic language and myth-tech aesthetics.",
  },
  {
    title: "Skyline Codex",
    description: "Visual studies for a near-future metropolis where mythology is encoded into architecture.",
  },
  {
    title: "Pulse Engine",
    description: "Sound and motion concepts for signature sonic identity, trailers, and world reveals.",
  },
];

const riseIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Section({ id, eyebrow, title, copy, children }: {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="section-shell"
      variants={riseIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.2, 0.65, 0.3, 1] }}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy">{copy}</p>
      {children}
    </motion.section>
  );
}

export function Homepage() {
  return (
    <main className="relative overflow-hidden bg-obsidian bg-arc-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,192,109,0.14),transparent_35%)]" aria-hidden />

      <section id="hero" className="section-shell min-h-[88vh] pt-28 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <p className="section-eyebrow">Afro Arc</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Enter a universe where future mythology becomes culture.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Afro Arc is building a premium multimedia world through storytelling, animation, sound, and cinematic imagination.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="rounded-full bg-electric px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-electric/80" href="#flagship">
              Explore the Universe
            </a>
            <a className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/45" href="#cta">
              Join the Journey
            </a>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">Mythic Scale</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">Future-Forward Craft</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">Cultural Signal</div>
          </div>
        </motion.div>
      </section>

      <Section
        id="manifesto"
        eyebrow="Manifesto"
        title="Afro Arc is a signal before it is a company."
        copy="We are a universe engine: shaping stories, symbols, and worlds that carry weight. Every release is designed to feel like a cultural event, not content noise."
      />

      <Section
        id="what"
        eyebrow="What It Is"
        title="A multimedia studio built for long-horizon worldbuilding."
        copy="Afro Arc develops connected creative systems across narrative, visuals, sound, and interactive media. The goal is coherent mythology with franchise-level execution."
      />

      <Section
        id="pillars"
        eyebrow="Core Divisions"
        title="One vision, multiple creative engines."
        copy="Our pillars are organized to produce living worlds with continuity and depth, from first concept to cinematic expansion."
      >
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar} className="rounded-2xl border border-white/10 bg-midnight/55 p-5 text-sm text-slate-200 shadow-glow">
              {pillar}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="flagship"
        eyebrow="Flagship World"
        title="The Arcverse: where legacy memory collides with future power."
        copy="Our flagship world introduces factions, symbols, and timelines rooted in African futurist imagination. This is the first gate into an expanding mythic continuum."
      >
        <div className="mt-10 rounded-3xl border border-white/15 bg-gradient-to-br from-violet/30 via-midnight to-obsidian p-8 sm:p-12">
          <p className="max-w-2xl text-base leading-7 text-slate-200">
            Character lineups, city systems, and ritual technologies are currently in development. The framework is built to scale across comics, animation, film, games, and live experiences.
          </p>
        </div>
      </Section>

      <Section
        id="vision"
        eyebrow="Vision"
        title="Build stories that outlive trends."
        copy="Afro Arc exists to create timeless creative worlds: intelligent enough to reward deep fans, clear enough to welcome new audiences, and bold enough to redefine genre expectations."
      />

      <Section
        id="showcase"
        eyebrow="Showcase"
        title="Concept channels opening soon."
        copy="A preview grid for upcoming artwork, visual development, and worldbuilding materials."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {showcases.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="cta"
        eyebrow="Call to Action"
        title="Enter Afro Arc before the first wave breaks."
        copy="Follow the build-out, receive first reveals, and step into the universe as it forms."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-obsidian transition hover:bg-gold/90" href="mailto:hello@afroarc.com">
            Subscribe for Updates
          </a>
          <a className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/45" href="#hero">
            Revisit the Entrance
          </a>
        </div>
      </Section>

      <footer className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Afro Arc. All rights reserved.</p>
          <p>Mythic storytelling. Future media. Cultural signal.</p>
        </div>
      </footer>
    </main>
  );
}
