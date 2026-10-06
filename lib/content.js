export const site = {
  name: "UK Freshers Guide",
  city: "United Kingdom",
  email: "hello@ukfreshers.guide",
  phone: "01632 960 441",
  address: "United Kingdom",
  blurb:
    "A welcome-week guide. Pick a city, then find events, groups, and sign-up notes for the term.",
};

export const cities = [
  "Aberdeen",
  "Aberystwyth",
  "Bangor",
  "Bath",
  "Belfast",
  "Birmingham",
  "Bournemouth",
  "Brighton",
  "Bristol",
  "Cambridge",
  "Canterbury",
  "Cardiff",
  "Chester",
  "Coventry",
  "Derby",
  "Dundee",
  "Durham",
  "Edinburgh",
  "Essex",
  "Exeter",
  "Falmouth",
  "Glasgow",
  "Gloucestershire",
  "Hanley",
  "Hertfordshire",
  "Huddersfield",
  "Hull",
  "Keele",
  "Kent",
  "Kingston",
  "Lancaster",
  "Leeds",
  "Leicester",
  "Lincoln",
  "Liverpool",
  "London",
  "Loughborough",
  "Manchester",
  "Newcastle",
  "Northampton",
  "Norwich",
  "Nottingham",
  "Oxford",
  "Plymouth",
  "Portsmouth",
  "Preston",
  "Reading",
  "Sheffield",
  "Southampton",
  "Stirling",
  "Staffordshire",
  "Surrey",
  "Swansea",
  "Uxbridge",
  "Warwick",
  "Windsor",
  "Wolverhampton",
  "York",
].map((name) => ({
  name,
  slug: name.toLowerCase().replace(/[^a-z]+/g, "-"),
}));

export function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}

export const colleges = [
  { slug: "harbour-college", name: "Harbour College" },
  { slug: "east-wharf", name: "East Wharf University" },
  { slug: "lantern-institute", name: "Lantern Institute" },
  { slug: "quay-school", name: "Quay School of Art" },
  { slug: "north-pier", name: "North Pier Business" },
  { slug: "saltmarket", name: "Saltmarket University" },
  { slug: "beacon-poly", name: "Beacon Polytechnic" },
  { slug: "glasshouse", name: "Glasshouse Conservatoire" },
  { slug: "dry-dock", name: "Dry Dock Halls" },
  { slug: "pilot-house", name: "Pilot House Residences" },
  { slug: "mariner-court", name: "Mariner Court" },
  { slug: "signal-yard", name: "Signal Yard Studios" },
];

export const events = [
  {
    slug: "lse-sports-night-xoyo",
    title: "LSE AU Presents 💃 The Official LSE Sports Night RELAUNCH : XOYO London 🫶",
    date: "Wed 7 Oct at 10:00 pm",
    place: "XOYO, 32-37 Cowper St, London EC2A 4AP",
    kicker: "Sports night",
    tone: "ink",
    ticket:
      "https://www.fatsoma.com/e/p2yoijcj/lse-au-presents-the-official-lse-sports-night-relaunch-xoyo-london",
    summary:
      "LSE Athletics Union sports night at XOYO. Doors at 10 pm. Last entry depends on the ticket: 11 pm, midnight, or 1 am. You must be 18 or over and bring ID.",
    details: [
      "XOYO, 32-37 Cowper St, London EC2A 4AP.",
      "For LSE students and their guests.",
      "Music on the night covers commercial hits, hip hop, grime, garage, and R&B.",
    ],
  },
  {
    slug: "a-level-results-day-party-2027",
    title: "The A-Level Results Day Party 2027 🌍 Ministry of Sound London 🔥",
    date: "Thu 12 Aug 2027 at 10:00 pm",
    place: "Ministry of Sound, 103 Gaunt St, London SE1 6DP",
    kicker: "Results night",
    tone: "stripe",
    ticket:
      "https://www.fatsoma.com/e/4w7uvrkx/the-a-level-results-day-party-2027-ministry-of-sound-london",
    summary:
      "Results night at Ministry of Sound, hosted by Milkshake. The night runs from 10 pm until 4 am. Last entry is 2 am. You must be 18 or over and bring ID.",
    details: [
      "Ministry of Sound, 103 Gaunt Street, Elephant and Castle, London SE1 6DP.",
      "Nearest tube is Elephant & Castle.",
      "Five rooms, covering house, hip hop, drum and bass, R&B, and UK garage.",
    ],
  },
];

export function getEvent(slug) {
  return events.find((event) => event.slug === slug);
}
