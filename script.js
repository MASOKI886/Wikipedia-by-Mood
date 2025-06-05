
const moodKeywords = {
  uplifting: ["hope", "achievement", "rescue", "cooperation", "inspiration"],
  nostalgic: ["history", "childhood", "retro", "past", "invention"],
  surreal: ["dream", "illusion", "paradox", "absurd", "surrealism"],
  mysterious: ["conspiracy", "mystery", "unsolved", "enigmatic", "ancient"],
  sad: ["tragedy", "death", "disaster", "loss", "conflict"],
  funny: ["humor", "parody", "meme", "joke", "comedy"]
};

const fetchBtn = document.getElementById("fetchBtn");
const moodSelect = document.getElementById("mood");
const articleDisplay = document.getElementById("articleDisplay");
const articleTitle = document.getElementById("articleTitle");
const articleExtract = document.getElementById("articleExtract");
const articleLink = document.getElementById("articleLink");
const darkToggle = document.getElementById("darkToggle");

fetchBtn.addEventListener("click", async () => {
  const mood = moodSelect.value;
  const keywords = moodKeywords[mood];
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];

  const searchResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${keyword}&origin=*`);
  const searchData = await searchResponse.json();

  if (!searchData.query || !searchData.query.search.length) {
    articleTitle.textContent = "No articles found for this mood.";
    articleExtract.textContent = "Try again or choose a different mood.";
    articleLink.href = "#";
    articleDisplay.classList.remove("hidden");
    return;
  }

  const title = searchData.query.search[0].title;
  const summaryResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
  const summaryData = await summaryResponse.json();

  articleTitle.textContent = summaryData.title;
  articleExtract.textContent = summaryData.extract;
  articleLink.href = summaryData.content_urls.desktop.page;

  articleDisplay.classList.remove("hidden");
});

// Dark mode toggle
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
