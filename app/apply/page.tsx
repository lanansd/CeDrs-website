import type {Metadata} from "next";
import {MembershipForm} from "@/components/MembershipForm";
import {Reveal} from "@/components/MotionSystem";
export const metadata:Metadata={title:"Apply to CeDrs"};

export default function ApplyPage(){return <>
  <section className="editorial-grid bg-cedar pb-20 pt-44 text-white md:pb-28 md:pt-52"><div className="shell grid items-end gap-12 lg:grid-cols-[1fr_320px]"><Reveal><p className="eyebrow text-mist">Membership application</p><h1 className="hero-type mt-8 max-w-6xl">Become a <span className="text-mist">CeDr.</span></h1></Reveal><Reveal delay={.12} className="border-l-2 border-terracotta pl-7"><p className="text-sm leading-7 text-white/68">Introduce yourself, your medical journey, and how you hope to contribute to the CeDrs community.</p></Reveal></div></section>
  <section className="bg-mist py-20 md:py-28"><div className="shell grid gap-14 lg:grid-cols-[.62fr_1.38fr]"><Reveal><p className="eyebrow text-cedar/55">Your application</p><h2 className="title-type mt-8">Start your place in the network.</h2><p className="mt-8 max-w-md text-sm leading-7 text-cedar/60">Complete the form once. The final button opens your email application with every answer already prepared.</p></Reveal><div className="bg-white p-7 md:p-12"><MembershipForm/></div></div></section>
  </>}
