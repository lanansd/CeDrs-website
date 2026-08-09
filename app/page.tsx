import Image from "next/image";
import Link from "next/link";
import {ArrowRight,ArrowUpRight} from "lucide-react";
import {ImageReveal,ParallaxImage,Reveal,WordReveal} from "@/components/MotionSystem";
import {WorldMap} from "@/components/WorldMap";
import {CedarMark} from "@/components/Logo";

export default function Home(){return <>
  <section className="relative min-h-screen overflow-hidden bg-cedar text-white">
    <Image src="/hero-medical-network.png" alt="Medical researchers collaborating" fill priority sizes="100vw" className="object-cover object-[62%_center]"/>
    <div className="hero-vignette absolute inset-0"/><div className="editorial-grid absolute inset-0 opacity-25"/>
    <div className="shell relative z-10 flex min-h-screen items-end pb-14 pt-36 md:pb-20">
      <div className="w-full max-w-[1120px]">
        <p className="eyebrow text-mist">Cedars &amp; Doctors · Worldwide</p>
        <h1 className="display mt-7 max-w-[1050px] text-[clamp(2.8rem,6vw,6.8rem)] font-normal leading-[1] tracking-[-.03em] md:leading-[.94] md:tracking-[-.045em]"><WordReveal text="Connecting Lebanese medical minds across the world."/></h1>
        <div className="mt-10 grid max-w-[930px] gap-7 border-t border-white/22 pt-7 md:grid-cols-[1fr_auto] md:items-center">
          <p className="max-w-2xl text-sm leading-7 text-white/70">CeDrs connects Lebanese medical students worldwide through mentorship, research, collaboration, and professional development.</p>
          <div className="flex flex-wrap items-center gap-4"><Link href="/apply" className="application-link">Become a CeDr</Link><Link href="/sponsors" className="button-light">Partnerships</Link></div>
        </div>
      </div>
    </div>
  </section>

  <section id="story" className="relative bg-white py-20 md:py-36">
    <div className="shell"><div className="grid gap-10 md:gap-16 lg:grid-cols-[.72fr_1.28fr]">
      <Reveal className="lg:sticky lg:top-32 lg:self-start"><p className="eyebrow text-cedar/55">Why CeDrs exists</p><p className="index mt-14">01</p><p className="mt-8 max-w-sm text-sm leading-7 text-cedar/58">Medicine carries Lebanese talent across borders. CeDrs makes sure connection, identity, and opportunity travel with it.</p></Reveal>
      <div><Reveal><h2 className="title-type">A professional home, wherever medicine takes you.</h2></Reveal><div className="mt-16 grid gap-0 xl:grid-cols-[1.08fr_.92fr] xl:items-end"><ImageReveal className="relative h-[520px] md:h-[620px]"><Image src="/story-medical-students.png" alt="Medical students collaborating" fill sizes="(max-width:1280px) 100vw, 48vw" className="object-cover"/></ImageReveal><Reveal delay={.15} className="relative z-10 bg-terracotta p-8 text-white md:p-10 xl:mb-12"><CedarMark className="h-14 w-14 text-white"/><p className="display mt-8 text-4xl leading-tight md:text-5xl xl:text-4xl 2xl:text-5xl">Lebanese in identity.<br/>International in ambition.</p><Link href="/about" className="mt-8 inline-flex items-center gap-3 text-[.6rem] font-bold uppercase tracking-[.16em]">Read our story <ArrowRight size={15}/></Link></Reveal></div></div>
    </div></div>
  </section>

  <section className="overflow-hidden bg-cedar py-20 text-white md:py-36">
    <div className="shell"><div className="grid gap-12 lg:grid-cols-[1fr_310px] lg:items-end"><Reveal><p className="eyebrow text-mist">A worldwide mission</p><h2 className="title-type mt-8 max-w-5xl">Lebanon at the center.<br/><span className="text-mist">The world within reach.</span></h2></Reveal><Reveal delay={.12} className="border-l border-terracotta pl-7"><p className="text-sm leading-7 text-white/62">The map uses verified geographic data. Network totals will be published only when the organization confirms them.</p></Reveal></div><div className="mt-16"><WorldMap/></div></div>
  </section>

  <section className="relative min-h-[680px] overflow-hidden bg-cedar text-white lg:min-h-[820px]">
    <ParallaxImage className="absolute inset-0"><Image src="/research-newsroom.png" alt="Lebanese medical students collaborating in research" fill sizes="100vw" className="object-cover object-center"/></ParallaxImage>
    <div className="absolute inset-0 bg-cedar/80"/><div className="editorial-grid absolute inset-0 opacity-40"/>
    <div className="shell relative z-10 flex min-h-[680px] items-center py-20 lg:min-h-[820px]">
      <Reveal className="max-w-6xl"><p className="eyebrow text-mist">Why connection matters</p><h2 className="title-type mt-8">Connection creates mentorship. Mentorship creates confidence. Research creates knowledge.</h2><p className="lede mt-8 max-w-3xl text-white/72">Together, those forces can improve healthcare in Lebanon and beyond.</p></Reveal>
    </div>
  </section>

  <section className="overflow-hidden bg-white py-20 md:py-36">
    <div className="shell">
      <Reveal className="grid gap-7 border-b hairline pb-10 md:grid-cols-[.45fr_1.55fr] md:items-end md:pb-14"><p className="eyebrow text-terracotta">Our mission &amp; our vision</p><h2 className="title-type max-w-5xl">Purpose that reaches beyond borders.</h2></Reveal>
      <div className="grid lg:grid-cols-2">
        <Reveal className="bg-mist p-8 text-cedar md:p-12 lg:p-16"><p className="eyebrow text-cedar/65">Mission</p><h3 className="display mt-7 text-4xl leading-tight md:text-5xl">Empower, connect, advance.</h3><p className="mt-7 text-base leading-8 text-cedar/75 md:text-lg">CeDrs. (Cedars &amp; Doctors) empowers Lebanese medical students worldwide by fostering collaboration, mentorship, research, and professional development, creating a unified network dedicated to academic excellence and improving healthcare.</p></Reveal>
        <Reveal delay={.1} className="bg-terracotta p-8 text-white md:p-12 lg:p-16"><p className="eyebrow text-white/70">Vision</p><h3 className="display mt-7 text-4xl leading-tight md:text-5xl">A leading global network.</h3><p className="mt-7 text-base leading-8 text-white/78 md:text-lg">To become the leading global network of Lebanese medical students and future physicians, connecting talent across borders to advance medical education, innovation, and healthcare in Lebanon and beyond.</p></Reveal>
      </div>
    </div>
  </section>

  <section className="bg-mist py-28 md:py-40"><div className="shell grid gap-14 lg:grid-cols-[.78fr_1.22fr]"><Reveal><p className="eyebrow text-cedar/55">CeDrs newsroom</p><h2 className="title-type mt-8">The next chapter is being written.</h2><p className="mt-8 max-w-md text-sm leading-7 text-cedar/60">Official openings, workshops, events, and research opportunities will be published here as they are confirmed.</p><Link href="/announcements" className="button-dark mt-9">Enter newsroom <ArrowUpRight size={14}/></Link></Reveal><div className="border-t border-cedar/20">{[["Events","Global gatherings and community moments"],["Research","Collaboration and academic opportunities"],["Development","Mentorship, workshops, and openings"]].map(([label,title],i)=><Reveal key={label} delay={i*.07} className="group grid grid-cols-[70px_1fr_auto] items-center border-b border-cedar/20 py-8"><span className="display text-3xl text-terracotta">0{i+1}</span><div><p className="text-[.56rem] font-bold uppercase tracking-[.18em] text-cedar/45">{label}</p><h3 className="display mt-2 text-3xl md:text-4xl">{title}</h3></div><ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={18}/></Reveal>)}</div></div></section>

  <section className="bg-terracotta py-24 text-white md:py-32"><div className="shell grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"><Reveal><p className="eyebrow text-white/60">Your place in CeDrs</p><h2 className="title-type mt-8 max-w-5xl">Join the movement shaping medicine worldwide.</h2></Reveal><div className="flex flex-wrap items-center gap-4"><Link href="/apply" className="application-link">Become a CeDr</Link><Link href="/sponsors" className="button-light">Explore partnerships</Link></div></div></section>
  </>}
