import type {Metadata} from "next";
import {Reveal} from "@/components/MotionSystem";
export const metadata:Metadata={title:"Apply to CeDrs"};

export default function ApplyPage(){return <section className="editorial-grid flex min-h-screen items-center bg-cedar pt-[86px] text-white"><Reveal className="shell text-center"><p className="eyebrow justify-center text-mist">CeDr applications</p><h1 className="hero-type mt-8">Coming soon.</h1></Reveal></section>}
