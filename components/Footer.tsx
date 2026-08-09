import Link from "next/link";
import { ArrowUpRight,Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer(){return <footer className="bg-cedar text-white">
  <div className="shell border-b border-white/15 py-20 md:py-28">
    <div className="grid gap-16 lg:grid-cols-[1.35fr_.65fr]">
      <div><Logo light/><p className="display mt-10 max-w-4xl text-4xl leading-[1.08] text-white/92 md:text-6xl">Rooted in Lebanese soil,<br/><span className="text-mist">branching across the world.</span></p></div>
      <div className="flex flex-col justify-end"><p className="max-w-md text-sm leading-7 text-white/58">A global network connecting Lebanese medical students and future physicians through mentorship, research, and professional development.</p><a href="mailto:hello@cedrs.org" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em]">hello@cedrs.org <ArrowUpRight size={15}/></a></div>
    </div>
    <div className="mt-20 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
      <div><p className="text-[.58rem] font-bold uppercase tracking-[.2em] text-mist">Institution</p><div className="mt-5 grid gap-3 text-sm text-white/65"><Link href="/about">Our story</Link><Link href="/network">Global network</Link><Link href="/announcements">Newsroom</Link></div></div>
      <div><p className="text-[.58rem] font-bold uppercase tracking-[.2em] text-mist">Take part</p><div className="mt-5 grid gap-3 text-sm text-white/65"><Link href="/apply">Membership application</Link><Link href="/sponsors">Partner with us</Link><Link href="/contact">Contact</Link></div></div>
      <div><p className="text-[.58rem] font-bold uppercase tracking-[.2em] text-mist">Direct contact</p><a href="mailto:hello@cedrs.org" className="mt-5 flex items-center gap-3 text-sm text-white/65"><Mail size={15}/>hello@cedrs.org</a></div>
      <div><p className="text-[.58rem] font-bold uppercase tracking-[.2em] text-mist">Location</p><p className="mt-5 text-sm text-white/65">Lebanon · Worldwide</p></div>
    </div>
  </div>
  <div className="shell flex flex-col gap-4 py-7 text-[.56rem] font-bold uppercase tracking-[.15em] text-white/38 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} CeDrs. Cedars &amp; Doctors.</span><div className="flex gap-6"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>}
