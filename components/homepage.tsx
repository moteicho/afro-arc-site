"use client";

import { motion, useReducedMotion } from "framer-motion";

const pillars = [
  {
    name: "Storytelling",
    detail: "Mythic narratives designed for long-form continuity and emotional gravity.",
  },
  {
    name: "Comics / Manga / Webtoons",
    detail: "Serialized visual worlds with iconic silhouettes, symbols, and lore depth.",
  },
  {
    name: "Animation",
    detail: "Atmospheric motion language for character, ritual, and world-scale reveals.",
  },
  {
    name: "Film / Visual Media",
    detail: "Cinematic framing and franchise-ready visual architecture.",
  },
  {
    name: "Music / Sound",
    detail: "Sonic identity systems engineered to carry memory and myth.",
  },
  {
    name: "Games / Interactive Worlds",
    detail: "Playable world layers where lore becomes experience.",
  },
  {
    name: "Culture / Mythology / Ideas",
    detail: "Future-facing African-inspired thought systems and symbols.",
  },
  {
    name: "Future Imagination / Technology",
    detail: "Speculative tools and media formats that shape next-wave storytelling.",
  },
];

const showcases = [
  {
    title: "Origin Fragments",
    description:
      "Early concept glyphs exploring Afro Arc's symbolic language and myth-tech aesthetics.",
    status: "Archive 01",
  },
  {
    title: "Skyline Codex",
    description:
      "Visual studies for a near-future metropolis where mythology is encoded into architecture.",
    status: "Archive 02",
  },
  {
    title: "Pulse Engine",
    description:
      "Sound and motion concepts for signature sonic identity, trailers, and world reveals.",
    status: "Archive 03",
  },
];

const riseIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  children?: React.ReactNode;
};

function Section({ id, eyebrow, title, copy, children }: SectionProps) {
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

function FloatingAtmosphere() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[
        { className: "left-[10%] top-[8%] h-56 w-56 bg-electric/20", duration: 18 },
        { className: "right-[6%] top-[24%] h-80 w-80 bg-violet/20", duration: 22 },
        { className: "left-[28%] bottom-[14%] h-64 w-64 bg-emerald/15", duration: 20 },
      ].map((orb) => (
        <motion.div
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={{
            y: [0, -18, 0, 15, 0],
            x: [0, 15, -10, 0],
            opacity: [0.5, 0.75, 0.5],
          }}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Homepage() {
  return (
    <main className="relative overflow-hidden bg-obsidian bg-arc-gradient">
      <FloatingAtmosphere />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,192,109,0.16),transparent_35%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,7,12,0.1),rgba(6,7,12,0.84)_75%)]" aria-hidden />

      <section id="hero" className="section-shell min-h-[92vh] pt-28 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <p className="section-eyebrow">Afro Arc</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Enter the cinematic threshold where ancestral memory meets future myth.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Afro Arc is building a premium multimedia universe through story architecture, animation craft, sonic identity,
            and world-scale visual design.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="rounded-full bg-electric px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-electric/80"
              href="#flagship"
            >
              Explore the Universe
            </a>
            <a
              className="rounded-full border border-white/25 bg-white/[0.03] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/50"
              href="#cta"
            >
              Join the Journey
            </a>
          </div>
          <div className="mt-14 grid max-w-4xl grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-3">
            {[
              ["Mythic Scale", "Franchise-level world systems"],
              ["Future-Forward Craft", "Premium motion + visual architecture"],
              ["Cultural Signal", "Storytelling rooted in legacy and possibility"],
            ].map(([label, detail]) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="font-medium text-white">{label}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Section
        id="manifesto"
        eyebrow="Manifesto"
        title="Afro Arc is a signal before it is a company."
        copy="We build worlds that carry consequence. Every release is designed as a cultural moment: coherent, emotionally charged, and built for memory."
      />

      <Section
        id="what"
        eyebrow="What It Is"
        title="A universe studio engineered for long-horizon storytelling."
        copy="Afro Arc develops connected systems across narrative, visual design, sound, and interactive media. The outcome is mythology with continuity, precision, and scale."
      />

      <Section
        id="pillars"
        eyebrow="Core Divisions"
        title="One mythic direction, multiple creative engines."
        copy="Each pillar is designed to stand alone and compound together, creating worlds that can travel across formats without losing identity."
      >
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.name}
              className="group rounded-2xl border border-white/10 bg-midnight/60 p-5 shadow-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h3 className="text-sm font-semibold text-white">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.detail}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="flagship"
        eyebrow="Flagship World"
        title="The Arcverse: where legacy memory collides with future power."
        copy="Our flagship world introduces factions, symbols, and timelines rooted in African futurist imagination. This is the first gate into an expanding mythic continuum."
      >
        <motion.div
          className="mt-10 rounded-3xl border border-white/15 bg-gradient-to-br from-violet/30 via-midnight to-obsidian p-8 sm:p-12"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.25 }}
        >
          <p className="max-w-2xl text-base leading-7 text-slate-200">
            Character lineups, city systems, and ritual technologies are in active development. The framework is built to
            scale across comics, animation, film, games, and live experiences without losing narrative coherence.
          </p>
        </motion.div>
      </Section>

      <Section
        id="vision"
        eyebrow="Vision"
        title="Build stories that outlive trends."
        copy="Afro Arc exists to create timeless worlds: intelligent enough to reward deep fans, clear enough to welcome new audiences, and bold enough to redefine genre expectations."
      />

      <Section
        id="showcase"
        eyebrow="Showcase"
        title="Concept channels opening soon."
        copy="A preview grid for incoming artwork, visual development, sonic experiments, and lore architecture."
      >
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {showcases.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-electric/80">{item.status}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="cta"
        eyebrow="Call to Action"
        title="Enter Afro Arc before the first wave breaks."
        copy="Follow the build-out, receive first reveals, and step into the universe while it is still forming."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-obsidian transition hover:bg-gold/90"
            href="mailto:hello@afroarc.com"
          >
            Subscribe for Updates
          </a>
          <a
            className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/55"
            href="#hero"
          >
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
