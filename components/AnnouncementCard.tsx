import { ArrowUpRight } from "lucide-react";
import type { Announcement } from "@/data/announcements";

const tones = { green:"bg-cedar", blue:"bg-mist", rust:"bg-cedar/55" };

export function AnnouncementCard({ item }: { item: Announcement }) {
  return <article className="group border-t border-cedar/20 py-7 transition-colors md:grid md:grid-cols-[160px_1fr_50px] md:items-start md:gap-7">
    <div className="mb-4 flex items-center gap-3 md:mb-0"><span className={`h-2 w-2 rounded-full ${tones[item.tone]}`}/><span className="text-[.65rem] font-bold uppercase tracking-[.15em]">{item.category}</span><span className="text-[.62rem] text-cedar/45 md:hidden">{item.date}</span></div>
    <div><span className="hidden text-[.62rem] font-semibold tracking-[.12em] text-cedar/45 md:block">{item.date}</span><h3 className="display mt-1 text-3xl leading-tight md:text-4xl">{item.title}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-cedar/65">{item.description}</p></div>
    <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cedar/20 transition-all group-hover:bg-cedar group-hover:text-white md:mt-3"><ArrowUpRight size={17}/></span>
  </article>;
}
