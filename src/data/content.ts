import { Cloud, Globe, ShieldCheck, BarChart3, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export const content = {
  nav: {
    items: [
      { name: "Home", id: "hero" },
      { name: "Services", id: "services" },
      { name: "Team", id: "team" },
      { name: "Contact", id: "contact" },
    ],
    logoAlt: "Rato Topi Logo",
    menuLabel: "MENU",
  },
  hero: {
    title: "Engineering",
    titleAccent: "डिजिटल",
    titleSuffix: "Solutions with Precision.",
    subtitle: "We build fast, scalable and user-centric digital products that solve complex engineering problems for leading businesses and startups.",
    buttons: [
      { text: "START A PROJECT", link: "#contact" },
      { text: "VIEW OUR WORK", link: "#services" },
    ],
  },
  services: {
    items: [
      {
        id: 1,
        title: "CLOUD\nSOLUTIONS",
        icon: Cloud,
      },
      {
        id: 2,
        title: "GLOBAL SOFTWARE\nDEVELOPMENT",
        icon: Globe,
      },
      {
        id: 3,
        title: "CYBERSECURITY &\nNETWORK DEPLOYMENT",
        icon: ShieldCheck,
      },
      {
        id: 4,
        title: "DATA ANALYTICS\n& INSIGHTS",
        icon: BarChart3,
      },
    ],
    watermarkAlt: "Watermark",
  },
  team: {
    title: "The Power of Five.",
    members: [
      {
        id: 1,
        name: "Bibek Parajuli",
        role: "Fullstack Developer & Tech Lead",
        bio: "The bridge between complex architecture and seamless deployment. Orchestrating the full technical lifecycle.",
        image: "/team/bibek.jpg",
      },
      {
        id: 2,
        name: "Prajwal Chaudhary",
        role: "Cybersecurity Expert",
        bio: "Guardian of the digital perimeter. Ensuring every solution is built with an uncompromising security-first mindset.",
        image: "/team/prajwal.jpg",
      },
      {
        id: 3,
        name: "Zubeen Khatiwada",
        role: "Backend Developer",
        bio: "Engineer of the unseen. Crafting the robust, high-performance engines that power Rato Topi’s digital solutions.",
        image: "/team/zubeen.jpg",
      },
      {
        id: 4,
        name: "Shrawan Karki",
        role: "Frontend Developer",
        bio: "Architect of the user experience. Transforming complex logic into beautiful, responsive, and high-speed interfaces.",
        image: "/team/shrawan.jpg",
      },
      {
        id: 5,
        name: "Benjip Pokhrel",
        role: "AI/ML Engineer",
        bio: "Innovator in intelligent systems. Integrating cutting-edge machine learning and automation into the core of our tech stack.",
        image: "/team/benjip.jpg",
      },
    ],
    activeLabel: "Active/Online",
  },
  footer: {
    contactLabel: "Contact",
    socialLabel: "Social Media",
    contact: {
      website: "www.ratotopi.com",
      phone: "+4123 254 5587",
    },
    socials: [
      { platform: "Facebook", handle: "@rato_topi_io", icon: Facebook, link: "#" },
      { platform: "Instagram", handle: "@rato_topi", icon: Instagram, link: "#" },
      { platform: "Youtube", handle: "@rato_topi", icon: Youtube, link: "#" },
      { platform: "Twitter", handle: "@rato_topi", icon: Twitter, link: "#" },
    ],
    copyright: "Rato Topi IT Team",
  },
};

