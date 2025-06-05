// Large keyword lists per mood (sample partial)
const moodKeywords = {
  uplifting: ["hope", "achievement", "kindness", "hero", "inspiration", "freedom", "progress", "community", "education", "peace", "resilience", "volunteerism", "charity", "creativity", "exploration", "cooperation", "medical breakthrough", "human rights", "reunion", "Olympics"],
  nostalgic: ["childhood", "retro games", "vintage fashion", "cassette tape", "old television", "home video", "nostalgia", "classic car", "toys", "analog camera", "Walkman", "arcade", "teenage years", "memory", "boom box", "typewriter", "Polaroid", "VHS", "old technology", "radio"],
  surreal: ["dream", "surrealism", "paradox", "illusion", "hallucination", "M.C. Escher", "phantasm", "mirror world", "magritte", "labyrinth", "strange loop", "absurdism", "Kafkaesque", "déjà vu", "reality distortion", "salvador dali", "impossible object", "psychedelic", "eerie", "twilight zone"],
  mysterious: ["mystery", "unsolved", "conspiracy theory", "Bermuda Triangle", "ancient ruins", "dark matter", "ghost ship", "lost civilization", "alien", "black hole", "psychic", "UFO", "cryptid", "haunted", "strange case", "enigma", "monolith", "urban legend", "missing", "codebreaking"],
  sad: ["grief", "loss", "mourning", "funeral", "melancholy", "depression", "war", "genocide", "natural disaster", "betrayal", "starvation", "abandonment", "loneliness", "sorrow", "injustice", "unrequited love", "illness", "orphans", "exile", "tragedy"],
  funny: ["comedy", "satire", "meme", "prank", "slapstick", "stand-up comedy", "dark humor", "joke", "cartoon", "farce", "clown", "irony", "awkward moment", "internet humor", "spoof", "dad joke", "absurdity", "banter", "situational comedy", "parody"]
};

// Curated public domain quotes by mood
const moodQuotes = {
  uplifting: [
    "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson"
  ],
  nostalgic: [
    "Sometimes you will never know the value of a moment until it becomes a memory. — Dr. Seuss",
    "Nostalgia is a dirty liar that insists things were better than they seemed. — Michelle K",
    "The past beats inside me like a second heart. — John Banville"
  ],
  surreal: [
    "Reality is wrong, dreams are for real. — Tupac Shakur",
    "Logic will get you from A to B. Imagination will take you everywhere. — Albert Einstein",
    "I am the one thing in life I can control. — Lin-Manuel Miranda"
  ],
  mysterious: [
    "The most beautiful thing we can experience is the mysterious. — Albert Einstein",
    "Mystery creates wonder and wonder is the basis of man's desire to understand. — Neil Armstrong",
    "The universe is full of magical things patiently waiting for our wits to grow sharper. — Eden Phillpotts"
  ],
  sad: [
    "Tears come from the heart and not from the brain. — Leonardo da Vinci",
    "Every human walks around with a certain kind of sadness. — Unknown",
    "Sadness flies away on the wings of time. — Jean de La Fontaine"
  ],
  funny: [
    "I am so clever that sometimes I don't understand a single word of what I am saying. — Oscar Wilde",
    "Behind every great man is a woman rolling her eyes. — Jim Carrey",
    "I refuse to join any club that would have me as a member. — Groucho Marx"
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
