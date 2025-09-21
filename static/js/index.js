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

// News Page State
let newsIntervals = {};
let newsData = {
  movie: [],
  tv: [],
  general: [],
  actor: [],
  social: []
};

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
    console.log('Loading home page content');
    fetchTrending();
    fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies');
    fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv');
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning');
    fetchUpcoming(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.asc&primary_release_date.gte=${today}`, 'recommendations', 10, 'movie');
    fetchTop10();
    fetchActors();
    fetchHomeNews();
  } else if (page === 'movies') {
    console.log('Loading movies page content');
    fetchMoviesTrending();
    loadMovies(moviesCurrentPage);
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'movies-top-rated', 10);
    fetchUpcoming(`${BASE}/movie/upcoming?api_key=${API_KEY}`, 'movies-upcoming', 10, 'movie');
  } else if (page === 'series') {
    console.log('Loading series page content');
    fetchSeriesTrending();
    loadSeries(seriesCurrentPage);
    fetchMovies(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'series-top-rated', 10);
    fetchUpcoming(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.asc&first_air_date.gte=${today}&first_air_date.lte=2026-12-31`, 'series-airing', 10, 'tv');
  } else if (page === 'genres') {
    console.log('Loading genres page content');
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
  } else if (page === 'news-updates') {
    console.log('Loading news page content');
    // Delay initialization to ensure DOM is ready
    setTimeout(() => initNewsPage(), 100);
  }
}

// News Page Functions
function initNewsPage() {
  console.log('Initializing news page');
  
  // Clear any existing intervals
  clearNewsIntervals();
  
  // Fetch initial news data
  fetchAllNews();
  
  // Set up real-time updates
  newsIntervals.movie = setInterval(() => fetchMovieNews(), 300000); // 5 minutes
  newsIntervals.tv = setInterval(() => fetchTVNews(), 300000);
  newsIntervals.general = setInterval(() => fetchGeneralNews(), 300000);
  newsIntervals.actor = setInterval(() => fetchActorNews(), 300000);
  newsIntervals.social = setInterval(() => fetchSocialMediaNews(), 300000);
  
  // Set up refresh buttons
  setupRefreshButtons();
}

// Clear news intervals
function clearNewsIntervals() {
  Object.values(newsIntervals).forEach(interval => clearInterval(interval));
  newsIntervals = {};
}

// Fetch all news categories
async function fetchAllNews() {
  await Promise.all([
    fetchMovieNews(),
    fetchTVNews(),
    fetchGeneralNews(),
    fetchActorNews(),
    fetchSocialMediaNews()
  ]);
}

// Fetch Movie News
async function fetchMovieNews() {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=movies&apiKey=${NEWS_API_KEY}&pageSize=6`);
    const data = await res.json();
    newsData.movie = data.articles || [];
    displayMovieNews();
  } catch (error) {
    console.error("Error fetching movie news:", error);
  }
}

// Fetch TV News
async function fetchTVNews() {
  try {
    const res = await fetch(`https://gnews.io/api/v4/search?q=tv%20shows&apikey=${GNEWS_API_KEY}&max=6`);
    const data = await res.json();
    newsData.tv = data.articles || [];
    displayTVNews();
  } catch (error) {
    console.error("Error fetching TV news:", error);
  }
}

// Fetch General News
async function fetchGeneralNews() {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${NEWS_API_KEY}&pageSize=8`);
    const data = await res.json();
    newsData.general = data.articles || [];
    displayGeneralNews();
  } catch (error) {
    console.error("Error fetching general news:", error);
  }
}

// Fetch Actor News
async function fetchActorNews() {
  try {
    const res = await fetch(`https://gnews.io/api/v4/search?q=celebrities&apikey=${GNEWS_API_KEY}&max=5`);
    const data = await res.json();
    newsData.actor = data.articles || [];
    displayActorNews();
  } catch (error) {
    console.error("Error fetching actor news:", error);
  }
}

// Fetch Social Media News
async function fetchSocialMediaNews() {
  try {
    // Simulate social media data since we don't have a direct API
    const socialPosts = [
      {
        id: 1,
        user: "FilmFanatic",
        handle: "@filmbuff",
        content: "Just watched the new sci-fi blockbuster and it blew my mind! The visuals are stunning.",
        time: "2m ago",
        likes: 124,
        retweets: 42,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        id: 2,
        user: "SeriesBinger",
        handle: "@tvaddict",
        content: "Finished binge-watching the entire season in one weekend. Highly recommend!",
        time: "15m ago",
        likes: 89,
        retweets: 21,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        id: 3,
        user: "CinemaGuru",
        handle: "@moviecritic",
        content: "The director's cut adds so much depth to the story. A must-watch for fans!",
        time: "1h ago",
        likes: 256,
        retweets: 78,
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      },
      {
        id: 4,
        user: "StarSpotter",
        handle: "@celebwatch",
        content: "Spotted two A-list actors having dinner together. New project in the works?",
        time: "3h ago",
        likes: 342,
        retweets: 112,
        avatar: "https://randomuser.me/api/portraits/women/28.jpg"
      }
    ];
    
    newsData.social = socialPosts;
    displaySocialMediaNews();
  } catch (error) {
    console.error("Error fetching social media news:", error);
  }
}

// Display Movie News in Grid Format
function displayMovieNews() {
  const container = document.getElementById('movie-news');
  if (!container) {
    console.error("Movie news container not found");
    return;
  }
  
  container.innerHTML = '';
  container.className = 'movie-news-grid';
  
  if (newsData.movie.length === 0) {
    container.innerHTML = '<p>No movie news available at this time.</p>';
    return;
  }
  
  newsData.movie.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card movie-card';
    card.innerHTML = `
      <div class="news-image" style="background-image: url(${article.urlToImage || 'https://picsum.photos/seed/movie/400/250.jpg'})"></div>
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name}</span>
          <span class="news-date">${formatNewsDate(article.publishedAt)}</span>
        </div>
        <button class="read-more-btn" data-url="${article.url}">Read More</button>
      </div>
    `;
    
    card.querySelector('.read-more-btn').addEventListener('click', () => {
      window.open(article.url, '_blank');
    });
    
    container.appendChild(card);
  });
}

// Display TV News in Timeline Format
function displayTVNews() {
  const container = document.getElementById('tv-news');
  if (!container) {
    console.error("TV news container not found");
    return;
  }
  
  container.innerHTML = '';
  container.className = 'tv-news-timeline';
  
  if (newsData.tv.length === 0) {
    container.innerHTML = '<p>No TV news available at this time.</p>';
    return;
  }
  
  newsData.tv.forEach((article, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${formatNewsDate(article.publishedAt)}</div>
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-source">${article.source.name}</div>
        <button class="read-more-btn" data-url="${article.url}">Read More</button>
      </div>
    `;
    
    timelineItem.querySelector('.read-more-btn').addEventListener('click', () => {
      window.open(article.url, '_blank');
    });
    
    container.appendChild(timelineItem);
  });
}

// Display General News in Carousel Format
function displayGeneralNews() {
  const container = document.getElementById('general-news');
  if (!container) {
    console.error("General news container not found");
    return;
  }
  
  container.innerHTML = '';
  container.className = 'general-news-carousel';
  
  if (newsData.general.length === 0) {
    container.innerHTML = '<p>No general news available at this time.</p>';
    return;
  }
  
  newsData.general.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card general-card';
    card.innerHTML = `
      <div class="news-image" style="background-image: url(${article.urlToImage || 'https://picsum.photos/seed/entertainment/400/250.jpg'})"></div>
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name}</span>
          <span class="news-date">${formatNewsDate(article.publishedAt)}</span>
        </div>
        <button class="read-more-btn" data-url="${article.url}">Read More</button>
      </div>
    `;
    
    card.querySelector('.read-more-btn').addEventListener('click', () => {
      window.open(article.url, '_blank');
    });
    
    container.appendChild(card);
  });
}

// Display Actor News in List Format
function displayActorNews() {
  const container = document.getElementById('actor-news');
  if (!container) {
    console.error("Actor news container not found");
    return;
  }
  
  container.innerHTML = '';
  container.className = 'actor-news-list';
  
  if (newsData.actor.length === 0) {
    container.innerHTML = '<p>No actor news available at this time.</p>';
    return;
  }
  
  newsData.actor.forEach(article => {
    const listItem = document.createElement('div');
    listItem.className = 'actor-news-item';
    listItem.innerHTML = `
      <div class="actor-news-image" style="background-image: url(${article.image || 'https://randomuser.me/api/portraits/men/1.jpg'})"></div>
      <div class="actor-news-content">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name}</span>
          <span class="news-date">${formatNewsDate(article.publishedAt)}</span>
        </div>
        <button class="read-more-btn" data-url="${article.url}">Read More</button>
      </div>
    `;
    
    listItem.querySelector('.read-more-btn').addEventListener('click', () => {
      window.open(article.url, '_blank');
    });
    
    container.appendChild(listItem);
  });
}

// Display Social Media News in Grid Format
function displaySocialMediaNews() {
  const container = document.getElementById('social-media');
  if (!container) {
    console.error("Social media container not found");
    return;
  }
  
  container.innerHTML = '';
  container.className = 'social-media-grid';
  
  if (newsData.social.length === 0) {
    container.innerHTML = '<p>No social media posts available at this time.</p>';
    return;
  }
  
  newsData.social.forEach(post => {
    const card = document.createElement('div');
    card.className = 'social-card';
    card.innerHTML = `
      <div class="social-header">
        <img src="${post.avatar}" alt="${post.user}" class="social-avatar">
        <div>
          <div class="social-user">${post.user}</div>
          <div class="social-handle">${post.handle}</div>
        </div>
        <div class="social-time">${post.time}</div>
      </div>
      <div class="social-content">${post.content}</div>
      <div class="social-actions">
        <button class="social-action"><i class="far fa-heart"></i> ${post.likes}</button>
        <button class="social-action"><i class="fas fa-retweet"></i> ${post.retweets}</button>
        <button class="social-action"><i class="far fa-comment"></i></button>
        <button class="social-action"><i class="far fa-share"></i></button>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Setup Refresh Buttons
function setupRefreshButtons() {
  // Movie News Refresh
  const movieRefresh = document.querySelector('#movie-news').parentElement.querySelector('.refresh-btn');
  if (movieRefresh) {
    movieRefresh.addEventListener('click', fetchMovieNews);
  }
  
  // TV News Refresh
  const tvRefresh = document.querySelector('#tv-news').parentElement.querySelector('.refresh-btn');
  if (tvRefresh) {
    tvRefresh.addEventListener('click', fetchTVNews);
  }
  
  // General News Refresh
  const generalRefresh = document.querySelector('#general-news').parentElement.querySelector('.refresh-btn');
  if (generalRefresh) {
    generalRefresh.addEventListener('click', fetchGeneralNews);
  }
  
  // Actor News Refresh
  const actorRefresh = document.querySelector('#actor-news').parentElement.querySelector('.refresh-btn');
  if (actorRefresh) {
    actorRefresh.addEventListener('click', fetchActorNews);
  }
  
  // Social Media Refresh
  const socialRefresh = document.querySelector('#social-media').parentElement.querySelector('.refresh-btn');
  if (socialRefresh) {
    socialRefresh.addEventListener('click', fetchSocialMediaNews);
  }
}

// Format date for news display
function formatNewsDate(dateString) {
  if (!dateString) return 'Unknown date';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

// Populate years and countries for filters
function populateYearsAndCountries() {
  filterYear.innerHTML = '<option value="">All Years</option>';
  const currentYear = new Date().getFullYear();
  for (let y = currentYear + 2; y >= 1900; y--) {
    const option = document.createElement('option');
    option.value = y;
    option.textContent = y;
    filterYear.appendChild(option);
  }

  const countries = [
    { code: 'NG', name: 'Nigeria' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'GH', name: 'Ghana' },
    { code: 'KE', name: 'Kenya' },
    { code: 'EG', name: 'Egypt' },
    { code: 'MA', name: 'Morocco' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'AL', name: 'Algeria' },
    { code: 'CM', name: 'Cameroon' },
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
    console.error(`Details fetch error for ${mediaType} ID ${id}:`, err);
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

  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : (it.genre_ids ? it.genre_ids.map(id => movieGenres.concat(tvGenres).find(g => g.id === id)?.name || '').join(", ") : "N/A");
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

  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : (it.genre_ids ? it.genre_ids.map(id => movieGenres.find(g => g.id === id)?.name || '').join(", ") : "N/A");
  moviesGenreEl.textContent = genres;

  const year = (it.release_date || "").slice(0,4);
  moviesYearEl.textContent = year;

  const videos = details?.videos?.results || [];
  const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube") || videos.find(v => v.site === "YouTube");
  if (trailer) {
    moviesWatchTrailerBtn.onclick = () => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
  } else {
    watchTrailerBtn.onclick = () => alert("Trailer not available");
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

  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : (it.genre_ids ? it.genre_ids.map(id => tvGenres.find(g => g.id === id)?.name || '').join(", ") : "N/A");
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

// Date formatter for movie/series display
function formatMovieDate(dateStr) {
  if (!dateStr) return 'TBA';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// Fetch movies/series for carousels or grids
async function fetchMovies(endpoint, containerId, limit = 10, isGrid = false) {
  try {
    console.log(`Fetching data for ${containerId} from ${endpoint}`);
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      console.warn(`No results returned for ${containerId}`);
      throw new Error("No results available");
    }
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const today = new Date().toISOString().split('T')[0];
    let filteredResults = data.results.filter(item => {
      const releaseDate = item.release_date || item.first_air_date;
      if (containerId.includes("upcoming") || containerId.includes("airing") || containerId.includes("recommendations")) {
        return releaseDate && releaseDate > today && item.poster_path;
      }
      return item.poster_path;
    });
    filteredResults = filteredResults.slice(0, limit);
    if (filteredResults.length === 0) {
      container.innerHTML = `<p>No ${containerId.includes('movies') ? 'movies' : containerId.includes('series') ? 'series' : 'content'} available at this time.</p>`;
      console.warn(`No valid items for ${containerId} after filtering`);
      return data.total_pages || 1;
    }
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
    console.log(`Successfully loaded ${filteredResults.length} items for ${containerId}`);
    return data.total_pages || 1;
  } catch (error) {
    console.error(`Error fetching ${containerId}:`, error);
    const container = document.getElementById(containerId);
    container.innerHTML = `<p>Unable to load ${containerId.includes('movies') ? 'movies' : containerId.includes('series') ? 'series' : 'content'}. Please try again.</p>`;
    return 1;
  }
}

// Fetch upcoming movies/series with detailed info for carousels
async function fetchUpcoming(endpoint, containerId, limit = 10, mediaType) {
  try {
    console.log(`Fetching upcoming content for ${containerId} from ${endpoint}`);
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      console.warn(`No upcoming results for ${containerId}`);
      throw new Error("No upcoming results available");
    }
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const today = new Date().toISOString().split('T')[0];
    let filteredResults = data.results.filter(item => {
      const releaseDate = item.release_date || item.first_air_date;
      return releaseDate && releaseDate > today && item.poster_path;
    });
    filteredResults = filteredResults.slice(0, limit);
    if (filteredResults.length === 0) {
      container.innerHTML = `<p>No upcoming ${mediaType === 'movie' ? 'movies' : 'series'} available at this time.</p>`;
      console.warn(`No valid upcoming items for ${containerId}`);
      return data.total_pages || 1;
    }
    const genreMap = mediaType === 'movie' ? movieGenres : tvGenres;
    for (const item of filteredResults) {
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      const title = item.title || item.name || 'Untitled';
      const releaseDate = item.release_date || item.first_air_date || 'TBA';
      const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
      const genres = item.genre_ids ? item.genre_ids.map(id => genreMap.find(g => g.id === id)?.name || '').filter(g => g).join(", ") : 'N/A';
      div.innerHTML = `
        <img src="${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <div class="meta">
            <span><i class="fas fa-star"></i> ${rating}</span>
            <span><i class="fas fa-calendar"></i> ${formatMovieDate(releaseDate)}</span>
            <span><i class="fas fa-film"></i> ${genres}</span>
          </div>
        </div>
      `;
      div.addEventListener('click', () => {
        window.open(`https://www.themoviedb.org/${mediaType}/${item.id}`, '_blank');
      });
      container.appendChild(div);
    }
    console.log(`Successfully loaded ${filteredResults.length} upcoming items for ${containerId}`);
    return data.total_pages || 1;
  } catch (error) {
    console.error(`Error fetching upcoming ${containerId}:`, error);
    const container = document.getElementById(containerId);
    container.innerHTML = `<p>Unable to load upcoming ${mediaType === 'movie' ? 'movies' : 'series'}. Please try again.</p>`;
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
    console.log('Fetching top 10 content');
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
    console.log('Successfully loaded top 10 items');
  } catch (err) {
    console.error("Error fetching Top 10:", err);
    const container = document.getElementById("top10");
    container.innerHTML = "<p>Unable to load top 10 content. Please try again.</p>";
  }
}

// Fetch trending actors
async function fetchActors() {
  try {
    console.log('Fetching trending actors');
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
    console.log('Successfully loaded trending actors');
  } catch (error) {
    console.error("Error fetching actors:", error);
    const container = document.getElementById("trending-actors");
    container.innerHTML = "<p>Unable to load actors. Please try again.</p>";
  }
}

// Actor modal
async function showActorModal(id) {
  try {
    console.log(`Fetching actor details for ID ${id}`);
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
    console.log(`Successfully loaded actor modal for ${actor.name}`);
  } catch (error) {
    console.error("Error fetching actor details:", error);
    actorModal.innerHTML = "<p>Unable to load actor details. Please try again.</p>";
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
    console.log(`Fetching genre movies for genre ID ${genreId}`);
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
    console.log(`Successfully loaded genre movies for genre ID ${genreId}`);
  } catch (error) {
    console.error("Error fetching genre movies:", error);
    const container = genreMovies.querySelector(".carousel-track");
    container.innerHTML = "<p>Unable to load genre movies. Please try again.</p>";
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

// Fetch news from NewsAPI and GNews for home page
// Add this to your existing JS file

let lastRefreshTime = null;

// News Page Functions
function initNewsPage() {
  console.log('Initializing news page');
  
  // Clear any existing intervals
  clearNewsIntervals();
  
  // Fetch initial news data
  fetchAllNews();
  
  // Set up real-time updates
  newsIntervals.general = setInterval(() => fetchGeneralNews(), 300000); // 5 minutes
  newsIntervals.moviesTv = setInterval(() => fetchMoviesTvNews(), 300000);
  newsIntervals.actors = setInterval(() => fetchActorsNews(), 300000);
  newsIntervals.trailers = setInterval(() => fetchTrailersNews(), 300000);
  newsIntervals.trending = setInterval(() => fetchTrendingNews(), 300000);
  
  // Set up main refresh button
  const mainRefreshBtn = document.getElementById('main-refresh-btn');
  if (mainRefreshBtn) {
    mainRefreshBtn.addEventListener('click', refreshAllNews);
  }
  
  // Set up tab switching
  setupNewsTabs();
  
  // Update last refresh time
  updateLastRefreshTime();
}

// Clear news intervals
function clearNewsIntervals() {
  Object.values(newsIntervals).forEach(interval => clearInterval(interval));
  newsIntervals = {};
}

// Fetch all news categories
async function fetchAllNews() {
  await Promise.all([
    fetchGeneralNews(),
    fetchMoviesTvNews(),
    fetchActorsNews(),
    fetchTrailersNews(),
    fetchTrendingNews()
  ]);
  updateLastRefreshTime();
}

// Refresh all news
async function refreshAllNews() {
  const refreshBtn = document.getElementById('main-refresh-btn');
  const icon = refreshBtn.querySelector('i');
  
  // Add spinning animation
  icon.classList.add('fa-spin');
  
  try {
    await fetchAllNews();
    
    // Show success message
    showNotification('All news refreshed successfully!');
  } catch (error) {
    console.error('Error refreshing news:', error);
    showNotification('Failed to refresh news. Please try again.', 'error');
  } finally {
    // Remove spinning animation
    icon.classList.remove('fa-spin');
  }
}

// Fetch General News
async function fetchGeneralNews() {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${NEWS_API_KEY}&pageSize=8`);
    const data = await res.json();
    newsData.general = data.articles || [];
    displayGeneralNews();
  } catch (error) {
    console.error("Error fetching general news:", error);
  }
}

// Fetch Movies & TV News
async function fetchMoviesTvNews() {
  try {
    const [moviesRes, tvRes] = await Promise.all([
      fetch(`https://newsapi.org/v2/everything?q=movies&apiKey=${NEWS_API_KEY}&pageSize=4`),
      fetch(`https://gnews.io/api/v4/search?q=tv%20shows&apikey=${GNEWS_API_KEY}&max=4`)
    ]);
    
    const moviesData = await moviesRes.json();
    const tvData = await tvRes.json();
    
    newsData.moviesTv = [
      ...(moviesData.articles || []),
      ...(tvData.articles || [])
    ];
    
    displayMoviesTvNews();
  } catch (error) {
    console.error("Error fetching movies & TV news:", error);
  }
}

// Fetch Actors News
async function fetchActorsNews() {
  try {
    // Get popular actors from TMDB
    const res = await fetch(`${BASE}/person/popular?api_key=${API_KEY}`);
    const data = await res.json();
    newsData.actors = data.results || [];
    displayActorsNews();
  } catch (error) {
    console.error("Error fetching actors news:", error);
  }
}

// Fetch Trailers News
async function fetchTrailersNews() {
  try {
    // Get upcoming movies with trailers
    const today = new Date().toISOString().split('T')[0];
    const res = await fetch(`${BASE}/movie/upcoming?api_key=${API_KEY}&primary_release_date.gte=${today}`);
    const data = await res.json();
    
    // Filter movies with videos
    const moviesWithTrailers = [];
    
    for (const movie of data.results.slice(0, 6)) {
      try {
        const movieRes = await fetch(`${BASE}/movie/${movie.id}?api_key=${API_KEY}&append_to_response=videos`);
        const movieData = await movieRes.json();
        
        if (movieData.videos && movieData.videos.results.length > 0) {
          moviesWithTrailers.push(movieData);
        }
      } catch (error) {
        console.error(`Error fetching movie details for ${movie.id}:`, error);
      }
    }
    
    newsData.trailers = moviesWithTrailers;
    displayTrailersNews();
  } catch (error) {
    console.error("Error fetching trailers news:", error);
  }
}

// Fetch Trending News
async function fetchTrendingNews() {
  try {
    const res = await fetch(`${BASE}/trending/all/day?api_key=${API_KEY}`);
    const data = await res.json();
    newsData.trending = data.results || [];
    displayTrendingNews();
  } catch (error) {
    console.error("Error fetching trending news:", error);
  }
}

// Display General News
function displayGeneralNews() {
  const container = document.getElementById('all-general-news');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (newsData.general.length === 0) {
    container.innerHTML = '<p>No general news available at this time.</p>';
    return;
  }
  
  newsData.general.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card general-card';
    card.innerHTML = `
      <div class="news-image" style="background-image: url(${article.urlToImage || 'https://picsum.photos/seed/entertainment/400/250.jpg'})"></div>
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name}</span>
          <span class="news-date">${formatNewsDate(article.publishedAt)}</span>
        </div>
        <button class="read-more-btn" data-url="${article.url}">Read More</button>
      </div>
    `;
    
    card.querySelector('.read-more-btn').addEventListener('click', () => {
      window.open(article.url, '_blank');
    });
    
    container.appendChild(card);
  });
}

// Display Movies & TV News
function displayMoviesTvNews() {
  const container = document.getElementById('movies-tv-news');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (newsData.moviesTv.length === 0) {
    container.innerHTML = '<p>No movies or TV news available at this time.</p>';
    return;
  }
  
  newsData.moviesTv.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card movie-tv-card';
    card.innerHTML = `
      <div class="news-image" style="background-image: url(${article.urlToImage || 'https://picsum.photos/seed/movies-tv/400/250.jpg'})"></div>
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name}</span>
          <span class="news-date">${formatNewsDate(article.publishedAt)}</span>
        </div>
        <button class="read-more-btn" data-url="${article.url}">Read More</button>
      </div>
    `;
    
    card.querySelector('.read-more-btn').addEventListener('click', () => {
      window.open(article.url, '_blank');
    });
    
    container.appendChild(card);
  });
}

// Display Actors News
function displayActorsNews() {
  const container = document.getElementById('actors-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (newsData.actors.length === 0) {
    container.innerHTML = '<p>No actors available at this time.</p>';
    return;
  }
  
  newsData.actors.forEach(actor => {
    const card = document.createElement('div');
    card.className = 'actor-card-news';
    card.innerHTML = `
      <div class="actor-image" style="background-image: url(${actor.profile_path ? IMG_PATH + actor.profile_path : 'https://randomuser.me/api/portraits/men/1.jpg'})"></div>
      <div class="actor-info">
        <h3>${actor.name}</h3>
        <div class="actor-meta">
          <span><i class="fas fa-film"></i> ${actor.known_for_department}</span>
          <span><i class="fas fa-star"></i> ${actor.popularity.toFixed(1)}</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      showActorModal(actor.id);
    });
    
    container.appendChild(card);
  });
}

// Display Trailers News
function displayTrailersNews() {
  const container = document.getElementById('trailers-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (newsData.trailers.length === 0) {
    container.innerHTML = '<p>No trailers available at this time.</p>';
    return;
  }
  
  newsData.trailers.forEach(movie => {
    const trailer = movie.videos.results.find(v => v.type === "Trailer" && v.site === "YouTube") || movie.videos.results[0];
    
    const card = document.createElement('div');
    card.className = 'trailer-card';
    card.innerHTML = `
      <div class="trailer-thumbnail" style="background-image: url(${movie.backdrop_path ? IMAGE_BASE + movie.backdrop_path : IMG_PATH + movie.poster_path})">
        <div class="play-button">
          <i class="fas fa-play"></i>
        </div>
      </div>
      <div class="trailer-info">
        <h3>${movie.title || movie.name}</h3>
        <div class="trailer-meta">
          <span><i class="fas fa-calendar"></i> ${formatMovieDate(movie.release_date || movie.first_air_date)}</span>
          <span><i class="fas fa-star"></i> ${movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      if (trailer) {
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
      } else {
        window.open(`https://www.themoviedb.org/${movie.media_type}/${movie.id}`, "_blank");
      }
    });
    
    container.appendChild(card);
  });
}

// Display Trending News
function displayTrendingNews() {
  const container = document.getElementById('trending-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (newsData.trending.length === 0) {
    container.innerHTML = '<p>No trending content available at this time.</p>';
    return;
  }
  
  newsData.trending.forEach(item => {
    const card = document.createElement('div');
    card.className = 'trending-card';
    card.innerHTML = `
      <div class="trending-image" style="background-image: url(${item.backdrop_path || item.poster_path ? IMAGE_BASE + (item.backdrop_path || item.poster_path) : 'https://picsum.photos/seed/trending/400/250.jpg'})"></div>
      <div class="trending-info">
        <div class="trending-number">#${newsData.trending.indexOf(item) + 1}</div>
        <h3>${item.title || item.name}</h3>
        <div class="trending-meta">
          <span>${item.media_type === 'movie' ? 'Movie' : 'TV Show'}</span>
          <span><i class="fas fa-star"></i> ${item.vote_average.toFixed(1)}</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      window.open(`https://www.themoviedb.org/${item.media_type}/${item.id}`, "_blank");
    });
    
    container.appendChild(card);
  });
}

// Setup news tabs
function setupNewsTabs() {
  const tabs = document.querySelectorAll('.news-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.news-tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding content
      const tabName = tab.dataset.tab;
      document.getElementById(`${tabName}-tab`).classList.add('active');
    });
  });
}

// Update last refresh time
function updateLastRefreshTime() {
  lastRefreshTime = new Date();
  const refreshTimeElement = document.getElementById('refresh-time');
  if (refreshTimeElement) {
    refreshTimeElement.textContent = formatNewsDate(lastRefreshTime.toISOString());
  }
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Format date for news display
function formatNewsDate(dateString) {
  if (!dateString) return 'Unknown date';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

// Format date for movie/series display
function formatMovieDate(dateStr) {
  if (!dateStr) return 'TBA';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});