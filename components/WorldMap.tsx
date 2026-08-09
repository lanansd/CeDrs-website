"use client";
import {geoGraticule10,geoNaturalEarth1,geoPath} from "d3-geo";
import {feature} from "topojson-client";
import type {FeatureCollection,Geometry} from "geojson";
import type {GeometryCollection,Topology} from "topojson-specification";
import world from "world-atlas/countries-110m.json";

const W=1200,H=620;
const topology=world as unknown as Topology<{countries:GeometryCollection}>;
const countries=feature(topology,topology.objects.countries) as FeatureCollection<Geometry>;
const projection=geoNaturalEarth1().fitExtent([[32,48],[W-32,H-48]],countries);
const draw=geoPath(projection);
const beirut=projection([35.5018,33.8938])??[695,194];
const destinations:[number,number][]=[[-74.006,40.7128],[-46.6333,-23.5505],[-.1276,51.5072],[28.0473,-26.2041],[103.8198,1.3521],[151.2093,-33.8688]];
function route(to:[number,number]){const point=projection(to);if(!point)return "";const[x1,y1]=beirut,[x2,y2]=point;const lift=Math.min(118,Math.abs(x2-x1)*.18+36);return `M${x1},${y1} Q${(x1+x2)/2},${Math.min(y1,y2)-lift} ${x2},${y2}`}

function MapArtwork({mobile=false}:{mobile?:boolean}){
  return <svg viewBox={mobile?"500 30 390 330":`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className={mobile?"block h-[430px] w-full lg:hidden":"hidden h-auto w-full lg:block"} role="img" aria-label="Accurate world map highlighting Beirut, Lebanon as the center of the CeDrs global mission">
    <path d={draw(geoGraticule10())??""} fill="none" stroke="#ADBCBE" strokeOpacity=".16" strokeWidth="1"/>
    <g>{countries.features.map((country,i)=>{const isLebanon=String(country.id)==="422";return <path key={`${country.id}-${i}`} d={draw(country)??""} fill={isLebanon?"#6C2714":"#ADBCBE"} fillOpacity={isLebanon?1:.42} stroke="#FFFFFF" strokeOpacity={isLebanon?.95:.32} strokeWidth={isLebanon?2.4:1}/>})}</g>
    <g fill="none" stroke="#6C2714" strokeOpacity="1" strokeWidth="4.5" strokeLinecap="round">{destinations.map((destination,i)=><path className="route" key={i} d={route(destination)}/>)}</g>
    {destinations.map((destination,i)=>{const point=projection(destination);return point?<circle key={i} cx={point[0]} cy={point[1]} r="4" fill="#ADBCBE"/>:null})}
    <circle className="map-orbit" cx={beirut[0]} cy={beirut[1]} r="20" fill="#6C2714" fillOpacity=".38"/><circle cx={beirut[0]} cy={beirut[1]} r="7" fill="#FFFFFF" stroke="#6C2714" strokeWidth="4"/>
    <g transform={`translate(${beirut[0]+13} ${beirut[1]-35})`}><rect width="128" height="34" rx="2" fill="#FFFFFF"/><text x="12" y="21" fill="#203723" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="600" letterSpacing="1.4">BEIRUT, LEBANON</text></g>
  </svg>;
}

export function WorldMap(){return <figure className="mx-auto w-full">
  <div className="relative overflow-hidden border-y border-white/15 bg-cedar"><MapArtwork mobile/><MapArtwork/></div>
  <figcaption className="grid gap-3 border-b border-white/15 px-4 py-5 text-[.62rem] leading-5 text-white/55 md:grid-cols-3 md:px-0 md:text-[.58rem]"><span><i className="mr-2 inline-block h-2 w-2 rounded-full bg-terracotta"/>Verified geographic location</span><span><i className="mr-2 inline-block h-px w-5 bg-brown align-middle"/>Lines express global ambition</span><span className="md:text-right">Member data will appear only after verification</span></figcaption>
  </figure>}
