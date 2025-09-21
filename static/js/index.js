const API_KEY = "3c1a2f72d6fdb0c8cdf454c4996353af";
const BASE = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/original";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const NEWS_API_KEY = "8602accfad284b4e9ee12b8a9f4319a0";
const GNEWS_API_KEY = "d4ea11c49c7766c92e887b415c857790";

// DOM refs for home page
const hero = document.getElementById("hero");
const titleEl = document.getElementById("hero-title");
const overviewEl = document.getElementById("hero-overview");
const whatsNewEl = document.getElementById("whats-new");
const ratingValEl = document.getElementById("rating-value");
const progressPath = document.querySelector(".rating-circle .progress");
const runtimeEl = document.getElementById("runtime");
const starringEl = document.getElementById("starring");
const genreEl = document.getElementById("genre");
const yearEl = document.getElementById("year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const watchTrailerBtn = document.getElementById("watch-trailer");
const moreInfoBtn = document.getElementById("more-info");

// DOM refs for movies page
const moviesHero = document.getElementById("movies-hero");
const moviesTitleEl = document.getElementById("movies-hero-title");
const moviesOverviewEl = document.getElementById("movies-hero-overview");
const moviesRatingValEl = document.getElementById("movies-rating-value");
const moviesProgressPath = document.querySelector("#movies-hero .rating-circle .progress");
const moviesRuntimeEl = document.getElementById("movies-runtime");
const moviesStarringEl = document.getElementById("movies-starring");
const moviesGenreEl = document.getElementById("movies-genre");
const moviesYearEl = document.getElementById("movies-year");
const moviesWatchTrailerBtn = document.getElementById("movies-watch-trailer");
const moviesMoreInfoBtn = document.getElementById("movies-more-info");
const moviesPrevBtn = document.getElementById("movies-prev");
const moviesNextBtn = document.getElementById("movies-next");
const moviesList = document.getElementById("movies-list");
const moviesPagination = document.getElementById("movies-pagination");
const moviesTopRated = document.getElementById("movies-top-rated");
const moviesUpcoming = document.getElementById("movies-upcoming");

// DOM refs for series page
const seriesHero = document.getElementById("series-hero");
const seriesTitleEl = document.getElementById("series-hero-title");
const seriesOverviewEl = document.getElementById("series-hero-overview");
const seriesRatingValEl = document.getElementById("series-rating-value");
const seriesProgressPath = document.querySelector("#series-hero .rating-circle .progress");
const seriesRuntimeEl = document.getElementById("series-runtime");
const seriesStarringEl = document.getElementById("series-starring");
const seriesGenreEl = document.getElementById("series-genre");
const seriesYearEl = document.getElementById("series-year");
const seriesWatchTrailerBtn = document.getElementById("series-watch-trailer");
const seriesMoreInfoBtn = document.getElementById("series-more-info");
const seriesPrevBtn = document.getElementById("series-prev");
const seriesNextBtn = document.getElementById("series-next");
const seriesList = document.getElementById("series-list");
const seriesPagination = document.getElementById("series-pagination");
const seriesTopRated = document.getElementById("series-top-rated");
const seriesAiring = document.getElementById("series-airing");

// DOM refs for genres page
const genreButtonsContainer = document.getElementById("genre-buttons");
const filterYear = document.getElementById("filter-year");
const filterCountry = document.getElementById("filter-country");
const filterSort = document.getElementById("filter-sort");
const applyFiltersBtn = document.getElementById("apply-filters");
const genresResultsContainer = document.getElementById("genres-results-container");
const promptMessage = genresResultsContainer.querySelector(".prompt-message");
const genresResults = document.getElementById("genres-results");
const genresPagination = document.getElementById("genres-pagination");

// DOM refs for actor modal and genre explorer
const actorModal = document.getElementById("actor-modal");
const actorImg = document.getElementById("actor-img");
const actorName = document.getElementById("actor-name");
const actorBio = document.getElementById("actor-bio");
const movieCount = document.getElementById("movie-count");
const tvCount = document.getElementById("tv-count");
const awardsCount = document.getElementById("awards-count");
const popularWorks = document.getElementById("popular-works");
const modalClose = document.querySelector(".modal .close");
const genreButtons = document.querySelectorAll(".genre-btn");
const genreMovies = document.getElementById("genre-movies");
const genreClose = document.getElementById("genre-close");

// State
let items = []; // Home hero items
let currentIndex = 0;
let autoTimer = null;
const SLIDE_DELAY = 8000;

// State for movies
let moviesItems = [];
let moviesCurrentIndex = 0;
let moviesAutoTimer = null;
let moviesCurrentPage = 1;
let moviesTotalPages = 1;

// State for series
let seriesItems = [];
let seriesCurrentIndex = 0;
let seriesAutoTimer = null;
let seriesCurrentPage = 1;
let seriesTotalPages = 1;

// State for genres
let currentPage = 1;
let totalPagesGlobal = 1;
let selectedType = 'movie';
let selectedGenre = null;
let selectedYear = '';
let selectedCountry = '';
let selectedSort = 'popularity.desc';

// Genre lists
const movieGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

const tvGenres = [
  { id: 10759, name: 'Action & Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 10762, name: 'Kids' },
  { id: 9648, name: 'Mystery' },
  { id: 10763, name: 'News' },
  { id: 10764, name: 'Reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' },
  { id: 10767, name: 'Talk' },
  { id: 10768, name: 'War & Politics' },
  { id: 37, name: 'Western' },
];

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    showPage(page);
  });
});

// Show specific page
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const activePage = document.getElementById(`${page}-page`);
  if (activePage) activePage.style.display = 'block';

  navLinks.forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  const today = new Date().toISOString().split('T')[0];

  if (page === 'home') {
    fetchTrending();
    fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies');
    fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv');
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning');
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.asc&primary_release_date.gte=${today}`, 'coming-soon', 10);
    fetchTop10();
    fetchActors();
    fetchNews();
  } else if (page === 'movies') {
    fetchMoviesTrending();
    loadMovies(moviesCurrentPage);
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'movies-top-rated', 10);
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.asc&primary_release_date.gte=${today}`, 'movies-upcoming', 10);
  } else if (page === 'series') {
    fetchSeriesTrending();
    loadSeries(seriesCurrentPage);
    fetchMovies(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'series-top-rated', 10);
    fetchMovies(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.asc&first_air_date.gte=${today}`, 'series-airing', 10);
  } else if (page === 'genres') {
    selectedType = 'movie';
    selectedGenre = null;
    selectedYear = '';
    selectedCountry = '';
    selectedSort = 'popularity.desc';
    document.querySelector('input[name="media-type"][value="movie"]').checked = true;
    populateYearsAndCountries();
    populateGenreButtons('movie');
    genresResults.classList.remove('active');
    promptMessage.style.display = 'block';
    genresResults.innerHTML = '';
    genresPagination.innerHTML = '';
  }
}

// Populate years and countries for filters
function populateYearsAndCountries() {
  // Years: from 1900 to current year + 2 for upcoming
  filterYear.innerHTML = '<option value="">All Years</option>';
  const currentYear = new Date().getFullYear();
  for (let y = currentYear + 2; y >= 1900; y--) {
    const option = document.createElement('option');
    option.value = y;
    option.textContent = y;
    filterYear.appendChild(option);
  }

  // Curated list of 30 countries, including African countries
  const countries = [
    { code: 'NG', name: 'Nigeria' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'GH', name: 'Ghana' },
    { code: 'KE', name: 'Kenya' },
    { code: 'EG', name: 'Egypt' },
    { code: 'MA', name: 'Morocco' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'AL', name: 'Algeria' },
    {érité: 'CM', name: 'Cameroon' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'IN', name: 'India' },
    { code: 'BR', name: 'Brazil' },
    { code: 'MX', name: 'Mexico' },
    { code: 'AR', name: 'Argentina' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'CN', name: 'China' },
    { code: 'AU', name: 'Australia' },
    { code: 'RU', name: 'Russia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'TH', name: 'Thailand' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'NZ', name: 'New Zealand' }
  ];

  filterCountry.innerHTML = '<option value="">All Countries</option>';
  countries.forEach(c => {
    const option = document.createElement('option');
    option.value = c.code;
    option.textContent = c.name;
    filterCountry.appendChild(option);
  });
}

// Populate genre buttons based on type
function populateGenreButtons(type) {
  genreButtonsContainer.innerHTML = '';
  const genres = type === 'movie' ? movieGenres : tvGenres;
  genres.forEach(g => {
    const btn = document.createElement('button');
    btn.classList.add('genre-btn');
    btn.dataset.genre = g.id;
    btn.textContent = g.name;
    btn.addEventListener('click', () => {
      genreButtonsContainer.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedGenre = g.id;
    });
    genreButtonsContainer.appendChild(btn);
  });
}

// Event listeners for type selection
document.querySelectorAll('input[name="media-type"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    selectedType = e.target.value;
    selectedGenre = null;
    populateGenreButtons(selectedType);
    genresResults.classList.remove('active');
    promptMessage.style.display = 'block';
    genresResults.innerHTML = '';
    genresPagination.innerHTML = '';
  });
});

// Event listener for apply filters
applyFiltersBtn.addEventListener('click', () => {
  selectedYear = filterYear.value;
  selectedCountry = filterCountry.value;
  selectedSort = filterSort.value;
  if (selectedSort === 'newest') {
    selectedSort = selectedType === 'movie' ? 'release_date.desc' : 'first_air_date.desc';
  }
  if (selectedGenre) {
    promptMessage.style.display = 'none';
    genresResults.classList.add('active');
    loadGenres(1);
  } else {
    alert('Please select a genre to proceed.');
  }
});

// Load filtered results for genres page
async function loadGenres(page) {
  currentPage = page;
  let endpoint = `${BASE}/discover/${selectedType}?api_key=${API_KEY}&page=${page}&sort_by=${selectedSort}`;
  if (selectedGenre) endpoint += `&with_genres=${selectedGenre}`;
  if (selectedYear) endpoint += selectedType === 'movie' ? `&primary_release_year=${selectedYear}` : `&first_air_date_year=${selectedYear}`;
  if (selectedCountry) endpoint += `&with_origin_country=${selectedCountry}`;

  try {
    const totalPages = await fetchMovies(endpoint, 'genres-results', 20, true);
    totalPagesGlobal = totalPages;
    updatePagination(genresPagination, currentPage, totalPagesGlobal, loadGenres);
  } catch (err) {
    console.error("Error fetching filtered results:", err);
    genresResults.innerHTML = '<p>Unable to load results. Please try again.</p>';
    genresPagination.innerHTML = '';
  }
}

// Fetch trending for home hero
async function fetchTrending() {
  try {
    const res = await fetch(`${BASE}/trending/all/day?api_key=${API_KEY}`);
    const data = await res.json();
    if (!data.results || data.results.length === 0) throw new Error("No trending data");
    items = data.results;
    currentIndex = 0;
    await displayItem(currentIndex);
    startAuto();
  } catch (err) {
    console.error("Trending fetch error:", err);
    titleEl.textContent = "Unable to load trending content";
    overviewEl.textContent = "";
  }
}

// Fetch trending movies for movies mini hero
async function fetchMoviesTrending() {
  try {
    const res = await fetch(`${BASE}/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();
    if (!data.results || data.results.length === 0) throw new Error("No trending movies");
    moviesItems = data.results;
    moviesCurrentIndex = 0;
    await displayMoviesItem(moviesCurrentIndex);
    startMoviesAuto();
  } catch (err) {
    console.error("Movies trending fetch error:", err);
    moviesTitleEl.textContent = "Unable to load trending movies";
    moviesOverviewEl.textContent = "";
  }
}

// Fetch trending series for series mini hero
async function fetchSeriesTrending() {
  try {
    const res = await fetch(`${BASE}/trending/tv/day?api_key=${API_KEY}`);
    const data = await res.json();
    if (!data.results || data.results.length === 0) throw new Error("No trending series");
    seriesItems = data.results;
    seriesCurrentIndex = 0;
    await displaySeriesItem(seriesCurrentIndex);
    startSeriesAuto();
  } catch (err) {
    console.error("Series trending fetch error:", err);
    seriesTitleEl.textContent = "Unable to load trending series";
    seriesOverviewEl.textContent = "";
  }
}

// Fetch details for a specific movie/TV show
async function fetchDetails(id, mediaType) {
  try {
    const res = await fetch(`${BASE}/${mediaType}/${id}?api_key=${API_KEY}&append_to_response=credits,videos`);
    return await res.json();
  } catch (err) {
    console.error("Details fetch error:", err);
    return null;
  }
}

// Display item for home hero
async function displayItem(index) {
  if (!items[index]) return;
  const it = items[index];
  const details = await fetchDetails(it.id, it.media_type);

  const backdrop = it.backdrop_path || it.poster_path;
  if (backdrop) hero.style.backgroundImage = `url(${IMAGE_BASE}${backdrop})`;
  else hero.style.backgroundImage = "";

  whatsNewEl.textContent = `What's New in ${it.media_type === 'movie' ? 'Movies' : 'Series'}`;
  titleEl.textContent = it.title || it.name || "Untitled";
  overviewEl.textContent = it.overview || "No summary available.";

  const vote = (it.vote_average !== undefined && it.vote_average !== null) ? (Math.round(it.vote_average * 10) / 10) : 0;
  ratingValEl.textContent = vote.toFixed(1);
  const percent = Math.round((vote / 10) * 100);
  progressPath.setAttribute("stroke-dasharray", `${percent} 100`);
  if (vote >= 7) progressPath.style.stroke = "#4caf50";
  else if (vote >= 5) progressPath.style.stroke = "#f5c518";
  else progressPath.style.stroke = "#e53935";

  let runtimeText = "N/A";
  if (details) {
    if (details.runtime) runtimeText = `${details.runtime} min`;
    else if (details.episode_run_time && details.episode_run_time.length) runtimeText = `${details.episode_run_time[0]} min/ep`;
    else if (it.release_date) runtimeText = `${it.release_date.slice(0,4)}`;
  }
  runtimeEl.textContent = runtimeText;

  const cast = details?.credits?.cast ? details.credits.cast.slice(0,3).map(c => c.name).join(", ") : (it.original_name || it.original_title || "Unknown");
  starringEl.textContent = cast;

  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : (it.genre_ids ? it.genre_ids.join(", ") : "N/A");
  genreEl.textContent = genres;

  const year = (it.release_date || it.first_air_date) ? ((it.release_date || it.first_air_date).slice(0,4)) : "";
  yearEl.textContent = year;

  const videos = details?.videos?.results || [];
  const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube") || videos.find(v => v.site === "YouTube");
  if (trailer) {
    watchTrailerBtn.onclick = () => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
  } else {
    watchTrailerBtn.onclick = () => alert("Trailer not available");
  }

  moreInfoBtn.onclick = () => window.open(`https://www.themoviedb.org/${it.media_type}/${it.id}`, "_blank");
}

// Display for movies mini hero
async function displayMoviesItem(index) {
  if (!moviesItems[index]) return;
  const it = moviesItems[index];
  const details = await fetchDetails(it.id, 'movie');

  const backdrop = it.backdrop_path || it.poster_path;
  if (backdrop) moviesHero.style.backgroundImage = `url(${IMAGE_BASE}${backdrop})`;
  else moviesHero.style.backgroundImage = "";

  moviesTitleEl.textContent = it.title || "Untitled";
  moviesOverviewEl.textContent = it.overview || "No summary available.";

  const vote = (it.vote_average !== undefined && it.vote_average !== null) ? (Math.round(it.vote_average * 10) / 10) : 0;
  moviesRatingValEl.textContent = vote.toFixed(1);
  const percent = Math.round((vote / 10) * 100);
  moviesProgressPath.setAttribute("stroke-dasharray", `${percent} 100`);
  if (vote >= 7) moviesProgressPath.style.stroke = "#4caf50";
  else if (vote >= 5) moviesProgressPath.style.stroke = "#f5c518";
  else moviesProgressPath.style.stroke = "#e53935";

  let runtimeText = "N/A";
  if (details && details.runtime) runtimeText = `${details.runtime} min`;
  moviesRuntimeEl.textContent = runtimeText;

  const cast = details?.credits?.cast ? details.credits.cast.slice(0,3).map(c => c.name).join(", ") : "Unknown";
  moviesStarringEl.textContent = cast;

  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : "N/A";
  moviesGenreEl.textContent = genres;

  const year = (it.release_date || "").slice(0,4);
  moviesYearEl.textContent = year;

  const videos = details?.videos?.results || [];
  const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube") || videos.find(v => v.site === "YouTube");
  if (trailer) {
    moviesWatchTrailerBtn.onclick = () => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
  } else {
    moviesWatchTrailerBtn.onclick = () => alert("Trailer not available");
  }

  moviesMoreInfoBtn.onclick = () => window.open(`https://www.themoviedb.org/movie/${it.id}`, "_blank");
}

// Display for series mini hero
async function displaySeriesItem(index) {
  if (!seriesItems[index]) return;
  const it = seriesItems[index];
  const details = await fetchDetails(it.id, 'tv');

  const backdrop = it.backdrop_path || it.poster_path;
  if (backdrop) seriesHero.style.backgroundImage = `url(${IMAGE_BASE}${backdrop})`;
  else seriesHero.style.backgroundImage = "";

  seriesTitleEl.textContent = it.name || "Untitled";
  seriesOverviewEl.textContent = it.overview || "No summary available.";

  const vote = (it.vote_average !== undefined && it.vote_average !== null) ? (Math.round(it.vote_average * 10) / 10) : 0;
  seriesRatingValEl.textContent = vote.toFixed(1);
  const percent = Math.round((vote / 10) * 100);
  seriesProgressPath.setAttribute("stroke-dasharray", `${percent} 100`);
  if (vote >= 7) seriesProgressPath.style.stroke = "#4caf50";
  else if (vote >= 5) seriesProgressPath.style.stroke = "#f5c518";
  else seriesProgressPath.style.stroke = "#e53935";

  let runtimeText = "N/A";
  if (details && details.episode_run_time && details.episode_run_time.length) runtimeText = `${details.episode_run_time[0]} min/ep`;
  seriesRuntimeEl.textContent = runtimeText;

  const cast = details?.credits?.cast ? details.credits.cast.slice(0,3).map(c => c.name).join(", ") : "Unknown";
  seriesStarringEl.textContent = cast;

  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : "N/A";
  seriesGenreEl.textContent = genres;

  const year = (it.first_air_date || "").slice(0,4);
  seriesYearEl.textContent = year;

  const videos = details?.videos?.results || [];
  const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube") || videos.find(v => v.site === "YouTube");
  if (trailer) {
    seriesWatchTrailerBtn.onclick = () => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
  } else {
    seriesWatchTrailerBtn.onclick = () => alert("Trailer not available");
  }

  seriesMoreInfoBtn.onclick = () => window.open(`https://www.themoviedb.org/tv/${it.id}`, "_blank");
}

// Navigation controls for home hero
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  displayItem(currentIndex);
  resetAuto();
});
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  displayItem(currentIndex);
  resetAuto();
});

// Auto slide for home hero
function startAuto() {
  stopAuto();
  autoTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    displayItem(currentIndex);
  }, SLIDE_DELAY);
}
function stopAuto() { if (autoTimer) clearInterval(autoTimer); }
function resetAuto() { stopAuto(); startAuto(); }

hero.addEventListener("mouseenter", stopAuto);
hero.addEventListener("mouseleave", startAuto);

// Swipe support for home hero
let touchStartX = 0, touchEndX = 0;
hero.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; });
hero.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) {
    currentIndex = (currentIndex + 1) % items.length;
    displayItem(currentIndex); resetAuto();
  } else if (touchEndX > touchStartX + 50) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    displayItem(currentIndex); resetAuto();
  }
});

// Navigation controls for movies mini hero
moviesNextBtn.addEventListener("click", () => {
  moviesCurrentIndex = (moviesCurrentIndex + 1) % moviesItems.length;
  displayMoviesItem(moviesCurrentIndex);
  resetMoviesAuto();
});
moviesPrevBtn.addEventListener("click", () => {
  moviesCurrentIndex = (moviesCurrentIndex - 1 + moviesItems.length) % moviesItems.length;
  displayMoviesItem(moviesCurrentIndex);
  resetMoviesAuto();
});

// Auto slide for movies
function startMoviesAuto() {
  stopMoviesAuto();
  moviesAutoTimer = setInterval(() => {
    moviesCurrentIndex = (moviesCurrentIndex + 1) % moviesItems.length;
    displayMoviesItem(moviesCurrentIndex);
  }, SLIDE_DELAY);
}
function stopMoviesAuto() { if (moviesAutoTimer) clearInterval(moviesAutoTimer); }
function resetMoviesAuto() { stopMoviesAuto(); startMoviesAuto(); }

moviesHero.addEventListener("mouseenter", stopMoviesAuto);
moviesHero.addEventListener("mouseleave", startMoviesAuto);

// Swipe support for movies
moviesHero.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; });
moviesHero.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) {
    moviesCurrentIndex = (moviesCurrentIndex + 1) % moviesItems.length;
    displayMoviesItem(moviesCurrentIndex); resetMoviesAuto();
  } else if (touchEndX > touchStartX + 50) {
    moviesCurrentIndex = (moviesCurrentIndex - 1 + moviesItems.length) % moviesItems.length;
    displayMoviesItem(moviesCurrentIndex); resetMoviesAuto();
  }
});

// Navigation controls for series mini hero
seriesNextBtn.addEventListener("click", () => {
  seriesCurrentIndex = (seriesCurrentIndex + 1) % seriesItems.length;
  displaySeriesItem(seriesCurrentIndex);
  resetSeriesAuto();
});
seriesPrevBtn.addEventListener("click", () => {
  seriesCurrentIndex = (seriesCurrentIndex - 1 + seriesItems.length) % seriesItems.length;
  displaySeriesItem(seriesCurrentIndex);
  resetSeriesAuto();
});

// Auto slide for series
function startSeriesAuto() {
  stopSeriesAuto();
  seriesAutoTimer = setInterval(() => {
    seriesCurrentIndex = (seriesCurrentIndex + 1) % seriesItems.length;
    displaySeriesItem(seriesCurrentIndex);
  }, SLIDE_DELAY);
}
function stopSeriesAuto() { if (seriesAutoTimer) clearInterval(seriesAutoTimer); }
function resetSeriesAuto() { stopSeriesAuto(); startSeriesAuto(); }

seriesHero.addEventListener("mouseenter", stopSeriesAuto);
seriesHero.addEventListener("mouseleave", startSeriesAuto);

// Swipe support for series
seriesHero.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; });
seriesHero.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) {
    seriesCurrentIndex = (seriesCurrentIndex + 1) % seriesItems.length;
    displaySeriesItem(seriesCurrentIndex); resetSeriesAuto();
  } else if (touchEndX > touchStartX + 50) {
    seriesCurrentIndex = (seriesCurrentIndex - 1 + seriesItems.length) % seriesItems.length;
    displaySeriesItem(seriesCurrentIndex); resetSeriesAuto();
  }
});

// Fetch movies/series for carousels or grids
async function fetchMovies(endpoint, containerId, limit = 10, isGrid = false) {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const today = new Date().toISOString().split('T')[0];
    let filteredResults = data.results.filter(item => {
      const releaseDate = item.release_date || item.first_air_date;
      if (containerId.includes("upcoming") || containerId.includes("airing")) {
        return releaseDate && releaseDate > today && item.poster_path;
      }
      return item.poster_path;
    });
    filteredResults = filteredResults.slice(0, limit);
    filteredResults.forEach(item => {
      const div = document.createElement('div');
      div.classList.add(isGrid ? 'grid-item' : 'carousel-item');
      const title = item.title || item.name || 'Untitled';
      const year = (item.release_date || item.first_air_date || '').split('-')[0] || '—';
      const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
      div.innerHTML = `
        <img src="${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <div class="meta">
            <span><i class="fas fa-star"></i> ${rating}</span>
            <span><i class="fas fa-calendar"></i> ${year}</span>
          </div>
        </div>
      `;
      div.addEventListener('click', () => {
        window.open(`https://www.themoviedb.org/${item.media_type || selectedType}/${item.id}`, '_blank');
      });
      container.appendChild(div);
    });
    return data.total_pages || 1;
  } catch (error) {
    console.error(`Error fetching ${containerId}:`, error);
    return 1;
  }
}

// Load paginated movies for movies tab
async function loadMovies(page) {
  moviesCurrentPage = page;
  const totalPages = await fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}&page=${page}`, "movies-list", 20, true);
  moviesTotalPages = totalPages;
  updatePagination(moviesPagination, moviesCurrentPage, moviesTotalPages, loadMovies);
}

// Load paginated series for series tab
async function loadSeries(page) {
  seriesCurrentPage = page;
  const totalPages = await fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}&page=${page}`, "series-list", 20, true);
  seriesTotalPages = totalPages;
  updatePagination(seriesPagination, seriesCurrentPage, seriesTotalPages, loadSeries);
}

// Update pagination buttons
function updatePagination(paginationEl, currentPage, totalPages, loadFunction) {
  paginationEl.innerHTML = '';
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  prevBtn.disabled = currentPage <= 1;
  prevBtn.addEventListener("click", () => loadFunction(currentPage - 1));

  const pageSpan = document.createElement("span");
  pageSpan.textContent = `Page ${currentPage} of ${totalPages}`;

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentPage >= totalPages;
  nextBtn.addEventListener("click", () => loadFunction(currentPage + 1));

  paginationEl.appendChild(prevBtn);
  paginationEl.appendChild(pageSpan);
  paginationEl.appendChild(nextBtn);
}

// Fetch top 10
async function fetchTop10() {
  try {
    const res = await fetch(`${BASE}/trending/all/week?api_key=${API_KEY}`);
    const data = await res.json();
    const container = document.getElementById("top10");
    container.innerHTML = "";
    data.results.slice(0, 10).forEach((movie, index) => {
      const item = document.createElement("div");
      item.classList.add("top-10-item");
      item.innerHTML = `
        <span class="top-10-number">${index + 1}</span>
        <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title || movie.name}">
      `;
      container.appendChild(item);
    });
  } catch (err) {
    console.error("Error fetching Top 10:", err);
  }
}

// Fetch trending actors
async function fetchActors() {
  try {
    const res = await fetch(`${BASE}/person/popular?api_key=${API_KEY}`);
    const data = await res.json();
    const container = document.getElementById("trending-actors");
    container.innerHTML = "";
    data.results.slice(0, 10).forEach(actor => {
      const card = document.createElement("div");
      card.classList.add("actor-card");
      card.dataset.id = actor.id;
      card.innerHTML = `
        <img src="${actor.profile_path ? IMG_PATH + actor.profile_path : '/images/no-avatar.png'}" alt="${actor.name}">
        <p>${actor.name}</p>
        <div class="actor-overlay">
          <div class="meta"></div>
        </div>
      `;
      card.addEventListener("click", () => showActorModal(actor.id));
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching actors:", error);
  }
}

// Actor modal
async function showActorModal(id) {
  try {
    const res = await fetch(`${BASE}/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits,tv_credits`);
    const actor = await res.json();
    actorImg.src = actor.profile_path ? IMG_PATH + actor.profile_path : '/images/no-avatar.png';
    actorName.textContent = actor.name || "Unknown";
    actorBio.textContent = actor.biography || "No biography available.";
    movieCount.textContent = actor.movie_credits?.cast?.length || 0;
    tvCount.textContent = actor.tv_credits?.cast?.length || 0;
    awardsCount.textContent = actor.popularity ? Math.round(actor.popularity / 10) : 0;
    popularWorks.innerHTML = "";
    const works = [...(actor.movie_credits?.cast || []), ...(actor.tv_credits?.cast || [])]
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      .slice(0, 5);
    works.forEach(work => {
      const div = document.createElement("div");
      div.classList.add("popular-work");
      div.textContent = work.title || work.name || "Untitled";
      popularWorks.appendChild(div);
    });
    actorModal.style.display = "block";
  } catch (error) {
    console.error("Error fetching actor details:", error);
  }
}

modalClose.addEventListener("click", () => {
  actorModal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === actorModal) {
    actorModal.style.display = "none";
  }
});

// Genre functionality for home explore
async function fetchGenreMovies(genreId) {
  try {
    const res = await fetch(`${BASE}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await res.json();
    const container = genreMovies.querySelector(".carousel-track");
    container.innerHTML = "";
    data.results.slice(0, 10).forEach(movie => {
      const item = document.createElement("div");
      item.classList.add("carousel-item");
      const title = movie.title || movie.name || "Untitled";
      const year = (movie.release_date || movie.first_air_date || "").split("-")[0] || "—";
      const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
      item.innerHTML = `
        <img src="${movie.poster_path ? IMG_PATH + movie.poster_path : '/images/no-poster.png'}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <div class="meta">
            <span><i class="fas fa-star"></i> ${rating}</span>
            <span><i class="fas fa-calendar"></i> ${year}</span>
          </div>
        </div>
      `;
      container.appendChild(item);
    });
    genreMovies.classList.add("active");
  } catch (error) {
    console.error("Error fetching genre movies:", error);
  }
}

genreButtons.forEach(button => {
  button.addEventListener("click", () => {
    genreButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const genreId = button.dataset.genre;
    fetchGenreMovies(genreId);
  });
});

if (genreClose) {
  genreClose.addEventListener("click", () => {
    genreMovies.classList.remove("active");
    genreButtons.forEach(btn => btn.classList.remove("active"));
  });
}

// Carousel navigation
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  if (prev && next) {
    prev.addEventListener("click", () => {
      track.scrollBy({ left: -300, behavior: "smooth" });
    });
    next.addEventListener("click", () => {
      track.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});

// Sidebar toggle for mobile
const hamburger = document.getElementById("hamburger");
const popupMenu = document.getElementById("popup-menu");
if (hamburger && popupMenu) {
  hamburger.addEventListener("click", () => {
    popupMenu.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !popupMenu.contains(e.target)) {
      popupMenu.classList.remove("open");
    }
  });
}

// Newsletter form
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  });
}

// Fetch news from NewsAPI and GNews
async function fetchNews() {
  try {
    const newsRes = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${NEWS_API_KEY}`);
    const newsData = await newsRes.json();
    const gnewsRes = await fetch(`https://gnews.io/api/v4/top-headlines?category=entertainment&apikey=${GNEWS_API_KEY}`);
    const gnewsData = await gnewsRes.json();
    const combinedNews = [...(newsData.articles || []), ...(gnewsData.articles || [])]
      .filter(article => {
        const title = (article.title || '').toLowerCase();
        const description = (article.description || '').toLowerCase();
        return !title.includes('trailer') && 
               !title.includes('poster') && 
               !title.includes('coming soon') && 
               !title.includes('upcoming') && 
               !description.includes('trailer') && 
               !description.includes('poster') && 
               !description.includes('coming soon') && 
               !description.includes('upcoming');
      })
      .slice(0, 10);
    const container = document.getElementById("latest-news");
    container.innerHTML = "";
    combinedNews.forEach(article => {
      const item = document.createElement("div");
      item.classList.add("news-item");
      item.innerHTML = `
        <h3>${article.title || 'Untitled'}</h3>
        <p>${article.description || 'No description'}</p>
      `;
      container.appendChild(item);
    });
    const seeMore = document.createElement("button");
    seeMore.classList.add("news-see-more");
    seeMore.textContent = "See More News";
    seeMore.addEventListener("click", () => {
      window.open("https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGxmY21sM0JBUkFQQ3d3d2J5Z3Z3Z0J2YlRFZ0FQQ3d3d2J5Z3Z3Z0J2YlRFZ0FR?hl=en-US", "_blank");
    });
    container.appendChild(seeMore);
  } catch (error) {
    console.error("Error fetching news:", error);
    const container = document.getElementById("latest-news");
    container.innerHTML = "<p>Unable to load news at this time.</p>";
  }
}

// Initialize
showPage('home');