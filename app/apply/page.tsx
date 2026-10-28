import type {Metadata} from "next";
import {MessageCircle} from "lucide-react";
import {Reveal} from "@/components/MotionSystem";
export const metadata:Metadata={title:"Join the CeDrs Community"};

const communityUrl="https://chat.whatsapp.com/GKE4qCMGTCOJPGbABODozZ?s=cl&p=i&mlu=4&ilr=4";

export default function ApplyPage(){return <section className="editorial-grid flex min-h-screen items-center bg-cedar pt-[86px] text-white"><Reveal className="shell-narrow text-center"><p className="eyebrow justify-center text-mist">CeDrs Community</p><h1 className="hero-type mt-8">Join the movement,<br/>become a Cedr.</h1><p className="lede mx-auto mt-8 max-w-2xl text-white/70">Join our welcoming community and connect with Lebanese medical students and future physicians worldwide through collaboration, mentorship, research, and professional development.</p><a href={communityUrl} target="_blank" rel="noopener noreferrer" className="button-light mt-9">Join Our Community <MessageCircle size={17}/></a></Reveal></section>}
