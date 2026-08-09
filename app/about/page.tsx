import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ParallaxImage,Reveal} from "@/components/MotionSystem";
export const metadata:Metadata={title:"Our Story"};

export default function AboutPage(){return <>
  <section className="relative min-h-screen overflow-hidden bg-cedar text-white">
    <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]"><Image src="/story-medical-students.png" alt="Lebanese medical students collaborating" fill priority sizes="(max-width:1024px) 100vw,55vw" className="object-cover"/><div className="hero-vignette absolute inset-0 lg:bg-gradient-to-r lg:from-cedar lg:via-cedar/55 lg:to-cedar/10"/></div>
    <div className="shell relative z-10 flex min-h-screen items-end pb-14 pt-32 md:pb-16 md:pt-40"><Reveal className="max-w-5xl"><p className="eyebrow text-mist">The CeDrs story</p><h1 className="hero-type mt-7">Rooted in identity.<br/><span className="text-mist">Built for impact.</span></h1><p className="lede mt-7 max-w-xl text-white/68">A professional home for Lebanese medical students and future physicians, wherever their paths lead.</p></Reveal></div>
  </section>

  <section className="bg-white py-20 md:py-36"><div className="shell grid gap-10 md:gap-16 lg:grid-cols-[.55fr_1.45fr]">
    <div><p className="eyebrow text-cedar/55">The beginning</p><p className="index mt-10 md:mt-14">01</p></div>
    <Reveal><h2 className="title-type max-w-6xl">CeDrs was created to unite Lebanese medical students and future physicians across borders—building a community around knowledge, opportunity, and healthcare innovation.</h2></Reveal>
  </div></section>

  <section className="relative min-h-[620px] overflow-hidden bg-cedar text-white md:min-h-[760px]">
    <ParallaxImage className="absolute inset-0"><Image src="/hero-medical-network.png" alt="Medical collaboration" fill sizes="100vw" className="object-cover"/></ParallaxImage><div className="absolute inset-0 bg-cedar/78"/><div className="editorial-grid absolute inset-0"/>
    <div className="shell relative z-10 grid min-h-[620px] items-center gap-10 py-20 md:min-h-[760px] md:py-24 lg:grid-cols-[.55fr_1.45fr]"><Reveal><p className="eyebrow text-mist">Why connection matters</p><p className="index mt-10 text-white/20 md:mt-14">02</p></Reveal><Reveal delay={.1}><h2 className="title-type">Connection creates mentorship. Mentorship creates confidence. Research creates knowledge. Together, those forces can improve healthcare in Lebanon and beyond.</h2></Reveal></div>
  </section>

  <section className="bg-white py-16 md:py-24"><div className="shell grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
    <Reveal className="bg-cedar p-8 text-white md:p-12"><p className="display text-4xl leading-tight md:text-6xl">Rooted in Lebanese soil,<br/><span className="text-mist">branching across the world.</span></p></Reveal>
    <Reveal delay={.1} className="flex items-end bg-terracotta p-8 text-white md:p-12"><div><p className="eyebrow text-white/70">The reason</p><p className="mt-7 text-lg leading-8 md:text-xl">To widen the horizon of Lebanese medical students and create collaborative opportunities beyond borders.</p></div></Reveal>
  </div></section>

  <section className="bg-white py-20 md:py-36"><div className="shell"><div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
    <p className="eyebrow self-start text-cedar/55">Mission &amp; vision</p>
    <div className="grid gap-4">
      <Reveal className="grid gap-7 bg-mist p-8 md:grid-cols-[140px_1fr] md:p-12"><span className="display text-4xl text-cedar">Mission</span><p className="display text-3xl leading-[1.18] text-cedar md:text-5xl">CeDrs. (Cedars &amp; Doctors) empowers Lebanese medical students worldwide by fostering collaboration, mentorship, research, and professional development, creating a unified network dedicated to academic excellence and improving healthcare.</p></Reveal>
      <Reveal className="grid gap-7 bg-terracotta p-8 text-white md:grid-cols-[140px_1fr] md:p-12"><span className="display text-4xl">Vision</span><p className="display text-3xl leading-[1.18] md:text-5xl">To become the leading global network of Lebanese medical students and future physicians, connecting talent across borders to advance medical education, innovation, and healthcare in Lebanon and beyond.</p></Reveal>
    </div>
  </div></div></section>

  <section className="bg-mist py-20 md:py-28"><div className="shell flex flex-col justify-between gap-8 md:flex-row md:items-end"><Reveal><p className="eyebrow text-cedar/55">The next chapter</p><h2 className="title-type mt-7">Build it with us.</h2></Reveal><Link href="/apply" className="application-link">Become a CeDr</Link></div></section>
  </>}
