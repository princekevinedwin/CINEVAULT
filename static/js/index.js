// ===== API & CONSTANTS =====
const API_KEY = "3c1a2f72d6fdb0c8cdf454c4996353af";
const BASE = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/original";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const NEWS_API_KEY = "8602accfad284b4e9ee12b8a9f4319a0";
const GNEWS_API_KEY = "d4ea11c49c7766c92e887b415c857790";

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

  if (page === 'home') {
    console.log('Loading home page content');
    fetchTrending();
    fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies');
    fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv');
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning');
    fetchUpcomingCombined('recommendations', 10);
    fetchTop10();
    fetchActors();
    fetchHomeNews();
  } else if (page === 'movies') {
    console.log('Loading movies page content');
    fetchMoviesTrending();
    loadMovies(moviesCurrentPage);
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'movies-top-rated', 10);
    fetchUpcomingMovies('movies-upcoming', 10);
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
  } else if (page === 'search-results') {
    // Search results page is handled by search functionality
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
function displaySearchSuggestions(results) {
  if (!searchSuggestions) return;
  
  searchSuggestions.innerHTML = '';
  
  results.forEach(item => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion-item');
    
    const title = item.title || item.name || 'Unknown';
    const type = item.media_type === 'movie' ? 'Movie' : item.media_type === 'tv' ? 'TV Show' : item.media_type === 'person' ? 'Person' : 'Unknown';
    
    suggestionItem.innerHTML = `
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
async function fetchSearchResults(query) {
  try {
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    
    if (data.results && data.results.length > 0) {
      currentSearchResults = data.results;
      displaySearchResults(data.results);
    } else {
      if (searchResultsContainer) searchResultsContainer.innerHTML = '<div class="no-results">No results found</div>';
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
async function fetchMovies(endpoint, containerId, limit = 10, isGrid = false) {
  try {
    console.log(`Fetching data for ${containerId} from ${endpoint}`);
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
async function fetchUpcomingMovies(containerId, limit = 10) {
  try {
    const today = new Date().toISOString().split('T')[0];
    const res = await fetch(`${BASE}/movie/upcoming?api_key=${API_KEY}`);
    const data = await res.json();
    const container = q(containerId);
    if (!container) return 1;
    
    container.innerHTML = '';
    
    // Filter movies that are actually upcoming (release date is in the future)
    let results = (data.results || []).filter(movie => {
      return movie.release_date && movie.release_date > today && movie.poster_path;
    }).slice(0, limit);
    
    if (results.length === 0) {
      container.innerHTML = '<p>No upcoming movies available at this time.</p>';
      return 1;
    }
    
    results.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      const title = item.title || 'Untitled';
      const date = item.release_date || 'TBA';
      
      div.innerHTML = `
        <img src="${item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png'}" alt="${title}">
        <div class="overlay">
          <h3>${title}</h3>
          <span><i class="fas fa-calendar"></i> ${formatMovieDate(date)}</span>
        </div>
      `;
      
      
      container.appendChild(div);
    });
    
    return data.total_pages || 1;
  } catch (err) {
    console.error(`Error fetching upcoming movies for ${containerId}:`, err);
    const container = q(containerId);
    if (container) container.innerHTML = `<p>Unable to load upcoming movies. Please try again.</p>`;
    return 1;
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
    
    results.forEach(item => {
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
    (data.results || []).slice(0, 10).forEach((movie, idx) => {
      const item = document.createElement("div");
      item.classList.add("top-10-item");
      item.innerHTML = `<span class="top-10-number">${idx+1}</span><img src="${movie.poster_path ? IMG_PATH + movie.poster_path : '/images/no-poster.png'}" alt="${movie.title || movie.name}">`;
      container.appendChild(item);
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
      card.dataset.id = actor.id;
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
    if (trailer) moviesWatchTrailerBtn.onclick = () => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
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
    if (trailer) seriesWatchTrailerBtn.onclick = () => window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
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
  const totalPages = await fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}&page=${page}`, "movies-list", 20, true);
  moviesTotalPages = totalPages;
  updatePagination(moviesPagination, moviesCurrentPage, moviesTotalPages, loadMovies);
}

// Load paginated series
async function loadSeries(page) {
  seriesCurrentPage = page;
  const totalPages = await fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}&page=${page}`, "series-list", 20, true);
  seriesTotalPages = totalPages;
  updatePagination(seriesPagination, seriesCurrentPage, seriesTotalPages, loadSeries);
}

// ===== ACTOR MODAL =====

async function showActorModal(id) {
  try {
    const res = await fetch(`${BASE}/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits,tv_credits`);
    const actor = await res.json();
    
    if (actorImg) actorImg.src = actor.profile_path ? IMG_PATH + actor.profile_path : '/images/no-avatar.png';
    if (actorName) actorName.textContent = actor.name || "Unknown";
    if (actorBio) actorBio.textContent = actor.biography || "No biography available.";
    if (movieCount) movieCount.textContent = actor.movie_credits?.cast?.length || 0;
    if (tvCount) tvCount.textContent = actor.tv_credits?.cast?.length || 0;
    if (awardsCount) awardsCount.textContent = actor.popularity ? Math.round(actor.popularity / 10) : 0;
    
    if (popularWorks) {
      popularWorks.innerHTML = "";
      const works = [...(actor.movie_credits?.cast || []), ...(actor.tv_credits?.cast || [])]
        .sort((a,b) => (b.popularity||0) - (a.popularity||0)).slice(0,5);
      
      works.forEach(work => {
        const div = document.createElement("div");
        div.classList.add("popular-work");
        div.textContent = work.title || work.name || "Untitled";
        popularWorks.appendChild(div);
      });
    }
    
    if (actorModal) actorModal.style.display = "block";
  } catch (error) {
    console.error("Error fetching actor details:", error);
    if (actorModal) actorModal.innerHTML = "<p>Unable to load actor details. Please try again.</p>";
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
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
      } else {
        window.open(`https://www.themoviedb.org/movie/${movie.id}`, "_blank");
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
  e.preventDefault(); // Prevent form reload
  const query = searchInput.value.trim();
  if (query) {
    performSearch(query);
    searchSuggestions.innerHTML = ''; // Clear suggestions
  }
}

// performSearch (add console for debug)
async function performSearch(query) {
  console.log(`Searching for: ${query}`); // Debug
  try {
    showPage('search-results');
    searchResultsTitle.textContent = `Searched results for '${query}'`;
    searchResultsContainer.innerHTML = '<p>Loading...</p>';
    
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    
    searchResultsContainer.innerHTML = '';
    if (data.results && data.results.length > 0) {
      displaySearchResults(data.results, query); // Pass query for enhancements
    } else {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
    }
  } catch (error) {
    console.error('Search error:', error);
  }
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
function initSearch() {
  // ... existing
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query.length > 2) {
      fetchSearchSuggestions(query);
    } else {
      searchSuggestions.innerHTML = '';
    }
  });
  searchForm.addEventListener('submit', handleSearchSubmit);
}
// ===== NEWSLETTER FORM =====

async function performSearch(query) {
  console.log(`Searching for: ${query}`);
  try {
    showPage('search-results');
    searchResultsTitle.textContent = `Searched results for '${query}'`;
    searchResultsContainer.innerHTML = '<p>Loading...</p>';
    
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    
    searchResultsContainer.innerHTML = '';
    if (data.results && data.results.length > 0) {
      const filtered = data.results.filter(item => item.media_type === 'movie' || item.media_type === 'tv');
      if (filtered.length > 0) {
        displaySearchResults(filtered, query);
      } else {
        searchResultsContainer.innerHTML = '<p>No movies or series found for this query.</p>';
      }
    } else {
      searchResultsContainer.innerHTML = '<p>No movies or series found.</p>';
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

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    alert("Subscribed successfully!"); 
  });
}

// In index.js, replace the existing displaySearchSuggestions function with this:
function displaySearchSuggestions(results) {
  if (!searchSuggestions) return;
  
  searchSuggestions.innerHTML = '';
  
  results.forEach(item => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion-item');
    
    const title = item.title || item.name || 'Unknown';
    const type = item.media_type === 'movie' ? 'Movie' : item.media_type === 'tv' ? 'TV Show' : item.media_type === 'person' ? 'Person' : 'Unknown';
    
    // Determine image path based on media type
    let imagePath = 'https://via.placeholder.com/50x75?text=No+Image'; // Fallback placeholder
    if (item.media_type === 'person' && item.profile_path) {
      imagePath = `https://image.tmdb.org/t/p/w92${item.profile_path}`; // Small profile thumbnail
    } else if ((item.media_type === 'movie' || item.media_type === 'tv') && item.poster_path) {
      imagePath = `https://image.tmdb.org/t/p/w92${item.poster_path}`; // Small poster thumbnail (w92 is efficient)
    }
    
    suggestionItem.innerHTML = `
      <img src="${imagePath}" alt="${title} poster" class="suggestion-poster">
      <div class="suggestion-info">
        <div class="suggestion-title">${title}</div>
        <div class="suggestion-type">${type}</div>
      </div>
    `;
    
    // Click to select suggestion (existing logic)
    suggestionItem.addEventListener('click', () => {
      if (searchInput) searchInput.value = title;
      handleSearchSubmit(new Event('submit'));
    });
    
    searchSuggestions.appendChild(suggestionItem);
  });
}

// ===== INITIALIZATION =====
// DOM references
const refreshBtn = document.getElementById('main-refresh-btn');
const refreshTime = document.getElementById('refresh-time');

// Format timestamp in WAT (Africa/Lagos)
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
    // Your existing news refresh logic here (e.g., fetchNewsData, displaySocialMediaNews, etc.)
    // Example placeholder (replace with your actual fetch calls):
    // fetchNewsData().then(() => {
    //   displaySocialMediaNews();
    //   // Other display functions for all-general-news, actors-grid, etc.
    // });
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