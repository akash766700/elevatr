import { HomeSlideData, NavItem } from "@/utils/type";

export const HOME_SLIDES: HomeSlideData[] = [
  {
    id: 1,
    image: "/Home/section_1.png",
    headline: ["YOUR CAREER IS", "MORE THAN A PDF"],
    subheading: "LESS GUESSWORK. MORE PROOF.",
    description:
      "You have the skills. You did the work. You have the receipts. Now let’s make sure your next opportunity sees the whole picture.",
    showScrollPrompt: true,
  },
  {
    id: 2,
    image: "/Home/section_2.png",
    headline: ["SAME OLD PORTALS,", "SAME OLD SCROLL."],
    subheading: "OUR CAREER DESERVES A PLOT TWIST.",
    description:
      "Another profile. Another job listing. Another “we’ll get back to you.” Yeah, we thought there had to be a better way.",
    showScrollPrompt: false,
  },
  {
    id: 3,
    image: "/Home/section_3.png",
    headline: ["YOU’RE NOT YOUR", "LAST JOB TITLE."],
    subheading: "MAKE YOUR EXPERIENCE MAKE SENSE",
    description:
      "Your skills, projects, experience and potential deserve more than a two-page document and a prayer. Build a Career Identity that actually shows what you bring to the table.",
    showScrollPrompt: false,
  },
  {
    id: 4,
    image: "/Home/section_4.png",
    headline: ["“EASY APPLY” SHOULDN'T", "MEAN “EASY TO IGNORE.”"],
    subheading: "FIND ROLES THAT GET YOU",
    description:
      "Find roles that fit your skills, experience and ambitions. And get the why behind the match — because “your profile looks interesting” isn't exactly an explanation.",
    showScrollPrompt: false,
  },
  {
    id: 5,
    image: "/Home/section_5.png",
    headline: ["YOUR APPLICATION ISN'T", "A SITUATIONSHIP."],
    subheading: "KNOW WHERE YOU STAND",
    description:
      "Applied. Waited. Refreshed. Nothing. Where application updates are available, Elevatr helps you follow your journey without turning your inbox into a full-time job.",
    showScrollPrompt: false,
  },
];

export const NAV_LINKS: NavItem[] = [
  { number: "01", label: "Home", href: "/", tag: "Index", description: "Back to the beginning" },
  { number: "02", label: "Product", href: "/product", tag: "Platform", description: "How career proof works" },
  { number: "03", label: "Contact", href: "mailto:hello@elevatr.in", tag: "Connect", description: "Partner or talk to our team" },
];


