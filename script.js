// Large keyword lists per mood (sample partial)
const moodKeywords = {
  happy: [
    "Apollo 11",
    "Woodstock Festival",
    "Sesame Street",
    "The Beatles",
    "Mister Rogers' Neighborhood",
    "Walt Disney",
    "Pixar",
    "The Sound of Music",
    "Golden Gate Bridge",
    "Peace Corps",
    "Lego",
    "Harry Potter",
    "La Tomatina",
    "Rolling Stones",
    "Super Bowl",
    "Broadway theatre",
    "The Lion King",
    "Up (2009 film)",
    "The Wizard of Oz",
    "Motown",
    "Help! (film)",
    "Yellow Submarine (film)",
    "Abbey Road",
    "Sgt. Pepper's Lonely Hearts Club Band",
    "Rubber Soul",
    "Revolver (Beatles album)",
    "Magical Mystery Tour",
    "Let It Be",
    "Please Please Me",
    "With the Beatles",
    "A Hard Day's Night",
    "Beatles for Sale",
    "Anthology 1",
    "Anthology 2",
    "Anthology 3",
    "Let It Be... Naked",
    "Live at the BBC",
    "Mickey Mouse",
    "Disneyland",
    "Epcot",
    "It's a Small World",
    "Fantasia (1940 film)",
    "Mary Poppins (film)",
    "The Jungle Book (1967 film)",
    "Beauty and the Beast (1991 film)",
    "Aladdin (1992 film)",
    "The Little Mermaid (1989 film)",
    "Toy Story",
    "Finding Nemo",
    "Monsters, Inc.",
    "Inside Out (2015 film)"
  ],
  sad: [
    "Titanic",
    "Anne Frank",
    "The Great Depression",
    "Hiroshima and Nagasaki",
    "Holocaust",
    "Chernobyl disaster",
    "Black Death",
    "September 11 attacks",
    "Trail of Tears",
    "Rwandan genocide",
    "Sinking of the Lusitania",
    "Hurricane Katrina",
    "Assassination of John F. Kennedy",
    "Vietnam War",
    "Dust Bowl",
    "Space Shuttle Challenger disaster",
    "Irish Potato Famine",
    "Auschwitz concentration camp",
    "Syrian civil war",
    "Armenian Genocide",
    "Spanish flu",
    "Siege of Leningrad",
    "Great Fire of London",
    "Partition of India",
    "Nanjing Massacre",
    "Srebrenica massacre",
    "Cambodian genocide",
    "Boston Marathon bombing",
    "Oklahoma City bombing",
    "Sandy Hook Elementary School shooting",
    "Columbine High School massacre",
    "Pulse nightclub shooting",
    "Virginia Tech shooting",
    "Beslan school siege",
    "2004 Indian Ocean earthquake and tsunami",
    "2010 Haiti earthquake",
    "Christchurch mosque shootings",
    "Grenfell Tower fire",
    "2015 Nepal earthquake",
    "2020 Beirut explosion",
    "Westgate shopping mall attack",
    "Manchester Arena bombing",
    "Orlando nightclub shooting",
    "Great Smog of London",
    "2011 Tōhoku earthquake and tsunami",
    "2005 Kashmir earthquake",
    "Boxing Day tsunami",
    "2003 European heat wave",
    "1931 China floods",
    "Great Chinese Famine"
  ],
  mysterious: [
    "Dyatlov Pass incident",
    "Mary Celeste",
    "Bermuda Triangle",
    "Voynich manuscript",
    "Zodiac Killer",
    "Oak Island mystery",
    "Tunguska event",
    "Roswell UFO incident",
    "Somerton Man",
    "Bell Witch",
    "Wow! signal",
    "Loch Ness Monster",
    "Lost Colony of Roanoke",
    "Max Headroom broadcast signal intrusion",
    "Disappearance of Amelia Earhart",
    "Black Dahlia",
    "Salem witch trials",
    "Isdal Woman",
    "Tamam Shud case",
    "Green Children of Woolpit",
    "Dancing Plague of 1518",
    "Babushka Lady",
    "Lead Masks Case",
    "Phaistos Disc",
    "Antikythera mechanism",
    "Bermeja",
    "Circleville letters",
    "Hinterkaifeck murders",
    "Pollock twins",
    "Sodder children disappearance",
    "Winchester Mystery House",
    "YOGTZE case",
    "Ghost ship",
    "Chupacabra",
    "Beast of Gévaudan",
    "Jersey Devil",
    "Mothman",
    "Flatwoods Monster",
    "Hopkinsville Goblins",
    "Loveland frog",
    "Fresno Nightcrawler",
    "Lizard Man of Scape Ore Swamp",
    "Black-eyed children",
    "Bell Witch Cave",
    "Tunguska explosion",
    "Montauk Project",
    "Philadelphia Experiment",
    "Project MKUltra",
    "Area 51",
    "Men in Black"
  ],
  funny: [
    "Monty Python",
    "The Far Side",
    "Mr. Bean",
    "Saturday Night Live",
    "The Three Stooges",
    "Charlie Chaplin",
    "Marx Brothers",
    "Bugs Bunny",
    "The Simpsons",
    "South Park",
    "The Daily Show",
    "Jim Carrey",
    "The Onion",
    "Pee-wee Herman",
    "Rowan & Martin's Laugh-In",
    "Robin Williams",
    "The Muppet Show",
    "Weird Al Yankovic",
    "Seinfeld",
    "Friends (1994 TV series)",
    "The Office (American TV series)",
    "The Big Bang Theory",
    "Parks and Recreation",
    "How I Met Your Mother",
    "Brooklyn Nine-Nine",
    "Arrested Development",
    "Fawlty Towers",
    "The IT Crowd",
    "Cheers (TV series)",
    "Frasier",
    "Modern Family",
    "Curb Your Enthusiasm",
    "30 Rock",
    "Veep (TV series)",
    "The Marvelous Mrs. Maisel",
    "Blackadder",
    "Mr. Show with Bob and David",
    "Chappelle's Show",
    "Key & Peele",
    "Louie (TV series)",
    "Community (TV series)",
    "Family Guy",
    "American Dad!",
    "Rick and Morty",
    "Treehouse of Horror",
    "South Park episodes",
    "Saturday Night Live sketches",
    "The Office (British TV series)",
    "Monty Python's Flying Circus",
    "The Goodies"
  ],
  calm: [
    "Zen",
    "Garden of Eden",
    "Meditation",
    "Dead Sea",
    "Grand Canyon",
    "Taj Mahal",
    "Mona Lisa",
    "Great Barrier Reef",
    "Amazon rainforest",
    "Serengeti",
    "Aurora",
    "Maldives",
    "Kyoto",
    "Alhambra",
    "Sahara",
    "Great Wall of China",
    "Louvre",
    "Sistine Chapel",
    "Himalayas",
    "Pantheon",
    "Galápagos Islands",
    "Redwood National and State Parks",
    "Banff National Park",
    "Dolomites",
    "Cliffs of Moher",
    "Iguazu Falls",
    "Victoria Falls",
    "Yellowstone National Park",
    "Yosemite National Park",
    "Machu Picchu",
    "Angkor Wat",
    "Acropolis of Athens",
    "Dead Sea Scrolls",
    "Great Ocean Road",
    "Lake District",
    "Ring of Kerry",
    "Giant's Causeway",
    "Ha Long Bay",
    "Bora Bora",
    "Santorini",
    "Seychelles",
    "Fiji",
    "Bali",
    "Madagascar",
    "Black Forest",
    "Mount Fuji",
    "Mount Kilimanjaro",
    "Patagonia",
    "Tasmania",
    "Salar de Uyuni"
  ],
  romantic: [
    "Romeo and Juliet",
    "Cleopatra and Mark Antony",
    "Tristan and Iseult",
    "Elizabeth Barrett Browning",
    "Taj Mahal",
    "Pride and Prejudice",
    "The Great Gatsby",
    "Giacomo Casanova",
    "The Notebook (film)",
    "Jane Austen",
    "Scarlett O'Hara",
    "Moulin Rouge",
    "Layla and Majnun",
    "The Love Song of J. Alfred Prufrock",
    "Odyssey",
    "Heloise and Abelard",
    "Palais Garnier",
    "Venetian Carnival",
    "The Red Violin",
    "Victorian era",
    "Titanic (1997 film)",
    "Gone with the Wind (film)",
    "The Bridges of Madison County",
    "The Fault in Our Stars",
    "Wuthering Heights",
    "Sense and Sensibility",
    "Anna Karenina",
    "Doctor Zhivago",
    "Casablanca (film)",
    "La La Land",
    "Before Sunrise",
    "Eternal Sunshine of the Spotless Mind",
    "Love Actually",
    "The Age of Innocence",
    "Call Me by Your Name (film)",
    "Moonlight (2016 film)",
    "Amélie",
    "The Time Traveler's Wife (film)",
    "Brokeback Mountain",
    "Pride & Prejudice (2005 film)",
    "The Vow (2012 film)",
    "Silver Linings Playbook",
    "A Walk to Remember",
    "Me Before You (film)",
    "The Shape of Water"]
};

const moodQuotes = {
  happy: [
    "Happiness depends upon ourselves. — Aristotle",
    "For every minute you are angry you lose sixty seconds of happiness. — Ralph Waldo Emerson",
    "The most wasted of all days is one without laughter. — E.E. Cummings",
    "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
    "Count your age by friends, not years. Count your life by smiles, not tears. — John Lennon"
  ],
  sad: [
    "Tears come from the heart and not from the brain. — Leonardo da Vinci",
    "Every human walks around with a certain kind of sadness. — Anonymous",
    "Sadness flies away on the wings of time. — Jean de La Fontaine",
    "The word 'happiness' would lose its meaning if it were not balanced by sadness. — Carl Jung",
    "Sadness is but a wall between two gardens. — Kahlil Gibran"
  ],
  mysterious: [
    "The most beautiful thing we can experience is the mysterious. — Albert Einstein",
    "Mystery creates wonder and wonder is the basis of man's desire to understand. — Neil Armstrong",
    "The universe is full of magical things patiently waiting for our wits to grow sharper. — Eden Phillpotts",
    "Not all those who wander are lost. — J.R.R. Tolkien",
    "The possession of knowledge does not kill the sense of wonder and mystery. — Anaïs Nin"
  ],
  funny: [
    "A day without laughter is a day wasted. — Charlie Chaplin",
    "Humor is mankind's greatest blessing. — Mark Twain",
    "Laughter is the shortest distance between two people. — Victor Borge",
    "I love people who make me laugh. I honestly think it's the thing I like most. — Audrey Hepburn",
    "Against the assault of laughter, nothing can stand. — Mark Twain"
  ],
  calm: [
    "Calmness is the cradle of power. — Josiah Gilbert Holland",
    "Within you, there is a stillness and a sanctuary to which you can retreat at any time. — Hermann Hesse",
    "Peace begins with a smile. — Mother Teresa",
    "The mind is like water. When it’s turbulent, it’s difficult to see. When it’s calm, everything becomes clear. — Prasad Mahes",
    "Calm mind brings inner strength and self-confidence. — Dalai Lama"
  ],
  romantic: [
    "Love does not dominate; it cultivates. — Johann Wolfgang von Goethe",
    "Where there is love there is life. — Mahatma Gandhi",
    "The best thing to hold onto in life is each other. — Audrey Hepburn",
    "Love recognizes no barriers. — Maya Angelou",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. — Dr. Seuss"
  ],
  energetic: [
    "Energy and persistence conquer all things. — Benjamin Franklin",
    "The only way to prove that you’re a good sport is to lose. — Ernie Banks",
    "The difference between the impossible and the possible lies in a person’s determination. — Tommy Lasorda",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau"
  ]
};

const moodSelect = document.getElementById("moodSelect");
const getArticleBtn = document.getElementById("getArticleBtn");
const articleDisplay = document.getElementById("articleDisplay");
const articleTitle = document.getElementById("articleTitle");
const articleExtract = document.getElementById("articleExtract");
const articleLink = document.getElementById("articleLink");
const quotesDisplay = document.getElementById("quotesDisplay");
const quotesList = document.getElementById("quotesList");
const darkToggle = document.getElementById("darkToggle");

moodSelect.addEventListener("change", () => {
  getArticleBtn.disabled = !moodSelect.value;
  articleDisplay.classList.add("hidden");
  quotesDisplay.classList.add("hidden");
});

getArticleBtn.addEventListener("click", () => {
  const mood = moodSelect.value;
  if (!mood || !moodKeywords[mood]) return;

  const keywords = moodKeywords[mood];
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

  fetchWikipedia(randomKeyword);
  displayQuotes(mood);
});

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Fetch Wikipedia article summary using MediaWiki API
async function fetchWikipedia(keyword) {
  articleDisplay.classList.add("hidden");
  quotesDisplay.classList.add("hidden");

  const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(keyword)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Article not found.");

    const data = await response.json();
    articleTitle.textContent = data.title || "No Title";
    articleExtract.textContent = data.extract || "No summary available.";
    articleLink.href = data.content_urls?.desktop.page || "#";
    articleLink.textContent = "Read full article on Wikipedia";

    articleDisplay.classList.remove("hidden");
  } catch (error) {
    articleTitle.textContent = "Article not found.";
    articleExtract.textContent = "";
    articleLink.href = "#";
    articleDisplay.classList.remove("hidden");
  }
}

// Display 2-3 random quotes for the selected mood
function displayQuotes(mood) {
  quotesList.innerHTML = "";
  quotesDisplay.classList.add("hidden");

  const quotes = moodQuotes[mood];
  if (!quotes || quotes.length === 0) return;

  // Pick 2 or 3 random quotes
  const numQuotes = Math.min(3, quotes.length);
  const shuffled = quotes.sort(() => 0.5 - Math.random());
  const selectedQuotes = shuffled.slice(0, numQuotes);

  for (const quote of selectedQuotes) {
    const li = document.createElement("li");
    li.textContent = quote;
    quotesList.appendChild(li);
  }

  quotesDisplay.classList.remove("hidden");
}
