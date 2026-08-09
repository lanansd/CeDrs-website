export type Announcement={category:string;date:string;title:string;description:string;tone:"green"|"blue"|"rust"};
export const announcements:Announcement[]=[
  {category:"Newsroom",date:"Forthcoming",title:"Official CeDrs announcements will appear here",description:"Confirmed events, openings, workshops, and organizational updates will be published in this newsroom.",tone:"green"},
  {category:"Research",date:"Forthcoming",title:"Research opportunities",description:"Verified calls for collaboration and academic opportunities will be shared with the community.",tone:"blue"},
  {category:"Development",date:"Forthcoming",title:"Workshops and mentorship",description:"Professional development programs will be announced here once dates and participation details are confirmed.",tone:"rust"},
];
