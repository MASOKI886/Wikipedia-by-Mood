// Large keyword lists per mood (sample partial)
const moodKeywords = {
  happy: ["Mr. Rogers","Charlie Chaplin","The Beatles","Disney","The Harlem Globetrotters","Woodstock Festival","The Nobel Prize","Sesame Street","The Olympics","La Tomatina","The Moon Landing","Harry Potter series","The Lego Group","Pixar Animation Studios","The Golden Gate Bridge","The Peace Corps","Apollo 11","The Red Cross","The Rolling Stones","The Super Bowl","Walt Disney World","Broadway Theatre","The Sound of Music","Up (film)","The Lion King","The Wizard of Oz","The Beatles' Sgt. Pepper's Lonely Hearts Club Band","The Beatles' Abbey Road","The Beatles' Let It Be","Happy Feet","The Beatles' Revolver","The Beatles' Rubber Soul","The Beatles' Help!","The Beatles' Magical Mystery Tour","The Beatles' Yellow Submarine","The Beatles' White Album","Mickey Mouse","The Beatles' Please Please Me","The Beatles' Beatles for Sale","The Beatles' With the Beatles","The Beatles' A Hard Day's Night","The Beatles' Past Masters","The Beatles' Anthology 1","The Beatles' Anthology 2","The Beatles' Anthology 3","The Beatles' Let It Be Naked","The Beatles' Live at the BBC","Motown Records","The Beatles' Help! (film)","Sesame Street characters","The Beatles' Magical Mystery Tour (film)"],
  sad: ["Titanic disaster","Anne Frank","The Great Depression","Hiroshima and Nagasaki bombings","Holocaust","Chernobyl disaster","Black Death","9/11 attacks","Trail of Tears","Rwanda genocide","Sinking of the Lusitania","Hurricane Katrina","John F. Kennedy assassination","Vietnam War","The Dust Bowl","Challenger disaster","The Irish Potato Famine","Auschwitz concentration camp","Syrian Civil War","The Armenian Genocide","The Spanish Flu","The Siege of Leningrad","The Great Fire of London","The Partition of India","The Nanking Massacre","The Srebrenica massacre","The Rwandan Genocide","The Cambodian Genocide","The Boston Marathon bombing","The Oklahoma City bombing","The Sandy Hook Elementary School shooting","The Columbine High School massacre","The Pulse nightclub shooting","The Virginia Tech shooting","The Beslan school siege","The 2004 Indian Ocean earthquake and tsunami","The Haiti earthquake","The Christchurch mosque shootings","The Grenfell Tower fire","The Nepal earthquake","The Beirut explosion","The Westgate shopping mall attack","The Manchester Arena bombing","The Orlando nightclub shooting","The Great Smog of London","The 1986 Chernobyl disaster","The 2011 Tōhoku earthquake and tsunami","The 2005 Kashmir earthquake","The Boxing Day tsunami","The 2003 European heat wave","The 1994 Rwandan genocide","The 1931 China floods","The Great Chinese Famine"],
  mysterious: ["Dyatlov Pass incident","Mary Celeste","Bermuda Triangle","Voynich manuscript","Zodiac Killer","Oak Island mystery","Tunguska event","Roswell UFO incident","The Somerton Man","The Bell Witch legend","The Wow! signal","The Loch Ness Monster","The Lost Colony of Roanoke","The Zodiac letters","The Max Headroom signal hijacking","The disappearance of Amelia Earhart","The Black Dahlia murder","The Salem witch trials","The Isdal Woman","The Tamam Shud case","The Green Children of Woolpit","The Dancing Plague of 1518","The Babushka Lady","The Lead Masks Case","The Oak Island mystery","The Phaistos Disc","The Antikythera mechanism","The Bermeja Island disappearance","The Circleville letters","The Hinterkaifeck murders","The Pollock Twins","The Sodder children disappearance","The Winchester Mystery House","The YOGTZE case","The Zodiac Killer","The Ghost Ship","The Bell Witch","The Chupacabra","The Beast of Gévaudan","The Jersey Devil","The Mothman","The Flatwoods Monster","The Hopkinsville Goblins","The Loveland Frog","The Fresno Nightcrawler","The Lizard Man of Scape Ore Swamp","The Black-eyed Children","The Bell Witch Cave","The Jersey Devil legend","The Oak Island treasure","The Tunguska explosion","The Montauk Project"],
  funny: ["Monty Python","The Far Side","Mr. Bean","SNL (Saturday Night Live)","The Three Stooges","Charlie Chaplin","The Marx Brothers","Bugs Bunny","The Simpsons","South Park","The Daily Show","Jim Carrey","The Onion","Pee-wee Herman","Laugh-In","Rowan & Martin's Laugh-In","Robin Williams","The Muppet Show","Weird Al Yankovic","Seinfeld","Friends (TV series)","The Office (US)","The Big Bang Theory","Parks and Recreation","How I Met Your Mother","Brooklyn Nine-Nine","Arrested Development","Fawlty Towers","The IT Crowd","Cheers","Frasier","Modern Family","Curb Your Enthusiasm","30 Rock","Veep","The Marvelous Mrs. Maisel","Blackadder","Mr. Show with Bob and David","Chappelle's Show","Key & Peele","Louie","Community","Family Guy","American Dad!","Rick and Morty","The Simpsons' Treehouse of Horror","South Park episodes","Saturday Night Live skits","The Office UK","Monty Python's Flying Circus","The Goodies","Little Britain","Mr. Bean episodes"],
  calm: ["Zen Buddhism","The Garden of Eden","Meditation","The Dead Sea","The Grand Canyon","The Taj Mahal","The Mona Lisa","The Great Barrier Reef","The Amazon Rainforest","The Serengeti","The Northern Lights","The Maldives","Kyoto","The Alhambra","The Sahara Desert","The Great Wall of China","The Louvre Museum","The Sistine Chapel","The Himalayas","The Pantheon","The Galápagos Islands","Redwood National and State Parks","Banff National Park","The Dolomites","Cliffs of Moher","Iguazu Falls","Victoria Falls","Yellowstone National Park","Yosemite National Park","Machu Picchu","Angkor Wat","Acropolis of Athens","Dead Sea Scrolls","Great Ocean Road","Lake District","Ring of Kerry","Giant's Causeway","Ha Long Bay","Bora Bora","Santorini","Seychelles","Fiji Islands","Bali","Madagascar rainforest","Galápagos Islands","The Black Forest","Mount Fuji","Mount Kilimanjaro","Patagonia","Tasmania","Salar de Uyuni"],
  romantic: ["Romeo and Juliet","Cleopatra and Mark Antony","Tristan and Isolde","Elizabeth Barrett Browning","The Taj Mahal","Pride and Prejudice","The Great Gatsby","Casanova","The Notebook (film)","Jane Austen","Scarlett O'Hara","The Moulin Rouge","The Legend of Layla and Majnun","The Love Song of J. Alfred Prufrock","The Odyssey (Penelope and Odysseus)","Heloise and Abelard","The Paris Opera House","The Venetian Carnival","The Red Violin","The Courting Rituals in Victorian Era","Titanic (film)","Gone with the Wind (film)","The Bridges of Madison County","The Fault in Our Stars","Wuthering Heights","Sense and Sensibility","Anna Karenina","Doctor Zhivago","Casablanca (film)","La La Land (film)","Before Sunrise (film)","Eternal Sunshine of the Spotless Mind","Love Actually","The Age of Innocence","Call Me by Your Name","Moonlight (film)","Amélie (film)","The Notebook","The Time Traveler's Wife","Brokeback Mountain","Pride and Prejudice (2005 film)","The Vow (film)","Silver Linings Playbook","A Walk to Remember","Me Before You","The Shape of Water","About Time (film)","Breakfast at Tiffany's","Roman Holiday","An Affair to Remember"],
  energetic: ["The Olympics","Muhammad Ali","Michael Jordan","Tour de France","The Boston Marathon","Usain Bolt","The FIFA World Cup","The Super Bowl","The X Games","The Ironman Triathlon","The NBA","The World Rally Championship","The Indy 500","The Dakar Rally","The Rugby World Cup","Serena Williams","The UFC","The New York City Marathon","The FIFA Women's World Cup","The Winter Olympics","The Summer Olympics","The World Athletics Championships","The Commonwealth Games","The Ironman World Championship","The London Marathon","The Berlin Marathon","The Chicago Marathon","The Boston Marathon","The Boston Marathon bombing","The London Marathon","The New York City Marathon","The Boston Marathon","The Berlin Marathon","The Chicago Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon","The Boston Marathon"]
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
