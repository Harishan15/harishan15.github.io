export type CaseStudyMedia = {
  kind: "image" | "video";
  src: string;
  alt: string;
  caption: string;
  poster?: string;
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  stage: string;
  accent: "lime" | "violet" | "coral" | "sky" | "yellow" | "pink" | "mint";
  featured?: boolean;
  overview: string;
  challenge: string;
  role: string;
  contribution: string;
  decisions: string[];
  outcome: string;
  learning: string;
  tools: string[];
  deliverables: string[];
  liveUrl?: string;
  note?: string;
  heroImage?: string;
  heroImageAlt?: string;
  media?: CaseStudyMedia[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "world-holiday-vibes",
    number: "01",
    title: "World Holiday Vibes",
    subtitle: "A flexible UI system for a multi-product holiday platform.",
    category: "Holiday ecosystem",
    period: "2021—Present",
    stage: "Shipped product",
    accent: "lime",
    featured: true,
    overview:
      "World Holiday Vibes brings hotels, packages, activities, destination content and promotional offers into one customer journey. My work focused on making that breadth feel coherent rather than fragmented.",
    challenge:
      "Holiday planning quickly becomes dense: destinations, dates, rooms, activities, offers and payment choices all compete for attention. The interface needed to support several products without making every page feel like a different website.",
    role:
      "Lead UI/UX Engineer responsible for visual direction, responsive product UI and frontend quality across the customer journey.",
    contribution:
      "I shaped typography, theme rules, homepage composition, search patterns and the responsive booking interfaces. I carried the system through discovery, results, enquiry, promotion and payment touchpoints with the frontend team.",
    decisions: [
      "Created modular search and content patterns that could stretch across several travel products.",
      "Prioritised essential booking inputs on mobile while retaining useful comparison context.",
      "Used progressive disclosure to keep complex options readable and actionable.",
      "Standardised repeated interface states so new pages could inherit a familiar visual language.",
    ],
    outcome:
      "The product gained a more consistent interface foundation and reusable patterns that could support iterative releases across hotels, packages, activities and offers.",
    learning:
      "A large travel platform does not need one rigid template. It needs a small set of strong rules that can flex without losing recognition.",
    tools: ["Figma", "Next.js", "React", "Material UI", "REST APIs"],
    deliverables: [
      "Homepage direction",
      "Search experiences",
      "Results and detail UI",
      "Enquiry and payment flows",
      "Responsive component patterns",
    ],
    liveUrl: "https://www.worldholidayvibes.com/",
    note:
      "The live product continues to evolve. This case study describes my contribution to its design and frontend foundation.",
  },
  {
    slug: "world-cruise-vibes",
    number: "02",
    title: "World Cruise Vibes",
    subtitle: "Making a complex cruise catalogue feel clear and inviting.",
    category: "Cruise discovery",
    period: "Selected work",
    stage: "Shipped product",
    accent: "violet",
    featured: true,
    overview:
      "Cruise discovery combines inspiration with a large amount of structured data. The experience needed to help travellers compare routes, operators, ports and dates without losing the emotional appeal of the journey.",
    challenge:
      "Cruise products carry unusually rich information—from regions and embarkation ports to dates, cruise lines, ships and itinerary details. Showing everything at once would make the flow difficult to scan.",
    role:
      "Lead UI/UX Engineer shaping the theme, discovery experience and responsive interface direction.",
    contribution:
      "I designed the core search and browsing experience, including filter hierarchy, results-card patterns and the path from exploration into enquiry.",
    decisions: [
      "Separated primary search criteria from optional filters to reduce the initial decision load.",
      "Designed cards to balance itinerary context, price cues and the next action.",
      "Preserved comparison value when the interface collapsed onto smaller screens.",
      "Used a consistent hierarchy for cruise line, ship, region and sailing information.",
    ],
    outcome:
      "The resulting direction supports focused cruise discovery while leaving room for destination imagery, deals and richer itinerary information.",
    learning:
      "For complex comparison products, hierarchy matters more than simply reducing the amount of information.",
    tools: ["Figma", "Next.js", "React", "Material UI"],
    deliverables: [
      "Theme direction",
      "Cruise search",
      "Filter system",
      "Result cards",
      "Enquiry journey",
    ],
    liveUrl: "https://www.worldcruisevibes.com/",
    note:
      "The live product may contain later refinements. The case study focuses on the interface system and flows I contributed.",
  },
  {
    slug: "sri-lanka-holiday-vibes",
    number: "03",
    title: "Sri Lanka Holiday Vibes",
    subtitle: "A destination-first experience for tailor-made island travel.",
    category: "Destination travel",
    period: "Earlier direction",
    stage: "Earlier design",
    accent: "coral",
    featured: true,
    overview:
      "This product needed to sell both the emotion of Sri Lanka and the practical value of tailor-made packages. The interface had to connect inspiration with a clear route into enquiry.",
    challenge:
      "A destination site can easily become a stream of beautiful content without a strong commercial journey. Packages, hotels, places and guides needed to feel connected rather than stacked.",
    role:
      "UI/UX Engineer responsible for an earlier homepage and product direction based on the supplied business requirements.",
    contribution:
      "I shaped the homepage, package discovery and responsive UI patterns, balancing destination storytelling with practical trip-planning actions.",
    decisions: [
      "Placed clear package and enquiry paths alongside inspirational destination content.",
      "Created scannable sections for deals, places, hotels and travel guidance.",
      "Designed mobile layouts around fast browsing and low-friction enquiry.",
      "Used reusable card structures to keep varied destination content consistent.",
    ],
    outcome:
      "The earlier direction established a coherent foundation connecting destination inspiration with practical holiday planning.",
    learning:
      "Travel inspiration becomes useful product design only when every story has an obvious next step.",
    tools: ["Figma", "Next.js", "React", "Material UI"],
    deliverables: [
      "Homepage",
      "Package discovery",
      "Destination cards",
      "Hotel content patterns",
      "Mobile UI",
    ],
    liveUrl: "https://www.srilankaholidayvibes.com/",
    note:
      "The site was later redesigned. The current live interface is not presented as my design; this case study documents my earlier contribution.",
  },
  {
    slug: "world-flight-vibes",
    number: "04",
    title: "World Flight Vibes",
    subtitle: "A direct, responsive route from flight search to booking.",
    category: "Flight booking",
    period: "2021—Present",
    stage: "Shipped product",
    accent: "sky",
    overview:
      "World Flight Vibes serves travellers who want a clear way to search, compare and continue into a flight booking journey.",
    challenge:
      "Flight search forms contain many dependent choices—trip type, airports, dates, travellers, rooms and cabin class. On mobile, those inputs can quickly become crowded.",
    role:
      "Lead UI/UX Engineer contributing homepage direction, booking-flow UI and responsive frontend delivery.",
    contribution:
      "I shaped the theme, homepage composition, search form and key booking interfaces, translating dense travel inputs into reusable product patterns.",
    decisions: [
      "Grouped related flight inputs and gave the most important actions a clear reading order.",
      "Designed responsive input states that work without shrinking tap targets.",
      "Created repeatable summary patterns for the transition from search to results.",
      "Kept promotional content visually separate from core booking actions.",
    ],
    outcome:
      "A clearer interface foundation for flight discovery and the downstream booking experience across desktop and mobile.",
    learning:
      "Search forms feel simpler when the order of decisions mirrors how a traveller naturally plans a trip.",
    tools: ["Figma", "Next.js", "React", "Material UI"],
    deliverables: [
      "Homepage",
      "Flight search",
      "Booking-flow UI",
      "Responsive states",
      "Promotion patterns",
    ],
    liveUrl: "https://www.worldflightvibes.com/",
    note:
      "The live product may have evolved through later releases; this summary focuses on my contribution.",
  },
  {
    slug: "vibes-group-uk",
    number: "05",
    title: "Vibes Group UK",
    subtitle: "One parent-brand experience for a growing travel ecosystem.",
    category: "Corporate platform",
    period: "Selected work",
    stage: "Shipped product",
    accent: "yellow",
    overview:
      "Vibes Group UK is the parent brand connecting multiple specialist travel businesses. Its homepage needed to explain the group while still helping visitors reach useful travel services.",
    challenge:
      "The corporate story, booking tools and brand portfolio all needed space on one homepage without creating a disconnected collection of sections.",
    role:
      "Lead UI/UX Engineer responsible for homepage and theme design, working with the in-house product team.",
    contribution:
      "I created the homepage direction, typography hierarchy, section system and booking-entry patterns used to connect the group story with its consumer brands.",
    decisions: [
      "Made the booking entry point part of the brand story rather than a separate utility.",
      "Designed a modular section rhythm for brands, services, support and trust content.",
      "Created a clear hierarchy between parent-brand information and individual products.",
      "Used repeatable content blocks so the page could grow without losing structure.",
    ],
    outcome:
      "A unified parent-brand experience that can introduce the group, route visitors into travel services and showcase its brand ecosystem.",
    learning:
      "A corporate homepage is most useful when it explains the organisation through the products customers can actually use.",
    tools: ["Figma", "Next.js", "React", "Material UI"],
    deliverables: [
      "Homepage direction",
      "Theme and typography",
      "Brand portfolio UI",
      "Booking entry",
      "Responsive layout",
    ],
    liveUrl: "https://www.vibesgroupuk.com/",
  },
  {
    slug: "low-cost-vibes",
    number: "06",
    title: "Low Cost Vibes",
    subtitle: "Value-led travel interfaces within the Vibes ecosystem.",
    category: "Budget travel",
    period: "Selected work",
    stage: "Product contribution",
    accent: "mint",
    overview:
      "Low Cost Vibes focuses on accessible travel offers. My contribution sat within the wider shared frontend and product-design system used by the Vibes travel brands.",
    challenge:
      "A value-led product needs to communicate price and promotions clearly without making every screen feel noisy or overly sales-driven.",
    role:
      "UI/UX and frontend contributor within the in-house Vibes Group UK product team.",
    contribution:
      "I contributed responsive travel interfaces and shared patterns that supported search, promotional content and booking journeys.",
    decisions: [
      "Kept deal emphasis strong while protecting hierarchy and readability.",
      "Reused familiar booking patterns across the broader product ecosystem.",
      "Designed responsive cards and sections for quick scanning.",
      "Separated urgency messaging from essential booking information.",
    ],
    outcome:
      "A consistent contribution to the group’s shared product language, adapted for a value-focused travel brand.",
    learning:
      "Price can be visually prominent without becoming the only piece of information a customer can see.",
    tools: ["Figma", "Next.js", "React", "Material UI"],
    deliverables: [
      "Responsive interfaces",
      "Search patterns",
      "Offer presentation",
      "Shared components",
    ],
    liveUrl: "https://www.lowcostvibes.com/",
  },
  {
    slug: "world-pinoy-flights",
    number: "07",
    title: "World Pinoy Flights",
    subtitle: "An earlier flight-booking direction for a specialist audience.",
    category: "Flight booking",
    period: "Earlier contribution",
    stage: "Archive",
    accent: "pink",
    overview:
      "World Pinoy Flights is a specialist travel brand within Vibes Group UK. I contributed an earlier UI direction before the product moved into a later redesign.",
    challenge:
      "The experience needed to bring a specialist brand identity into familiar flight-search and booking patterns.",
    role:
      "UI/UX Engineer contributing design direction and interface work for an earlier product version.",
    contribution:
      "I worked on the earlier theme and booking-interface direction, creating product UI within the shared travel ecosystem.",
    decisions: [
      "Kept flight-search behaviour familiar while giving the brand its own visual character.",
      "Used established group patterns to reduce unnecessary interaction differences.",
      "Considered responsive behaviour from the first interface direction.",
    ],
    outcome:
      "An earlier design contribution that supported the product before a subsequent redesign by another UI/UX engineer.",
    learning:
      "Good portfolio attribution includes the handoff: products keep evolving after an individual designer’s contribution ends.",
    tools: ["Figma", "Next.js", "React"],
    deliverables: ["Earlier theme direction", "Flight-search UI", "Responsive interface work"],
    liveUrl: "https://www.worldpinoyflights.com/",
    note:
      "The current live design was created later by another UI/UX engineer. It is linked only for product context and is not claimed as my work.",
  },
  {
    slug: "visual-influences",
    number: "08",
    title: "Visual Influences",
    subtitle: "A focused static website for an in-house creative agency.",
    category: "Creative agency",
    period: "Selected work",
    stage: "Static website",
    accent: "violet",
    overview:
      "Visual Influences is a graphic-design agency within the wider company group. The site needed to act as a clear, visual introduction to its creative services.",
    challenge:
      "A small static site still needs strong pacing, hierarchy and responsiveness to feel intentional rather than like a collection of portfolio tiles.",
    role:
      "UI/UX and frontend contributor responsible for the static website experience.",
    contribution:
      "I shaped the page structure and responsive visual presentation for the agency’s online presence.",
    decisions: [
      "Kept the information architecture focused around services and creative work.",
      "Used visual rhythm to give a static site a sense of progression.",
      "Designed layouts that retain hierarchy across desktop and mobile.",
    ],
    outcome:
      "A concise brand site that communicates the agency’s visual focus without unnecessary product complexity.",
    learning:
      "Small websites benefit from the same system thinking as large products—especially when content changes over time.",
    tools: ["Figma", "Next.js", "React", "CSS"],
    deliverables: ["Information architecture", "Visual direction", "Responsive static pages"],
  },
  {
    slug: "transportation-booking",
    number: "09",
    title: "Transportation Booking",
    subtitle: "Extending a travel design system into a new product line.",
    category: "Outsourced product",
    period: "Project contribution",
    stage: "Client work",
    accent: "sky",
    overview:
      "This outsourced engagement expanded the team’s booking experience beyond the core Vibes travel brands into transportation.",
    challenge:
      "The product needed its own journey while still benefiting from established booking patterns and responsive behaviour.",
    role:
      "UI/UX and frontend contributor within the product team.",
    contribution:
      "I contributed to adapting the existing design system and booking patterns for a new transportation use case.",
    decisions: [
      "Reused proven interaction patterns where the customer decisions were equivalent.",
      "Adjusted the information hierarchy for transportation-specific inputs.",
      "Protected responsive behaviour while introducing a new product structure.",
    ],
    outcome:
      "The design system expanded into a new booking category without starting every interface pattern from zero.",
    learning:
      "A mature design system should accelerate a new product while still leaving room for genuinely different user decisions.",
    tools: ["Figma", "React", "Responsive design"],
    deliverables: ["Booking-flow adaptation", "Responsive UI", "Design-system extension"],
    note:
      "Client and product details are kept intentionally high level.",
  },
  {
    slug: "drawing-robot",
    number: "10",
    title: "Drawing Robot",
    subtitle: "Turning digital coordinates into physical pen strokes at 17.",
    category: "IoT / physical computing",
    period: "2017",
    stage: "Working prototype",
    accent: "lime",
    overview:
      "For a school exhibition, I designed and built a two-axis drawing machine that converted a digital design into controlled pen movement on paper.",
    challenge:
      "The machine had to move a pen accurately across two axes using a hand-built frame, motors and mechanical guides. Small alignment and calibration errors became visible immediately in the drawing.",
    role:
      "Independent student project: concept, mechanical build, electronics, calibration, testing and exhibition presentation.",
    contribution:
      "I built the structure, connected the motion system, configured drawing parameters and iterated through failed attempts until the robot could reproduce my school crest with a pen.",
    decisions: [
      "Used a Cartesian two-axis layout so digital coordinates could map directly to physical movement.",
      "Built an adjustable pen holder to control contact with the paper.",
      "Recorded timing and movement settings during calibration rather than relying on memory.",
      "Treated failed drawings as diagnostic evidence and refined alignment step by step.",
    ],
    outcome:
      "The final prototype successfully plotted the D. S. Senanayake College crest and was presented at the school exhibition.",
    learning:
      "This project taught me the habit that still shapes my product work: prototype, observe the failure, adjust the system and try again.",
    tools: ["Mechanical fabrication", "Stepper motors", "Servo control", "2D coordinates", "Iterative testing"],
    deliverables: [
      "Working drawing machine",
      "School-crest plot",
      "Calibration notes",
      "Exhibition presentation",
    ],
    heroImage: "/media/drawing-robot/hero.jpg",
    heroImageAlt: "Harishan's colourful drawing robot plotting on paper",
    media: [
      {
        kind: "image",
        src: "/media/drawing-robot/machine.jpg",
        alt: "Front view of the hand-built drawing robot",
        caption: "The finished two-axis frame and pen mechanism.",
      },
      {
        kind: "image",
        src: "/media/drawing-robot/overhead.jpg",
        alt: "Overhead view of the drawing robot and calibration notes",
        caption: "Calibration settings stayed beside the machine during testing.",
      },
      {
        kind: "video",
        src: "/media/drawing-robot/failing-attempt.mp4",
        poster: "/media/drawing-robot/testing.jpg",
        alt: "A failed drawing attempt during robot calibration",
        caption: "Failure was part of the method: this attempt exposed alignment problems.",
      },
      {
        kind: "video",
        src: "/media/drawing-robot/success-attempt.mp4",
        poster: "/media/drawing-robot/school-logo.jpg",
        alt: "The drawing robot successfully plotting the school crest",
        caption: "The successful run plotting the detailed school crest.",
      },
      {
        kind: "image",
        src: "/media/drawing-robot/school-logo.jpg",
        alt: "School crest drawn in blue pen by the drawing robot",
        caption: "The final plotted result.",
      },
      {
        kind: "image",
        src: "/media/drawing-robot/archive.jpg",
        alt: "Archived social post showing the drawing robot at the school exhibition",
        caption: "An archive from the 2017 school exhibition.",
      },
    ],
  },
  {
    slug: "society-editorial-design",
    number: "11",
    title: "Society Editorial & Event Design",
    subtitle: "Visual systems for school publications, events and competitions.",
    category: "Graphic design",
    period: "2017",
    stage: "Early design work",
    accent: "yellow",
    overview:
      "Chief-editor responsibilities across school societies gave me an early opportunity to shape event and publication material for very different audiences.",
    challenge:
      "Each society had its own subject, language and visual character, while every piece still needed to communicate practical event or publication information clearly.",
    role:
      "Chief editor and visual-design contributor across the Hindu Society, Photography Society and Tamil Literary Association.",
    contribution:
      "I worked on souvenir covers, competition material, event posters and supporting visual communication.",
    decisions: [
      "Adapted typography and illustration choices to the cultural context of each society.",
      "Used strong limited palettes to create recognisable event identities.",
      "Balanced expressive artwork with practical dates, categories and submission information.",
      "Designed for both cover impact and quick poster readability.",
    ],
    outcome:
      "A collection of event and editorial material that shows the beginning of my interest in hierarchy, visual systems and audience-specific communication.",
    learning:
      "Before I designed interfaces, editorial work taught me that people need a clear entry point, a reading order and a memorable visual idea.",
    tools: ["Graphic design", "Typography", "Editorial layout", "Event communication"],
    deliverables: [
      "Souvenir covers",
      "Competition poster",
      "Event artwork",
      "Identity applications",
    ],
    heroImage: "/media/early-design/bairavi-cover.jpg",
    heroImageAlt: "Yellow Bairavi 2017 Hindu Society souvenir cover",
    media: [
      {
        kind: "image",
        src: "/media/early-design/bairavi-cover.jpg",
        alt: "Bairavi 2017 souvenir cover in yellow and black",
        caption: "Hindu Society souvenir cover.",
      },
      {
        kind: "image",
        src: "/media/early-design/refraction-poster.jpg",
        alt: "Refraction 2017 photography competition poster",
        caption: "Photography Society competition poster.",
      },
      {
        kind: "image",
        src: "/media/early-design/kalai-vizha-poster.jpg",
        alt: "Kalai Vizha 2017 Tamil event poster",
        caption: "Tamil Literary Association event poster.",
      },
      {
        kind: "image",
        src: "/media/early-design/magudam-cover.jpg",
        alt: "Magudam 2017 monochrome souvenir cover",
        caption: "Tamil Literary Association souvenir cover.",
      },
      {
        kind: "image",
        src: "/media/early-design/hindu-event-card.jpg",
        alt: "Hindu Society interschool competitions event card",
        caption: "Hindu Society event credential and identity application.",
      },
    ],
  },
  {
    slug: "advanced-level-cover-designs",
    number: "12",
    title: "Advanced Level Cover Designs",
    subtitle: "Early experiments in concept, composition and visual storytelling.",
    category: "Graphic design",
    period: "School years",
    stage: "Early design archive",
    accent: "coral",
    overview:
      "These Advanced Level project covers explored how a single image, title and typographic system could establish a subject before the reader opened the report.",
    challenge:
      "The covers needed to make academic subjects visually engaging while still behaving like formal project submissions.",
    role:
      "Student visual designer creating cover concepts for Advanced Level projects.",
    contribution:
      "I combined found imagery, illustration, typography and structured framing to create distinct cover directions for robotics and health topics.",
    decisions: [
      "Used a monochrome mechanical portrait to frame the robotics topic as a question about people and machines.",
      "Built the health cover from repeated anatomical and botanical imagery around a restrained palette.",
      "Kept academic context visible while giving the central topic stronger visual weight.",
    ],
    outcome:
      "A small archive showing my early interest in concept-led graphic design and the relationship between subject matter and visual tone.",
    learning:
      "A cover is a compact interface: it has seconds to communicate subject, mood and hierarchy.",
    tools: ["Graphic composition", "Typography", "Image treatment", "Cover layout"],
    deliverables: ["Robotics project cover", "Health project cover"],
    heroImage: "/media/early-design/robot-cover.jpg",
    heroImageAlt: "Monochrome Advanced Level project cover titled The rise of the Robots",
    media: [
      {
        kind: "image",
        src: "/media/early-design/robot-cover.jpg",
        alt: "The rise of the Robots project cover",
        caption: "Robotics-themed Advanced Level project cover.",
      },
      {
        kind: "image",
        src: "/media/early-design/health-cover.jpg",
        alt: "Non Communicable Diseases project cover",
        caption: "Health-themed Advanced Level project cover.",
      },
    ],
  },
  {
    slug: "gym-saas-platform",
    number: "13",
    title: "Gym SaaS Platform",
    subtitle: "A multi-tenant management product growing into full-stack development.",
    category: "Personal product",
    period: "In development",
    stage: "Ongoing",
    accent: "violet",
    overview:
      "This personal project is a multi-tenant gym-management web application and a practical space for extending my frontend experience into broader product architecture.",
    challenge:
      "Gym owners, staff and members need different views of shared operational data, which makes roles, navigation and information architecture central to the product.",
    role:
      "Independent product designer and developer.",
    contribution:
      "I am shaping the product structure and building the interface in React and Next.js while developing the backend fundamentals needed for a full-stack SaaS product.",
    decisions: [
      "Treat role and tenancy boundaries as product-architecture decisions, not late permissions.",
      "Build repeatable management patterns for records, status and actions.",
      "Use the project to connect UI decisions with data and backend behaviour.",
    ],
    outcome:
      "An active learning product that turns full-stack study into a concrete system rather than isolated tutorials.",
    learning:
      "The best way to expand beyond UI is to own a product problem whose interface depends on sound data and system decisions.",
    tools: ["React", "Next.js", "MERN stack", "Product architecture"],
    deliverables: ["Product structure", "Multi-tenant UI", "Management workflows", "Frontend build"],
    note:
      "This product is in development. Screens and technical details will be added as the system reaches a presentable milestone.",
  },
  {
    slug: "bicycle-booking-app",
    number: "14",
    title: "Bicycle Booking App",
    subtitle: "A documented rental and booking concept.",
    category: "Personal product",
    period: "Design phase",
    stage: "Concept",
    accent: "mint",
    overview:
      "The Bicycle Booking App is a documented product concept exploring how customers discover, reserve and manage short-term bicycle rentals.",
    challenge:
      "A rental journey needs to make availability, location, duration, bicycle type and booking status understandable with minimal friction.",
    role:
      "Independent product designer responsible for concept definition and product specification.",
    contribution:
      "I documented the product idea and mapped the key booking requirements as a foundation for future design and development.",
    decisions: [
      "Start from the complete rental journey rather than isolated screens.",
      "Treat location and availability as primary booking decisions.",
      "Define the product behaviour before polishing a visual direction.",
    ],
    outcome:
      "A structured concept ready to move from requirements into wireframes and an interactive prototype.",
    learning:
      "A well-specified concept reduces visual rework because the essential states and decisions are already visible.",
    tools: ["Product definition", "Booking-flow mapping", "UX specification"],
    deliverables: ["Product concept", "Feature specification", "Booking-flow outline"],
    note:
      "This project is currently documented and specified; interface visuals will follow in the next phase.",
  },
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
