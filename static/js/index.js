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
    fetchMovies(`${BASE}/movie/popular?api_key=${API_KEY}`, 'popular-movies', 10, false, 'movie');
    fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}`, 'popular-tv', 10, false, 'tv');
    fetchMovies(`${BASE}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=200`, 'award-winning', 10, false, 'movie');
    fetchUpcomingCombined('recommendations', 10);
    fetchTop10();
    fetchActors();
    fetchHomeNews();
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

// Function to show details page
// Replace your existing showDetailsPage function with this enhanced version
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

    // Populate the details page
    content.innerHTML = `
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
        window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
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
        // Save to localStorage
        saveToFavorites(details);
        showNotification('Added to favorites!', 'success');
      } else {
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Favorite';
        // Remove from localStorage
        removeFromFavorites(details.id);
        showNotification('Removed from favorites', 'info');
      }
    };

    // Recommended button (placeholder)
    recommendedBtn.onclick = () => {
      showNotification('Recommended feature coming soon!', 'info');
    };

    // Submit review button (placeholder)
    submitReviewBtn.onclick = () => {
      const reviewText = document.getElementById('review-input').value;
      if (reviewText.trim()) {
        showNotification('Review submitted successfully!', 'success');
        document.getElementById('review-input').value = '';
      } else {
        showNotification('Please write a review before submitting.', 'error');
      }
    };

    // Add back button
    let backBtn = document.getElementById('details-back-btn');
    if (!backBtn) {
      const headerDiv = document.createElement('div');
      headerDiv.className = 'details-header';
      backBtn = document.createElement('button');
      backBtn.id = 'details-back-btn';
      backBtn.className = 'details-back-btn';
      backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
      headerDiv.appendChild(backBtn);
      
      // Insert at the beginning of details-content
      const detailsContent = document.querySelector('.details-content');
      if (detailsContent) {
        detailsContent.insertBefore(headerDiv, detailsContent.firstChild);
      }
    }
    
    // Add event listener to back button
    backBtn.onclick = () => {
      // Remove the back button when leaving
      const headerDiv = backBtn.parentElement;
      if (headerDiv) {
        headerDiv.remove();
      }
      // Go back to previous page
      const previousPage = localStorage.getItem('currentPage') || 'home';
      showPage(previousPage);
    };

  } catch (error) {
    console.error('Error loading details:', error);
    content.innerHTML = '<p>Error loading details. Please try again.</p>';
  }
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
// Replace your existing showMyListPage function with this:
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
    // Show empty message
    emptyMessage.style.display = 'block';
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
      favoriteItem.dataset.type = item.media_type;
      
      const poster = item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png';
      const title = item.title || item.name;
      const year = item.release_date ? item.release_date.split('-')[0] : 
                  item.first_air_date ? item.first_air_date.split('-')[0] : 'N/A';
      const rating = item.vote_average ? item.vote_average.toFixed(1) : 'N/A';
      
      favoriteItem.innerHTML = `
        <button class="favorite-delete" data-index="${index}">
          <i class="fas fa-trash"></i>
        </button>
        <img src="${poster}" alt="${title}">
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
        
        // Show details page directly
        showDetailsPage(item.id, item.media_type);
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
    
    // Show recommendations based on the first favorite's genres
    if (favorites.length > 0) {
      const firstFavorite = favorites[0];
      
      // Fetch recommendations
      fetch(`${BASE}/discover/${firstFavorite.media_type}?api_key=${API_KEY}&sort_by=popularity.desc&page=1`)
        .then(res => res.json())
        .then(data => {
          if (data.results && data.results.length > 0) {
            // Clear recommendations track
            recommendationsTrack.innerHTML = '';
            
            // Add recommendations (limit to 10)
            data.results.slice(0, 10).forEach(item => {
              const div = document.createElement('div');
              div.className = 'carousel-item';
              div.dataset.id = item.id;
              div.dataset.type = firstFavorite.media_type;
              
              const title = item.title || item.name;
              const poster = item.poster_path ? IMG_PATH + item.poster_path : '/images/no-poster.png';
              
              div.innerHTML = `
                <img src="${poster}" alt="${title}">
                <div class="overlay">
                  <h3>${title}</h3>
                  <div class="meta">
                    <span><i class="fas fa-star"></i> ${(item.vote_average || 0).toFixed(1)}</span>
                    <span><i class="fas fa-calendar"></i> ${item.release_date ? item.release_date.split('-')[0] : item.first_air_date ? item.first_air_date.split('-')[0] : 'N/A'}</span>
                  </div>
                </div>
              `;
              
              recommendationsTrack.appendChild(div);
            });
          }
        })
        .catch(error => {
          console.error('Error fetching recommendations:', error);
        });
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
function saveToFavorites(item) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Check if already in favorites
  const existingIndex = favorites.findIndex(fav => fav.id === item.id);
  if (existingIndex === -1) {
    favorites.push(item);
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
  const totalPages = await fetchMovies(`${BASE}/tv/popular?api_key=${API_KEY}&page=${page}`, "series-list", 20, true, 'tv'); // Add 'tv' as media type
  seriesTotalPages = totalPages;
  updatePagination(seriesPagination, seriesCurrentPage, seriesTotalPages, loadSeries);
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

// Replace your existing performSearch function with this:
async function performSearch(query) {
  console.log(`Searching for: ${query}`);
  try {
    showPage('search-results');
    searchResultsTitle.textContent = `Searched results for '${query}'`;
    searchResultsContainer.innerHTML = '<p>Loading...</p>';
    
    const res = await fetch(`${BASE}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`);
    const data = await res.json();
    
    searchResultsContainer.innerHTML = '';
    
    // Add back button
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