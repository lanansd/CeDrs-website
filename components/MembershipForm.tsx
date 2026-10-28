"use client";
import {FormEvent} from "react";
import {ArrowUpRight,Mail} from "lucide-react";

export function MembershipForm(){
  function openApplication(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const value=(key:string)=>String(data.get(key)||"").trim();
    const name=value("name");
    const body=[
      "CeDr membership application",
      "",
      `Name: ${name}`,
      `Email: ${value("email")}`,
      `Country of residence: ${value("country")}`,
      `University / institution: ${value("university")}`,
      `Stage of training: ${value("stage")}`,
      `Lebanese connection: ${value("connection")}`,
      "",
      "Why I would like to join CeDrs:",
      value("motivation"),
    ].join("\n");
    window.location.href=`mailto:cedrsmd@outlook.com?subject=${encodeURIComponent(`CeDr application — ${name}`)}&body=${encodeURIComponent(body)}`;
  }

  return <form onSubmit={openApplication} className="grid gap-7">
    <div className="flex items-center gap-3 border-l-2 border-terracotta bg-cedar px-5 py-4 text-xs leading-5 text-white"><Mail className="shrink-0 text-mist" size={18}/>Your answers are not uploaded or stored. Submitting opens a completed application in your email app.</div>
    <div className="grid gap-7 md:grid-cols-2">
      <label className="grid gap-2 text-[.6rem] font-bold uppercase tracking-[.15em]">Full name<input name="name" required autoComplete="name" className="field normal-case" placeholder="Your full name"/></label>
      <label className="grid gap-2 text-[.6rem] font-bold uppercase tracking-[.15em]">Email<input name="email" type="email" required autoComplete="email" className="field normal-case" placeholder="you@example.com"/></label>
      <label className="grid gap-2 text-[.6rem] font-bold uppercase tracking-[.15em]">Country of residence<input name="country" required autoComplete="country-name" className="field normal-case" placeholder="Country"/></label>
      <label className="grid gap-2 text-[.6rem] font-bold uppercase tracking-[.15em]">University or institution<input name="university" required className="field normal-case" placeholder="Institution name"/></label>
      <label className="grid gap-2 text-[.6rem] font-bold uppercase tracking-[.15em]">Stage of training<select name="stage" required defaultValue="" className="field normal-case"><option value="" disabled>Select your stage</option><option>Medical student</option><option>Intern</option><option>Resident</option><option>Fellow</option><option>Future medical student</option><option>Other</option></select></label>
      <label className="grid gap-2 text-[.6rem] font-bold uppercase tracking-[.15em]">Lebanese connection<input name="connection" required className="field normal-case" placeholder="Tell us briefly"/></label>
    </div>
    <label className="grid gap-2 text-[.6rem] font-bold uppercase tracking-[.15em]">Why would you like to join CeDrs?<textarea name="motivation" required className="field min-h-40 resize-y normal-case" placeholder="Your motivation, interests, and what you hope to contribute"/></label>
    <div className="flex flex-wrap items-center gap-5"><button type="submit" className="button-clay">Prepare my <span className="normal-case">CeDr</span> application <ArrowUpRight size={15}/></button><a href="mailto:cedrsmd@outlook.com?subject=CeDr%20application" className="text-[.6rem] font-bold uppercase tracking-[.14em] text-cedar/55">Email instead</a></div>
  </form>;
}
