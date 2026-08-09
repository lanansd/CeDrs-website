"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect,useState } from "react";
import {Menu,X} from "lucide-react";
import { AnimatePresence,motion } from "framer-motion";
import { Logo } from "./Logo";

const links=[["Home","/"],["Network","/network"],["Newsroom","/announcements"],["Sponsors","/sponsors"],["Contact","/contact"]];
export function Navbar(){
  const pathname=usePathname();const [scrolled,setScrolled]=useState(false);const [open,setOpen]=useState(false);
  useEffect(()=>{const update=()=>setScrolled(scrollY>24);update();addEventListener("scroll",update);return()=>removeEventListener("scroll",update)},[]);
  return <header className={`fixed inset-x-0 top-0 z-50 bg-cedar text-white transition-shadow duration-500 ${scrolled||open?"shadow-[0_1px_0_rgb(255_255_255/.12)]":""}`}>
    <div className="shell flex h-[86px] items-center justify-between border-b border-current/15">
      <Logo light/>
      <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary navigation">{links.map(([label,href])=><Link key={href} href={href} className={`nav-link display relative py-2 text-[.92rem] font-normal tracking-[.01em] ${pathname===href?"is-active":""}`}>{label}</Link>)}</nav>
      <Link href="/apply" className="application-link nav-application">Become a CeDr</Link>
      <button className="grid h-11 w-11 place-items-center border border-current/25 xl:hidden" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X size={18}/>:<Menu size={18}/>}</button>
    </div>
    <AnimatePresence>{open&&<motion.div className="overflow-hidden bg-cedar text-white xl:hidden" initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} transition={{duration:.6,ease:[.16,1,.3,1]}}><nav className="shell grid py-8">{links.map(([label,href],i)=><motion.div key={href} initial={{opacity:0,x:-24}} animate={{opacity:1,x:0}} transition={{delay:i*.05}}><Link href={href} onClick={()=>setOpen(false)} className="display block border-b border-white/15 py-3 text-4xl">{label}</Link></motion.div>)}<Link href="/apply" onClick={()=>setOpen(false)} className="application-link mt-7">Become a CeDr</Link></nav></motion.div>}</AnimatePresence>
  </header>;
}
