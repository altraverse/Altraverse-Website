export const MOBILE_BREAKPOINT = 991.98;
export const COMPACT_ACCORDION_BREAKPOINT = 767.98;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#expertise", label: "Expertise" },
  { href: "#values", label: "Values" },
  { href: "#team", label: "Team" },
];

export const missionItems = [
  {
    icon: "bi-compass",
    title: "Our Mission",
    content:
      "To solve meaningful problems with beautiful, responsible technology that improves lives at scale.",
  },
  {
    icon: "bi-eye",
    title: "Our Vision",
    content:
      "A world where innovation serves humanity as a bridge to greater potential, not a barrier to it.",
  },
  {
    icon: "bi-lightbulb",
    title: "Innovation",
    content:
      "Forward-thinking systems, refined experiences, and thoughtful execution with premium attention to detail.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Long-Term Impact",
    content:
      "Products engineered for sustainability, scalability, and lasting value across evolving digital ecosystems.",
  },
];

export const expertiseItems = [
  {
    title: "AI Driven Products",
    content:
      "Intelligent systems with practical automation, strong UX, and clear human oversight at the core.",
  },
  {
    title: "Web & Mobile Platforms",
    content:
      "High-performance interfaces with premium visual language across desktop, tablet, and mobile.",
  },
  {
    title: "Scalable Ecosystems",
    content:
      "Enterprise-ready digital foundations built to grow cleanly with your vision and operations.",
  },
  {
    title: "Human-Centered Tech",
    content:
      "Accessible, inclusive, and emotionally intelligent design choices that keep people first.",
  },
];

export const valueItems = [
  {
    index: "01",
    title: "Humanity First",
    content: "Technology is a means to elevate people, not an end in itself.",
  },
  {
    index: "02",
    title: "Ethical Innovation",
    content: "We move fast with responsibility, transparency, and care.",
  },
  {
    index: "03",
    title: "Long-Term Thinking",
    content: "We build for future resilience, not short-lived digital noise.",
    featured: true,
  },
  {
    index: "04",
    title: "Excellence Always",
    content: "Every interaction should feel intentional, refined, and trusted.",
  },
];

export const founders = [
  {
    badge: "MEET THE FOUNDER",
    name: "Ronit Nagose",
    role: "Founder, CEO",
    quote:
      "We stand at a crossroads in human history. Altraverse chooses the path where technology acts as a force for clarity, capability, and collective progress.",
    revealClass: "",
    socials: [
      {
        href: "https://instagram.com/ronitnagose/",
        label: "Instagram",
        icon: "bi-instagram",
      },
      {
        href: "https://www.linkedin.com/in/ronit-nagose-78911a343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        label: "LinkedIn",
        icon: "bi-linkedin",
      },
      {
        href: "https://x.com/ronitnagos18?s=21",
        label: "X",
        icon: "bi-twitter-x",
      },
    ],
  },
  {
    badge: "MEET THE CO-FOUNDER",
    name: "Sanchay Wankhede",
    role: "Co-Founder, COO",
    quote:
      "Strong brands are shaped by disciplined strategy and bold design. We build both together so businesses can lead with confidence.",
    revealClass: "reveal-delay-1",
    socials: [
      {
        href: "https://www.linkedin.com/in/sanchaywankhede/",
        label: "LinkedIn",
        icon: "bi-linkedin",
      },
      {
        href: "https://x.com/SanchayWankhede",
        label: "X",
        icon: "bi-twitter-x",
      },
    ],
  },
];

export const initialAccordionState = {
  mission: 0,
  expertise: 0,
  values: 0,
};
