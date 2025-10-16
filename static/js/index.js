// ===== API & CONSTANTS =====
const API_KEY = "3c1a2f72d6fdb0c8cdf454c4996353af";
const BASE = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/original";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const NEWS_API_KEY = "8602accfad284b4e9ee12b8a9f4319a0";
const GNEWS_API_KEY = "d4ea11c49c7766c92e887b415c857790";
const TVMAZE_API = "HYujUeRQvIwtdOtBjIx3wjncjzmhNPmb";

// Genre lists
const movieGenres = [
  { id: 28, name: 'Action' }, { id: 12, name: 'Adventure' }, { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' }, { id: 80, name: 'Crime' }, { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' }, { id: 10751, name: 'Family' }, { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' }, { id: 27, name: 'Horror' }, { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' }, { id: 10749, name: 'Romance' }, { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' }, { id: 53, name: 'Thriller' }, { id: 10752, name: 'War' },
  { id: 37, name: 'Western' }
];

const tvGenres = [
  { id: 10759, name: 'Action & Adventure' }, { id: 16, name: 'Animation' }, { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' }, { id: 99, name: 'Documentary' }, { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' }, { id: 10762, name: 'Kids' }, { id: 9648, name: 'Mystery' },
  { id: 10763, name: 'News' }, { id: 10764, name: 'Reality' }, { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' }, { id: 10767, name: 'Talk' }, { id: 10768, name: 'War & Politics' },
  { id: 37, name: 'Western' }
];

const GENRE_MAP = {
  28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime',
  99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
  27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction',
  10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western',
  10759: 'Action & Adventure', 10762: 'Kids', 10763: 'News', 10764: 'Reality',
  10765: 'Sci-Fi & Fantasy', 10766: 'Soap', 10767: 'Talk', 10768: 'War & Politics'
};

// ===== DOM REFERENCES =====
// Helper function to get DOM elements safely
const q = id => document.getElementById(id);

// Home page elements
const hero = q("hero");
const titleEl = q("hero-title");
const overviewEl = q("hero-overview");
const whatsNewEl = q("whats-new");
const ratingValEl = q("rating-value");
const progressPath = document.querySelector(".rating-circle .progress");
const runtimeEl = q("runtime");
const starringEl = q("starring");
const genreEl = q("genre");
const yearEl = q("year");
const prevBtn = q("prev");
const nextBtn = q("next");
const watchTrailerBtn = q("watch-trailer");
const moreInfoBtn = q("more-info");

// Movies page elements
const moviesHero = q("movies-hero");
const moviesTitleEl = q("movies-hero-title");
const moviesOverviewEl = q("movies-hero-overview");
const moviesRatingValEl = q("movies-rating-value");
const moviesProgressPath = document.querySelector("#movies-hero .rating-circle .progress");
const moviesRuntimeEl = q("movies-runtime");
const moviesStarringEl = q("movies-starring");
const moviesGenreEl = q("movies-genre");
const moviesYearEl = q("movies-year");
const moviesWatchTrailerBtn = q("movies-watch-trailer");
const moviesMoreInfoBtn = q("movies-more-info");
const moviesPrevBtn = q("movies-prev");
const moviesNextBtn = q("movies-next");
const moviesList = q("movies-list");
const moviesPagination = q("movies-pagination");
const moviesTopRated = q("movies-top-rated");
const moviesUpcoming = q("movies-upcoming");

// Series page elements
const seriesHero = q("series-hero");
const seriesTitleEl = q("series-hero-title");
const seriesOverviewEl = q("series-hero-overview");
const seriesRatingValEl = q("series-rating-value");
const seriesProgressPath = document.querySelector("#series-hero .rating-circle .progress");
const seriesRuntimeEl = q("series-runtime");
const seriesStarringEl = q("series-starring");
const seriesGenreEl = q("series-genre");
const seriesYearEl = q("series-year");
const seriesWatchTrailerBtn = q("series-watch-trailer");
const seriesMoreInfoBtn = q("series-more-info");
const seriesPrevBtn = q("series-prev");
const seriesNextBtn = q("series-next");
const seriesList = q("series-list");
const seriesPagination = q("series-pagination");
const seriesTopRated = q("series-top-rated");
const seriesAiring = q("series-airing");

// Genres page elements
const genreButtonsContainer = q("genre-buttons");
const filterYear = q("filter-year");
const filterCountry = q("filter-country");
const filterSort = q("filter-sort");
const applyFiltersBtn = q("apply-filters");
const genresResultsContainer = q("genres-results-container");
const promptMessage = genresResultsContainer ? genresResultsContainer.querySelector(".prompt-message") : null;
const genresResults = q("genres-results");
const genresPagination = q("genres-pagination");

// Actor modal elements
const actorModal = q("actor-modal");
const actorImg = q("actor-img");
const actorName = q("actor-name");
const actorBio = q("actor-bio");
const movieCount = q("movie-count");
const tvCount = q("tv-count");
const awardsCount = q("awards-count");
const popularWorks = q("popular-works");
const modalClose = document.querySelector(".modal .close");

// Genre explorer elements
const genreButtons = document.querySelectorAll(".genre-btn");
const genreMovies = q("genre-movies");
const genreClose = q("genre-close");

const trailerPopup = q("trailer-popup");
const trailerClose = q("trailer-close");

const specials = q("specials");
const events = q("events");
const movieOfWeek = q("movie-of-week");
const recommendedFavorites = q("recommended-favorites");
const movieSpecials = q("movie-specials");
const seriesSpecials = q("series-specials");

// News page elements
const movieNewsContainer = q("movie-news");
const tvNewsContainer = q("tv-news");
const allGeneralNews = q("all-general-news");
const moviesTvNews = q("movies-tv-news");
const actorsGrid = q("actors-grid");
const trailersGrid = q("trailers-grid");
const trendingGrid = q("trending-grid");
const socialMediaGrid = q("social-media");

// Landing page news elements
const latestNewsContainer = q("latest-news");

// Other elements
const hamburger = q("hamburger");
const popupMenu = q("popup-menu");
const newsletterForm = document.querySelector(".newsletter-form");

// Search elements - Updated to use correct ID
const searchInput = document.getElementById('search');
const searchSuggestions = document.getElementById('search-suggestions');
const searchForm = document.getElementById('search-form');
const searchResultsContainer = document.getElementById('search-results');
const searchResultsTitle = document.getElementById('search-results-title');

// In DOM references, add:
const searchIcon = document.createElement('i'); // Or add to HTML if preferred
searchIcon.className = 'fas fa-search mobile-search-icon';
searchInput.parentNode.insertBefore(searchIcon, searchInput); // Insert icon before input

// Mobile search toggle
searchIcon.addEventListener('click', () => {
  searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
  if (searchInput.style.display === 'block') searchInput.focus();
});

// In handleSearchInput, truncate overview in hero
function updateHeroContent(item) { // Assuming this is your hero update function (adapt if named differently)
  // ... existing code ...
  let overviewText = item.overview || 'No overview available.';
  if (overviewText.length > 100) {
    overviewText = overviewText.substring(0, 100) + '...';
  }
  overviewEl.textContent = overviewText;
  // Repeat for movies/series heroes if separate
}

// In DOM references, add for hero video
const heroVideoContainer = document.createElement('div');
heroVideoContainer.id = 'hero-video-container';
heroVideoContainer.style.display = 'none';
hero.appendChild(heroVideoContainer);

const exitBtn = document.createElement('button');
exitBtn.className = 'exit-trailer-btn';
exitBtn.innerHTML = '<i class="fas fa-times"></i> Exit';
hero.appendChild(exitBtn);
exitBtn.style.display = 'none';

// On watch trailer click
watchTrailerBtn.addEventListener('click', async () => {
  const item = items[currentIndex]; // Assuming current hero item
  try {
    const res = await fetch(`${BASE}/${item.media_type}/${item.id}/videos?api_key=${API_KEY}`);
    const data = await res.json();
    const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
    if (trailer) {
      hero.style.backgroundImage = 'none'; // Hide bg
      heroVideoContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.key}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
      heroVideoContainer.style.display = 'block';
      exitBtn.style.display = 'block';
      // Hide other hero content
      heroContent.style.display = 'none';
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  } catch (error) {
    console.error('Error loading trailer:', error);
  }
});

// Exit button
exitBtn.addEventListener('click', () => {
  heroVideoContainer.innerHTML = '';
  heroVideoContainer.style.display = 'none';
  exitBtn.style.display = 'none';
  heroContent.style.display = 'block';
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
  // Revert bg (call your update function)
  updateHeroContent(items[currentIndex]);
});

// Repeat similar logic for movies/series heroes if separate buttons



// ===== STATE MANAGEMENT =====
// Home page state
let items = []; // Home hero items
let currentIndex = 0;
let autoTimer = null;
const SLIDE_DELAY = 8000;

// Movies page state
let moviesItems = [];
let moviesCurrentIndex = 0;
let moviesAutoTimer = null;
let moviesCurrentPage = 1;
let moviesTotalPages = 1;

// Series page state
let seriesItems = [];
let seriesCurrentIndex = 0;
let seriesAutoTimer = null;
let seriesCurrentPage = 1;
let seriesTotalPages = 1;

// Genres page state
let currentPage = 1;
let totalPagesGlobal = 1;
let selectedType = 'movie';
let selectedGenre = null;
let selectedYear = '';
let selectedCountry = '';
let selectedSort = 'popularity.desc';

// News page state
let newsIntervals = {};
let newsData = {
  movie: [],
  tv: [],
  general: [],
  actor: [],
  social: [],
  moviesTv: [],
  trailers: [],
  trending: []
};

// Search state
let searchTimeout = null;
let currentSearchResults = [];
let lastRefreshTime = null;

// Current page state
let currentPageName = 'home';

// ===== NAVIGATION =====
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    showPage(page);
  });
});


async function fetchTVMazeSchedule(containerId, limit, date = new Date().toISOString().split('T')[0]) {
  const container = q(containerId);
  if (!container) {
    console.error(`Container ${containerId} not found`);
    return;
  }
  container.innerHTML = '<div class="loading-spinner">Loading...</div>';
  try {
    const res = await fetch(`https://api.tvmaze.com/schedule?country=US&date=${date}&api_key=${TVMAZE_API}`);
    if (!res.ok) throw new Error(`Fetch failed for ${containerId}: ${res.status}`);
    const data = await res.json();
    container.innerHTML = '';
    
    // Map TVmaze data to TMDb-like structure for createCard
    const mappedData = data.slice(0, limit).map(item => ({
      id: item.show.id,
      title: item.show.name,
      poster_path: item.show.image?.medium || '/static/images/placeholder.jpg',
      vote_average: item.show.rating?.average || 0,
      overview: item.show.summary?.replace(/<[^>]+>/g, '') || 'No description available',
      media_type: 'tv'
    }));

    mappedData.forEach(item => {
      const card = createCard(item, 'tv');
      container.appendChild(card);
    });
    console.log(`Populated ${containerId} with TVmaze data`);
    addCarouselNavigation(); // Ensure navigation works
  } catch (error) {
    console.error(`Error fetching ${containerId}:`, error);
    container.innerHTML = '<div class="title-box">Error loading content</div>';
  }
}

// Show specific page
function showPage(page) {
  // Save current page to localStorage
  localStorage.setItem('currentPage', page);
  currentPageName = page;
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  
  // Show selected page
  const activePage = q(`${page}-page`);
  if (activePage) activePage.style.display = 'block';

  // Update active nav link
  navLinks.forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  navlinks.forEach(l => l.classList.remove('active'));
  const activeLinks = document.querySelector(`.navmobile[data-page="${page}"]`);
  if (activeLinks) activeLinks.classList.add('active');

  // Page-specific initialization
  const today = new Date().toISOString().split('T')[0];

// Update the showPage function for the home page
if (page === 'home') {
  console.log('Loading home page content');
  fetchTrending();
  fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies', 10, false, 'movie');
  fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv', 10, false, 'tv');
  fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning', 10, false, 'movie');
  fetchUpcomingCombined('recommendations', 10);
  fetchTop10();
  fetchActors();
  fetchHomeNews();
  loadMovieTrivia();
  loadThisDayInHistory();
  loadDirectorSpotlight();
} else if (page === 'movies') {
    console.log('Loading movies page content');
    fetchMoviesTrending();
    loadMovies(moviesCurrentPage);
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'movies-top-rated', 10, false, 'movie');
    fetchUpcomingMovies('movies-upcoming', 10);
  } else if (page === 'series') {
    console.log('Loading series page content');
    fetchSeriesTrending();
    loadSeries(seriesCurrentPage);
    fetchMovies(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'series-top-rated', 10, false, 'tv');
    fetchUpcoming(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.asc&first_air_date.gte=${today}&first_air_date.lte=2026-12-31`, 'series-airing', 10, 'tv');
  } else if (page === 'genres') {
    console.log('Loading genres page content');
    selectedType = 'movie';
    selectedGenre = null;
    selectedYear = '';
    selectedCountry = '';
    selectedSort = 'popularity.desc';
    const radio = document.querySelector('input[name="media-type"][value="movie"]');
    if (radio) radio.checked = true;
    populateYearsAndCountries();
    populateGenreButtons('movie');
    if (genresResults) genresResults.classList.remove('active');
    if (promptMessage) promptMessage.style.display = 'block';
    if (genresResults) genresResults.innerHTML = '';
    if (genresPagination) genresPagination.innerHTML = '';
  } else if (page === 'news-updates') {
    console.log('Loading news page content');
    setTimeout(() => initNewsPage(), 100);
  } else if (page === 'mylist') {
    console.log('Loading my list page');
    showMyListPage();
  
  } else if (page === 'search-results') {
    // Search results page is handled by search functionality
  }
   else if (page === 'search-results') {
  // Search results page is handled by search functionality
  // Add back button to search results page
  const searchResultsPage = document.getElementById('search-results-page');
  if (searchResultsPage) {
    // Check if back button already exists
    if (!searchResultsPage.querySelector('.search-back-btn')) {
      const backBtn = document.createElement('button');
      backBtn.className = 'search-back-btn';
      backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
      backBtn.addEventListener('click', () => {
        const previousPage = localStorage.getItem('currentPage') || 'home';
        showPage(previousPage);
      });
      searchResultsPage.insertBefore(backBtn, searchResultsPage.firstChild);
    }
  }
} else if (page === 'home') {
  console.log('Loading home page content');
  fetchTrending();
  fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies', 10, false, 'movie');
  fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv', 10, false, 'tv');
  fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning', 10, false, 'movie');
  fetchUpcomingCombined('recommendations', 10);
  fetchTop10();
  fetchActors();
  fetchHomeNews();
  loadMovieTrivia();
}else if (page === 'home') {
  console.log('Loading home page content');
  fetchTrending();
  fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies', 10, false, 'movie');
  fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv', 10, false, 'tv');
  fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning', 10, false, 'movie');
  fetchUpcomingCombined('recommendations', 10);
  fetchTop10();
  fetchActors();
  fetchHomeNews();
  loadMovieTrivia();
  loadThisDayInHistory();
}else // Add to your home page initialization
if (page === 'home') {
  console.log('Loading home page content');
  fetchTrending();
  fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies', 10, false, 'movie');
  fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv', 10, false, 'tv');
  fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning', 10, false, 'movie');
  fetchUpcomingCombined('recommendations', 10);
  fetchTop10();
  fetchActors();
  fetchHomeNews();
  loadMovieTrivia();
  loadThisDayInHistory();
  loadDirectorSpotlight();
}

}

  const navlinks = document.querySelectorAll(".navmobile");

  navlinks.forEach(link => {
    link.addEventListener("click", () => {
      // remove active from all links
      navLinks.forEach(l => l.classList.remove("active"));
      // add active to the clicked link
      link.classList.add("active");
    });
  });

// Director names to fetch from TMDB
const directorNames = [
  "Christopher Nolan",
  "Steven Spielberg",
  "Martin Scorsese",
  "Quentin Tarantino",
  "Greta Gerwig",
  "Stanley Kubrick",
  "Alfred Hitchcock",
  "Akira Kurosawa"
];

// Directors array that will be populated from TMDB
let directors = [];

// Function to fetch director data from TMDB
async function fetchDirectorData(directorName) {
  try {
    // Search for the director
    const searchResponse = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(directorName)}`);
    const searchData = await searchResponse.json();
    
    if (searchData.results && searchData.results.length > 0) {
      const director = searchData.results[0];
      
      // Get detailed information including biography and images
      const detailsResponse = await fetch(`https://api.themoviedb.org/3/person/${director.id}?api_key=${API_KEY}`);
      const detailsData = await detailsResponse.json();
      
      // Get movie credits to find notable films
      const creditsResponse = await fetch(`https://api.themoviedb.org/3/person/${director.id}/movie_credits?api_key=${API_KEY}`);
      const creditsData = await creditsResponse.json();
      
      // Extract notable films (directed by this person)
      const notableFilms = creditsData.crew
        .filter(person => person.job === "Director" && person.poster_path)
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 5)
        .map(movie => movie.title);
      
      return {
        id: director.id,
        name: director.name,
        bio: detailsData.biography || "Biography not available.",
        image: detailsData.profile_path ? `https://image.tmdb.org/t/p/w500${detailsData.profile_path}` : null,
        notableFilms: notableFilms.length > 0 ? notableFilms : ["Film data not available"]
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching data for ${directorName}:`, error);
    return null;
  }
}

// Function to initialize directors with data from TMDB
async function initializeDirectors() {
  directors = [];
  
  // Fetch data for each director
  for (const name of directorNames) {
    const directorData = await fetchDirectorData(name);
    
    if (directorData) {
      directors.push(directorData);
    } else {
      // Fallback if director not found
      directors.push({
        name: name,
        bio: "Biography not available.",
        image: `https://picsum.photos/seed/${name.replace(/\s+/g, '')}/500/500.jpg`,
        notableFilms: ["Film data not available"]
      });
    }
  }
  
  console.log("Directors data loaded:", directors);
  
  // After loading directors, initialize the spotlight section if on home page
  if (document.querySelector('#home-page') && document.querySelector('#home-page').style.display !== 'none') {
    loadDirectorSpotlight();
  }
}

// Function to show next director
let currentDirectorIndex = 0;
let directorAutoTimer = null;

function showNextDirector() {
  const imageEl = document.querySelector('.spotlight-image');
  const portraitEl = document.querySelector('.director-portrait');
  const nameEl = document.querySelector('.spotlight-name');
  const bioEl = document.querySelector('.spotlight-bio');
  const filmsListEl = document.querySelector('.films-list');
  
  if (!imageEl || !portraitEl || !nameEl || !bioEl || !filmsListEl || directors.length === 0) return;
  
  // Get next director
  const director = directors[currentDirectorIndex];
  currentDirectorIndex = (currentDirectorIndex + 1) % directors.length;
  
  // Add animation
  const spotlightCard = document.querySelector('.spotlight-card');
  if (spotlightCard) {
    spotlightCard.classList.remove('active');
  }
  
  setTimeout(() => {
    // Use a fallback image if the director image fails to load
    const testImg = new Image();
    testImg.onload = function() {
      imageEl.style.backgroundImage = `url(${director.image})`;
      portraitEl.style.backgroundImage = `url(${director.image})`;
    };
    testImg.onerror = function() {
      // Use a fallback if the image fails to load
      const fallbackUrl = `https://picsum.photos/seed/${director.name.replace(/\s+/g, '')}/500/500.jpg`;
      imageEl.style.backgroundImage = `url(${fallbackUrl})`;
      portraitEl.style.backgroundImage = `url(${fallbackUrl})`;
    };
    testImg.src = director.image;
    
    nameEl.textContent = director.name;
    bioEl.textContent = director.bio;
    
    // Clear and populate films list
    filmsListEl.innerHTML = '';
    director.notableFilms.forEach(film => {
      const li = document.createElement('li');
      li.textContent = film;
      filmsListEl.appendChild(li);
    });
    
    if (spotlightCard) {
      spotlightCard.classList.add('active');
    }
  }, 300);
}

// Function to show previous director
function showPrevDirector() {
  const imageEl = document.querySelector('.spotlight-image');
  const portraitEl = document.querySelector('.director-portrait');
  const nameEl = document.querySelector('.spotlight-name');
  const bioEl = document.querySelector('.spotlight-bio');
  const filmsListEl = document.querySelector('.films-list');
  
  if (!imageEl || !portraitEl || !nameEl || !bioEl || !filmsListEl || directors.length === 0) return;
  
  // Get previous director
  currentDirectorIndex = (currentDirectorIndex - 1 + directors.length) % directors.length;
  const director = directors[currentDirectorIndex];
  
  // Add animation
  const spotlightCard = document.querySelector('.spotlight-card');
  if (spotlightCard) {
    spotlightCard.classList.remove('active');
  }
  
  setTimeout(() => {
    // Use a fallback image if the director image fails to load
    const testImg = new Image();
    testImg.onload = function() {
      imageEl.style.backgroundImage = `url(${director.image})`;
      portraitEl.style.backgroundImage = `url(${director.image})`;
    };
    testImg.onerror = function() {
      // Use a fallback if the image fails to load
      const fallbackUrl = `https://picsum.photos/seed/${director.name.replace(/\s+/g, '')}/500/500.jpg`;
      imageEl.style.backgroundImage = `url(${fallbackUrl})`;
      portraitEl.style.backgroundImage = `url(${fallbackUrl})`;
    };
    testImg.src = director.image;
    
    nameEl.textContent = director.name;
    bioEl.textContent = director.bio;
    
    // Clear and populate films list
    filmsListEl.innerHTML = '';
    director.notableFilms.forEach(film => {
      const li = document.createElement('li');
      li.textContent = film;
      filmsListEl.appendChild(li);
    });
    
    if (spotlightCard) {
      spotlightCard.classList.add('active');
    }
  }, 300);
}

// Function to start auto-rotation of directors
function startDirectorAuto() {
  stopDirectorAuto();
  if (directors.length > 0) {
    directorAutoTimer = setInterval(() => {
      showNextDirector();
    }, 10000); // Change every 10 seconds
  }
}

// Function to stop auto-rotation
function stopDirectorAuto() {
  if (directorAutoTimer) {
    clearInterval(directorAutoTimer);
    directorAutoTimer = null;
  }
}

// Update the loadDirectorSpotlight function
function loadDirectorSpotlight() {
  // Check if directors data is loaded
  if (directors.length === 0) {
    console.log("Directors data not loaded yet, trying again in 500ms");
    // Data not loaded yet, try again later
    setTimeout(loadDirectorSpotlight, 500);
    return;
  }
  
  // Check if spotlight section already exists
  let spotlightSection = document.querySelector('.spotlight-section');
  if (!spotlightSection) {
    spotlightSection = document.createElement('section');
    spotlightSection.className = 'spotlight-section';
    spotlightSection.innerHTML = `
      <h2>Director Spotlight</h2>
      <div class="spotlight-container">
        <div class="spotlight-card">
          <div class="spotlight-image"></div>
          <div class="spotlight-info">
            <div class="director-portrait-container">
              <div class="director-portrait"></div>
            </div>
            <h3 class="spotlight-name"></h3>
            <p class="spotlight-bio"></p>
            <div class="spotlight-films">
              <h4>Notable Films:</h4>
              <ul class="films-list"></ul>
            </div>
            <div class="spotlight-controls">
              <button class="spotlight-prev-btn"><i class="fas fa-chevron-left"></i></button>
              <button class="spotlight-next-btn">Next Director<i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Insert after the history section
    const historySection = document.querySelector('.history-section');
    if (historySection && historySection.nextSibling) {
      historySection.parentNode.insertBefore(spotlightSection, historySection.nextSibling);
    } else {
      document.querySelector('#home-page').appendChild(spotlightSection);
    }
  }
  
  // Load first director
  showNextDirector();
  
  // Add event listeners to navigation buttons
  const nextBtn = spotlightSection.querySelector('.spotlight-next-btn');
  const prevBtn = spotlightSection.querySelector('.spotlight-prev-btn');
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showNextDirector();
      startDirectorAuto(); // Reset timer on manual navigation
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showPrevDirector();
      startDirectorAuto(); // Reset timer on manual navigation
    });
  }
  
  // Start auto-rotation
  startDirectorAuto();
}

// Function to fetch movie data from TMDB
async function fetchMovieData(movieTitle) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}`);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const movie = data.results[0];
      
      // Fetch additional details including images
      const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`);
      const detailsData = await detailsResponse.json();
      
      return {
        id: movie.id,
        title: movie.title,
        poster: detailsData.poster_path ? `https://image.tmdb.org/t/p/w500${detailsData.poster_path}` : null,
        backdrop: detailsData.backdrop_path ? `https://image.tmdb.org/t/p/w500${detailsData.backdrop_path}` : null,
        release_date: movie.release_date,
        overview: movie.overview
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching data for ${movieTitle}:`, error);
    return null;
  }
}

// Function to fetch person data from TMDB
async function fetchPersonData(personName) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${encodeURIComponent(personName)}`);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      const person = data.results[0];
      
      // Fetch additional details including images
      const detailsResponse = await fetch(`https://api.themoviedb.org/3/person/${person.id}?api_key=${API_KEY}`);
      const detailsData = await detailsResponse.json();
      
      return {
        id: person.id,
        name: person.name,
        profile: detailsData.profile_path ? `https://image.tmdb.org/t/p/w500${detailsData.profile_path}` : null,
        biography: detailsData.biography
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching data for ${personName}:`, error);
    return null;
  }
}

// Movie trivia data with movie titles that we'll fetch from TMDB
const triviaData = [
  {
    question: "Which movie holds the record for the most Oscar wins?",
    answer: "Ben-Hur, Titanic, and The Lord of the Rings: The Return of the King all hold the record with 11 Oscars each.",
    movieTitle: "The Lord of the Rings: The Return of the King"
  },
  {
    question: "What was the first movie to feature a sound dialogue?",
    answer: "The Jazz Singer (1927) was the first feature-length motion picture with synchronized dialogue.",
    movieTitle: "The Jazz Singer"
  },
  {
    question: "Which actor has appeared in the most movies?",
    answer: "Christopher Lee appeared in over 280 films throughout his career.",
    personName: "Christopher Lee"
  },
  {
    question: "What is the highest-grossing film of all time?",
    answer: "Avatar (2009) is the highest-grossing film of all time with over $2.8 billion worldwide.",
    movieTitle: "Avatar"
  },
  {
    question: "Which movie was the first to be rated PG-13?",
    answer: "Red Dawn (1984) was the first film to receive the PG-13 rating.",
    movieTitle: "Red Dawn"
  },
  {
    question: "Which movie had the largest budget ever?",
    answer: "Avengers: Endgame (2019) had a budget of $356 million, making it one of the most expensive films ever made.",
    movieTitle: "Avengers: Endgame"
  },
  {
    question: "Which director has won the most Academy Awards?",
    answer: "John Ford has won the most Academy Awards for Best Director with four wins.",
    personName: "John Ford"
  },
  {
    question: "What was the first feature-length animated film?",
    answer: "Snow White and the Seven Dwarfs (1937) was the first feature-length animated film.",
    movieTitle: "Snow White and the Seven Dwarfs"
  }
];

// Movie trivia that will be populated from TMDB
let movieTrivia = [];

// Function to initialize movie trivia with data from TMDB
async function initializeMovieTrivia() {
  movieTrivia = [];
  
  for (const trivia of triviaData) {
    let image = null;
    
    if (trivia.movieTitle) {
      const movieData = await fetchMovieData(trivia.movieTitle);
      image = movieData ? movieData.poster : null;
    } else if (trivia.personName) {
      const personData = await fetchPersonData(trivia.personName);
      image = personData ? personData.profile : null;
    }
    
    movieTrivia.push({
      question: trivia.question,
      answer: trivia.answer,
      image: image || `https://picsum.photos/seed/trivia${trivia.question.substring(0, 10).replace(/\s+/g, '')}/500/500.jpg`
    });
  }
  
  console.log("Movie trivia data loaded:", movieTrivia);
  
  // After loading trivia, initialize the trivia section if on home page
  if (document.querySelector('#home-page') && document.querySelector('#home-page').style.display !== 'none') {
    loadMovieTrivia();
  }
}

// This Day in Movie History data with movie titles that we'll fetch from TMDB
const historyData = [
  {
    date: "May 25",
    year: "1977",
    event: "Star Wars: Episode IV - A New Hope was released in theaters",
    significance: "This film revolutionized the science fiction genre and special effects in cinema",
    movieTitle: "Star Wars"
  },
  {
    date: "July 15",
    year: "2003",
    event: "Pirates of the Caribbean: The Curse of the Black Pearl was released",
    significance: "Launched one of the most successful film franchises in history",
    movieTitle: "Pirates of the Caribbean: The Curse of the Black Pearl"
  },
  {
    date: "December 18",
    year: "2009",
    event: "Avatar premiered in London",
    significance: "Became the highest-grossing film of all time with over $2.8 billion worldwide",
    movieTitle: "Avatar"
  },
  {
    date: "April 3",
    year: "1996",
    event: "Fargo was released in the United States",
    significance: "The Coen Brothers' dark comedy won two Oscars and became a cult classic",
    movieTitle: "Fargo"
  },
  {
    date: "October 1",
    year: "1993",
    event: "Jurassic Park premiered",
    significance: "Revolutionized CGI effects and became a landmark in visual effects history",
    movieTitle: "Jurassic Park"
  },
  {
    date: "May 16",
    year: "1929",
    event: "First Academy Awards ceremony was held",
    significance: "The first Oscars honored films released in 1927-1928 and lasted only 15 minutes",
    movieTitle: "Wings" // First Best Picture winner
  },
  {
    date: "December 26",
    year: "1940",
    event: "The Philadelphia Story premiered",
    significance: "Cary Grant, Katharine Hepburn, and James Stewart starred in this classic comedy",
    movieTitle: "The Philadelphia Story"
  },
  {
    date: "September 30",
    year: "1960",
    event: "The Flintstones premiered on ABC",
    significance: "The first prime-time animated series on American television",
    movieTitle: "The Flintstones" // Not a movie, but we'll try to find a poster
  }
];

// This Day in Movie History that will be populated from TMDB
let thisDayInHistory = [];

// Function to initialize This Day in Movie History with data from TMDB
async function initializeThisDayInHistory() {
  thisDayInHistory = [];
  
  for (const history of historyData) {
    let image = null;
    
    if (history.movieTitle) {
      const movieData = await fetchMovieData(history.movieTitle);
      image = movieData ? movieData.poster : null;
    }
    
    thisDayInHistory.push({
      date: history.date,
      year: history.year,
      event: history.event,
      significance: history.significance,
      image: image || `https://picsum.photos/seed/history${history.event.substring(0, 10).replace(/\s+/g, '')}/500/500.jpg`
    });
  }
  
  console.log("This Day in Movie History data loaded:", thisDayInHistory);
  
  // After loading history, initialize the history section if on home page
  if (document.querySelector('#home-page') && document.querySelector('#home-page').style.display !== 'none') {
    loadThisDayInHistory();
  }
}

// Function to initialize all data from TMDB
async function initializeAllData() {
  console.log("Initializing all data from TMDB...");
  
  await Promise.all([
    initializeDirectors(),
    initializeMovieTrivia(),
    initializeThisDayInHistory()
  ]);
  
  console.log("All data initialized successfully");
}

// Function to show next trivia
let currentTriviaIndex = 0;

function showNextTrivia() {
  const questionEl = document.querySelector('.trivia-question');
  const answerEl = document.querySelector('.trivia-answer');
  const imageEl = document.querySelector('.trivia-image');
  
  if (!questionEl || !answerEl || !imageEl || movieTrivia.length === 0) return;
  
  // Get random trivia
  const randomIndex = Math.floor(Math.random() * movieTrivia.length);
  const trivia = movieTrivia[randomIndex];
  
  // Add animation
  const triviaCard = document.querySelector('.trivia-card');
  if (triviaCard) {
    triviaCard.classList.remove('active');
  }
  
  setTimeout(() => {
    questionEl.textContent = trivia.question;
    answerEl.textContent = '';
    
    // Use a fallback image if the trivia image fails to load
    const testImg = new Image();
    testImg.onload = function() {
      imageEl.style.backgroundImage = `url(${trivia.image})`;
    };
    testImg.onerror = function() {
      // Use a fallback if the image fails to load
      imageEl.style.backgroundImage = `url(https://picsum.photos/seed/trivia${randomIndex}/500/500.jpg)`;
    };
    testImg.src = trivia.image;
    
    if (triviaCard) {
      triviaCard.classList.add('active');
    }
    
    // Show answer after a delay
    setTimeout(() => {
      answerEl.textContent = trivia.answer;
    }, 1000);
  }, 300);
}

// Update the loadMovieTrivia function
function loadMovieTrivia() {
  // Check if movieTrivia data is loaded
  if (movieTrivia.length === 0) {
    console.log("Movie trivia data not loaded yet, trying again in 500ms");
    // Data not loaded yet, try again later
    setTimeout(loadMovieTrivia, 500);
    return;
  }
  
  // Check if trivia section already exists
  let triviaSection = document.querySelector('.trivia-section');
  if (!triviaSection) {
    triviaSection = document.createElement('section');
    triviaSection.className = 'trivia-section';
    triviaSection.innerHTML = `
      <h2>Movie Trivia</h2>
      <div class="trivia-container">
        <div class="trivia-card">
          <div class="trivia-image"></div>
          <div class="trivia-content">
            <div class="trivia-question">Loading trivia...</div>
            <div class="trivia-answer"></div>
            <button class="trivia-next-btn">Next Trivia</button>
          </div>
        </div>
      </div>
    `;
    
    // Insert after the news section
    const newsSection = document.querySelector('.news-section');
    if (newsSection && newsSection.nextSibling) {
      newsSection.parentNode.insertBefore(triviaSection, newsSection.nextSibling);
    } else {
      document.querySelector('#home-page').appendChild(triviaSection);
    }
  }
  
  // Load first trivia
  showNextTrivia();
  
  // Add event listener to next button
  const nextBtn = triviaSection.querySelector('.trivia-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', showNextTrivia);
  }
}

// Function to show random history event
function showRandomHistoryEvent() {
  const dateEl = document.querySelector('.history-date');
  const eventEl = document.querySelector('.history-event');
  const significanceEl = document.querySelector('.history-significance');
  const imageEl = document.querySelector('.history-image');
  
  if (!dateEl || !eventEl || !significanceEl || !imageEl || thisDayInHistory.length === 0) return;
  
  // Get random history event
  const randomIndex = Math.floor(Math.random() * thisDayInHistory.length);
  const history = thisDayInHistory[randomIndex];
  
  // Add animation
  const historyCard = document.querySelector('.history-card');
  if (historyCard) {
    historyCard.classList.remove('active');
  }
  
  setTimeout(() => {
    dateEl.innerHTML = `<i class="fas fa-calendar-alt"></i> ${history.date}, ${history.year}`;
    eventEl.innerHTML = `<i class="fas fa-film"></i> ${history.event}`;
    significanceEl.innerHTML = `<i class="fas fa-star"></i> ${history.significance}`;
    
    // Use a fallback image if the history image fails to load
    const testImg = new Image();
    testImg.onload = function() {
      imageEl.style.backgroundImage = `url(${history.image})`;
    };
    testImg.onerror = function() {
      // Use a fallback if the image fails to load
      imageEl.style.backgroundImage = `url(https://picsum.photos/seed/history${randomIndex}/500/500.jpg)`;
    };
    testImg.src = history.image;
    
    if (historyCard) {
      historyCard.classList.add('active');
    }
  }, 300);
}

// Update the loadThisDayInHistory function
function loadThisDayInHistory() {
  // Check if thisDayInHistory data is loaded
  if (thisDayInHistory.length === 0) {
    console.log("This Day in Movie History data not loaded yet, trying again in 500ms");
    // Data not loaded yet, try again later
    setTimeout(loadThisDayInHistory, 500);
    return;
  }
  
  // Check if history section already exists
  let historySection = document.querySelector('.history-section');
  if (!historySection) {
    historySection = document.createElement('section');
    historySection.className = 'history-section';
    historySection.innerHTML = `
      <h2>This Day in Movie History</h2>
      <div class="history-container">
        <div class="history-card">
          <div class="history-content">
            <div class="history-date">Loading...</div>
            <div class="history-event"></div>
            <div class="history-significance"></div>
          </div>
          <div class="history-image"></div>
        </div>
      </div>
    `;
    
    // Insert after the trivia section
    const triviaSection = document.querySelector('.trivia-section');
    if (triviaSection && triviaSection.nextSibling) {
      triviaSection.parentNode.insertBefore(historySection, triviaSection.nextSibling);
    } else {
      document.querySelector('#home-page').appendChild(historySection);
    }
  }
  
  // Load a random history event
  showRandomHistoryEvent();
}

// In index.js, replace the existing DOMContentLoaded logout handler and related logic

document.addEventListener('DOMContentLoaded', () => {
  // Existing initialization code
  if (!authState.isLoggedIn()) {
    showPage('login');
    return;
  }
  const savedPage = localStorage.getItem('currentPage') || 'home';
  populateYearsAndCountries();
  populateGenreButtons('movie');
  initSearch();
  showPage(savedPage);

  // Handle logout link clicks
  const logoutLinks = document.querySelectorAll('.nav-link[data-page="logout"]');
  logoutLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      
      });
    });
  });

// New function for single-item sections
async function fetchSingleItem(endpoint, containerId, type) {
  const container = q(containerId);
  if (!container) return;
  container.innerHTML = '<div class="loading-spinner">Loading...</div>';
  try {
    // Fetch top-rated item
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`Fetch failed for ${containerId}: ${res.status}`);
    const data = await res.json();
    container.innerHTML = '';
    if (data.results.length > 0) {
      const item = data.results[0];
      // Fetch credits for cast and director
      const creditsRes = await fetch(`${BASE}/${type}/${item.id}/credits?api_key=${API_KEY}&language=en-US`);
      if (!creditsRes.ok) throw new Error(`Fetch credits failed for ${item.id}`);
      const credits = await creditsRes.json();
      
      // Create carousel item
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      // Set grayscale backdrop using backdrop_path
      carouselItem.style.setProperty('--backdrop-url', `url(${IMAGE_BASE}${item.backdrop_path})`);
      
      // Create poster
      const poster = document.createElement('img');
      poster.src = item.poster_path ? `${IMAGE_BASE}${item.poster_path}` : '/static/images/placeholder.jpg';
      poster.alt = type === 'movie' ? item.title : item.name;
      
      // Create IMDb rating (using vote_average)
      const rating = document.createElement('div');
      rating.classList.add('imdb-rating');
      rating.textContent = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
      
      // Create movie info container
      const movieInfo = document.createElement('div');
      movieInfo.classList.add('movie-info');
      
      // Title
      const title = document.createElement('h3');
      title.textContent = type === 'movie' ? item.title : item.name;
      
      // Summary (overview)
      const summary = document.createElement('p');
      summary.textContent = item.overview || 'No summary available.';
      
      // Cast (top 3 actors)
      const cast = document.createElement('p');
      cast.classList.add('cast');
      const topCast = credits.cast.slice(0, 3).map(actor => actor.name).join(', ') || 'Unknown';
      cast.textContent = `Cast: ${topCast}`;
      
      // Director (for movies) or Creator (for series)
      const director = document.createElement('p');
      director.classList.add('director');
      let directorName = 'Unknown';
      if (type === 'movie') {
        const directors = credits.crew.find(member => member.job === 'Director');
        directorName = directors ? directors.name : 'Unknown';
      } else {
        // For series, try to get creator from /tv/{id} endpoint if needed
        const seriesRes = await fetch(`${BASE}/tv/${item.id}?api_key=${API_KEY}&language=en-US`);
        const seriesData = await seriesRes.json();
        directorName = seriesData.created_by?.[0]?.name || 'Unknown';
      }
      director.textContent = `${type === 'movie' ? 'Director' : 'Creator'}: ${directorName}`;
      
      // Additional details (e.g., release date, genres)
      const release = document.createElement('p');
      release.textContent = `Release: ${item.release_date || item.first_air_date || 'Unknown'}`;
      
      const genres = document.createElement('p');
      genres.textContent = `Genres: ${item.genre_ids.map(id => GENRE_MAP[id] || 'Unknown').join(', ') || 'Unknown'}`;
      
      // Append elements
      movieInfo.append(title, summary, cast, director, release, genres);
      carouselItem.append(poster, rating, movieInfo);
      container.appendChild(carouselItem);
      
      console.log(`Populated ${containerId}`);
    } else {
      container.innerHTML = '<div class="title-box">No featured content available</div>';
    }
  } catch (error) {
    console.error(`Error fetching ${containerId}:`, error);
    container.innerHTML = '<div class="title-box">Error loading content</div>';
  }
}

function fetchUpcomingMovies(containerId, limit) {
  console.log('Running fetchUpcomingMovies for:', containerId);
  fetchMovies(`${BASE}/movie/upcoming?api_key=${API_KEY}&language=en-US`, containerId, limit, false, 'movie');
}

function createCard(item, type) {
    if (!item) {
        console.error('createCard: Item is null or undefined');
        return null;
    }
    const card = document.createElement('div');
    card.className = 'carousel-item';
    const title = type === 'tv' ? (item.name || 'Untitled Series') : (item.title || 'Untitled Movie');
    const poster = item.poster_path ? `${IMG_PATH}${item.poster_path}` : '/static/images/placeholder.jpg';
    const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
    card.innerHTML = `
        <img src="${poster}" alt="${title}" loading="lazy">
        <div class="card-info">
            <h3>${title}</h3>
            <span class="rating">${rating}</span>
        </div>
    `;
    card.addEventListener('click', () => showDetails(item.id, type));
    return card;
}

function showPage(page) {
  localStorage.setItem('currentPage', page);
  currentPageName = page;

  // Special handling for logout: show confirmation popup instead of directly showing the page
  if (page === 'logout') {
    const logoutConfirmation = document.getElementById('logout-confirmation');
    if (logoutConfirmation) {
      logoutConfirmation.classList.add('show');
    }
    return; // Exit early to prevent showing the logout page
  }

  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const activePage = q(`${page}-page`);
  if (activePage) activePage.style.display = 'block';
  navLinks.forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');
  navlinks.forEach(l => l.classList.remove('active'));
  const activeLinks = document.querySelector(`.navmobile[data-page="${page}"]`);
  if (activeLinks) activeLinks.classList.add('active');
  const footer = document.querySelector('#footer');
  if (footer) {
    footer.style.display = ['login', 'signup'].includes(page) ? 'none' : 'block';
  }
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('#sidebar-overlay');
  if (sidebar && sidebarOverlay) {
    if (['login', 'signup'].includes(page)) {
      sidebarOverlay.style.display = 'block';
      sidebar.style.pointerEvents = 'none';
      sidebar.style.opacity = '0.5';
      const hamburger = q('hamburger');
      if (hamburger) hamburger.style.pointerEvents = 'none';
    } else {
      sidebarOverlay.style.display = 'none';
      sidebar.style.pointerEvents = 'auto';
      sidebar.style.opacity = '1';
      const hamburger = q('hamburger');
      if (hamburger) hamburger.style.pointerEvents = 'auto';
    }
  }
  const today = new Date().toISOString().split('T')[0];
  // Home page
if (page === 'home') {
  console.log('Loading home page content');
  fetchTrending();
  fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies', 10, false, 'movie');
  fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv', 10, false, 'tv');
  fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning', 10, false, 'movie');
  fetchUpcomingCombined('recommendations', 10);
  fetchTop10();
  fetchActors();
  fetchHomeNews();
  loadMovieTrivia();
  loadThisDayInHistory();
  loadDirectorSpotlight();
  fetchMovies(`${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`, 'specials-track', 10, false, 'movie');
  fetchMovies(`${BASE}/movie/upcoming?api_key=${API_KEY}&language=en-US`, 'events-track', 10, false, 'movie');
  fetchSingleItem(`${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`, 'home-movie-of-week-track', 'movie'); // Updated ID
  // Recommended Based on Favorites
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (favorites.length > 0) {
    const genres = favorites.flatMap(f => f.genre_ids || []);
    const commonGenre = genres.sort((a, b) => genres.filter(v => v === a).length - genres.filter(v => v === b).length).pop();
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&with_genres=${commonGenre}&language=en-US`, 'recommended-favorites-track', 10, false, 'movie');
  } else {
    fetchMovies(`${BASE}/trending/movie/week?api_key=${API_KEY}&language=en-US`, 'recommended-favorites-track', 10, false, 'movie');
  }
// Movies page
} else if (page === 'movies') {
  console.log('Loading movies page content');
  fetchMoviesTrending();
  loadMovies(moviesCurrentPage);
  fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'movies-top-rated', 10, false, 'movie');
  fetchUpcomingMovies('movies-upcoming', 10);
  fetchMovies(`${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`, 'movie-specials-track', 10, false, 'movie');
  fetchMovies(`${BASE}/movie/upcoming?api_key=${API_KEY}&language=en-US`, 'movie-events-track', 10, false, 'movie');
  fetchSingleItem(`${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`, 'movies-movie-of-week-track', 'movie'); // Updated ID
  fetchMovies(`${BASE}/trending/movie/week?api_key=${API_KEY}&language=en-US`, 'movie-recommended-track', 10, false, 'movie');
} else if (page === 'series') {
    console.log('Loading series page content');
    fetchSeriesTrending();
    loadSeries(seriesCurrentPage);
    fetchMovies(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'series-top-rated', 10, false, 'tv');
    fetchUpcoming(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.asc&first_air_date.gte=${today}&first_air_date.lte=2026-12-31`, 'series-airing', 10, 'tv');
    fetchMovies(`${BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US`, 'series-specials-track', 10, false, 'tv');
    fetchMovies(`${BASE}/tv/airing_today?api_key=${API_KEY}&language=en-US`, 'series-events-track', 10, false, 'tv');
    fetchSingleItem(`${BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US`, 'series-of-week-track', 'tv');
    fetchMovies(`${BASE}/trending/tv/week?api_key=${API_KEY}&language=en-US`, 'series-recommended-track', 10, false, 'tv');
        // Populate Series page sections
  } else if (page === 'genres') {
    console.log('Loading genres page content');
    selectedType = 'movie';
    selectedGenre = null;
    selectedYear = '';
    selectedCountry = '';
    selectedSort = 'popularity.desc';
    const radio = document.querySelector('input[name="media-type"][value="movie"]');
    if (radio) radio.checked = true;
    populateYearsAndCountries();
    populateGenreButtons('movie');
    if (genresResults) genresResults.classList.remove('active');
    if (promptMessage) promptMessage.style.display = 'block';
    if (genresResults) genresResults.innerHTML = '';
    if (genresPagination) genresPagination.innerHTML = '';
  } else if (page === 'news-updates') {
    console.log('Loading news page content');
    setTimeout(() => initNewsPage(), 100);
  } else if (page === 'mylist') {
    console.log('Loading my list page');
    showMyListPage();
  } else if (page === 'community') {
    loadCommunity(); // Redesigned loader
  } else if (page === 'hall-of-fame') {
    loadHallOfFame(); // Redesigned loader
  } else if (page === 'search-results') {
    const searchResultsPage = document.getElementById('search-results-page');
    if (searchResultsPage) {
      if (!searchResultsPage.querySelector('.search-back-btn')) {
        const backBtn = document.createElement('button');
        backBtn.className = 'search-back-btn';
        backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
        backBtn.addEventListener('click', () => {
          const previousPage = localStorage.getItem('currentPage') || 'home';
          showPage(previousPage);
        });
        searchResultsPage.insertBefore(backBtn, searchResultsPage.firstChild);
      }
    }
  } else if (page === 'login' || page === 'signup') {
    const topbar = document.getElementById('topbar');
    if (topbar) topbar.style.display = 'none';
    const footers = document.getElementById('footer');
    if (footers) footers.style.display = 'none';
  } else {
    const topbar = document.getElementById('topbar');
    if (topbar) topbar.style.display = 'flex';
    const footers = document.getElementById('footer');
    if (footers) footers.style.display = 'block';
  }
}

// Enhanced initialization functions for the new pages
function initCommunityPage() {
  // Set up poll voting functionality
  const pollVoteBtns = document.querySelectorAll('.poll-vote-btn');
  pollVoteBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const pollContainer = this.closest('.poll');
      const pollOptions = pollContainer.querySelectorAll('input[type="radio"]');
      let selectedOption = null;
      
      pollOptions.forEach(option => {
        if (option.checked) {
          selectedOption = option.value;
        }
      });
      
      if (selectedOption) {
        // Simulate voting with animation
        const pollResults = pollContainer.querySelector('.poll-results');
        pollResults.style.display = 'block';
        pollResults.innerHTML = `
          <h4>Results:</h4>
          <div class="result-bar">
            <div class="result-option">Dune: Part Three</div>
            <div class="result-percentage">45%</div>
          </div>
          <div class="result-bar">
            <div class="result-option">Avatar 3</div>
            <div class="result-percentage">25%</div>
          </div>
          <div class="result-bar">
            <div class="result-option">Guardians of the Galaxy Vol. 4</div>
            <div class="result-percentage">20%</div>
          </div>
          <div class="result-bar">
            <div class="result-option">The Batman 2</div>
            <div class="result-percentage">10%</div>
          </div>
        `;
        
        // Animate the results
        const resultBars = pollResults.querySelectorAll('.result-bar');
        resultBars.forEach((bar, index) => {
          const percentageBar = document.createElement('div');
          percentageBar.className = 'percentage-bar';
          percentageBar.style.height = '8px';
          percentageBar.style.background = 'linear-gradient(90deg, var(--accent), #ff6b6b)';
          percentageBar.style.width = '0%';
          percentageBar.style.marginTop = '5px';
          percentageBar.style.borderRadius = '4px';
          bar.appendChild(percentageBar);
          
          // Animate the width based on percentage
          setTimeout(() => {
            const percentage = parseInt(bar.querySelector('.result-percentage').textContent);
            percentageBar.style.width = percentage + '%';
          }, 100 * (index + 1));
        });
        
        // Disable voting after vote
        pollOptions.forEach(option => {
          option.disabled = true;
        });
        this.disabled = true;
        
        // Show success message
        showNotification('Thank you for voting!', 'success');
      } else {
        showNotification('Please select an option before voting.', 'error');
      }
    });
  });
  
  // Set up like buttons with animation
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const likeCount = this.querySelector('i').nextSibling;
      const currentCount = parseInt(likeCount.textContent.trim());
      likeCount.textContent = ` ${currentCount + 1}`;
      
      // Change button to indicate liked with animation
      this.style.color = 'var(--accent)';
      this.style.transform = 'scale(1.2)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
      
      // Disable button to prevent multiple likes
      this.disabled = true;
    });
  });
}

function initHallOfFamePage() {
  // Set up poll voting functionality for Hall of Fame
  const hofPollVoteBtns = document.querySelectorAll('.hof-section .poll-vote-btn');
  hofPollVoteBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const pollContainer = this.closest('.poll');
      const pollOptions = pollContainer.querySelectorAll('input[type="radio"]');
      let selectedOption = null;
      
      pollOptions.forEach(option => {
        if (option.checked) {
          selectedOption = option.value;
        }
      });
      
      if (selectedOption) {
        // Simulate voting with animation
        const pollResults = pollContainer.querySelector('.poll-results');
        pollResults.style.display = 'block';
        pollResults.innerHTML = `
          <h4>Results:</h4>
          <div class="result-bar">
            <div class="result-option">James Bond is a codename</div>
            <div class="result-percentage">40%</div>
          </div>
          <div class="result-bar">
            <div class="result-option">Ferris Bueller is Cameron's dream</div>
            <div class="result-percentage">30%</div>
          </div>
          <div class="result-bar">
            <div class="result-option">The Pixar Theory</div>
            <div class="result-percentage">25%</div>
          </div>
          <div class="result-bar">
            <div class="result-option">None of these</div>
            <div class="result-percentage">5%</div>
          </div>
        `;
        
        // Animate the results
        const resultBars = pollResults.querySelectorAll('.result-bar');
        resultBars.forEach((bar, index) => {
          const percentageBar = document.createElement('div');
          percentageBar.className = 'percentage-bar';
          percentageBar.style.height = '8px';
          percentageBar.style.background = 'linear-gradient(90deg, var(--gold), #ffd700)';
          percentageBar.style.width = '0%';
          percentageBar.style.marginTop = '5px';
          percentageBar.style.borderRadius = '4px';
          bar.appendChild(percentageBar);
          
          // Animate the width based on percentage
          setTimeout(() => {
            const percentage = parseInt(bar.querySelector('.result-percentage').textContent);
            percentageBar.style.width = percentage + '%';
          }, 100 * (index + 1));
        });
        
        // Disable voting after vote
        pollOptions.forEach(option => {
          option.disabled = true;
        });
        this.disabled = true;
        
        // Show success message
        showNotification('Thank you for voting!', 'success');
      } else {
        showNotification('Please select an option before voting.', 'error');
      }
    });
  });
  
  // Set up comment submission with animation
  const commentForms = document.querySelectorAll('.comment-form button');
  commentForms.forEach(btn => {
    btn.addEventListener('click', function() {
      const form = this.closest('.comment-form');
      const textarea = form.querySelector('textarea');
      const commentText = textarea.value.trim();
      
      if (commentText) {
        const commentsList = form.closest('.comments-section').querySelector('.comments-list');
        
        // Create new comment element with animation
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.style.opacity = '0';
        newComment.style.transform = 'translateY(20px)';
        newComment.innerHTML = `
          <div class="comment-header">
            <img src="https://picsum.photos/seed/newuser/40/40.jpg" alt="User" class="user-avatar">
            <div>
              <div class="user-name">You</div>
              <div class="comment-time">Just now</div>
            </div>
          </div>
          <div class="comment-content">
            <p>${commentText}</p>
          </div>
        `;
        
        // Add to comments list
        commentsList.insertBefore(newComment, commentsList.firstChild);
        
        // Animate the new comment
        setTimeout(() => {
          newComment.style.transition = 'all 0.5s ease';
          newComment.style.opacity = '1';
          newComment.style.transform = 'translateY(0)';
        }, 10);
        
        // Clear textarea
        textarea.value = '';
        
        // Show success message
        showNotification('Comment posted successfully!', 'success');
      } else {
        showNotification('Please enter a comment before submitting.', 'error');
      }
    });
  });
  
  // Add hover effect to award items
  const awardItems = document.querySelectorAll('.award-item');
  awardItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0) scale(1)';
    });
  });
  
  // Add hover effect to easter eggs
  const easterEggs = document.querySelectorAll('.easter-egg');
  easterEggs.forEach(egg => {
    egg.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      const eggIcon = this.querySelector('::before');
      if (eggIcon) {
        eggIcon.style.transform = 'rotate(10deg) scale(1.2)';
      }
    });
    
    egg.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      const eggIcon = this.querySelector('::before');
      if (eggIcon) {
        eggIcon.style.transform = 'rotate(0) scale(1)';
      }
    });
  });
  
  // Add hover effect to behind-the-scenes items
  const btsItems = document.querySelectorAll('.bts-item');
  btsItems.forEach(item => {
    const img = item.querySelector('img');
    
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      if (img) {
        img.style.transform = 'scale(1.05)';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      if (img) {
        img.style.transform = 'scale(1)';
      }
    });
  });
  
  // Add hover effect to quotes
  const quotes = document.querySelectorAll('.quote');
  quotes.forEach(quote => {
    quote.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      const quoteIcon = this.querySelector('::before');
      if (quoteIcon) {
        quoteIcon.style.opacity = '0.5';
      }
    });
    
    quote.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      const quoteIcon = this.querySelector('::before');
      if (quoteIcon) {
        quoteIcon.style.opacity = '0.3';
      }
    });
  });
  
  // Add hover effect to fun facts
  const funFacts = document.querySelectorAll('.fact');
  funFacts.forEach(fact => {
    fact.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      const factIcon = this.querySelector('::before');
      if (factIcon) {
        factIcon.style.transform = 'rotate(10deg) scale(1.2)';
      }
    });
    
    fact.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      const factIcon = this.querySelector('::before');
      if (factIcon) {
        factIcon.style.transform = 'rotate(0) scale(1)';
      }
    });
  });
  
  // Add hover effect to fan theories
  const fanTheories = document.querySelectorAll('.theory');
  fanTheories.forEach(theory => {
    theory.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      const theoryIcon = this.querySelector('::before');
      if (theoryIcon) {
        theoryIcon.style.transform = 'rotate(10deg) scale(1.2)';
      }
    });
    
    theory.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      const theoryIcon = this.querySelector('::before');
      if (theoryIcon) {
        theoryIcon.style.transform = 'rotate(0) scale(1)';
      }
    });
  });

  // Updated JS Snippets for Interactivity

// Poll Voting Example
const pollVoteBtn = document.querySelector('.poll-vote-btn');
const pollResults = document.querySelector('.poll-results');
if (pollVoteBtn) {
  pollVoteBtn.addEventListener('click', () => {
    // Simulate voting logic
    pollResults.style.display = 'block';
    pollVoteBtn.disabled = true;
    // Update bars dynamically if real data is available
  });
}

// Discussion Likes/Comments (Placeholder)
const actionButtons = document.querySelectorAll('.discussion-actions button');
actionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Increment count or handle interaction
    const count = parseInt(btn.textContent.trim().split(' ')[1]) + 1;
    btn.innerHTML = btn.innerHTML.replace(/\d+/, count);
  });
});

// Similar event listeners for reviews, events, etc.
}

// Initialize search functionality
function initSearch() {
  if (!searchInput) return;
  
  // Add event listener for input changes
  searchInput.addEventListener('input', handleSearchInput);
  
  // Add event listener for form submission
  if (searchForm) {
    searchForm.addEventListener('submit', handleSearchSubmit);
  }
  
  // Add event listener to hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (searchInput && searchSuggestions && !searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.innerHTML = '';
    }
  });
}

// Handle search input changes
function handleSearchInput(e) {
  const query = e.target.value.trim();
  
  // Clear previous timeout
  if (searchTimeout) clearTimeout(searchTimeout);
  
  // If query is empty, hide suggestions
  if (query.length === 0) {
    if (searchSuggestions) searchSuggestions.innerHTML = '';
    return;
  }
  
  // Set new timeout for API call
  searchTimeout = setTimeout(() => {
    fetchSearchSuggestions(query);
  }, 300);
}

// Fetch search suggestions from TMDB
async function fetchSearchSuggestions(query) {
  try {
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    
    if (data.results && data.results.length > 0) {
      displaySearchSuggestions(data.results.slice(0, 5));
    } else {
      if (searchSuggestions) searchSuggestions.innerHTML = '<div class="suggestion-item">No results found</div>';
    }
  } catch (error) {
    console.error("Error fetching search suggestions:", error);
    if (searchSuggestions) searchSuggestions.innerHTML = '<div class="suggestion-item">Error fetching suggestions</div>';
  }
}

// Display search suggestions
// Replace your existing displaySearchSuggestions function with this:
function displaySearchSuggestions(results) {
  if (!searchSuggestions) return;
  
  searchSuggestions.innerHTML = '';
  
  results.forEach(item => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion-item');
    
    const title = item.title || item.name || 'Unknown';
    const type = item.media_type === 'movie' ? 'Movie' : 
             item.media_type === 'tv' ? 'TV Show' : 
             item.media_type === 'person' ? 'Person' : 'Unknown';
    
    // Determine image path
    let imagePath = '/images/no-poster.png'; // Fallback image
    if (item.media_type === 'person' && item.profile_path) {
      imagePath = IMG_PATH + item.profile_path;
    } else if ((item.media_type === 'movie' || item.media_type === 'tv') && item.poster_path) {
      imagePath = IMG_PATH + item.poster_path;
    }
    
    suggestionItem.innerHTML = `
      <img class="suggestion-poster" src="${imagePath}" alt="${title}">
      <div class="suggestion-info">
        <div class="suggestion-title">${title}</div>
        <div class="suggestion-type">${type}</div>
      </div>
    `;
    
    suggestionItem.addEventListener('click', () => {
      if (searchInput) searchInput.value = title;
      handleSearchSubmit(new Event('submit'));
    });
    
    searchSuggestions.appendChild(suggestionItem);
  });
}

// Handle search form submission
function handleSearchSubmit(e) {
  e.preventDefault();
  
  const query = searchInput ? searchInput.value.trim() : '';
  
  if (query.length === 0) return;
  
  // Store the current page (before search) in localStorage
  const previousPage = localStorage.getItem('currentPage') || 'home';
  localStorage.setItem('pageBeforeSearch', previousPage);
  
  // Hide suggestions
  if (searchSuggestions) searchSuggestions.innerHTML = '';
  
  // Navigate to search results page
  showPage('search-results');
  
  // Update search results title
  if (searchResultsTitle) {
    searchResultsTitle.textContent = `Search Results for "${query}"`;
  }
  
  // Fetch and display search results
  fetchSearchResults(query);
}

// Fetch search results from TMDB
// Update the fetchSearchResults function
async function fetchSearchResults(query) {
  try {
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    
    if (data.results && data.results.length > 0) {
      currentSearchResults = data.results;
      
      // Store the results in localStorage
      localStorage.setItem('lastSearchResults', JSON.stringify(data.results));
      
      displaySearchResults(data.results);
    } else {
      if (searchResultsContainer) searchResultsContainer.innerHTML = '<div class="no-results">No results found</div>';
      // Clear stored results
      localStorage.removeItem('lastSearchResults');
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    if (searchResultsContainer) searchResultsContainer.innerHTML = '<div class="error">Error fetching results</div>';
  }
}

// Display search results
function displaySearchResults(results) {
  if (!searchResultsContainer) return;
  
  searchResultsContainer.innerHTML = '';
  
  results.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('search-result-item');
    
    const title = item.title || item.name || 'Unknown';
    const type = item.media_type === 'movie' ? 'Movie' : item.media_type === 'tv' ? 'TV Show' : item.media_type === 'person' ? 'Person' : 'Unknown';
    const date = item.release_date || item.first_air_date || 'N/A';
    const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
    const description = item.overview || 'No description available.';
    
    // Different display for people vs movies/tv
    if (item.media_type === 'person') {
      resultItem.innerHTML = `
        <div class="result-person">
          <div class="result-image" style="background-image: url(${item.profile_path ? IMG_PATH + item.profile_path : '/images/no-avatar.png'})"></div>
          <div class="result-info">
            <h3>${title}</h3>
            <div class="result-meta">
              <span>${type}</span>
              <span>Popularity: ${Math.round(item.popularity)}</span>
            </div>
            <p>${description}</p>
          </div>
        </div>
      `;
    } else {
      resultItem.innerHTML = `
        <div class="result-media">
          <div class="result-image" style="background-image: url(${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'})"></div>
          <div class="result-info">
            <h3>${title}</h3>
            <div class="result-meta">
              <span>${type}</span>
              <span>${date}</span>
              <span><i class="fas fa-star"></i> ${rating}</span>
            </div>
            <p>${description}</p>
          </div>
        </div>
      `;
    }
    
    
    
    searchResultsContainer.appendChild(resultItem);
  });
}


// In initSearch, add form submit listener if not already
if (searchForm) {
  searchForm.addEventListener('submit', handleSearchSubmit);
}

// ===== DATA FETCHING FUNCTIONS =====

// Fetch trending content for home hero
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
    if (titleEl) titleEl.textContent = "Unable to load trending content";
    if (overviewEl) overviewEl.textContent = "";
  }
}

// Fetch trending movies for movies hero
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
    if (moviesTitleEl) moviesTitleEl.textContent = "Unable to load trending movies";
    if (moviesOverviewEl) moviesOverviewEl.textContent = "";
  }
}

// Fetch trending series for series hero
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
    if (seriesTitleEl) seriesTitleEl.textContent = "Unable to load trending series";
    if (seriesOverviewEl) seriesOverviewEl.textContent = "";
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

// Generic fetch for movies/series for carousels or grids
async function fetchMovies(endpoint, containerId, limit = 10, isGrid = false, mediaType = 'movie') {
  try {
    console.log(`Fetching data for ${containerId} from ${endpoint} with mediaType: ${mediaType}`);
    const res = await fetch(endpoint);
    const data = await res.json();
    
    if (!data.results || data.results.length === 0) {
      console.warn(`No results returned for ${containerId}`);
      const container = q(containerId);
      if (container) container.innerHTML = "<p>No content available.</p>";
      return data.total_pages || 1;
    }
    
    const container = q(containerId);
    if (!container) return data.total_pages || 1;
    
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
      return data.total_pages || 1;
    }

    filteredResults.forEach(item => {
      const div = document.createElement('div');
      div.classList.add(isGrid ? 'grid-item' : 'carousel-item');
      
      // Add data attributes
      div.dataset.id = item.id;
      div.dataset.type = mediaType; // Use the passed mediaType
      
      const title = item.title || item.name || 'Untitled';
      const year = (item.release_date || item.first_air_date || '').split('-')[0] || '—';
      const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
      const imgSrc = item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png';
      
      div.innerHTML = `
        <img src="${imgSrc}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <div class="meta">
            <span><i class="fas fa-star"></i> ${rating}</span>
            <span><i class="fas fa-calendar"></i> ${year}</span>
          </div>
        </div>
      `;
      
      container.appendChild(div);
    });

    console.log(`Successfully loaded ${filteredResults.length} items for ${containerId}`);
    return data.total_pages || 1;
  } catch (error) {
    console.error(`Error fetching for ${containerId}:`, error);
    const container = q(containerId);
    if (container) container.innerHTML = `<p>Unable to load content. Please try again.</p>`;
    return 1;
  }
}

// Fetch upcoming movies specifically (fixed to show only future releases)
async function fetchUpcomingCombined(containerId, limit = 10) {
  try {
    const today = new Date().toISOString().split('T')[0];
    const [moviesRes, tvRes] = await Promise.all([
      fetch(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.asc&primary_release_date.gte=${today}`),
      fetch(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.asc&first_air_date.gte=${today}`)
    ]);
    
    const moviesData = await moviesRes.json();
    const tvData = await tvRes.json();

    let combined = [...(moviesData.results || []), ...(tvData.results || [])];
    combined = combined.filter(item => (item.release_date || item.first_air_date) && item.poster_path);
    combined.sort((a, b) => new Date(a.release_date || a.first_air_date) - new Date(b.release_date || b.first_air_date));
    combined = combined.slice(0, limit);

    const container = q(containerId);
    if (!container) return;
    
    container.innerHTML = '';

    combined.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      
      // Add data attributes
      div.dataset.id = item.id;
      div.dataset.type = item.media_type || (item.title ? 'movie' : 'tv'); // Determine media type
      
      const title = item.title || item.name || 'Untitled';
      const date = item.release_date || item.first_air_date || 'TBA';
      
      div.innerHTML = `
        <img src="${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <span><i class="fas fa-calendar"></i> ${formatMovieDate(date)}</span>
        </div>
      `;
      
      container.appendChild(div);
    });
    
    console.log(`Loaded ${combined.length} upcoming (combined) into ${containerId}`);
  } catch (err) {
    console.error("Error fetching combined upcoming:", err);
    const c = q(containerId);
    if (c) c.innerHTML = '<p>Unable to load upcoming releases.</p>';
  }
}

// Fetch upcoming movies/series with detailed info
async function fetchUpcoming(endpoint, containerId, limit = 10, mediaType = 'movie') {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    const container = q(containerId);
    if (!container) return 1;
    
    container.innerHTML = '';
    let results = (data.results || []).filter(r => r.poster_path).slice(0, limit);
    
    // ====== UPDATE THIS SECTION ======
    results.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      
      // Add data attributes
      div.dataset.id = item.id;
      div.dataset.type = mediaType;
      
      const title = item.title || item.name || 'Untitled';
      const date = item.release_date || item.first_air_date || 'TBA';
      
      div.innerHTML = `
        <img src="${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <span><i class="fas fa-calendar"></i> ${formatMovieDate(date)}</span>
        </div>
      `;
      
      container.appendChild(div);
    });
    // ====== END OF UPDATED SECTION ======
    
    return data.total_pages || 1;
  } catch (err) {
    console.error(`Error fetching upcoming ${containerId}:`, err);
    const container = q(containerId);
    if (container) container.innerHTML = `<p>Unable to load upcoming content.</p>`;
    return 1;
  }
}

// Fetch combined upcoming movies and TV shows
async function fetchUpcomingCombined(containerId, limit = 10) {
  try {
    const today = new Date().toISOString().split('T')[0];
    const [moviesRes, tvRes] = await Promise.all([
      fetch(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=primary_release_date.asc&primary_release_date.gte=${today}`),
      fetch(`${BASE}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.asc&first_air_date.gte=${today}`)
    ]);
    
    const moviesData = await moviesRes.json();
    const tvData = await tvRes.json();

    let combined = [...(moviesData.results || []), ...(tvData.results || [])];
    combined = combined.filter(item => (item.release_date || item.first_air_date) && item.poster_path);
    combined.sort((a, b) => new Date(a.release_date || a.first_air_date) - new Date(b.release_date || b.first_air_date));
    combined = combined.slice(0, limit);

    const container = q(containerId);
    if (!container) return;
    
    container.innerHTML = '';

    combined.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      const title = item.title || item.name || 'Untitled';
      const date = item.release_date || item.first_air_date || 'TBA';
      
      div.innerHTML = `
        <img src="${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <span><i class="fas fa-calendar"></i> ${formatMovieDate(date)}</span>
        </div>
      `;
      
      
      
      container.appendChild(div);
    });
    
    console.log(`Loaded ${combined.length} upcoming (combined) into ${containerId}`);
  } catch (err) {
    console.error("Error fetching combined upcoming:", err);
    const c = q(containerId);
    if (c) c.innerHTML = '<p>Unable to load upcoming releases.</p>';
  }
}

// Fetch top 10 trending content
async function fetchTop10() {
  try {
    const res = await fetch(`${BASE}/trending/all/week?api_key=${API_KEY}`);
    const data = await res.json();
    const container = q("top10");
    if (!container) return;
    
    container.innerHTML = "";
    
    (data.results || []).slice(0, 10).forEach((item, idx) => {
      const div = document.createElement("div");
      div.classList.add("top-10-item");
      
      // Add data attributes
      div.dataset.id = item.id;
      div.dataset.type = item.media_type; // This already has media_type
      
      // Make the entire item clickable
      div.style.cursor = "pointer";
      
      div.innerHTML = `<span class="top-10-number">${idx+1}</span><img src="${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'}" alt="${item.title || item.name}">`;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Error fetching Top 10:", err);
    const container = q("top10");
    if (container) container.innerHTML = "<p>Unable to load top 10 content. Please try again.</p>";
  }
}

// Fetch trending actors
async function fetchActors() {
  try {
    const res = await fetch(`${BASE}/person/popular?api_key=${API_KEY}`);
    const data = await res.json();
    const container = q("trending-actors");
    if (!container) return;
    
    container.innerHTML = "";
    
    (data.results || []).slice(0, 10).forEach(actor => {
      const card = document.createElement("div");
      card.classList.add("actor-card");
      
      // Add data attributes
      card.dataset.id = actor.id;
      card.dataset.type = 'person'; // Actors are of type 'person'
      
      card.innerHTML = `<img src="${actor.profile_path ? IMG_PATH + actor.profile_path : '/images/no-avatar.png'}" alt="${actor.name}"><p>${actor.name}</p>`;
      card.addEventListener("click", () => showActorModal(actor.id));
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching actors:", error);
    const container = q("trending-actors");
    if (container) container.innerHTML = "<p>Unable to load actors. Please try again.</p>";
  }
}

async function showDetailsPage(mediaId, mediaType) {
  console.log('showDetailsPage called with:', mediaId, mediaType);
  
  // Show loading state
  const detailsPage = document.getElementById('details-page');
  const background = document.getElementById('details-background');
  const content = document.querySelector('.details-content');
  
  // Hide all pages and show details page
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  detailsPage.style.display = 'block';
  
  // Show loading
  content.innerHTML = '<div class="details-loading"></div>';
  background.style.backgroundImage = '';
  
  try {
    // Fetch the details
    const details = await fetchDetails(mediaId, mediaType);
    console.log('Fetched details:', details);
    if (!details) {
      content.innerHTML = '<p>Unable to load details. Please try again.</p>';
      return;
    }

    // Get user's current rating for this item
    const user = authState.getCurrentUser();
    const userRating = user && user.ratings ? user.ratings[`${mediaType}-${mediaId}`] : null;
    const currentRating = userRating ? userRating.rating : 0;

    // Remove any existing back button
    const existingBackBtn = document.getElementById('details-back-btn');
    if (existingBackBtn) {
      existingBackBtn.remove();
    }

    // Populate the details page
    content.innerHTML = `
      <!-- Back button at the top -->
      <button id="details-back-btn" class="details-back-btn">
        <i class="fas fa-arrow-left"></i> Back
      </button>
      
      <!-- Top Section: Poster and Title -->
      <div class="details-top">
        <div class="details-poster">
          <img id="details-poster-img" src="" alt="">
        </div>
        <div class="details-title-section">
          <h1 id="details-title"></h1>
          <div class="details-meta">
            <span id="details-year"><i class="fas fa-calendar"></i> </span>
            <span id="details-rating"><i class="fas fa-star"></i> </span>
            <span id="details-runtime"><i class="fas fa-clock"></i> </span>
            <span class="details-country"><i class="fas fa-globe"></i>
              <div class="country-info">
                <p id="movie-country">${details.production_countries && details.production_countries.length > 0 
                  ? details.production_countries.map(c => c.name).join(', ') 
                  : 'Not available'}</p>
              </div>
            </span>
          </div>
          <div class="details-genres" id="details-genres"></div>
          <div class="details-actors" id="details-actors"></div>
        </div>
      </div>
      
      <!-- Buttons -->
      <div class="details-buttons">
        <button id="details-trailer-btn" class="details-btn"><i class="fas fa-play"></i> Trailer</button>
        <button id="details-download-btn" class="details-btn"><i class="fas fa-download"></i> Download</button>
        <button id="details-favorite-btn" class="details-btn"><i class="fas fa-heart"></i> Favorite</button>
        <button id="details-recommended-btn" class="details-btn"><i class="fas fa-thumbs-up"></i> Recommended</button>
      </div>
      
      <!-- Ratings Box -->
      <div class="details-rating">
        <h2>Your Rating</h2>
        <div class="star-rating-container">
          <div class="star-rating" id="user-rating">
            <i class="far fa-star" data-rating="1"></i>
            <i class="far fa-star" data-rating="2"></i>
            <i class="far fa-star" data-rating="3"></i>
            <i class="far fa-star" data-rating="4"></i>
            <i class="far fa-star" data-rating="5"></i>
          </div>
          <p id="rating-text">${currentRating > 0 ? `You rated this ${currentRating} star${currentRating !== 1 ? 's' : ''}` : 'Click to rate'}</p>
        </div>
      </div>
      
      <!-- Summary -->
      <div class="details-summary">
        <h2>Summary</h2>
        <p id="details-overview"></p>
      </div>
      
      <!-- Review Input -->
      <div class="details-review">
        <h2>Review</h2>
        <textarea id="review-input" placeholder="Write your review here..."></textarea>
        <button id="submit-review-btn" class="details-btn">Submit Review</button>
      </div>
    `;

    // Get elements
    const posterImg = document.getElementById('details-poster-img');
    const title = document.getElementById('details-title');
    const year = document.getElementById('details-year');
    const rating = document.getElementById('details-rating');
    const runtime = document.getElementById('details-runtime');
    const overview = document.getElementById('details-overview');
    const backBtn = document.getElementById('details-back-btn');

    // Set background
    if (details.backdrop_path) {
      background.style.backgroundImage = `url(${IMAGE_BASE}${details.backdrop_path})`;
    } else if (details.poster_path) {
      background.style.backgroundImage = `url(${IMG_PATH}${details.poster_path})`;
    } else {
      background.style.backgroundImage = 'linear-gradient(135deg, #1a1a1a, #2d2d2d)';
    }

    // Set poster
    posterImg.src = details.poster_path ? `${IMG_PATH}${details.poster_path}` : '/images/no-poster.png';

    // Set title
    title.textContent = details.title || details.name;

    // Set year
    const releaseYear = details.release_date ? details.release_date.split('-')[0] : 
                       details.first_air_date ? details.first_air_date.split('-')[0] : 'N/A';
    year.innerHTML = `<i class="fas fa-calendar"></i> ${releaseYear}`;

    // Set rating
    const voteAverage = details.vote_average ? details.vote_average.toFixed(1) : 'N/A';
    rating.innerHTML = `<i class="fas fa-star"></i> ${voteAverage}`;

    // Set runtime
    let runtimeText = 'N/A';
    if (details.runtime) {
      runtimeText = `${details.runtime} min`;
    } else if (details.episode_run_time && details.episode_run_time.length > 0) {
      runtimeText = `${details.episode_run_time[0]} min/ep`;
    }
    runtime.innerHTML = `<i class="fas fa-clock"></i> ${runtimeText}`;

    // Set overview
    overview.textContent = details.overview || 'No overview available.';

    // Set genres
    const genres = details.genres || [];
    const genresContainer = document.getElementById('details-genres');
    if (genresContainer) {
      genresContainer.innerHTML = genres.map(genre => 
        `<span class="genre-tag">${genre.name}</span>`
      ).join('');
    }

    // Set actors
    const cast = details.credits?.cast || [];
    const actorsContainer = document.getElementById('details-actors');
    if (actorsContainer && cast.length > 0) {
      const topCast = cast.slice(0, 5); // Show top 5 actors
      actorsContainer.innerHTML = `
        <div class="actors-label">Starring:</div>
        <div class="actors-list">
          ${topCast.map(actor => 
            `<span class="actor-name" data-id="${actor.id}">${actor.name}</span>`
          ).join('')}
        </div>
      `;
      
      // Add click event to actor names
      actorsContainer.querySelectorAll('.actor-name').forEach(actorEl => {
        actorEl.addEventListener('click', () => {
          const actorId = parseInt(actorEl.dataset.id);
          showActorModal(actorId);
        });
      });
    }

    // Check if already favorited
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorited = favorites.some(item => item.id === details.id);

    // Set up button event listeners
    const trailerBtn = document.getElementById('details-trailer-btn');
    const downloadBtn = document.getElementById('details-download-btn');
    const favoriteBtn = document.getElementById('details-favorite-btn');
    const recommendedBtn = document.getElementById('details-recommended-btn');
    const submitReviewBtn = document.getElementById('submit-review-btn');

    // Set favorite button state
    if (isFavorited) {
      favoriteBtn.classList.add('favorited');
      favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Favorited';
    }

    // Trailer button
    trailerBtn.onclick = () => {
      const videos = details.videos?.results || [];
      const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube');
      if (trailer) {
        openTrailerModal(trailer.key);
      } else {
        showNotification('Trailer not available', 'error');
      }
    };

    // Download button (placeholder)
    downloadBtn.onclick = () => {
      showNotification('Download feature coming soon!', 'info');
    };

    // Favorite button
    favoriteBtn.onclick = () => {
      // Toggle favorite state
      favoriteBtn.classList.toggle('favorited');
      if (favoriteBtn.classList.contains('favorited')) {
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Favorited';
        // Save to localStorage (include genre_ids)
        const favoriteItem = {
          ...details,
          media_type: mediaType,
          genre_ids: details.genres?.map(genre => genre.id) || []
        };
        saveToFavorites(favoriteItem);
        showNotification('Added to favorites!', 'success');
        
        // Add activity
        addActivity('favorite', `You added "${details.title || details.name}" to your favorites`);
      } else {
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Favorite';
        // Remove from localStorage
        removeFromFavorites(details.id);
        showNotification('Removed from favorites', 'info');
      }
    };

    // Handle the Recommended button click using onclick
recommendedBtn.onclick = async () => {
  console.log('Recommended button clicked. Details:', details, 'Type:', mediaType, 'ID:', mediaId); // Debug: Log inputs
  try {
    // Get the recommended popup and its elements
    const recommendedPopup = document.getElementById('recommended-popup');
    const recommendedList = document.getElementById('recommended-list');
    const recommendedClose = document.getElementById('recommended-close');

    // Verify popup elements exist
    if (!recommendedPopup || !recommendedList || !recommendedClose) {
      console.error('Popup elements not found:', {
        recommendedPopup: !!recommendedPopup,
        recommendedList: !!recommendedList,
        recommendedClose: !!recommendedClose
      });
      showNotification('Popup elements not found. Please check the DOM.', 'error');
      return;
    }

    // Clear previous content in the carousel
    recommendedList.innerHTML = '';
    console.log('Cleared recommendedList content'); // Debug: Confirm clear

    // Check if details, mediaType, and mediaId are available
    if (!details || !mediaType || !mediaId) {
      console.error('Missing required data:', { details: !!details, mediaType, mediaId });
      showNotification('Item details or type not available', 'error');
      // Fallback: Show title
      const title = details?.title || details?.name || 'Unknown Title';
      const titleBox = document.createElement('div');
      titleBox.className = 'title-box';
      titleBox.style.cssText = `
        background: #333;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        font-size: 1.5rem;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      `;
      titleBox.textContent = `No data available for ${title}`;
      recommendedList.appendChild(titleBox);
      recommendedPopup.style.display = 'flex';
      console.log('Popup displayed with fallback title:', title); // Debug
      return;
    }

    // Try fetching recommendations
    let recommendations = [];
    const recommendationUrl = `${BASE}/${mediaType}/${mediaId}/recommendations?api_key=${API_KEY}&page=1`;
    console.log('Attempting recommendations endpoint:', recommendationUrl); // Debug: Log URL

    try {
      await new Promise(resolve => setTimeout(resolve, 250)); // Rate limit delay
      const res = await fetch(recommendationUrl);
      if (!res.ok) {
        console.error(`Recommendations API failed: Status ${res.status} ${res.statusText}`);
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      recommendations = data.results || [];
      console.log('Recommendations fetched:', recommendations); // Debug: Log results
    } catch (error) {
      console.warn('Recommendations endpoint failed:', error.message);
      // Fallback: Show title
      const title = details.title || details.name || 'Unknown Title';
      const titleBox = document.createElement('div');
      titleBox.className = 'title-box';
      titleBox.style.cssText = `
        background: #333;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        font-size: 1.5rem;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      `;
      titleBox.textContent = `No recommendations available for ${title}`;
      recommendedList.appendChild(titleBox);
      recommendedPopup.style.display = 'flex';
      console.log('Popup displayed with no recommendations fallback:', title); // Debug
      return;
    }

    // Filter out the current item and limit to 10 items
    recommendations = recommendations.filter(item => item.id !== mediaId).slice(0, 10);

    if (recommendations.length === 0) {
      console.warn('No recommendations found');
      showNotification('No recommendations found', 'info');
      // Fallback: Show title
      const title = details.title || details.name || 'Unknown Title';
      const titleBox = document.createElement('div');
      titleBox.className = 'title-box';
      titleBox.style.cssText = `
        background: #333;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        font-size: 1.5rem;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      `;
      titleBox.textContent = `No recommendations available for ${title}`;
      recommendedList.appendChild(titleBox);
      recommendedPopup.style.display = 'flex';
      console.log('Popup displayed with no recommendations fallback:', title); // Debug
      return;
    }

    // Populate the carousel with recommendation cards
    recommendations.forEach(item => {
      const card = createCard(item, mediaType); // Use existing createCard
      recommendedList.appendChild(card);
    });
    console.log('Appended', recommendations.length, 'cards to recommendedList'); // Debug

    // Show the popup
    recommendedPopup.style.display = 'flex';
    console.log('Popup displayed with', recommendations.length, 'items'); // Debug

    // Handle closing the popup
    recommendedClose.onclick = () => {
      recommendedPopup.style.display = 'none';
      recommendedList.innerHTML = ''; // Clear carousel
      console.log('Popup closed via close button'); // Debug
    };

    // Close popup when clicking outside
    recommendedPopup.onclick = (e) => {
      if (e.target === recommendedPopup) {
        recommendedPopup.style.display = 'none';
        recommendedList.innerHTML = ''; // Clear carousel
        console.log('Popup closed via outside click'); // Debug
      }
    };

    // Log user activity
    addActivity('recommendation', `Viewed recommendations for ${details.title || details.name}`);

  } catch (error) {
    console.error('Error in recommended button handler:', error);
    showNotification('Failed to load recommendations', 'error');
    // Fallback: Show title
    const recommendedPopup = document.getElementById('recommended-popup');
    const recommendedList = document.getElementById('recommended-list');
    if (recommendedPopup && recommendedList) {
      recommendedList.innerHTML = '';
      const title = details?.title || details?.name || 'Unknown Title';
      const titleBox = document.createElement('div');
      titleBox.className = 'title-box';
      titleBox.style.cssText = `
        background: #333;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
        font-size: 1.5rem;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      `;
      titleBox.textContent = `Error loading recommendations for ${title}`;
      recommendedList.appendChild(titleBox);
      recommendedPopup.style.display = 'flex';
      console.log('Popup displayed with error fallback:', title); // Debug
    } else {
      console.error('Popup elements not found in catch block');
      showNotification('Popup elements not found', 'error');
    }
  }
};



function createCard(item, type) {
  const card = document.createElement('div');
  card.className = 'carousel-item';
  const title = item.title || item.name || 'Unknown Title';
  const posterPath = item.poster_path ? `${IMG_PATH}${item.poster_path}` : 'https://via.placeholder.com/280x420';
  const voteAverage = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
  const releaseYear = item.release_date || item.first_air_date ? new Date(item.release_date || item.first_air_date).getFullYear() : 'N/A';
  card.innerHTML = `
    <img src="${posterPath}" alt="${title}">
    <div class="overlay">
      <h3>${title}</h3>
      <div class="meta">
        <i class="fas fa-star"></i>
        <span>${voteAverage}</span>
        <span>${releaseYear}</span>
      </div>
    </div>
  `;
  card.onclick = () => {
    showDetailsPage(item.id, type);
    document.getElementById('recommended-popup').style.display = 'none';
  };
  return card;
}

    // Submit review button (placeholder)
    submitReviewBtn.onclick = () => {
      const reviewText = document.getElementById('review-input').value;
      if (reviewText.trim()) {
        showNotification('Review submitted successfully!', 'success');
        document.getElementById('review-input').value = '';
        
        // Add activity
        addActivity('review', `You wrote a review for "${details.title || details.name}"`);
      } else {
        showNotification('Please write a review before submitting.', 'error');
      }
    };

    // Set up star rating system
    const stars = document.querySelectorAll('#user-rating i');
    const ratingText = document.getElementById('rating-text');
    let selectedRating = currentRating;

    // Initialize stars based on current rating
    stars.forEach((star, index) => {
      if (index < currentRating) {
        star.classList.remove('far');
        star.classList.add('fas');
      }
    });

    // Add click event to stars
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.dataset.rating);
        selectedRating = rating;
        
        // Update star display
        stars.forEach((s, index) => {
          if (index < rating) {
            s.classList.remove('far');
            s.classList.add('fas');
          } else {
            s.classList.remove('fas');
            s.classList.add('far');
          }
        });
        
        // Update rating text
        ratingText.textContent = `You rated this ${rating} star${rating !== 1 ? 's' : ''}`;
        
        // Save rating to user data
        saveUserRating(details.id, mediaType, rating);
        
        // Add activity
        addActivity('review', `You rated "${details.title || details.name}" ${rating} star${rating !== 1 ? 's' : ''}`);
      });
      
      // Add hover effect
      star.addEventListener('mouseenter', () => {
        const rating = parseInt(star.dataset.rating);
        
        stars.forEach((s, index) => {
          if (index < rating) {
            s.style.color = '#f5c518';
          } else {
            s.style.color = '';
          }
        });
      });
    });

    // Reset star colors when mouse leaves rating container
    const ratingContainer = document.querySelector('.star-rating-container');
    ratingContainer.addEventListener('mouseleave', () => {
      stars.forEach((s, index) => {
        if (index < selectedRating) {
          s.style.color = '#f5c518';
        } else {
          s.style.color = '';
        }
      });
    });

    // Add back button
    backBtn.onclick = () => {
      // Remove the back button when leaving
      backBtn.remove();
      // Go back to previous page
      const previousPage = localStorage.getItem('currentPage') || 'home';
      showPage(previousPage);
    };

  } catch (error) {
    console.error('Error loading details:', error);
    content.innerHTML = '<p>Error loading details. Please try again.</p>';
  }
}

// Save user rating
function saveUserRating(itemId, itemType, rating) {
  const user = authState.getCurrentUser();
  if (!user) return;
  
  if (!user.ratings) user.ratings = {};
  
  user.ratings[`${itemType}-${itemId}`] = {
    rating: rating,
    timestamp: new Date().toISOString()
  };
  
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  // Update statistics
  if (!user.stats) user.stats = { reviewsWritten: 0 };
  user.stats.reviewsWritten = (user.stats.reviewsWritten || 0) + 1;
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  showNotification('Rating saved!', 'success');
}

// Add click event to carousel and grid items
document.addEventListener('click', (e) => {
  // Check if the clicked element is a carousel or grid item
  const item = e.target.closest('.carousel-item, .grid-item');
  if (item) {
    // Get media id and type from data attributes
    const mediaId = item.dataset.id;
    const mediaType = item.dataset.type;
    if (mediaId && mediaType) {
      showDetailsPage(mediaId, mediaType);
    }
  }
});

// Helper functions for favorites
// Update the saveToFavorites function
function saveToFavorites(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Check if already in favorites
  const existingIndex = favorites.findIndex(fav => fav.id === item.id);
  if (existingIndex === -1) {
    // Ensure we have media_type
    if (!item.media_type) {
      item.media_type = item.title ? 'movie' : 'tv';
    }
    favorites.push(item);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Added to favorites:', item.title || item.name);
  }
}

function removeFromFavorites(itemId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(item => item.id !== itemId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  console.log('Removed from favorites');
}

// Function to show the My List page

function showMyListPage() {
  const mylistPage = document.getElementById('mylist-page');
  const emptyMessage = document.getElementById('mylist-empty');
  const content = document.getElementById('mylist-content');
  const favoritesGrid = document.getElementById('favorites-grid');
  const recommendationsTrack = document.getElementById('mylist-recommendations-track');
  
  // Get favorites from localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Hide all pages and show mylist page
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });
  mylistPage.style.display = 'block';
  
  if (favorites.length === 0) {
    // Show empty message with fun animation
    emptyMessage.style.display = 'block';
    emptyMessage.innerHTML = `
      <div class="empty-favorites">
        <h2>No favorites added yet</h2>
        <p>Start adding your favorite movies and series to see them here!</p>
        <div class="empty-icon">🍿</div>
      </div>
    `;
    content.style.display = 'none';
  } else {
    // Show content
    emptyMessage.style.display = 'none';
    content.style.display = 'block';
    
    // Clear favorites grid
    favoritesGrid.innerHTML = '';
    
    // Populate favorites grid
    favorites.forEach((item, index) => {
      const favoriteItem = document.createElement('div');
      favoriteItem.className = 'favorite-item';
      favoriteItem.dataset.id = item.id;
      
      // Ensure media_type is set
      const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
      favoriteItem.dataset.type = mediaType;
      
      const poster = item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png';
      const title = item.title || item.name;
      const year = item.release_date ? item.release_date.split('-')[0] : 
                  item.first_air_date ? item.first_air_date.split('-')[0] : 'N/A';
      const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
      
      // Create media type tag
      const mediaTypeTag = mediaType === 'movie' 
        ? '<span class="media-type-tag movie-tag">Movie</span>' 
        : '<span class="media-type-tag series-tag">Series</span>';
      
      favoriteItem.innerHTML = `
        <button class="favorite-delete" data-index="${index}">
          <i class="fas fa-trash"></i>
        </button>
        <div class="favorite-poster-container">
          <img src="${poster}" alt="${title}">
          ${mediaTypeTag}
        </div>
        <div class="favorite-info">
          <div class="favorite-title">${title}</div>
          <div class="favorite-meta">
            <span>${year}</span>
            <span><i class="fas fa-star"></i> ${rating}</span>
          </div>
        </div>
      `;
      
      // Add click event to favorite item (to show details)
      favoriteItem.addEventListener('click', (e) => {
        // If delete button was clicked, don't show details
        if (e.target.closest('.favorite-delete')) return;
        
        // Get media ID and type
        const mediaId = parseInt(favoriteItem.dataset.id);
        const mediaType = favoriteItem.dataset.type;
        
        // Show details page
        showDetailsPage(mediaId, mediaType);
      });
      
      // Add click event to delete button
      const deleteBtn = favoriteItem.querySelector('.favorite-delete');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeFromFavorites(item.id);
        // Refresh the page
        showMyListPage();
      });
      
      favoritesGrid.appendChild(favoriteItem);
    });
    
    // Show recommendations based on genres from user's favorites
    if (favorites.length > 0) {
      // Collect all unique genre IDs from favorites
      const allGenres = new Set();
      favorites.forEach(fav => {
        if (fav.genre_ids && Array.isArray(fav.genre_ids)) {
          fav.genre_ids.forEach(genreId => allGenres.add(genreId));
        }
      });
      
      // Convert to array and take first 3 genres to avoid too broad results
      const genreIds = Array.from(allGenres).slice(0, 3);
      
      if (genreIds.length > 0) {
        // Fetch content that matches these genres (both movies and TV)
        const genreString = genreIds.join(',');
        
        // Fetch movie recommendations
        const moviePromise = fetch(`${BASE}/discover/movie?api_key=${API_KEY}&with_genres=${genreString}&sort_by=popularity.desc&page=1`)
          .then(res => res.json())
          .then(data => data.results || [])
          .catch(error => {
            console.error('Error fetching movie recommendations:', error);
            return [];
          });
        
        // Fetch TV recommendations
        const tvPromise = fetch(`${BASE}/discover/tv?api_key=${API_KEY}&with_genres=${genreString}&sort_by=popularity.desc&page=1`)
          .then(res => res.json())
          .then(data => data.results || [])
          .catch(error => {
            console.error('Error fetching TV recommendations:', error);
            return [];
          });
        
        // Combine both movie and TV results
        Promise.all([moviePromise, tvPromise])
          .then(([movies, tvShows]) => {
            // Combine and shuffle results
            const allRecommendations = [...movies, ...tvShows]
              .filter(item => item.poster_path) // Only include items with posters
              .sort(() => Math.random() - 0.5) // Shuffle to mix movies and TV
              .slice(0, 10); // Limit to 10 items
            
            // Clear recommendations track
            if (recommendationsTrack) {
              recommendationsTrack.innerHTML = '';
              
              if (allRecommendations.length === 0) {
                recommendationsTrack.innerHTML = '<p>No recommendations available for your favorite genres.</p>';
                return;
              }
              
              allRecommendations.forEach(item => {
                const div = document.createElement('div');
                div.className = 'carousel-item';
                div.dataset.id = item.id;
                div.dataset.type = item.title ? 'movie' : 'tv'; // Determine media type
                
                const title = item.title || item.name;
                const poster = item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png';
                const date = item.release_date || item.first_air_date;
                const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
                
                // Create media type tag
                const mediaTypeTag = div.dataset.type === 'movie' 
                  ? '<span class="media-type-tag movie-tag">Movie</span>' 
                  : '<span class="media-type-tag series-tag">Series</span>';
                
                div.innerHTML = `
                  <div class="carousel-poster-container">
                    <img src="${poster}" alt="${title}">
                    ${mediaTypeTag}
                  </div>
                  <div class="overlay">
                    <h3>${title}</h3>
                    <div class="meta">
                      <span><i class="fas fa-star"></i> ${rating}</span>
                      <span><i class="fas fa-calendar"></i> ${formatMovieDate(date)}</span>
                    </div>
                  </div>
                `;
                
                // Add click event to recommendation item
                div.addEventListener('click', () => {
                  showDetailsPage(item.id, div.dataset.type);
                });
                
                recommendationsTrack.appendChild(div);
              });
            }
          })
          .catch(error => {
            console.error('Error processing recommendations:', error);
            if (recommendationsTrack) {
              recommendationsTrack.innerHTML = '<p>Unable to load recommendations. Please try again later.</p>';
            }
          });
      } else {
        // No genre information found in favorites
        if (recommendationsTrack) {
          recommendationsTrack.innerHTML = '<p>No genre information available in your favorites. Add more items to get recommendations.</p>';
        }
      }
    } else {
      // If no favorites, show message
      if (recommendationsTrack) {
        recommendationsTrack.innerHTML = '<p>Add favorites to see personalized recommendations.</p>';
      }
    }
  }
  
  // Add event listener to clear all button
  const clearAllBtn = document.getElementById('clear-all-favorites');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to remove all favorites?')) {
        localStorage.removeItem('favorites');
        showMyListPage();
      }
    });
  }
}

// Update the saveToFavorites function
// Update the saveToFavorites function
function saveToFavorites(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Check if already in favorites
  const existingIndex = favorites.findIndex(fav => fav.id === item.id);
  if (existingIndex === -1) {
    // Ensure we have media_type
    if (!item.media_type) {
      item.media_type = item.title ? 'movie' : 'tv';
    }
    
    // Make a copy of the item to avoid modifying the original
    const favoriteItem = { ...item };
    
    // Save to localStorage
    favorites.push(favoriteItem);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Added to favorites:', item.title || item.name);
  }
}
// Update the removeFromFavorites function
function removeFromFavorites(itemId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(item => item.id !== itemId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  console.log('Removed from favorites');
}

// ===== DISPLAY FUNCTIONS =====

// Display item for home hero
async function displayItem(index) {
  if (!items || !items[index]) return;
  const it = items[index];
  const details = await fetchDetails(it.id, it.media_type);
  
  const backdrop = it.backdrop_path || it.poster_path;
  if (hero) hero.style.backgroundImage = backdrop ? `url(${IMAGE_BASE}${backdrop})` : "";
  
  if (whatsNewEl) whatsNewEl.textContent = `What's New in ${it.media_type === 'movie' ? 'Movies' : 'Series'}`;
  if (titleEl) titleEl.textContent = it.title || it.name || "Untitled";
  if (overviewEl) overviewEl.textContent = it.overview || "No summary available.";
  
  const vote = (it.vote_average !== undefined && it.vote_average !== null) ? (Math.round(it.vote_average * 10) / 10) : 0;
  if (ratingValEl) ratingValEl.textContent = vote.toFixed(1);
  
  const percent = Math.round((vote / 10) * 100);
  if (progressPath) progressPath.setAttribute("stroke-dasharray", `${percent} 100`);
  
  if (progressPath) {
    if (vote >= 7) progressPath.style.stroke = "#4caf50";
    else if (vote >= 5) progressPath.style.stroke = "#f5c518";
    else progressPath.style.stroke = "#e53935";
  }
  
  let runtimeText = "N/A";
  if (details) {
    if (details.runtime) runtimeText = `${details.runtime} min`;
    else if (details.episode_run_time && details.episode_run_time.length) runtimeText = `${details.episode_run_time[0]} min/ep`;
  }
  if (runtimeEl) runtimeEl.textContent = runtimeText;
  
  const cast = details?.credits?.cast ? details.credits.cast.slice(0,3).map(c => c.name).join(", ") : "Unknown";
  if (starringEl) starringEl.textContent = cast;
  
  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : 
    (it.genre_ids ? it.genre_ids.map(id => movieGenres.concat(tvGenres).find(g => g.id === id)?.name || '').join(", ") : "N/A");
  if (genreEl) genreEl.textContent = genres;
  
  const year = (it.release_date || it.first_air_date) ? ((it.release_date || it.first_air_date).slice(0,4)) : "";
  if (yearEl) yearEl.textContent = year;

  const videos = details?.videos?.results || [];
  const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube") || videos.find(v => v.site === "YouTube");
  
  if (moreInfoBtn) moreInfoBtn.onclick = () => window.open(`https://www.themoviedb.org/${it.media_type}/${it.id}`, "_blank");
}

// Create trailer modal
// Update the createTrailerModal function
function createTrailerModal() {
  const modal = document.createElement('div');
  modal.id = 'trailer-modal';
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="trailer-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Close modal when clicking on X
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  function closeModal() {
    modal.style.display = 'none';
    const modalBody = document.getElementById('trailer-modal-body');
    if (modalBody) {
      modalBody.innerHTML = '';
    }
  }
}

// Update the openTrailerModal function
function openTrailerModal(trailerKey) {
  let modal = document.getElementById('trailer-modal');
  
  // Create modal if it doesn't exist
  if (!modal) {
    createTrailerModal();
    modal = document.getElementById('trailer-modal');
  }
  
  const modalBody = document.getElementById('trailer-modal-body');
  
  if (modalBody) {
    modalBody.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailerKey}?autoplay=1" frameborder="0" allowfullscreen></iframe>
    `;
    modal.style.display = 'block';
  }
}

// Display item for movies hero
async function displayMoviesItem(index) {
  if (!moviesItems || !moviesItems[index]) return;
  const it = moviesItems[index];
  const details = await fetchDetails(it.id, 'movie');
  
  const backdrop = it.backdrop_path || it.poster_path;
  if (moviesHero) moviesHero.style.backgroundImage = backdrop ? `url(${IMAGE_BASE}${backdrop})` : "";
  
  if (moviesTitleEl) moviesTitleEl.textContent = it.title || "Untitled";
  if (moviesOverviewEl) moviesOverviewEl.textContent = it.overview || "No summary available.";
  
  const vote = (it.vote_average !== undefined && it.vote_average !== null) ? (Math.round(it.vote_average * 10) / 10) : 0;
  if (moviesRatingValEl) moviesRatingValEl.textContent = vote.toFixed(1);
  
  const percent = Math.round((vote / 10) * 100);
  if (moviesProgressPath) moviesProgressPath.setAttribute("stroke-dasharray", `${percent} 100`);
  
  if (moviesProgressPath) {
    if (vote >= 7) moviesProgressPath.style.stroke = "#4caf50";
    else if (vote >= 5) moviesProgressPath.style.stroke = "#f5c518";
    else moviesProgressPath.style.stroke = "#e53935";
  }
  
  let runtimeText = "N/A";
  if (details && details.runtime) runtimeText = `${details.runtime} min`;
  if (moviesRuntimeEl) moviesRuntimeEl.textContent = runtimeText;
  
  const cast = details?.credits?.cast ? details.credits.cast.slice(0,3).map(c => c.name).join(", ") : "Unknown";
  if (moviesStarringEl) moviesStarringEl.textContent = cast;
  
  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : 
    (it.genre_ids ? it.genre_ids.map(id => movieGenres.find(g => g.id === id)?.name || '').join(", ") : "N/A");
  if (moviesGenreEl) moviesGenreEl.textContent = genres;
  
  const year = (it.release_date || "").slice(0,4);
  if (moviesYearEl) moviesYearEl.textContent = year;
  
  const videos = details?.videos?.results || [];
  const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube") || videos.find(v => v.site === "YouTube");
  
  if (moviesWatchTrailerBtn) {
    if (trailer) moviesWatchTrailerBtn.onclick = () => window();
    else moviesWatchTrailerBtn.onclick = () => alert("Trailer not available");
  }
  
  if (moviesMoreInfoBtn) moviesMoreInfoBtn.onclick = () => window.open(`https://www.themoviedb.org/movie/${it.id}`, "_blank");
}

// Display item for series hero
async function displaySeriesItem(index) {
  if (!seriesItems || !seriesItems[index]) return;
  const it = seriesItems[index];
  const details = await fetchDetails(it.id, 'tv');
  
  const backdrop = it.backdrop_path || it.poster_path;
  if (seriesHero) seriesHero.style.backgroundImage = backdrop ? `url(${IMAGE_BASE}${backdrop})` : "";
  
  if (seriesTitleEl) seriesTitleEl.textContent = it.name || "Untitled";
  if (seriesOverviewEl) seriesOverviewEl.textContent = it.overview || "No summary available.";
  
  const vote = (it.vote_average !== undefined && it.vote_average !== null) ? (Math.round(it.vote_average * 10) / 10) : 0;
  if (seriesRatingValEl) seriesRatingValEl.textContent = vote.toFixed(1);
  
  const percent = Math.round((vote / 10) * 100);
  if (seriesProgressPath) seriesProgressPath.setAttribute("stroke-dasharray", `${percent} 100`);
  
  if (seriesProgressPath) {
    if (vote >= 7) seriesProgressPath.style.stroke = "#4caf50";
    else if (vote >= 5) seriesProgressPath.style.stroke = "#f5c518";
    else seriesProgressPath.style.stroke = "#e53935";
  }
  
  let runtimeText = "N/A";
  if (details && details.episode_run_time && details.episode_run_time.length) runtimeText = `${details.episode_run_time[0]} min/ep`;
  if (seriesRuntimeEl) seriesRuntimeEl.textContent = runtimeText;
  
  const cast = details?.credits?.cast ? details.credits.cast.slice(0,3).map(c => c.name).join(", ") : "Unknown";
  if (seriesStarringEl) seriesStarringEl.textContent = cast;
  
  const genres = details?.genres ? details.genres.map(g => g.name).join(", ") : 
    (it.genre_ids ? it.genre_ids.map(id => tvGenres.find(g => g.id === id)?.name || '').join(", ") : "N/A");
  if (seriesGenreEl) seriesGenreEl.textContent = genres;
  
  const year = (it.first_air_date || "").slice(0,4);
  if (seriesYearEl) seriesYearEl.textContent = year;
  
  const videos = details?.videos?.results || [];
  const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube") || videos.find(v => v.site === "YouTube");
  
  if (seriesWatchTrailerBtn) {
    if (trailer) seriesWatchTrailerBtn.onclick = () => window();
    else seriesWatchTrailerBtn.onclick = () => alert("Trailer not available");
  }
  
  if (seriesMoreInfoBtn) seriesMoreInfoBtn.onclick = () => window.open(`https://www.themoviedb.org/tv/${it.id}`, "_blank");
}

// ===== HERO AUTO-SLIDE CONTROLS =====

// Home hero controls
function startAuto() {
  stopAuto();
  if (!items || items.length === 0) return;
  autoTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    displayItem(currentIndex);
  }, SLIDE_DELAY);
}

function stopAuto() { 
  if (autoTimer) clearInterval(autoTimer); 
}

function resetAuto() { 
  stopAuto(); 
  startAuto(); 
}

if (prevBtn) prevBtn.addEventListener('click', () => { 
  if (!items || items.length===0) return; 
  currentIndex = (currentIndex - 1 + items.length) % items.length; 
  displayItem(currentIndex); 
  resetAuto(); 
});

if (nextBtn) nextBtn.addEventListener('click', () => { 
  if (!items || items.length===0) return; 
  currentIndex = (currentIndex + 1) % items.length; 
  displayItem(currentIndex); 
  resetAuto(); 
});

// Movies hero controls
function startMoviesAuto() {
  stopMoviesAuto();
  if (!moviesItems || moviesItems.length === 0) return;
  moviesAutoTimer = setInterval(() => {
    moviesCurrentIndex = (moviesCurrentIndex + 1) % moviesItems.length;
    displayMoviesItem(moviesCurrentIndex);
  }, SLIDE_DELAY);
}

function stopMoviesAuto() { 
  if (moviesAutoTimer) clearInterval(moviesAutoTimer); 
}

function resetMoviesAuto() { 
  stopMoviesAuto(); 
  startMoviesAuto(); 
}

if (moviesNextBtn) moviesNextBtn.addEventListener("click", () => { 
  if (!moviesItems || moviesItems.length===0) return; 
  moviesCurrentIndex = (moviesCurrentIndex + 1) % moviesItems.length; 
  displayMoviesItem(moviesCurrentIndex); 
  resetMoviesAuto(); 
});

if (moviesPrevBtn) moviesPrevBtn.addEventListener("click", () => { 
  if (!moviesItems || moviesItems.length===0) return; 
  moviesCurrentIndex = (moviesCurrentIndex - 1 + moviesItems.length) % moviesItems.length; 
  displayMoviesItem(moviesCurrentIndex); 
  resetMoviesAuto(); 
});

// Series hero controls
function startSeriesAuto() {
  stopSeriesAuto();
  if (!seriesItems || seriesItems.length === 0) return;
  seriesAutoTimer = setInterval(() => {
    seriesCurrentIndex = (seriesCurrentIndex + 1) % seriesItems.length;
    displaySeriesItem(seriesCurrentIndex);
  }, SLIDE_DELAY);
}

function stopSeriesAuto() { 
  if (seriesAutoTimer) clearInterval(seriesAutoTimer); 
}

function resetSeriesAuto() { 
  stopSeriesAuto(); 
  startSeriesAuto(); 
}

if (seriesNextBtn) seriesNextBtn.addEventListener("click", () => { 
  if (!seriesItems || seriesItems.length===0) return; 
  seriesCurrentIndex = (seriesCurrentIndex + 1) % seriesItems.length; 
  displaySeriesItem(seriesCurrentIndex); 
  resetSeriesAuto(); 
});

if (seriesPrevBtn) seriesPrevBtn.addEventListener("click", () => { 
  if (!seriesItems || seriesItems.length===0) return; 
  seriesCurrentIndex = (seriesCurrentIndex - 1 + seriesItems.length) % seriesItems.length; 
  displaySeriesItem(seriesCurrentIndex); 
  resetSeriesAuto(); 
});

// Swipe support for heroes
let touchStartX = 0, touchEndX = 0;

if (hero) {
  hero.addEventListener("touchstart", (e) => { 
    touchStartX = e.changedTouches[0].screenX; 
  });
  
  hero.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) { 
      currentIndex = (currentIndex + 1) % items.length; 
      displayItem(currentIndex); 
      resetAuto(); 
    }
    else if (touchEndX > touchStartX + 50) { 
      currentIndex = (currentIndex - 1 + items.length) % items.length; 
      displayItem(currentIndex); 
      resetAuto(); 
    }
  });
}

if (moviesHero) {
  moviesHero.addEventListener("touchstart", (e) => { 
    touchStartX = e.changedTouches[0].screenX; 
  });
  
  moviesHero.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) { 
      moviesCurrentIndex = (moviesCurrentIndex + 1) % moviesItems.length; 
      displayMoviesItem(moviesCurrentIndex); 
      resetMoviesAuto(); 
    }
    else if (touchEndX > touchStartX + 50) { 
      moviesCurrentIndex = (moviesCurrentIndex - 1 + moviesItems.length) % moviesItems.length; 
      displayMoviesItem(moviesCurrentIndex); 
      resetMoviesAuto(); 
    }
  });
}

if (seriesHero) {
  seriesHero.addEventListener("touchstart", (e) => { 
    touchStartX = e.changedTouches[0].screenX; 
  });
  
  seriesHero.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) { 
      seriesCurrentIndex = (seriesCurrentIndex + 1) % seriesItems.length; 
      displaySeriesItem(seriesCurrentIndex); 
      resetSeriesAuto(); 
    }
    else if (touchEndX > touchStartX + 50) { 
      seriesCurrentIndex = (seriesCurrentIndex - 1 + seriesItems.length) % seriesItems.length; 
      displaySeriesItem(seriesCurrentIndex); 
      resetSeriesAuto(); 
    }
  });
}

// ===== PAGINATION =====

function updatePagination(paginationEl, currentPage, totalPages, loadFunction) {
  if (!paginationEl) return;
  
  paginationEl.innerHTML = '';
  
  const prev = document.createElement("button");
  prev.textContent = "Previous";
  prev.disabled = currentPage <= 1;
  prev.addEventListener("click", () => loadFunction(currentPage - 1));
  
  const pageSpan = document.createElement("span");
  pageSpan.textContent = `Page ${currentPage} of ${totalPages}`;
  
  const next = document.createElement("button");
  next.textContent = "Next";
  next.disabled = currentPage >= totalPages;
  next.addEventListener("click", () => loadFunction(currentPage + 1));
  
  paginationEl.appendChild(prev);
  paginationEl.appendChild(pageSpan);
  paginationEl.appendChild(next);
}

// Load paginated movies
async function loadMovies(page) {
  moviesCurrentPage = page;
  const totalPages = await fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}&page=${page}`, "movies-list", 21, true);
  moviesTotalPages = totalPages;
  updatePagination(moviesPagination, moviesCurrentPage, moviesTotalPages, loadMovies);
}

// Load paginated series
async function loadSeries(page) {
  seriesCurrentPage = page;
  const totalPages = await fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}&page=${page}`, "series-list", 21, true, 'tv'); // Add 'tv' as media type
  seriesTotalPages = totalPages;
  updatePagination(seriesPagination, seriesCurrentPage, seriesTotalPages, loadSeries);
}

if (trailerClose) {
  trailerClose.addEventListener('click', () => {
    trailerPopup.style.display = 'none';
    const iframe = trailerPopup.querySelector('iframe');
    if (iframe) iframe.src = ''; // Stop video
  });
}
// ===== ACTOR MODAL =====

// Replace your existing showActorModal function with this enhanced version
async function showActorModal(actorId) {
  try {
    const res = await fetch(`${BASE}/person/${actorId}?api_key=${API_KEY}&append_to_response=movie_credits,tv_credits,images`);
    const actor = await res.json();
    
    // Create modal if it doesn't exist
    let actorModal = document.getElementById('actor-modal');
    if (!actorModal) {
      actorModal = document.createElement('div');
      actorModal.id = 'actor-modal';
      actorModal.className = 'actor-modal';
      document.body.appendChild(actorModal);
    }
    
    // Set modal content
    actorModal.innerHTML = `
      <div class="actor-modal-content">
        <div class="actor-modal-header" style="background-image: url(${actor.images?.profiles[0]?.file_path ? IMAGE_BASE + actor.images.profiles[0].file_path : ''})">
          <button class="actor-modal-close"><i class="fas fa-times"></i></button>
        </div>
        <div class="actor-modal-body">
          <div class="actor-modal-info">
            <div class="actor-modal-poster">
              <img src="${actor.profile_path ? IMG_PATH + actor.profile_path : '/images/no-avatar.png'}" alt="${actor.name}">
            </div>
            <div class="actor-modal-details">
              <h2 class="actor-modal-name">${actor.name}</h2>
              <div class="actor-modal-meta">
                <div class="actor-meta-item">
                  <i class="fas fa-film"></i>
                  <span>${actor.movie_credits?.cast?.length || 0} Movies</span>
                </div>
                <div class="actor-meta-item">
                  <i class="fas fa-tv"></i>
                  <span>${actor.tv_credits?.cast?.length || 0} TV Shows</span>
                </div>
                <div class="actor-meta-item">
                  <i class="fas fa-star"></i>
                  <span>Popularity: ${Math.round(actor.popularity)}</span>
                </div>
                <div class="actor-meta-item">
                  <i class="fas fa-birthday-cake"></i>
                  <span>${actor.birthday ? new Date(actor.birthday).toLocaleDateString() : 'Unknown'}</span>
                </div>
              </div>
              <div class="actor-modal-bio">
                ${actor.biography || 'No biography available.'}
              </div>
            </div>
          </div>
          
          <div class="actor-modal-works">
            <h3>Known For</h3>
            <div class="actor-works-grid" id="actor-works-grid">
              <!-- Works will be populated here -->
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Populate known works
    const worksGrid = document.getElementById('actor-works-grid');
    if (worksGrid) {
      // Combine movie and TV credits, sort by popularity, and take top 10
      const allWorks = [
        ...(actor.movie_credits?.cast || []).map(movie => ({...movie, media_type: 'movie'})),
        ...(actor.tv_credits?.cast || []).map(tv => ({...tv, media_type: 'tv'}))
      ];
      
      const knownWorks = allWorks
        .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        .slice(0, 10);
      
      worksGrid.innerHTML = knownWorks.map(work => {
        const title = work.title || work.name;
        const poster = work.poster_path ? IMG_PATH + work.poster_path : '/images/no-poster.png';
        const character = work.character ? `as ${work.character}` : '';
        
        return `
          <div class="actor-work-item" data-id="${work.id}" data-type="${work.media_type}">
            <img src="${poster}" alt="${title}">
            <div class="actor-work-title">
              ${title}
              ${character ? `<small>${character}</small>` : ''}
            </div>
          </div>
        `;
      }).join('');
      
      // Add click events to work items
      worksGrid.querySelectorAll('.actor-work-item').forEach(item => {
        item.addEventListener('click', () => {
          const workId = parseInt(item.dataset.id);
          const workType = item.dataset.type;
          
          // Close actor modal
          actorModal.style.display = 'none';
          
          // Show details page for the selected work
          showDetailsPage(workId, workType);
        });
      });
    }
    
    // Show modal
    actorModal.style.display = 'block';
    
    // Add close event
    const closeBtn = actorModal.querySelector('.actor-modal-close');
    closeBtn.addEventListener('click', () => {
      actorModal.style.display = 'none';
    });
    
    // Close on background click
    actorModal.addEventListener('click', (e) => {
      if (e.target === actorModal) {
        actorModal.style.display = 'none';
      }
    });
    
  } catch (error) {
    console.error("Error fetching actor details:", error);
    showNotification('Unable to load actor details. Please try again.', 'error');
  }
}

if (modalClose) modalClose.addEventListener("click", () => { 
  if (actorModal) actorModal.style.display = "none"; 
});

window.addEventListener("click", (e) => { 
  if (e.target === actorModal) actorModal.style.display = "none"; 
});

// ===== GENRE EXPLORER =====

function populateYearsAndCountries() {
  if (!filterYear || !filterCountry) return;
  
  filterYear.innerHTML = '<option value="">Any Year</option>';
  const currentYear = new Date().getFullYear();
  for (let y=currentYear; y>=1950; y--) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    filterYear.appendChild(opt);
  }
  
  // Basic countries list
const countries = [
  { code: 'US', name: 'United States' }, { code: 'GB', name: 'United Kingdom' }, { code: 'IN', name: 'India' },
  { code: 'NG', name: 'Nigeria' }, { code: 'ZA', name: 'South Africa' }, { code: 'GH', name: 'Ghana' },
  { code: 'KE', name: 'Kenya' }, { code: 'EG', name: 'Egypt' }, { code: 'MA', name: 'Morocco' },
  { code: 'CA', name: 'Canada' }, { code: 'AU', name: 'Australia' }, { code: 'RU', name: 'Russia' },
  { code: 'TR', name: 'Turkey' }, { code: 'SA', name: 'Saudi Arabia' }, { code: 'TH', name: 'Thailand' },
  { code: 'ID', name: 'Indonesia' }, { code: 'NZ', name: 'New Zealand' },
  { code: 'BR', name: 'Brazil' }, { code: 'AR', name: 'Argentina' }, { code: 'CL', name: 'Chile' },
  { code: 'MX', name: 'Mexico' }, { code: 'CO', name: 'Colombia' }, { code: 'PE', name: 'Peru' },
  { code: 'CN', name: 'China' }, { code: 'JP', name: 'Japan' }, { code: 'KR', name: 'South Korea' },
  { code: 'PK', name: 'Pakistan' }, { code: 'BD', name: 'Bangladesh' }, { code: 'VN', name: 'Vietnam' },
  { code: 'FR', name: 'France' }, { code: 'DE', name: 'Germany' }, { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' }, { code: 'PT', name: 'Portugal' }, { code: 'NL', name: 'Netherlands' },
  { code: 'SE', name: 'Sweden' }, { code: 'NO', name: 'Norway' }, { code: 'DK', name: 'Denmark' },
  { code: 'CH', name: 'Switzerland' }, { code: 'BE', name: 'Belgium' }, { code: 'PL', name: 'Poland' },
  { code: 'AE', name: 'United Arab Emirates' }, { code: 'QA', name: 'Qatar' }, { code: 'KW', name: 'Kuwait' },
  { code: 'IL', name: 'Israel' }, { code: 'IR', name: 'Iran' }, { code: 'IQ', name: 'Iraq' }
];

  
  filterCountry.innerHTML = '<option value="">All Countries</option>';
  countries.forEach(c => { 
    const o = document.createElement("option"); 
    o.value = c.code; 
    o.textContent = c.name; 
    filterCountry.appendChild(o); 
  });
}

function populateGenreButtons(type) {
  if (!genreButtonsContainer) return;
  
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

document.querySelectorAll('input[name="media-type"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    selectedType = e.target.value;
    selectedGenre = null;
    populateGenreButtons(selectedType);
    if (genresResults) genresResults.classList.remove('active');
    if (promptMessage) promptMessage.style.display = 'block';
    if (genresResults) genresResults.innerHTML = '';
    if (genresPagination) genresPagination.innerHTML = '';
  });
});

if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', () => {
  selectedYear = filterYear ? filterYear.value : '';
  selectedCountry = filterCountry ? filterCountry.value : '';
  selectedSort = filterSort ? filterSort.value : 'popularity.desc';
  
  if (selectedSort === 'newest') selectedSort = selectedType === 'movie' ? 'release_date.desc' : 'first_air_date.desc';
  
  if (selectedGenre) {
    if (promptMessage) promptMessage.style.display = 'none';
    if (genresResults) genresResults.classList.add('active');
    loadGenres(1);
  } else {
    alert('Please select a genre to proceed.');
  }
});

// Fix the loadGenres function
async function loadGenres(page) {
  currentPage = page;
  let endpoint = `${BASE}/discover/${selectedType}?api_key=${API_KEY}&page=${page}&sort_by=${selectedSort}`;
  
  if (selectedGenre) endpoint += `&with_genres=${selectedGenre}`;
  if (selectedYear) endpoint += selectedType === 'movie' ? `&primary_release_year=${selectedYear}` : `&first_air_date_year=${selectedYear}`;
  if (selectedCountry) endpoint += `&with_origin_country=${selectedCountry}`;
  
  try {
    const totalPages = await fetchMovies(endpoint, 'genres-results', 20, true, selectedType); // Pass selectedType
    totalPagesGlobal = totalPages;
    updatePagination(genresPagination, currentPage, totalPagesGlobal, loadGenres);
  } catch (err) {
    console.error("Error fetching filtered results:", err);
    if (genresResults) genresResults.innerHTML = '<p>Unable to load results. Please try again.</p>';
    if (genresPagination) genresPagination.innerHTML = '';
  }
}

// Fetch movies by genre for the home genre explorer
async function fetchGenreMovies(genreId) {
  try {
    const res = await fetch(`${BASE}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await res.json();
    const container = genreMovies ? genreMovies.querySelector(".carousel-track") : null;
    
    if (!container) return;
    container.innerHTML = '';
    
    (data.results || []).slice(0,10).forEach(movie => {
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
    
    if (genreMovies) genreMovies.classList.add("active");
  } catch (error) {
    console.error("Error fetching genre movies:", error);
    const container = genreMovies ? genreMovies.querySelector(".carousel-track") : null;
    if (container) container.innerHTML = "<p>Unable to load genre movies. Please try again.</p>";
  }
}

document.querySelectorAll(".genre-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const genreId = button.dataset.genre;
    fetchGenreMovies(genreId);
  });
});

if (genreClose) genreClose.addEventListener("click", () => {
  if (genreMovies) genreMovies.classList.remove("active");
  document.querySelectorAll(".genre-btn").forEach(btn => btn.classList.remove("active"));
});

// ===== CAROUSEL NAVIGATION =====

document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  
  if (prev && next && track) {
    prev.addEventListener("click", () => track.scrollBy({ left: -300, behavior: "smooth" }));
    next.addEventListener("click", () => track.scrollBy({ left: 300, behavior: "smooth" }));
  }
});

// ===== MOBILE MENU =====

if (hamburger && popupMenu) {
  hamburger.addEventListener("click", () => popupMenu.classList.toggle("open"));
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !popupMenu.contains(e.target)) 
      popupMenu.classList.remove("open");
  });
}

// ===== NEWS SYSTEM =====

// Format date for news display
function formatNewsDate(dateStr) {
  if (!dateStr) return '';
  
  const date = new Date(dateStr);
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
}

// Show notification
function showNotification(msg, type='success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = msg;
  
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

// Setup news tabs
function setupNewsTabs() {
  const tabs = document.querySelectorAll('.news-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.news-tab-content').forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      const tabName = tab.dataset.tab;
      const content = q(`${tabName}-tab`);
      if (content) content.classList.add('active');
    });
  });
}

// Setup refresh buttons
function setupRefreshButtons() {
  const mainRefreshBtn = q('main-refresh-btn');
  if (mainRefreshBtn) mainRefreshBtn.addEventListener('click', refreshAllNews);
}

// Update last refresh time
function updateLastRefreshTime() {
  const refreshTimeElement = q('refresh-time');
  if (refreshTimeElement) {
    // Set the last refresh time to now
    lastRefreshTime = new Date();
    refreshTimeElement.textContent = formatNewsDate(lastRefreshTime.toISOString());
  }
}

// Initialize news page
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
  
  // Set up UI elements
  setupRefreshButtons();
  setupNewsTabs();
  updateLastRefreshTime();
}

// Clear news intervals
function clearNewsIntervals() {
  Object.values(newsIntervals).forEach(i => clearInterval(i));
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
  const btn = q('main-refresh-btn');
  const icon = btn ? btn.querySelector('i') : null;
  
  if (icon) icon.classList.add('fa-spin');
  
  try {
    await fetchAllNews();
    showNotification('All news refreshed successfully!');
  } catch (e) {
    console.error("Error refreshing news:", e);
    showNotification('Failed to refresh news.', 'error');
  } finally {
    if (icon) icon.classList.remove('fa-spin');
  }
}

// Fetch General News
async function fetchGeneralNews() {
  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${NEWS_API_KEY}&pageSize=8`);
    const data = await res.json();
    newsData.general = data.articles || [];
    displayGeneralNews();
  } catch (e) { 
    console.error("Error fetching general news:", e); 
  }
}

// Fetch Movie News
async function fetchMovieNews() {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=movies&apiKey=${NEWS_API_KEY}&pageSize=6`);
    const data = await res.json();
    newsData.movie = data.articles || [];
    displayMovieNews();
  } catch (e) { 
    console.error("Error fetching movie news:", e); 
  }
}

// Fetch TV News
async function fetchTVNews() {
  try {
    const res = await fetch(`https://gnews.io/api/v4/search?q=tv%20shows&apikey=${GNEWS_API_KEY}&max=6`);
    const data = await res.json();
    newsData.tv = data.articles || [];
    displayTVNews();
  } catch (e) { 
    console.error("Error fetching tv news:", e); 
  }
}

// Fetch Movies & TV News (enhanced with more sources)
async function fetchMoviesTvNews() {
  try {
    // Fetch from multiple sources for more comprehensive results
    const [moviesRes, tvRes, entertainmentRes] = await Promise.all([
      fetch(`https://newsapi.org/v2/everything?q=movies&apiKey=${NEWS_API_KEY}&pageSize=4`),
      fetch(`https://gnews.io/api/v4/search?q=tv%20shows&apikey=${GNEWS_API_KEY}&max=4`),
      fetch(`https://newsapi.org/v2/everything?q=entertainment&apiKey=${NEWS_API_KEY}&pageSize=4`)
    ]);
    
    const moviesData = await moviesRes.json();
    const tvData = await tvRes.json();
    const entertainmentData = await entertainmentRes.json();
    
    // Combine all results and remove duplicates
    const allArticles = [
      ...(moviesData.articles || []),
      ...(tvData.articles || []),
      ...(entertainmentData.articles || [])
    ];
    
    // Remove duplicates based on title
    const uniqueArticles = [];
    const titles = new Set();
    
    allArticles.forEach(article => {
      if (!titles.has(article.title)) {
        titles.add(article.title);
        uniqueArticles.push(article);
      }
    });
    
    newsData.moviesTv = uniqueArticles.slice(0, 10); // Limit to 10 articles
    displayMoviesTvNews();
  } catch (e) { 
    console.error("Error fetching movies & TV news:", e); 
  }
}

// Fetch Actors News
async function fetchActorsNews() {
  try {
    const res = await fetch(`${BASE}/person/popular?api_key=${API_KEY}`);
    const data = await res.json();
    newsData.actors = data.results || [];
    displayActorsNews();
  } catch (e) { 
    console.error("Error fetching actors news:", e); 
  }
}

// Fetch Trailers News
async function fetchTrailersNews() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const res = await fetch(`${BASE}/movie/upcoming?api_key=${API_KEY}&primary_release_date.gte=${today}`);
    const data = await res.json();
    
    const moviesWithTrailers = [];
    for (const movie of (data.results || []).slice(0,6)) {
      try {
        const movieRes = await fetch(`${BASE}/movie/${movie.id}?api_key=${API_KEY}&append_to_response=videos`);
        const movieData = await movieRes.json();
        
        if (movieData.videos && movieData.videos.results.length > 0) {
          moviesWithTrailers.push(movieData);
        }
      } catch (err) { 
        console.error(`Error fetching movie details for ${movie.id}:`, err); 
      }
    }
    
    newsData.trailers = moviesWithTrailers;
    displayTrailersNews();
  } catch (e) { 
    console.error("Error fetching trailers news:", e); 
  }
}

// Fetch Trending News
async function fetchTrendingNews() {
  try {
    const res = await fetch(`${BASE}/trending/all/day?api_key=${API_KEY}`);
    const data = await res.json();
    newsData.trending = data.results || [];
    displayTrendingNews();
  } catch (e) { 
    console.error("Error fetching trending news:", e); 
  }
}

// Fetch Social Media News
async function fetchSocialMediaNews() {
  try {
    // Simulated social posts (no direct API)
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
  } catch (e) { 
    console.error("Error fetching social media news:", e); 
  }
}

// Fetch home news (for the landing page)
async function fetchHomeNews() {
  try {
    // Fetch from multiple sources for the landing page
    const [moviesRes, tvRes, entertainmentRes] = await Promise.all([
      fetch(`https://newsapi.org/v2/everything?q=movies&apiKey=${NEWS_API_KEY}&pageSize=3`),
      fetch(`https://gnews.io/api/v4/search?q=tv%20shows&apikey=${GNEWS_API_KEY}&max=3`),
      fetch(`https://newsapi.org/v2/everything?q=entertainment&apiKey=${NEWS_API_KEY}&pageSize=4`)
    ]);
    
    const moviesData = await moviesRes.json();
    const tvData = await tvRes.json();
    const entertainmentData = await entertainmentRes.json();
    
    // Combine all results
    const allArticles = [
      ...(moviesData.articles || []),
      ...(tvData.articles || []),
      ...(entertainmentData.articles || [])
    ];
    
    // Remove duplicates based on title
    const uniqueArticles = [];
    const titles = new Set();
    
    allArticles.forEach(article => {
      if (!titles.has(article.title)) {
        titles.add(article.title);
        uniqueArticles.push(article);
      }
    });
    
    // Display the latest entertainment news on the landing page
    displayLatestNews(uniqueArticles.slice(0, 6));
  } catch (e) { 
    console.error("Error fetching home news:", e); 
  }
}

// ===== NEWS DISPLAY FUNCTIONS =====

// Display Latest Entertainment News on landing page
function displayLatestNews(articles) {
  const container = latestNewsContainer || q('latest-news');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (articles.length === 0) {
    container.innerHTML = '<p>No entertainment news available at this time.</p>';
    return;
  }
  
  articles.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card latest-news-card';
    
    card.innerHTML = `
      <div class="news-image" style="background-image: url(${article.urlToImage || 'https://picsum.photos/seed/entertainment/400/250.jpg'})"></div>
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-meta">
          <span class="news-source">${article.source?.name||''}</span>
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

// Display Movie News
function displayMovieNews() {
  const container = movieNewsContainer || q('movie-news');
  if (!container) return;
  
  container.innerHTML = '';
  
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
          <span class="news-source">${article.source?.name||''}</span>
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

// Display TV News
function displayTVNews() {
  const container = tvNewsContainer || q('tv-news');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (newsData.tv.length === 0) {
    container.innerHTML = '<p>No TV news available at this time.</p>';
    return;
  }
  
  newsData.tv.forEach((article, idx) => {
    const item = document.createElement('div');
    item.className = `timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`;
    
    item.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${formatNewsDate(article.publishedAt)}</div>
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available'}</p>
        <div class="news-source">${article.source?.name||''}</div>
        <button class="read-more-btn" data-url="${article.url}">Read More</button>
      </div>
    `;
    
    item.querySelector('.read-more-btn').addEventListener('click', () => {
      window.open(article.url, '_blank');
    });
    
    container.appendChild(item);
  });
}

// Display General News
function displayGeneralNews() {
  const container = allGeneralNews || q('all-general-news');
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
          <span class="news-source">${article.source?.name||''}</span>
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

// Display Movies & TV News (enhanced)
function displayMoviesTvNews() {
  const container = moviesTvNews || q('movies-tv-news');
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
          <span class="news-source">${article.source?.name||''}</span>
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
  const container = actorsGrid || q('actors-grid');
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
// Update the displayTrailersNews function
function displayTrailersNews() {
  const container = trailersGrid || q('trailers-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  if ((newsData.trailers || []).length === 0) {
    container.innerHTML = '<p>No trailers available.</p>';
    return;
  }
  
  newsData.trailers.forEach(movie => {
    const trailer = (movie.videos?.results || []).find(v => v.type === "Trailer" && v.site === "YouTube") || null;
    
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
          <span><i class="fas fa-star"></i> ${(movie.vote_average||0).toFixed(1)}</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      if (trailer) {
        // Open modal instead of going to YouTube
        openTrailerModal(trailer.key);
      } else {
        window.open(`https://www.themoviedb.org/movie/${movie.id}`, "");
      }
    });
    
    container.appendChild(card);
  });
}

// Display Trending News
function displayTrendingNews() {
  const container = trendingGrid || q('trending-grid');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (!newsData.trending || newsData.trending.length === 0) {
    container.innerHTML = '<p>No trending content available.</p>';
    return;
  }
  
  newsData.trending.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'trending-card';
    
    card.innerHTML = `
      <div class="trending-image" style="background-image: url(${(item.backdrop_path||item.poster_path) ? IMAGE_BASE + (item.backdrop_path||item.poster_path) : 'https://picsum.photos/seed/trending/400/250.jpg'})"></div>
      <div class="trending-info">
        <div class="trending-number">#${idx+1}</div>
        <h3>${item.title || item.name}</h3>
        <div class="trending-meta">
          <span>${item.media_type==='movie'?'Movie':'TV Show'}</span>
          <span><i class="fas fa-star"></i> ${(item.vote_average||0).toFixed(1)}</span>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      window.open(`https://www.themoviedb.org/${item.media_type}/${item.id}`, "_blank");
    });
    
    container.appendChild(card);
  });
}

// Display Social Media News
function displaySocialMediaNews() {
  const container = socialMediaGrid || q('social-media');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (!newsData.social || newsData.social.length === 0) {
    container.innerHTML = '<p>No social posts available.</p>';
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

// Ensure heroContent is defined (for later trailer fix, but relevant here if searching affects hero)
const heroContent = document.querySelector('.hero-content'); // Add this near other DOM refs

// Complete fetchSearchSuggestions (already there, but confirm)
async function fetchSearchSuggestions(query) {
  try {
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      displaySearchSuggestions(data.results.slice(0, 5));
    } else {
      searchSuggestions.innerHTML = '<div class="suggestion-item">No results found</div>';
    }
  } catch (error) {
    console.error('Error fetching suggestions:', error);
  }
}

// Suggestion click already calls performSearch

// Handle enter/submit (ensure this fires)
function handleSearchSubmit(e) {
  e.preventDefault();
  
  const query = searchInput ? searchInput.value.trim() : '';
  
  if (query.length === 0) return;
  
  // Store the current page (before search) in localStorage
  const previousPage = localStorage.getItem('currentPage') || 'home';
  localStorage.setItem('pageBeforeSearch', previousPage);
  
  // Store the search query in localStorage
  localStorage.setItem('lastSearchQuery', query);
  
  // Hide suggestions
  if (searchSuggestions) searchSuggestions.innerHTML = '';
  
  // Navigate to search results page
  showPage('search-results');
  
  // Update search results title
  if (searchResultsTitle) {
    searchResultsTitle.textContent = `Search Results for "${query}"`;
  }
  
  // Fetch and display search results
  fetchSearchResults(query);
}

// Enhanced displaySearchResults: Show centered poster if single exact match, else grid
function displaySearchResults(results, query) {
  const exactMatch = results.find(item => (item.title || item.name).toLowerCase() === query.toLowerCase());
  if (exactMatch && results.length === 1) {
    // Centered single poster/logo
    const centeredDiv = document.createElement('div');
    centeredDiv.className = 'centered-poster';
    centeredDiv.innerHTML = `
      <img src="${exactMatch.poster_path ? IMG_PATH + exactMatch.poster_path : 'https://via.placeholder.com/280x420'}" alt="${exactMatch.title || exactMatch.name}" style="max-width: 50%; display: block; margin: 0 auto;">
      <h3 style="text-align: center;">${exactMatch.title || exactMatch.name}</h3>
    `;
    searchResultsContainer.appendChild(centeredDiv);
  } else {
    // Grid of cards
    results.forEach(item => {
      const card = document.createElement('div');
      card.className = 'carousel-item'; // For hover compatibility
      card.innerHTML = `
        <img src="${item.poster_path ? IMG_PATH + item.poster_path : 'https://via.placeholder.com/280x420'}" alt="${item.title || item.name}">
        <div class="overlay">
          <h3>${item.title || item.name}</h3>
          <div class="meta">
            <i class="fas fa-star"></i> ${(item.vote_average || 0).toFixed(1)}
            <span>${formatMovieDate(item.release_date || item.first_air_date)}</span>
          </div>
        </div>
      `;
      searchResultsContainer.appendChild(card);
    });
  }
}

// Confirm initSearch has:
// In your initSearch function, disable browser autocomplete
function initSearch() {
  if (!searchInput) return;
  
  // Disable browser autocomplete
  searchInput.setAttribute('autocomplete', 'off');
  
  // Add event listener for input changes
  searchInput.addEventListener('input', handleSearchInput);
  
  // Add event listener for form submission
  if (searchForm) {
    searchForm.addEventListener('submit', handleSearchSubmit);
  }
  
  // Add event listener to hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (searchInput && searchSuggestions && !searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.innerHTML = '';
      searchSuggestions.classList.remove('active');
    }
  });
}

// Update the performSearch function
async function performSearch(query) {
  console.log(`Searching for: ${query}`);
  try {
    showPage('search-results');
    searchResultsTitle.textContent = `Searched results for '${query}'`;
    searchResultsContainer.innerHTML = '<p>Loading...</p>';
    
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    
    searchResultsContainer.innerHTML = '';
    
    // Add back button at the top of results
    const backBtn = document.createElement('button');
    backBtn.className = 'search-back-btn';
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
    backBtn.addEventListener('click', () => {
      const previousPage = localStorage.getItem('currentPage') || 'home';
      showPage(previousPage);
    });
    searchResultsContainer.appendChild(backBtn);
    
    if (data.results && data.results.length > 0) {
      const filtered = data.results.filter(item => item.media_type === 'movie' || item.media_type === 'tv');
      if (filtered.length > 0) {
        displaySearchResults(filtered, query);
      } else {
        searchResultsContainer.innerHTML += '<p>No movies or series found for this query.</p>';
      }
    } else {
      searchResultsContainer.innerHTML += '<p>No movies or series found.</p>';
    }
  } catch (error) {
    console.error('Search error:', error);
    searchResultsContainer.innerHTML = '<p>Error loading results. Please try again.</p>';
  }
}

function displaySearchResults(results, query) {
  // Removed exactMatch/centered logic; always show grid
  results.forEach(item => {
    const card = document.createElement('div');
    card.className = 'carousel-item';
    card.innerHTML = `
      <img src="${item.poster_path ? IMG_PATH + item.poster_path : 'https://via.placeholder.com/280x420'}" alt="${item.title || item.name}">
      <div class="overlay">
        <h3>${item.title || item.name}</h3>
        <div class="meta">
          <i class="fas fa-star"></i> ${(item.vote_average || 0).toFixed(1)}
          <span>${formatMovieDate(item.release_date || item.first_air_date)}</span>
        </div>
      </div>
    `;
    searchResultsContainer.appendChild(card);
  });
}

const newsletterPopup = document.querySelector('#newsletter-popup');

// Replace the existing newsletter form handler
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    
    // Create a success popup
    const popup = document.createElement('div');
    popup.className = 'newsletter-popup';
    popup.innerHTML = `
      <div class="popup-content">
        <div class="popup-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3>Subscription Successful!</h3>
        <p>Thank you for subscribing to our newsletter.</p>
        <button class="popup-close-btn">Close</button>
      </div>
    `;
    
    // Add popup to the page
    document.body.appendChild(popup);
    
    // Show popup with animation
    setTimeout(() => {
      popup.classList.add('show');
    }, 10);
    
    // Add close button functionality
    const closeBtn = popup.querySelector('.popup-close-btn');
    closeBtn.addEventListener('click', () => {
      popup.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 300);
    });
    
    // Auto close after 3 seconds
    setTimeout(() => {
      if (document.body.contains(popup)) {
        popup.classList.remove('show');
        setTimeout(() => {
          if (document.body.contains(popup)) {
            document.body.removeChild(popup);
          }
        }, 300);
      }
    }, 3000);
    
    // Reset form
    newsletterForm.reset();
  });
}

// For movies hero
const moviesHeroVideoContainer = document.createElement('div');
moviesHeroVideoContainer.id = 'movies-hero-video-container';
moviesHeroVideoContainer.style.display = 'none';
moviesHero.appendChild(moviesHeroVideoContainer);

const moviesExitBtn = document.createElement('button');
moviesExitBtn.className = 'exit-trailer-btn';
moviesExitBtn.innerHTML = '<i class="fas fa-times"></i> Exit';
moviesHero.appendChild(moviesExitBtn);
moviesExitBtn.style.display = 'none';

// For series hero
const seriesHeroVideoContainer = document.createElement('div');
seriesHeroVideoContainer.id = 'series-hero-video-container';
seriesHeroVideoContainer.style.display = 'none';
seriesHero.appendChild(seriesHeroVideoContainer);

const seriesExitBtn = document.createElement('button');
seriesExitBtn.className = 'exit-trailer-btn';
seriesExitBtn.innerHTML = '<i class="fas fa-times"></i> Exit';
seriesHero.appendChild(seriesExitBtn);
seriesExitBtn.style.display = 'none';

// Movies trailer button
if (moviesWatchTrailerBtn) {
  moviesWatchTrailerBtn.addEventListener('click', async () => {
    const item = moviesItems[moviesCurrentIndex];
    try {
      const res = await fetch(`${BASE}/${item.media_type}/${item.id}/videos?api_key=${API_KEY}`);
      const data = await res.json();
      const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
      if (trailer) {
        moviesHero.style.backgroundImage = 'none';
        moviesHeroVideoContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.key}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        moviesHeroVideoContainer.style.display = 'block';
        moviesExitBtn.style.display = 'block';
        // Hide other hero content
        const moviesHeroContent = moviesHero.querySelector('.hero-content');
        if (moviesHeroContent) moviesHeroContent.style.display = 'none';
        moviesPrevBtn.style.display = 'none';
        moviesNextBtn.style.display = 'none';
      }
    } catch (error) {
      console.error('Error loading trailer:', error);
    }
  });
}

// Series trailer button
if (seriesWatchTrailerBtn) {
  seriesWatchTrailerBtn.addEventListener('click', async () => {
    const item = seriesItems[seriesCurrentIndex];
    try {
      const res = await fetch(`${BASE}/${item.media_type}/${item.id}/videos?api_key=${API_KEY}`);
      const data = await res.json();
      const trailer = data.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
      if (trailer) {
        seriesHero.style.backgroundImage = 'none';
        seriesHeroVideoContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.key}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
        seriesHeroVideoContainer.style.display = 'block';
        seriesExitBtn.style.display = 'block';
        // Hide other hero content
        const seriesHeroContent = seriesHero.querySelector('.hero-content');
        if (seriesHeroContent) seriesHeroContent.style.display = 'none';
        seriesPrevBtn.style.display = 'none';
        seriesNextBtn.style.display = 'none';
      }
    } catch (error) {
      console.error('Error loading trailer:', error);
    }
  });
}

// Movies exit button
moviesExitBtn.addEventListener('click', () => {
  moviesHeroVideoContainer.innerHTML = '';
  moviesHeroVideoContainer.style.display = 'none';
  moviesExitBtn.style.display = 'none';
  const moviesHeroContent = moviesHero.querySelector('.hero-content');
  if (moviesHeroContent) moviesHeroContent.style.display = 'block';
  moviesPrevBtn.style.display = 'block';
  moviesNextBtn.style.display = 'block';
  // Revert bg
  displayMoviesItem(moviesCurrentIndex);
});

// Series exit button
seriesExitBtn.addEventListener('click', () => {
  seriesHeroVideoContainer.innerHTML = '';
  seriesHeroVideoContainer.style.display = 'none';
  seriesExitBtn.style.display = 'none';
  const seriesHeroContent = seriesHero.querySelector('.hero-content');
  if (seriesHeroContent) seriesHeroContent.style.display = 'block';
  seriesPrevBtn.style.display = 'block';
  seriesNextBtn.style.display = 'block';
  // Revert bg
  displaySeriesItem(seriesCurrentIndex);
});

// In index.js, replace the existing displaySearchSuggestions function with this:
function displaySearchResults(results, query) {
  if (!searchResultsContainer) return;
  
  searchResultsContainer.innerHTML = '';
  
  if (results.length === 0) {
    searchResultsContainer.innerHTML = '<p>No results found.</p>';
    return;
  }
  
  results.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('search-result-item');
    
    const title = item.title || item.name || 'Unknown';
    const type = item.media_type === 'movie' ? 'Movie' : 
             item.media_type === 'tv' ? 'TV Show' : 
             item.media_type === 'person' ? 'Person' : 'Unknown';
    const date = item.release_date || item.first_air_date || 'N/A';
    const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
    const description = item.overview || 'No description available.';
    
    // Determine image path based on media type
    let imagePath = 'https://via.placeholder.com/300x450?text=No+Image'; // Fallback placeholder
    if (item.media_type === 'person' && item.profile_path) {
      imagePath = `https://image.tmdb.org/t/p/w185${item.profile_path}`; // Medium profile thumbnail
    } else if ((item.media_type === 'movie' || item.media_type === 'tv') && item.poster_path) {
      imagePath = `https://image.tmdb.org/t/p/w185${item.poster_path}`; // Medium poster thumbnail (w185 is good for search results)
    }
    
    // Add data attributes for click events
    resultItem.dataset.id = item.id;
    resultItem.dataset.type = item.media_type;
    
    // Different display for people vs movies/tv
    if (item.media_type === 'person') {
      resultItem.innerHTML = `
        <div class="result-person">
          <div class="result-image" style="background-image: url(${imagePath})"></div>
          <div class="result-info">
            <h3>${title}</h3>
            <div class="result-meta">
              <span>${type}</span>
              <span>Popularity: ${Math.round(item.popularity)}</span>
            </div>
            <p>${description}</p>
          </div>
        </div>
      `;
    } else {
      resultItem.innerHTML = `
        <div class="result-media">
          <div class="result-image" style="background-image: url(${imagePath})"></div>
          <div class="result-info">
            <h3>${title}</h3>
            <div class="result-meta">
              <span>${type}</span>
              <span>${date}</span>
              <span><i class="fas fa-star"></i> ${rating}</span>
            </div>
            <p>${description}</p>
          </div>
        </div>
      `;
    }
    
    // Add click event to open details
    resultItem.addEventListener('click', () => {
      showDetailsPage(item.id, item.media_type);
    });
    
    searchResultsContainer.appendChild(resultItem);
  });
}

// ===== INITIALIZATION =====
// DOM references
const refreshBtn = document.getElementById('main-refresh-btn');
const refreshTime = document.getElementById('refresh-time');

// Format timestamp in WAT (Africa/Lagos)
// Replace the existing refresh time functionality with this:
function formatTimestamp(date) {
  return date.toLocaleString('en-US', {
    timeZone: 'Africa/Lagos',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}

// Store refresh timestamp to prevent overrides
let lastRefreshTimestamp = null;

// Refresh button listener
if (refreshBtn && refreshTime) {
  refreshBtn.addEventListener('click', () => {
    console.log('Refresh clicked at', formatTimestamp(new Date()));
    lastRefreshTimestamp = new Date(); // Store timestamp
    refreshTime.textContent = formatTimestamp(lastRefreshTimestamp);
    // Your existing news refresh logic here
    refreshAllNews();
  });
} else {
  console.error('Refresh button or time element missing');
}

// Override any relative time updates
function disableRelativeTimeUpdates() {
  // If your code uses an interval to update relative time (e.g., humanizeDateTime)
  // Clear it for refreshTime specifically
  const existingInterval = window.__refreshTimeInterval; // Hypothetical global interval
  if (existingInterval) {
    clearInterval(existingInterval);
    console.log('Cleared relative time interval');
  }
  // Ensure refreshTime keeps absolute timestamp
  if (lastRefreshTimestamp && refreshTime) {
    refreshTime.textContent = formatTimestamp(lastRefreshTimestamp);
  }
}

// TMDB API Key (replace with your actual key)
// TMDB API Key
const TMDB_API_KEY = "3c1a2f72d6fdb0c8cdf454c4996353af";

// Function to fetch poster from TMDB
async function fetchPoster(tmdbId, imgElement, type = 'movie') {
  try {
    const endpoint = type === 'tv' ? 'tv' : 'movie';
    const response = await fetch(`https://api.themoviedb.org/3/${endpoint}/${tmdbId}?api_key=${TMDB_API_KEY}`);
    const data = await response.json();
    if (data.poster_path) {
      imgElement.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    } else {
      imgElement.src = 'https://via.placeholder.com/80?text=No+Image';
    }
  } catch (error) {
    console.error('Error fetching TMDB data:', error);
    // Keep the fallback src if fetch fails
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the Hall of Fame page
  const hallOfFamePage = document.getElementById('hall-of-fame-page');
  if (!hallOfFamePage) return;
  
  // Check if we're on mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }
  
  // Store carousel intervals for cleanup
  const carouselIntervals = new Map();
  
  // Initialize carousels
  function initAwardCarousels() {
    const carousels = document.querySelectorAll('.award-carousel');
    
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.award-track');
      const items = track.querySelectorAll('.award-item');
      const indicatorsContainer = carousel.querySelector('.award-indicators');
      
      if (items.length === 0) return;
      
      let currentIndex = 0;
      
      // Clear existing indicators
      indicatorsContainer.innerHTML = '';
      
      // Create indicators
      items.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'award-indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
      });
      
      // Function to go to a specific slide
      function goToSlide(index) {
        // Update indicators
        indicatorsContainer.querySelectorAll('.award-indicator').forEach((indicator, i) => {
          indicator.classList.toggle('active', i === index);
        });
        
        // Move the track
        track.style.transform = `translateX(-${index * 100}%)`;
        
        currentIndex = index;
      }
      
      // Function to go to next slide
      function nextSlide() {
        const nextIndex = (currentIndex + 1) % items.length;
        goToSlide(nextIndex);
      }
      
      // Start auto-rotation
      const intervalId = setInterval(nextSlide, 8000);
      carouselIntervals.set(carousel, intervalId);
      
      // Pause on hover
      carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
      });
      
      carousel.addEventListener('mouseleave', () => {
        const newIntervalId = setInterval(nextSlide, 8000);
        carouselIntervals.set(carousel, newIntervalId);
      });
    });
  }
  
  // Clean up carousels
  function destroyAwardCarousels() {
    // Clear all intervals
    carouselIntervals.forEach((intervalId, carousel) => {
      clearInterval(intervalId);
    });
    carouselIntervals.clear();
    
    // Reset transforms and clear indicators
    const carousels = document.querySelectorAll('.award-carousel');
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.award-track');
      const indicatorsContainer = carousel.querySelector('.award-indicators');
      
      if (track) {
        track.style.transform = '';
      }
      
      if (indicatorsContainer) {
        indicatorsContainer.innerHTML = '';
      }
    });
  }
  
  // Initialize on mobile
  if (isMobile()) {
    initAwardCarousels();
  }
  
  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (isMobile()) {
        destroyAwardCarousels();
        initAwardCarousels();
      } else {
        destroyAwardCarousels();
      }
    }, 200);
  });
});

// Initialize TMDB image fetching
document.addEventListener('DOMContentLoaded', () => {
  const tmdbImages = document.querySelectorAll('.tmdb-image');
  tmdbImages.forEach(img => {
    const tmdbId = img.getAttribute('data-tmdb-id');
    const type = img.getAttribute('data-type') || 'movie';
    if (tmdbId) {
      fetchPoster(tmdbId, img, type);
    }
  });
});

// Poll Voting
const pollVoteBtns = document.querySelectorAll('.poll-vote-btn');
pollVoteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const pollResults = btn.nextElementSibling;
    pollResults.style.display = 'block';
    btn.disabled = true;
  });
});

// Discussion Likes/Comments
const actionButtons = document.querySelectorAll('.discussion-actions button');
actionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const count = parseInt(btn.textContent.trim().split(' ')[1]) + 1;
    btn.innerHTML = btn.innerHTML.replace(/\d+/, count);
  });
});

// Comment Submission
const commentSubmitBtn = document.querySelector('.comment-form button');
if (commentSubmitBtn) {
  commentSubmitBtn.addEventListener('click', () => {
    const textarea = document.querySelector('.comment-form textarea');
    const commentText = textarea.value.trim();
    if (commentText) {
      const commentsList = document.querySelector('.comments-list');
      const newComment = document.createElement('div');
      newComment.classList.add('comment');
      newComment.innerHTML = `
        <div class="comment-header">
          <img src="https://via.placeholder.com/40?text=User" alt="User" class="avatar">
          <h4>Anonymous</h4>
          <span class="comment-time">Just now</span>
        </div>
        <p>${commentText}</p>
      `;
      commentsList.prepend(newComment);
      textarea.value = '';
    }
  });
};

// Run on DOM load to ensure no relative updates override
document.addEventListener('DOMContentLoaded', () => {
  // ... existing code ...
  disableRelativeTimeUpdates();
  // Re-apply absolute timestamp every second to counter any override
  setInterval(() => {
    if (lastRefreshTimestamp && refreshTime) {
      refreshTime.textContent = formatTimestamp(lastRefreshTimestamp);
    }
  }, 1000);
});

// In index.js, update the document click listener:
document.addEventListener('click', (e) => {
  if (searchInput && searchSuggestions && !searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
    searchSuggestions.innerHTML = ''; // Or keep content and just hide
    searchSuggestions.classList.remove('active'); // Hide via CSS
  }
});

// In index.js, add after the existing document click listener for search
document.addEventListener('click', (e) => {
  // Existing search suggestions handler
  if (searchInput && searchSuggestions && !searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
    searchSuggestions.innerHTML = '';
    searchSuggestions.classList.remove('active');
  }

  // New mobile menu handler
  if (popupMenu && hamburger && popupMenu.classList.contains('active')) {
    if (!popupMenu.contains(e.target) && !hamburger.contains(e.target)) {
      popupMenu.classList.remove('active'); // Hide menu
      hamburger.classList.remove('active'); // Reset hamburger (optional)
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Get the current page from localStorage or default to 'home'
  const savedPage = localStorage.getItem('currentPage') || 'home';
  
  // Prepare initial UI
  populateYearsAndCountries();
  populateGenreButtons('movie');
  
  // Initialize search functionality
  initSearch();
  
  // Show the saved page
  showPage(savedPage);
});

// Replace the existing mobile menu click handler with this:
document.addEventListener('click', (e) => {
  // Existing search suggestions handler
  if (searchInput && searchSuggestions && !searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
    searchSuggestions.innerHTML = '';
    searchSuggestions.classList.remove('active');
  }

  // Mobile menu handler
  const menuToggle = document.getElementById('menu-toggle');
  const menuClass = document.querySelector('.menu-class');
  
  if (menuToggle && menuClass && menuToggle.checked && !menuClass.contains(e.target) && !menuToggle.contains(e.target)) {
    menuToggle.checked = false;
  }
});

// 2. Add event listener to the back button
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to search back button
  const searchBackBtn = document.querySelector('.search-back-btn');
  if (searchBackBtn) {
    searchBackBtn.addEventListener('click', () => {
      // Get the previous page from localStorage
      const pageBeforeSearch = localStorage.getItem('pageBeforeSearch') || 'home';
      
      // Navigate back to the previous page
      showPage(pageBeforeSearch);
    });
  }
});

// Add click event to carousel and grid items
document.addEventListener('click', (e) => {
  // Check if the clicked element is a carousel or grid item
  const item = e.target.closest('.carousel-item, .grid-item, .top-10-item, .favorite-item, .actor-work-item');
  if (item) {
    // Get media id and type from data attributes
    const mediaId = item.dataset.id;
    const mediaType = item.dataset.type;
    if (mediaId && mediaType) {
      showDetailsPage(mediaId, mediaType);
    }
  }
});

// Add this to your index.js file

// Login state management
const authState = {
  isLoggedIn: () => localStorage.getItem('isLoggedIn') === 'true',
  login: (userData) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(userData));
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
  },
  getCurrentUser: () => {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }
};

// Login form handler
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login-form');  // Adjust selector to match your HTML
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.querySelector('#login-email').value;  // Adjust IDs
      const password = document.querySelector('#login-password').value;
      
      // Validate credentials (dummy example; in real app, add proper validation)
      if (email && password) {
        const user = { email, name: 'User', /* other data */ };
        authState.login(user);  // Assuming this sets isLoggedIn to true and saves to localStorage
        showPage('home');  // Redirect to home after login
        showNotification('Login successful!', 'success');  // Optional
      } else {
        showNotification('Invalid credentials', 'error');
      }
    });
  }
  
  // Signup form handler
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      
      if (name && email && password) {
        const userData = {
          name: name,
          email: email,
          joinDate: new Date().toISOString()
        };
        
        authState.login(userData);
        showPage('home');
      }
    });
  }
  
  // Logout handler
  const logoutLinks = document.querySelectorAll('[data-page="logout"]');
  logoutLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      authState.logout();
      showPage('logout');
    });
  });
  
  // Show login/signup links
  const showSignup = document.getElementById('show-signup');
  const showLogin = document.getElementById('show-login');
  
  if (showSignup) {
    showSignup.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('signup');
    });
  }
  
  if (showLogin) {
    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('login');
    });
  }
});

// Add to your index.js file

// Update profile page with user data
function updateProfilePage() {
  const user = authState.getCurrentUser();
  if (!user) return;
  
  // Update profile information
  document.getElementById('profile-name').textContent = user.name || 'User Name';
  document.getElementById('profile-email').textContent = user.email || 'user@example.com';
  
  // Format join date
  if (user.joinDate) {
    const joinDate = new Date(user.joinDate);
    const options = { year: 'numeric', month: 'long' };
    document.getElementById('profile-member-since').textContent = 
      `Member since ${joinDate.toLocaleDateString(undefined, options)}`;
  }
  
  // Update profile picture if available
  if (user.profilePicture) {
    document.getElementById('profile-avatar').src = user.profilePicture;
  }
  
  // Update statistics
  updateProfileStatistics();
  
  // Update activity
  updateProfileActivity();
}

// Profile picture upload
document.addEventListener('DOMContentLoaded', () => {
  const editAvatarBtn = document.querySelector('.edit-avatar-btn');
  if (editAvatarBtn) {
    editAvatarBtn.addEventListener('click', () => {
      // Create file input
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          
          reader.onload = function(event) {
            const imageData = event.target.result;
            
            // Update profile picture
            document.getElementById('profile-avatar').src = imageData;
            
            // Save to user data
            const user = authState.getCurrentUser();
            if (user) {
              user.profilePicture = imageData;
              localStorage.setItem('currentUser', JSON.stringify(user));
            }
          };
          
          reader.readAsDataURL(file);
        }
      });
      
      // Trigger file selection
      fileInput.click();
    });
  }
  
  // Edit profile button
  const editProfileBtn = document.getElementById('edit-profile-btn');
  if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
      const user = authState.getCurrentUser();
      if (!user) return;
      
      // Create edit form
      const editForm = document.createElement('div');
      editForm.className = 'edit-profile-form';
      editForm.innerHTML = `
        <h3>Edit Profile</h3>
        <div class="form-group">
          <label for="edit-name">Name</label>
          <input type="text" id="edit-name" value="${user.name || ''}">
        </div>
        <div class="form-group">
          <label for="edit-email">Email</label>
          <input type="email" id="edit-email" value="${user.email || ''}">
        </div>
        <div class="form-actions">
          <button id="save-profile-btn" class="btn primary">Save</button>
          <button id="cancel-edit-btn" class="btn secondary">Cancel</button>
        </div>
      `;
      
      // Replace profile section with edit form
      const profileSection = document.querySelector('.profile-section');
      const originalContent = profileSection.innerHTML;
      profileSection.innerHTML = '';
      profileSection.appendChild(editForm);
      
      // Save button
      document.getElementById('save-profile-btn').addEventListener('click', () => {
        user.name = document.getElementById('edit-name').value;
        user.email = document.getElementById('edit-email').value;
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        profileSection.innerHTML = originalContent;
        updateProfilePage();
      });
      
      // Cancel button
      document.getElementById('cancel-edit-btn').addEventListener('click', () => {
        profileSection.innerHTML = originalContent;
      });
    });
  }
});



// Update profile statistics
function updateProfileStatistics() {
  const user = authState.getCurrentUser();
  if (!user) return;
  
  // Get statistics from localStorage or user object
  const stats = user.stats || {
    moviesWatched: 0,
    seriesWatched: 0,
    reviewsWritten: 0,
    favoritesCount: 0
  };
  
  document.getElementById('movies-watched').textContent = stats.moviesWatched;
  document.getElementById('series-watched').textContent = stats.seriesWatched;
  document.getElementById('reviews-written').textContent = stats.reviewsWritten;
  document.getElementById('favorites-count').textContent = stats.favoritesCount;
}

// Update profile activity
function updateProfileActivity() {
  const user = authState.getCurrentUser();
  if (!user) return;
  
  const activityContainer = document.querySelector('.activity-timeline');
  if (!activityContainer) return;
  
  // Get activity from localStorage or user object
  const activities = user.activities || [];
  
  // Clear existing activities
  activityContainer.innerHTML = '';
  
  // Add activities
  activities.forEach(activity => {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';
    
    let iconClass = 'fas fa-circle';
    if (activity.type === 'favorite') iconClass = 'fas fa-heart';
    else if (activity.type === 'review') iconClass = 'fas fa-edit';
    else if (activity.type === 'watch') iconClass = 'fas fa-eye';
    
    activityItem.innerHTML = `
      <div class="activity-icon">
        <i class="${iconClass}"></i>
      </div>
      <div class="activity-content">
        <p>${activity.description}</p>
        <span class="activity-time">${formatActivityTime(activity.timestamp)}</span>
      </div>
    `;
    
    activityContainer.appendChild(activityItem);
  });
  
  // If no activities, show placeholder
  if (activities.length === 0) {
    activityContainer.innerHTML = '<p class="no-activity">No activity yet. Start exploring movies and series!</p>';
  }
}

// Format activity time
function formatActivityTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 60) return `${diffMins} minutes ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays < 7) return `${diffDays} days ago`;
  
  return date.toLocaleDateString();
}

// Add activity to user profile
function addActivity(type, description) {
  const user = authState.getCurrentUser();
  if (!user) return;
  
  if (!user.activities) user.activities = [];
  
  user.activities.unshift({
    type: type,
    description: description,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 10 activities
  if (user.activities.length > 10) {
    user.activities = user.activities.slice(0, 10);
  }
  
  localStorage.setItem('currentUser', JSON.stringify(user));
}

// Add to your index.js file

// Update settings page with user preferences
function updateSettingsPage() {
  const user = authState.getCurrentUser();
  if (!user) return;
  
  // Get user preferences or set defaults
  const preferences = user.preferences || {};
  
  // Theme select - make it styled
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) {
    themeSelect.value = preferences.theme || 'dark';
    
    // Add custom styling class
    themeSelect.classList.add('styled-select');
    
    themeSelect.addEventListener('change', () => {
      preferences.theme = themeSelect.value;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Apply theme immediately
      applyTheme(themeSelect.value);
    });
  }
  
  // Language select - make it styled
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.value = preferences.language || 'en';
    
    // Add custom styling class
    languageSelect.classList.add('styled-select');
    
    languageSelect.addEventListener('change', () => {
      preferences.language = languageSelect.value;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }
  
  // Profile visibility select - make it styled
  const profileVisibility = document.getElementById('profile-visibility');
  if (profileVisibility) {
    profileVisibility.value = preferences.profileVisibility || 'public';
    
    // Add custom styling class
    profileVisibility.classList.add('styled-select');
    
    profileVisibility.addEventListener('change', () => {
      preferences.profileVisibility = profileVisibility.value;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }
  
  // Email notifications toggle
  const emailNotifications = document.getElementById('email-notifications');
  if (emailNotifications) {
    emailNotifications.checked = preferences.emailNotifications !== false;
    
    emailNotifications.addEventListener('change', () => {
      preferences.emailNotifications = emailNotifications.checked;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }
  
  // Newsletter subscription toggle
  const newsletterSubscription = document.getElementById('newsletter-subscription');
  if (newsletterSubscription) {
    newsletterSubscription.checked = preferences.newsletterSubscription !== false;
    
    newsletterSubscription.addEventListener('change', () => {
      preferences.newsletterSubscription = newsletterSubscription.checked;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  };
  
  // Activity status toggle
  const activityStatus = document.getElementById('activity-status');
  if (activityStatus) {
    activityStatus.checked = preferences.activityStatus !== false;
    
    activityStatus.addEventListener('change', () => {
      preferences.activityStatus = activityStatus.checked;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }
  
  // Two-factor authentication toggle
  const twoFactorAuth = document.getElementById('two-factor-auth');
  if (twoFactorAuth) {
    twoFactorAuth.checked = preferences.twoFactorAuth || false;
    
    twoFactorAuth.addEventListener('change', () => {
      preferences.twoFactorAuth = twoFactorAuth.checked;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      if (preferences.twoFactorAuth) {
        showNotification('Two-factor authentication enabled', 'success');
      } else {
        showNotification('Two-factor authentication disabled', 'info');
      }
    });
  }
  
  // Push notifications toggle
  const pushNotifications = document.getElementById('push-notifications');
  if (pushNotifications) {
    pushNotifications.checked = preferences.pushNotifications || false;
    
    pushNotifications.addEventListener('change', () => {
      preferences.pushNotifications = pushNotifications.checked;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }
  
  // New releases notifications toggle
  const newReleasesNotifications = document.getElementById('new-releases-notifications');
  if (newReleasesNotifications) {
    newReleasesNotifications.checked = preferences.newReleasesNotifications !== false;
    
    newReleasesNotifications.addEventListener('change', () => {
      preferences.newReleasesNotifications = newReleasesNotifications.checked;
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
    });
  }
  
  // Save settings button
  const saveSettingsBtn = document.getElementById('save-settings-btn');
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
      user.preferences = preferences;
      localStorage.setItem('currentUser', JSON.stringify(user));
      showNotification('Settings saved successfully', 'success');
    });
  }
  
  // Reset settings button
  const resetSettingsBtn = document.getElementById('reset-settings-btn');
  if (resetSettingsBtn) {
    resetSettingsBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all settings to default?')) {
        user.preferences = {};
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateSettingsPage();
        showNotification('Settings reset to default', 'info');
      }
    });
  }
  
  // Change password button
  const changePasswordBtn = document.getElementById('change-password-btn');
  if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', () => {
      // Create password change form
      const passwordForm = document.createElement('div');
      passwordForm.className = 'password-form';
      passwordForm.innerHTML = `
        <h3>Change Password</h3>
        <div class="form-group">
          <label for="current-password">Current Password</label>
          <input type="password" id="current-password">
        </div>
        <div class="form-group">
          <label for="new-password">New Password</label>
          <input type="password" id="new-password">
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm New Password</label>
          <input type="password" id="confirm-password">
        </div>
        <div class="form-actions">
          <button id="save-password-btn" class="btn primary">Save</button>
          <button id="cancel-password-btn" class="btn secondary">Cancel</button>
        </div>
      `;
      
      // Add form to page
      const settingsSection = document.querySelector('.settings-section');
      const originalContent = settingsSection.innerHTML;
      settingsSection.innerHTML = '';
      settingsSection.appendChild(passwordForm);
      
      // Save password button
      document.getElementById('save-password-btn').addEventListener('click', () => {
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (newPassword !== confirmPassword) {
          showNotification('New passwords do not match', 'error');
          return;
        }
        
        if (newPassword.length < 6) {
          showNotification('Password must be at least 6 characters', 'error');
          return;
        }
        
        // In a real app, you would verify current password and update on server
        showNotification('Password changed successfully', 'success');
        settingsSection.innerHTML = originalContent;
        updateSettingsPage();
      });
      
      // Cancel button
      document.getElementById('cancel-password-btn').addEventListener('click', () => {
        settingsSection.innerHTML = originalContent;
        updateSettingsPage();
      });
    });
  }
  
  // Delete account button
  const deleteAccountBtn = document.getElementById('delete-account-btn');
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        authState.logout();
        showPage('logout');
        showNotification('Your account has been deleted', 'info');
      }
    });
  }
}


// Function to add user activity
function addActivity(type, description) {
  const user = authState.getCurrentUser();
  if (!user) return;
  
  if (!user.activities) user.activities = [];
  
  user.activities.unshift({
    type: type,
    description: description,
    timestamp: new Date().toISOString()
  });
  
  // Keep only last 10 activities
  if (user.activities.length > 10) {
    user.activities = user.activities.slice(0, 10);
  }
  
  localStorage.setItem('currentUser', JSON.stringify(user));
}

// Function to show notifications
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

function handleLogoutConfirmation() {
  const logoutLinks = document.querySelectorAll('.nav-link[data-page="logout"]');
  logoutLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const popup = document.createElement('div');
      popup.className = 'logout-confirmation';
      popup.innerHTML = `
        <div class="confirmation-content">
          <h2>Confirm Logout</h2>
          <p>Are you sure you want to log out?</p>
          <div class="confirmation-buttons">
            <button id="confirm-logout-btns">Yes</button>
            <button id="cancel-logout-btns">Cancel</button>
          </div>
        </div>
      `;
      document.body.appendChild(popup);
      setTimeout(() => popup.classList.add('show'), 10);

      document.getElementById('confirm-logout-btns').onclick = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        popup.classList.remove('show');
        setTimeout(() => document.body.removeChild(popup), 300);
        showPage('login');
      };

      document.getElementById('cancel-logout-btns').onclick = () => {
        popup.classList.remove('show');
        setTimeout(() => document.body.removeChild(popup), 300);
        showPage('home');
      };
    });
  });
}

// Call the function to set up the listeners
handleLogoutConfirmation();