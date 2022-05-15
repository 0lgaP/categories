const s1 = [
  "drag on a dime",
  "gold",
  "personal style",
  "viva glam model",
  "drag sister makeover",
  "bathing suit",
  "absolut gown",
  "executive realness",
  "best drag",
];

const s2 = [
  "gone with the window",
  "high class drag",
  "country drag",
  "personal style",
  "wedding dress",
  "rockstar",
  "book launch party",
  "drag mother makeover",
  "teen awards",
  "press awards",
  "hollywood red carpet",
  "best drag",
];

const s3 = [
  "christmas drag",
  "futuristic",
  "favorite body part",
  "fabulous drag",
  "favorite drag look",
  "cake couture",
  "comedy outfit",
  "patriotic drag",
  "music performance",
  "past era hairstyle",
  "red carpet",
  "hair ball look",
  "jock makeover",
  "money dress",
  "swimsuit",
  "cocktail dress",
  "best drag",
];

const s4 = [
  "apolcalyptic",
  "girly girl",
  "platinum and gold",
  "red carpet drag",
  "dress to impress",
  "boat look",
  "magazine cover",
  "frenemies",
  "inaugural ball gown",
  "pregnant makeover",
  "daytime dog park",
  "dog in a purse",
  "canine couture",
  "best drag",
];

const s5 = [
  "rupaullywood",
  "best drag",
  "pretty in pink",
  "divalicious",
  "deadliest snatch",
  "favourite body part",
  "rupaul roast",
  "scent of a drag queen",
  "telenovela realness",
  "makeover looks",
  "executive realness",
  "sweet 16",
  "candy couture"
];

const s6 = [
  "tv shows",
  "party boxes",
  "best drag",
  "tony awards",
  "night of 1000 rupauls",
  "crazy sexy cool",
  "comedy standup",
  "animal kingdom",
  "drag my wedding",
  "banjie girl",
  "executive realness",
  "jewel looks",
];

const s7 = [
  "summer looks",
  "fall looks",
  "born naked",
  "jet set eleganza",
  "bearded",
  "green",
  "leather and lace",
  "conjoined queens",
  "ugly drag",
  "half man, half woman",
  "hello kitty",
  "hello kitty friend looks",
];

const s8 = [
  "redoing runways",
  "movie premiere",
  "roller girl",
  "neon",
  "madonna",
  "wizard of oz",
  "black and white",
  "baby drag",
  "mother looks",
  "book dress",
];

const s9 = [
  "hometown looks",
  "gaga looks",
  "white party",
  "drag princess",
  "naughty",
  "nighties",
  "faux fur",
  "madonna looks",
  "big hair",
  "comedy standup",
  "club kid couture",
  "makeover looks",
  "rainbow",
  "unicorn",
  "village people",
];

const s10 = [
  "veriety store couture",
  "verybest drag",
  "feathers",
  "denim and diamonds",
  "hats incredible",
  "mermaid fantasy",
  "glitterific",
  "silver foxy",
  "makeover: social media superstars",
  "best self",
  "evil twin",
  "reunion outfit",
];

const s11 = [
  "look using RuDR legend's materials",
  "what's your sign",
  "fringe",
  "orange alert",
  "trampy trick or treater",
  "witch please!",
  "milf eleganza",
  "all that glitters",
  "organic materials",
  "sequins",
  "face-kini fantasy",
  "caftan realness",
  "makeover eliminated queens",
  "best drag"
];

const s12 = [
  "sparkles",
  "tulle",
  "buttons and bows",
  "lady baller",
  "basketball wife realness",
  "balls to the wall eleganza",
  "planet of the capes",
  "frozen eleganza",
  "night of a thousand michelle visages",
  "black wedding",
  "stars & stripes forever",
  "drag family resemblance",
  "the color purple",
  "eleganza extravaganza",
];

const s13 = [
  "lamé you stay",
  "we're here, we're sheer, get used to it",
  "trains for days",
  "mixed bag",
  "money bags",
  "bag ball eleganza",
  "little black dress",
  "bead it",
  "yellow",
  "gorgeous!",
  "fascinating fascinators",
  "drag dopplegängers",
  "beast couture",
  "haute pockets",
  "drag excellence",
  "red all over",
];
const s14 = [
  "signature show-stopping drag",
  "sickening signature drag",
  "night of a thousand jlo's",
  "spring has sprung look",
  "glamazon primetime",
  "chaps on the runway",
  "heart on",
  "shoulder pads",
  "holy couture",
  "lip sync lalaparuza smackdown",
  "mirror, mirror",
  "tutu much",
  "you're a winner",
  "baby drag",
  "reunion eleganza extravaganza",
  "viva drag vegas"
];

const fullList = s1.concat(
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  s14
);

// List without drag-on-a-dime, best-drag or repeated categories
const s1a = [
  "gold",
  "personal style",
  "viva glam model",
  "drag sister makeover",
  "bathing suit",
  "absolut gown",
  "executive realness",
];

const s2a = [
  "high class drag",
  "country drag",
  "personal style",
  "wedding dress",
  "rockstar",
  "book launch party",
  "drag mother makeover",
  "teen awards",
  "press awards",
];

const s3a = [
  "christmas drag",
  "futuristic",
  "favorite body part",
  "cake couture",
  "comedy outfit",
  "patriotic drag",
  "music performance",
  "past era hairstyle",
  "hair ball look",
  "jock makeover",
  "money dress",
  "cocktail dress",
];

const s4a = [
  "apolcalyptic",
  "girly girl",
  "platinum and gold",
  "dress to impress",
  "boat look",
  "magazine cover",
  "frenemies",
  "inaugural ball gown",
  "pregnant makeover",
  "daytime dog park",
  "dog in a purse",
  "canine couture",
];

const s5a = [
  "rupaullywood",
  "pretty in pink",
  "divalicious",
  "deadliest snatch",
  "favourite body part",
  "scent of a drag queen",
  "telenovela realness",
  "executive realness",
  "sweet 16",
  "candy couture",
];

const s6a = [
  "tv shows",
  "tony awards",
  "night of 1000 rupauls",
  "crazy sexy cool",
  "animal kingdom",
  "drag my wedding",
  "banjie girl",
  "jewel looks",
];

const s7a = [
  "summer looks",
  "fall looks",
  "born naked",
  "jet set eleganza",
  "bearded",
  "green",
  "leather and lace",
  "conjoined queens",
  "ugly drag",
  "half man half woman",
  "hello kitty",
  "hello kitty friend looks",
];

const s8a = [
  "roller girl",
  "neon",
  "madonna",
  "wizard of oz",
  "black and white",
  "baby drag",
  "mother looks",
  "book dress",
];

const s9a = [
  "hometown looks",
  "gaga looks",
  "white party",
  "drag princess",
  "naughty",
  "nighties",
  "faux fur",
  "madonna looks",
  "big hair",
  "club kid couture",
  "rainbow",
  "unicorn",
  "village people",
];

const s10a = [
  "veriety store couture",
  "feathers",
  "denim and diamonds",
  "hats incredible",
  "mermaid fantasy",
  "glitterific",
  "silver foxy",
  "best self",
  "evil twin",
  "reunion outfit"
];

const s11a = [
  "what's your sign",
  "fringe",
  "orange alert",
  "trampy trick or treater",
  "witch please!",
  "milf eleganza",
  "all that glitters",
  "organic materials",
  "sequins",
  "face-kini fantasy",
  "caftan realness"
];

const s12a = [
  "sparkles",
  "tulle",
  "buttons and bows",
  "lady baller",
  "basketball wife realness",
  "balls to the wall eleganza",
  "planet of the capes",
  "frozen eleganza",
  "night of a thousand michelle visages",
  "black wedding",
  "stars & stripes forever",
  "the color purple",
];

const s13a = [
  "lamé you stay",
  "we're here, we're sheer, get used to it",
  "trains for days",
  "mixed bag",
  "money bags",
  "bag ball eleganza",
  "little black dress",
  "bead it",
  "yellow",
  "gorgeous!",
  "fascinating fascinators",
  "drag dopplegängers",
  "beast couture",
  "haute pockets",
  "red all over"
];
const s14a = [
  "night of a thousand jlo's",
  "spring has sprung look",
  "chaps on the runway",
  "heart on",
  "shoulder pads",
  "holy couture",
  "mirror, mirror",
  "tutu much",
  "viva drag vegas",
];

const noDimeList = s1a.concat(
  s2a,
  s3a,
  s4a,
  s5a,
  s6a,
  s7a,
  s8a,
  s9a,
  s10a,
  s11a,
  s12a,
  s13a,
  s14a
);

export { fullList, noDimeList };
