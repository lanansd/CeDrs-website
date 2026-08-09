"use client";
import { motion,useReducedMotion,useScroll,useSpring,useTransform } from "framer-motion";
import { useRef } from "react";

export function MotionSystem({children}:{children:React.ReactNode}){
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:110,damping:28,mass:.25});
  return <><motion.div className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-terracotta" style={{scaleX:progress}}/>{children}</>;
}
export function Reveal({children,className="",delay=0,x=0}:{children:React.ReactNode;className?:string;delay?:number;x?:number}){
  const reduced=useReducedMotion();
  return <motion.div className={className} initial={reduced?false:{opacity:0,y:x?0:42,x}} whileInView={{opacity:1,y:0,x:0}} viewport={{once:true,margin:"-10%"}} transition={{duration:1.05,delay,ease:[.16,1,.3,1]}}>{children}</motion.div>;
}
export function ImageReveal({children,className="",delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
  const reduced=useReducedMotion();
  return <motion.div className={`overflow-hidden ${className}`} initial={reduced?false:{clipPath:"inset(0 0 100% 0)"}} whileInView={{clipPath:"inset(0 0 0% 0)"}} viewport={{once:true,margin:"-5%"}} transition={{duration:1.35,delay,ease:[.77,0,.18,1]}}>{children}</motion.div>;
}
export function ParallaxImage({children,className=""}:{children:React.ReactNode;className?:string}){
  const ref=useRef<HTMLDivElement>(null);const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});const y=useTransform(scrollYProgress,[0,1],[-45,45]);
  return <div ref={ref} className={`overflow-hidden ${className}`}><motion.div className="h-full w-full scale-110" style={{y}}>{children}</motion.div></div>;
}
export function WordReveal({text,className=""}:{text:string;className?:string}){
  const reduced=useReducedMotion();
  return <span className={className} aria-label={text}>{text.split(" ").map((word,i)=><span className="mr-[.18em] inline-block" key={`${word}-${i}`}><motion.span className="inline-block" initial={reduced?false:{y:".38em",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.9,delay:.1+i*.05,ease:[.16,1,.3,1]}}>{word}</motion.span></span>)}</span>;
}
