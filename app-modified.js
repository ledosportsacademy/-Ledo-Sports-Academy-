// Application Data - Ledo Sports Academy with API Integration
let appData = {
  heroSlides: [],
  activities: [],
  members: [],
  donations: [],
  expenses: [],
  experiences: [],
  weeklyFees: [],
  gallery: []
};

// Charts
let financialChart = null;
let expenseChart = null;

// Application state
let isAdminMode = false;
let currentEditingItem = null;
let currentEditingType = null;
let currentLightboxIndex = 0;
let slideshowPaused = false;
let isSlideshowPaused = false;
let slideshowInterval = null;
let isCurrentlyOnHome = true;
let currentSlideIndex = 0;

// Utility functions
function isValidUrl(url) {
  if (!url) return true; // Empty URLs are considered valid for optional fields
  return url.startsWith('http://') || url.startsWith('https://');
}

function handleRedirectUrl(redirectUrl, defaultUrl, openNewTab) {
  const finalUrl = redirectUrl && redirectUrl.trim() ? redirectUrl : defaultUrl;
  
  if (finalUrl.startsWith('#')) {
    // Internal navigation
    const target = finalUrl.substring(1);
    showSection(target);
    setActiveNavLink(document.querySelector('[href="' + finalUrl + '"]'));
    isCurrentlyOnHome = (target === 'home');
    if (isCurrentlyOnHome && !isSlideshowPaused) {
      startSlideshow();
    } else {
      stopSlideshow();
    }
    // Close mobile menu if open
    const nav = document.getElementById('nav');
    if (nav) nav.classList.remove('active');
  } else if (isValidUrl(finalUrl)) {
    // External URL
    if (openNewTab) {
      window.open(finalUrl, '_blank');
    } else {
      window.location.href = finalUrl;
    }
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', async function() {
  console.log('Initializing application...');
  
  try {
    // Load data from API
    await loadAllData();
    
    // Initialize UI
    initializeUI();
    
    // Update hero slides
    updateHeroSlides();
    
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
    showMessage('Failed to initialize application. Please try refreshing the page.', 'error');
  }
});

// Load all data from API
async function loadAllData() {
  try {
    // Load hero slides
    appData.heroSlides = await api.hero.getAll();
    
    // Load activities
    appData.activities = await api.activity.getAll();
    
    // Load members
    appData.members = await api.member.getAll();
    
    // Load donations
    appData.donations = await api.donation.getAll();
    
    // Load expenses
    appData.expenses = await api.expense.getAll();
    
    // Load experiences
    appData.experiences = await api.experience.getAll();
    
    // Load weekly fees
    appData.weeklyFees = await api.weeklyFee.getAll();
    
    // Load gallery
    appData.gallery = await api.gallery.getAll();
    
    console.log('All data loaded successfully');
  } catch (error) {
    console.error('Error loading data:', error);
    showMessage('Failed to load data from server. Please try again later.', 'error');
    throw error;
  }
}

// Initialize UI
function initializeUI() {
  // Set up navigation
  const navLinks = document.querySelectorAll('.nav-link:not(.mobile-admin-login):not(.mobile-admin-logout)');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
      setActiveNavLink(this);
      
      // Update slideshow state based on current section
      isCurrentlyOnHome = (targetId === 'home');
      if (isCurrentlyOnHome && !isSlideshowPaused) {
        startSlideshow();
      } else {
        stopSlideshow();
      }
      
      // Close mobile menu if open
      const nav = document.getElementById('nav');
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        document.getElementById('mobileMenuToggle').classList.remove('active');
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const nav = document.getElementById('nav');
      this.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }
  
  // Admin login/logout buttons
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const mobileAdminLogin = document.getElementById('mobileAdminLogin');
  const mobileAdminLogout = document.getElementById('mobileAdminLogout');
  
  if (adminLoginBtn) adminLoginBtn.classList.remove('hidden');
  if (mobileAdminLogin) mobileAdminLogin.classList.remove('hidden');
  
  // Member search
  const memberSearchInput = document.getElementById('memberSearch');
  if (memberSearchInput) {
    memberSearchInput.addEventListener('input', function() {
      filterMembers(this.value);
    });
  }
  
  // PDF export buttons
  setupPdfExportListeners();
  
  // Set up modals
  setupModals();
  
  // Set up slideshow hover
  setupSlideshowHoverListeners();
  
  // Set up lightbox keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  });
  
  // Admin keyboard shortcut (Ctrl+Shift+A)
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      if (!isAdminMode) {
        document.getElementById('adminLoginModal').classList.remove('hidden');
      } else {
        logout();
      }
    }
  });
  
  // Render sections
  renderHeroManagement();
  renderActivities();
  renderMembers();
  renderDonations();
  renderExpenses();
  renderExperiences();
  renderWeeklyFees();
  renderGallery();
  renderDashboard();
  
  // Start slideshow
  startSlideshow();
}

// Lightbox functions
function openLightbox(imageUrl, index) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  
  if (lightbox && lightboxImage) {
    lightboxImage.src = imageUrl;
    currentLightboxIndex = index;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

function navigateLightbox(direction) {
  const galleryItems = appData.gallery;
  
  if (direction === 'next') {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
  } else {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
  }
  
  const lightboxImage = document.getElementById('lightboxImage');
  if (lightboxImage) {
    lightboxImage.src = galleryItems[currentLightboxIndex].url;
  }
}

// Slideshow functions
function startSlideshow() {
  renderSlides();
  
  if (slideshowInterval) clearInterval(slideshowInterval);
  
  // Only start if we're on home and not paused
  if (isCurrentlyOnHome && !isSlideshowPaused) {
    slideshowInterval = setInterval(function() {
      if (!isSlideshowPaused) {
        nextSlide();
      }
    }, 5000);
  }
}

function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
}

function setupSlideshowHoverListeners() {
  const slideshowContainer = document.querySelector('.hero-slideshow');
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', function() {
      if (isCurrentlyOnHome) {
        isSlideshowPaused = true;
        stopSlideshow();
      }
    });
    
    slideshowContainer.addEventListener('mouseleave', function() {
      if (isCurrentlyOnHome) {
        isSlideshowPaused = false;
        startSlideshow();
      }
    });
  }
}

function renderSlides() {
  const slidesWrapper = document.getElementById('slidesWrapper');
  const indicators = document.getElementById('slideshowIndicators');
  
  if (!slidesWrapper || !indicators) return;
  
  slidesWrapper.innerHTML = '';
  indicators.innerHTML = '';
  
  appData.heroSlides.forEach(function(slide, index) {
    // Create slide
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide' + (index === 0 ? ' active' : '');
    slideDiv.style.backgroundImage = `url(${slide.backgroundImage})`;
    
    const slideContent = document.createElement('div');
    slideContent.className = 'slide-content';
    
    slideContent.innerHTML = `
      <h2>${slide.title}</h2>
      <h3>${slide.subtitle}</h3>
      <p>${slide.description}</p>
    `;
    
    // Add CTA button if provided
    if (slide.ctaText && (slide.ctaLink || slide.redirectUrl)) {
      const ctaButton = document.createElement('button');
      ctaButton.className = 'btn btn--primary';
      ctaButton.textContent = slide.ctaText;
      
      ctaButton.addEventListener('click', function() {
        if (slide.redirectUrl) {
          handleRedirectUrl(slide.redirectUrl, slide.openNewTab);
        } else if (slide.ctaLink) {
          document.querySelector(slide.ctaLink).scrollIntoView({ behavior: 'smooth' });
        }
      });
      
      slideContent.appendChild(ctaButton);
    }
    
    slideDiv.appendChild(slideContent);
    slidesWrapper.appendChild(slideDiv);
    
    // Create indicator
    const indicator = document.createElement('span');
    indicator.className = 'indicator' + (index === 0 ? ' active' : '');
    indicator.addEventListener('click', function() {
      goToSlide(index);
    });
    
    indicators.appendChild(indicator);
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % appData.heroSlides.length;
  goToSlide(currentSlideIndex);
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  // Remove active class from all slides and indicators
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });
  indicators.forEach(function(indicator) {
    indicator.classList.remove('active');
  });
  
  // Add active class to current slide and indicator
  if (slides[index]) slides[index].classList.add('active');
  if (indicators[index]) indicators[index].classList.add('active');
  
  currentSlideIndex = index;
}

// Hero Management
function renderHeroManagement() {
  const grid = document.getElementById('heroSlidesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  appData.heroSlides.forEach(function(slide) {
    const slideCard = document.createElement('div');
    slideCard.className = 'hero-slide-card';
    slideCard.style.backgroundImage = `url(${slide.backgroundImage})`;
    
    slideCard.innerHTML = `
      <div class="hero-slide-content">
        <h4>${slide.title}</h4>
        <p>${slide.subtitle}</p>
        <div class="card-actions">
          <button class="btn btn--sm btn--outline" onclick="editHeroSlide('${slide._id}')">Edit</button>
          <button class="btn btn--sm btn--outline" onclick="deleteHeroSlide('${slide._id}')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>
        </div>
      </div>
    `;
    
    grid.appendChild(slideCard);
  });
}

// Gallery functions
function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const topFiveContainer = document.getElementById('topFiveContainer');
  
  if (!galleryGrid || !topFiveContainer) return;
  
  galleryGrid.innerHTML = '';
  topFiveContainer.innerHTML = '';
  
  // Render top five
  const topFiveItems = appData.gallery.filter(function(item) {
    return item.isTopFive;
  }).sort(function(a, b) {
    return a.order - b.order;
  });
  
  if (topFiveItems.length > 0) {
    const topFiveTitle = document.createElement('h3');
    topFiveTitle.textContent = 'Featured Photos';
    topFiveContainer.appendChild(topFiveTitle);
    
    const topFiveGrid = document.createElement('div');
    topFiveGrid.className = 'top-five-grid';
    topFiveGrid.id = 'topFiveGrid';
    
    topFiveItems.forEach(function(item, index) {
      const photoCard = createGalleryCard(item, index, true);
      topFiveGrid.appendChild(photoCard);
    });
    
    topFiveContainer.appendChild(topFiveGrid);
    
    if (isAdminMode) {
      setupDragAndDrop();
    }
  }
  
  // Group gallery items by album
  const albumGroups = {};
  
  appData.gallery.forEach(function(item, index) {
    if (!albumGroups[item.album]) {
      albumGroups[item.album] = [];
    }
    
    albumGroups[item.album].push({ item, index });
  });
  
  // Render albums
  Object.keys(albumGroups).forEach(function(album) {
    const albumSection = document.createElement('div');
    albumSection.className = 'album-section';
    
    const albumTitle = document.createElement('h3');
    albumTitle.textContent = album;
    albumSection.appendChild(albumTitle);
    
    const albumGrid = document.createElement('div');
    albumGrid.className = 'gallery-grid';
    
    albumGroups[album].forEach(function({ item, index }) {
      const photoCard = createGalleryCard(item, index, false);
      albumGrid.appendChild(photoCard);
    });
    
    albumSection.appendChild(albumGrid);
    galleryGrid.appendChild(albumSection);
  });
}

function createGalleryCard(item, index, isTopFive) {
  const card = document.createElement('div');
  card.className = 'gallery-card';
  card.setAttribute('data-id', item._id);
  
  if (isTopFive) {
    card.setAttribute('draggable', isAdminMode);
    card.setAttribute('data-order', item.order);
  }
  
  const img = document.createElement('img');
  img.src = item.url;
  img.alt = item.title;
  img.addEventListener('click', function() {
    openLightbox(item.url, index);
  });
  
  card.appendChild(img);
  
  const overlay = document.createElement('div');
  overlay.className = 'gallery-overlay';
  
  const title = document.createElement('h4');
  title.textContent = item.title;
  overlay.appendChild(title);
  
  const albumBadge = document.createElement('span');
  albumBadge.className = 'album-badge';
  albumBadge.textContent = item.album;
  overlay.appendChild(albumBadge);
  
  if (item.isTopFive && !isTopFive) {
    const featuredBadge = document.createElement('span');
    featuredBadge.className = 'featured-badge';
    featuredBadge.textContent = 'Featured';
    overlay.appendChild(featuredBadge);
  }
  
  if (isAdminMode) {
    const actionButtons = document.createElement('div');
    actionButtons.className = 'card-actions';
    
    const editButton = document.createElement('button');
    editButton.className = 'btn btn--sm btn--outline';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function(e) {
      e.stopPropagation();
      editGalleryItem(item._id);
    });
    
// Function to edit a gallery item
async function editGalleryItem(photoId) {
  try {
    // Get gallery item from API
    const galleryItem = await api.gallery.getById(photoId);
    
    // Set current editing context
    currentEditingItem = photoId;
    currentEditingType = 'gallery';
    
    // Populate form fields
    const modalTitle = document.getElementById('galleryModalTitle');
    const titleInput = document.getElementById('galleryTitle');
    const urlInput = document.getElementById('galleryUrl');
    const albumInput = document.getElementById('galleryAlbum');
    const modal = document.getElementById('galleryModal');
    
    if (modalTitle) modalTitle.textContent = 'Edit Photo';
    if (titleInput) titleInput.value = galleryItem.title;
    if (urlInput) urlInput.value = galleryItem.url;
    if (albumInput) albumInput.value = galleryItem.album || '';
    if (modal) modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading gallery item for editing:', error);
    showMessage('Failed to load photo details', 'error');
  }
}
    
    const toggleButton = document.createElement('button');
    toggleButton.className = 'btn btn--sm btn--outline';
    toggleButton.textContent = item.isTopFive ? 'Remove from Top 5' : 'Add to Top 5';
    toggleButton.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleTopFive(item._id);
    });
    
// Function to toggle top five status of a gallery item
async function toggleTopFive(photoId) {
  try {
    // Toggle top five status via API
    await api.gallery.toggleTopFive(photoId);
    
    // Reload gallery data
    await loadAllData();
    
    // Re-render gallery
    renderGallery();
    
    // Determine message based on current state after reload
    const photo = appData.gallery.find(function(p) { return p._id === photoId; });
    if (photo && photo.isTopFive) {
      showMessage('Photo added to featured photos');
    } else {
      showMessage('Photo removed from featured photos');
    }
  } catch (error) {
    console.error('Error toggling top five status:', error);
    showMessage('Failed to update featured status', 'error');
  }
}
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn--sm btn--outline';
    deleteButton.textContent = 'Delete';
    deleteButton.style.color = 'var(--club-red)';
    deleteButton.style.borderColor = 'var(--club-red)';
    deleteButton.addEventListener('click', function(e) {
      e.stopPropagation();
      deleteGalleryItem(item._id);
    });
    
// Function to delete a gallery item
async function deleteGalleryItem(photoId) {
  if (confirm('Are you sure you want to delete this photo?')) {
    try {
      // Delete gallery item via API
      await api.gallery.delete(photoId);
      
      // Reload gallery data
      await loadAllData();
      
      // Update UI
      renderGallery();
      
      // Update hero slides if needed
      updateHeroSlides();
      
      showMessage('Photo deleted successfully');
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      showMessage('Failed to delete photo', 'error');
    }
  }
}
    
    actionButtons.appendChild(editButton);
    actionButtons.appendChild(toggleButton);
    actionButtons.appendChild(deleteButton);
    
    overlay.appendChild(actionButtons);
  }
  
  card.appendChild(overlay);
  
  return card;
}

function setupDragAndDrop() {
  const topFiveGrid = document.getElementById('topFiveGrid');
  if (!topFiveGrid) return;
  
  const cards = topFiveGrid.querySelectorAll('.gallery-card');
  
  cards.forEach(function(card) {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragover', handleDragOver);
    card.addEventListener('dragenter', handleDragEnter);
    card.addEventListener('dragleave', handleDragLeave);
    card.addEventListener('drop', handleDrop);
    card.addEventListener('dragend', handleDragEnd);
  });
}

let draggedItem = null;

function handleDragStart(e) {
  draggedItem = this;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  this.classList.add('drag-over');
}

function handleDragLeave(e) {
  this.classList.remove('drag-over');
}

async function handleDrop(e) {
  e.stopPropagation();
  
  if (draggedItem !== this) {
    const sourceId = draggedItem.getAttribute('data-id');
    const targetOrder = parseInt(this.getAttribute('data-order'));
    
    try {
      await api.gallery.updateOrder(sourceId, targetOrder);
      await loadAllData();
      renderGallery();
    } catch (error) {
      console.error('Error updating order:', error);
      showMessage('Failed to update order', 'error');
    }
  }
  
  return false;
}

function handleDragEnd(e) {
  const cards = document.querySelectorAll('.gallery-card');
  cards.forEach(function(card) {
    card.classList.remove('drag-over', 'dragging');
  });
}

// Recent and Upcoming Events
function renderRecentEvents() {
  const grid = document.getElementById('recentEventsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const recentEvents = appData.activities.filter(function(activity) {
    return activity.status === 'recent';
  }).slice(0, 3);
  
  recentEvents.forEach(function(event) {
    const eventCard = createEventCard(event);
    grid.appendChild(eventCard);
  });
}

function renderUpcomingEvents() {
  const grid = document.getElementById('upcomingEventsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const upcomingEvents = appData.activities.filter(function(activity) {
    return activity.status === 'upcoming';
  }).slice(0, 3);
  
  upcomingEvents.forEach(function(event) {
    const eventCard = createEventCard(event);
    grid.appendChild(eventCard);
  });
}

function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  card.innerHTML = `
    <div class="event-image">
      <img src="${event.image}" alt="${event.title}" onerror="this.style.display='none'">
    </div>
    <div class="event-content">
      <h4>${event.title}</h4>
      <div class="event-meta">
        <span>📅 ${formattedDate}</span>
        <span>🕒 ${event.time}</span>
      </div>
      <p>${event.description}</p>
    </div>
  `;
  
  // Add click handler for redirect if URL is provided
  if (event.redirectUrl) {
    card.addEventListener('click', function() {
      handleRedirectUrl(event.redirectUrl, event.openNewTab);
    });
    card.style.cursor = 'pointer';
  }
  
  return card;
}

// Setup admin login/logout
function setupAdminLoginLogout() {
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const mobileAdminLogin = document.getElementById('mobileAdminLogin');
  const mobileAdminLogout = document.getElementById('mobileAdminLogout');
  
  if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', function() {
      document.getElementById('adminLoginModal').classList.remove('hidden');
    });
  }
  
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', function() {
      logout();
    });
  }
  
  if (mobileAdminLogin) {
    mobileAdminLogin.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('adminLoginModal').classList.remove('hidden');
    });
  }
  
  if (mobileAdminLogout) {
    mobileAdminLogout.addEventListener('click', function(e) {
      e.preventDefault();
      logout();
    });
  }
  
  const adminLoginForm = document.getElementById('adminLoginForm');
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const password = document.getElementById('adminPassword').value;
      
      if (password === 'admin123') {
        login();
        document.getElementById('adminLoginModal').classList.add('hidden');
        document.getElementById('adminPassword').value = '';
      } else {
        showMessage('Incorrect password', 'error');
      }
    });
  }
  
  const cancelAdminLoginBtn = document.getElementById('cancelAdminLogin');
  if (cancelAdminLoginBtn) {
    cancelAdminLoginBtn.addEventListener('click', function() {
      document.getElementById('adminLoginModal').classList.add('hidden');
    });
  }
}

// Setup PDF export listeners
function setupPdfExportListeners() {
  const exportAllBtn = document.getElementById('exportAllBtn');
  if (exportAllBtn) {
    exportAllBtn.addEventListener('click', function() {
      exportToPdf('all');
    });
  }
  
  const exportFinancialBtn = document.getElementById('exportFinancialBtn');
  if (exportFinancialBtn) {
    exportFinancialBtn.addEventListener('click', function() {
      exportToPdf('financial');
    });
  }
  
  const exportMembersBtn = document.getElementById('exportMembersBtn');
  if (exportMembersBtn) {
    exportMembersBtn.addEventListener('click', function() {
      exportToPdf('members');
    });
  }
  
  const exportExpensesBtn = document.getElementById('exportExpensesBtn');
  if (exportExpensesBtn) {
    exportExpensesBtn.addEventListener('click', function() {
      exportToPdf('expenses');
    });
  }
}

// Setup modals
function setupModals() {
  // Hero slide modal
  const addHeroSlideBtn = document.getElementById('addHeroSlideBtn');
  const heroSlideModal = document.getElementById('heroSlideModal');
  const cancelHeroSlideBtn = document.getElementById('cancelHeroSlideBtn');
  const heroSlideForm = document.getElementById('heroSlideForm');
  
  if (addHeroSlideBtn) {
    addHeroSlideBtn.addEventListener('click', function() {
      currentEditingItem = null;
      currentEditingType = 'heroSlide';
      const modalTitle = document.getElementById('heroSlideModalTitle');
      if (modalTitle) modalTitle.textContent = 'Add Hero Slide';
      if (heroSlideForm) heroSlideForm.reset();
      if (heroSlideModal) heroSlideModal.classList.remove('hidden');
    });
  }

  if (cancelHeroSlideBtn) {
    cancelHeroSlideBtn.addEventListener('click', function() {
      if (heroSlideModal) heroSlideModal.classList.add('hidden');
    });
  }

  if (heroSlideForm) {
    heroSlideForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveHeroSlide();
      if (heroSlideModal) heroSlideModal.classList.add('hidden');
    });
  }

  // Activity modal
  const addActivityBtn = document.getElementById('addActivityBtn');
  const activityModal = document.getElementById('activityModal');
  const cancelActivityBtn = document.getElementById('cancelActivityBtn');
  const activityForm = document.getElementById('activityForm');

  if (addActivityBtn) {
    addActivityBtn.addEventListener('click', function() {
      currentEditingItem = null;
      currentEditingType = 'activity';
      const modalTitle = document.getElementById('activityModalTitle');
      if (modalTitle) modalTitle.textContent = 'Add Activity';
      if (activityForm) activityForm.reset();
      if (activityModal) activityModal.classList.remove('hidden');
    });
  }

  if (cancelActivityBtn) {
    cancelActivityBtn.addEventListener('click', function() {
      if (activityModal) activityModal.classList.add('hidden');
    });
  }

  if (activityForm) {
    activityForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveActivity();
      if (activityModal) activityModal.classList.add('hidden');
    });
  }

  // Member modal
  const addMemberBtn = document.getElementById('addMemberBtn');
  const memberModal = document.getElementById('memberModal');
  const cancelMemberBtn = document.getElementById('cancelMemberBtn');
  const memberForm = document.getElementById('memberForm');

  if (addMemberBtn) {
    addMemberBtn.addEventListener('click', function() {
      currentEditingItem = null;
      currentEditingType = 'member';
      const modalTitle = document.getElementById('memberModalTitle');
      if (modalTitle) modalTitle.textContent = 'Add Member';
      if (memberForm) memberForm.reset();
      if (memberModal) memberModal.classList.remove('hidden');
    });
  }

  if (cancelMemberBtn) {
    cancelMemberBtn.addEventListener('click', function() {
      if (memberModal) memberModal.classList.add('hidden');
    });
  }

  if (memberForm) {
    memberForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveMember();
      if (memberModal) memberModal.classList.add('hidden');
    });
  }

  // Donation modal
  const addDonationBtn = document.getElementById('addDonationBtn');
  const donationModal = document.getElementById('donationModal');
  const cancelDonationBtn = document.getElementById('cancelDonationBtn');
  const donationForm = document.getElementById('donationForm');

  if (addDonationBtn) {
    addDonationBtn.addEventListener('click', function() {
      currentEditingItem = null;
      currentEditingType = 'donation';
      const modalTitle = document.getElementById('donationModalTitle');
      if (modalTitle) modalTitle.textContent = 'Add Donation';
      if (donationForm) donationForm.reset();
      if (donationModal) donationModal.classList.remove('hidden');
    });
  }

  if (cancelDonationBtn) {
    cancelDonationBtn.addEventListener('click', function() {
      if (donationModal) donationModal.classList.add('hidden');
    });
  }

  if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveDonation();
      if (donationModal) donationModal.classList.add('hidden');
    });
  }

  // Expense modal
  const addExpenseBtn = document.getElementById('addExpenseBtn');
  const expenseModal = document.getElementById('expenseModal');
  const cancelExpenseBtn = document.getElementById('cancelExpenseBtn');
  const expenseForm = document.getElementById('expenseForm');

  if (addExpenseBtn) {
    addExpenseBtn.addEventListener('click', function() {
      currentEditingItem = null;
      currentEditingType = 'expense';
      const modalTitle = document.getElementById('expenseModalTitle');
      if (modalTitle) modalTitle.textContent = 'Add Expense';
      if (expenseForm) expenseForm.reset();
      if (expenseModal) expenseModal.classList.remove('hidden');
    });
  }

  if (cancelExpenseBtn) {
    cancelExpenseBtn.addEventListener('click', function() {
      if (expenseModal) expenseModal.classList.add('hidden');
    });
  }

  if (expenseForm) {
    expenseForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveExpense();
      if (expenseModal) expenseModal.classList.add('hidden');
    });
  }

  // Experience modal
  const addExperienceBtn = document.getElementById('addExperienceBtn');
  const experienceModal = document.getElementById('experienceModal');
  const cancelExperienceBtn = document.getElementById('cancelExperienceBtn');
  const experienceForm = document.getElementById('experienceForm');

  if (addExperienceBtn) {
    addExperienceBtn.addEventListener('click', function() {
      currentEditingItem = null;
      currentEditingType = 'experience';
      const modalTitle = document.getElementById('experienceModalTitle');
      if (modalTitle) modalTitle.textContent = 'Add Experience';
      if (experienceForm) experienceForm.reset();
      if (experienceModal) experienceModal.classList.remove('hidden');
    });
  }

  if (cancelExperienceBtn) {
    cancelExperienceBtn.addEventListener('click', function() {
      if (experienceModal) experienceModal.classList.add('hidden');
    });
  }

  if (experienceForm) {
    experienceForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveExperience();
      if (experienceModal) experienceModal.classList.add('hidden');
    });
  }

  // Gallery modal
  const addGalleryBtn = document.getElementById('addGalleryBtn');
  const galleryModal = document.getElementById('galleryModal');
  const cancelGalleryBtn = document.getElementById('cancelGalleryBtn');
  const galleryForm = document.getElementById('galleryForm');

  if (addGalleryBtn) {
    addGalleryBtn.addEventListener('click', function() {
      currentEditingItem = null;
      currentEditingType = 'gallery';
      const modalTitle = document.getElementById('galleryModalTitle');
      if (modalTitle) modalTitle.textContent = 'Add Photo';
      if (galleryForm) galleryForm.reset();
      if (galleryModal) galleryModal.classList.remove('hidden');
    });
  }

  if (cancelGalleryBtn) {
    cancelGalleryBtn.addEventListener('click', function() {
      if (galleryModal) galleryModal.classList.add('hidden');
    });
  }

  if (galleryForm) {
    galleryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveGalleryItem();
      if (galleryModal) galleryModal.classList.add('hidden');
    });
    
// Function to save a gallery item
async function saveGalleryItem() {
  const title = document.getElementById('galleryTitle').value;
  const url = document.getElementById('galleryUrl').value;
  const album = document.getElementById('galleryAlbum').value || '';

  // Validate URL
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    showMessage('Please enter a valid image URL starting with http:// or https://', 'error');
    return;
  }

  try {
    const galleryData = {
      title: title,
      url: url,
      album: album,
      isTopFive: false,
      order: 0
    };

    if (currentEditingItem) {
      // Update existing gallery item
      // We need to preserve isTopFive and order values
      const existingItem = appData.gallery.find(function(g) { return g._id === currentEditingItem; });
      if (existingItem) {
        galleryData.isTopFive = existingItem.isTopFive;
        galleryData.order = existingItem.order;
      }
      
      await api.gallery.update(currentEditingItem, galleryData);
    } else {
      // Create new gallery item
      await api.gallery.create(galleryData);
    }

    // Reload gallery data
    await loadAllData();
    
    // Update UI
    renderGallery();
    showMessage(currentEditingItem ? 'Photo updated successfully' : 'Photo added successfully');
  } catch (error) {
    console.error('Error saving gallery item:', error);
    showMessage('Failed to save photo', 'error');
  }
}
  }

  // Close modals when clicking outside
  document.querySelectorAll('.modal').forEach(function(modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
}

function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    console.log('Section shown successfully:', sectionId);
    
    // Render charts when dashboard is shown
    if (sectionId === 'dashboard') {
      setTimeout(function() {
        renderCharts();
      }, 100);
    }
  } else {
    console.error('Section not found:', sectionId);
  }
}

function setActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll('.nav-link:not(.mobile-admin-login):not(.mobile-admin-logout)');
  navLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function login() {
  console.log('Logging in as admin...');
  isAdminMode = true;
  document.body.classList.add('admin-mode');
  
  // Re-render components to show admin features
  renderGallery();
  renderHeroManagement();
  renderActivities(); // Re-render to show admin controls
  
  showMessage('Successfully logged in as admin');
  console.log('Admin mode activated');
}

function logout() {
  console.log('Logging out...');
  isAdminMode = false;
  document.body.classList.remove('admin-mode');
  
  // Re-render components to hide admin features
  renderGallery();
  renderHeroManagement();
  renderActivities(); // Re-render to hide admin controls
  
  showMessage('Successfully logged out');
  console.log('Admin mode deactivated');
}

function showMessage(text, type = 'success') {
  const message = document.getElementById('message');
  const messageText = document.getElementById('messageText');
  
  if (messageText) messageText.textContent = text;
  
  if (message) {
    message.className = 'message';
    if (type === 'error') {
      message.classList.add('error');
    }
    message.classList.remove('hidden');
    
    setTimeout(function() {
      message.classList.add('hidden');
    }, 3000);
  }
  
  console.log('Message shown:', text, 'Type:', type);
}

// Dashboard functions
async function renderDashboard() {
  try {
    const dashboardData = await api.dashboard.getStats();
    updateDashboardMetricsFromData(dashboardData);
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    showMessage('Failed to load dashboard data', 'error');
  }
}

function updateDashboardMetricsFromData(data) {
  // Update DOM elements with safe access
  const elements = {
    totalMembersCount: document.getElementById('totalMembersCount'),
    totalActivitiesCount: document.getElementById('totalActivitiesCount'),
    totalDonationsAmount: document.getElementById('totalDonationsAmount'),
    totalExpensesAmount: document.getElementById('totalExpensesAmount'),
    netBalanceAmount: document.getElementById('netBalanceAmount'),
    feesCollectedAmount: document.getElementById('feesCollectedAmount'),
    pendingFeesAmount: document.getElementById('pendingFeesAmount'),
    overdueFeesAmount: document.getElementById('overdueFeesAmount'),
    totalExperiencesCount: document.getElementById('totalExperiencesCount')
  };

  if (elements.totalMembersCount) elements.totalMembersCount.textContent = data.totalMembers;
  if (elements.totalActivitiesCount) elements.totalActivitiesCount.textContent = data.totalActivities;
  if (elements.totalDonationsAmount) elements.totalDonationsAmount.textContent = '₹' + data.totalDonations.toLocaleString();
  if (elements.totalExpensesAmount) elements.totalExpensesAmount.textContent = '₹' + data.totalExpenses.toLocaleString();
  if (elements.netBalanceAmount) elements.netBalanceAmount.textContent = '₹' + data.netBalance.toLocaleString();
  if (elements.feesCollectedAmount) elements.feesCollectedAmount.textContent = '₹' + data.weeklyFeesCollected.toLocaleString();
  if (elements.pendingFeesAmount) elements.pendingFeesAmount.textContent = '₹' + data.pendingFees.toLocaleString();
  if (elements.overdueFeesAmount) elements.overdueFeesAmount.textContent = '₹' + data.overdueFees.toLocaleString();
  if (elements.totalExperiencesCount) elements.totalExperiencesCount.textContent = data.totalExperiences;
}

// Initialize app function
function initializeApp() {
  console.log('Initializing app...');
  
  // Update hero slides to use gallery top 5
  updateHeroSlidesFromGallery();
  
  // Render all content
  renderHeroSlideshow();
  renderHeroManagement();
  renderHomeEvents();
  renderDashboard();
  renderActivities();
  renderMembers();
  renderDonations();
  renderExpenses();
  renderExperiences();
  renderWeeklyFees();
  renderGallery();
  updateTotalDonations();
  updateTotalExpenses();
  renderRecentActivities();
  
  // Show home section by default
  showSection('home');
  startSlideshow();
  
  console.log('App initialized successfully');
}

async function updateHeroSlidesFromGallery() {
  try {
    // Get top five photos from gallery
    const topFivePhotos = appData.gallery
      .filter(function(photo) { return photo.isTopFive; })
      .sort(function(a, b) { return a.order - b.order; })
      .slice(0, 5);
    
    if (topFivePhotos.length >= 5) {
      // Create hero slides data
      const heroSlidesData = topFivePhotos.map(function(photo, index) {
        const titles = [
          "Welcome to Ledo Sports Academy",
          "Championship Excellence",
          "Team Spirit & Unity",
          "Youth Development Program",
          "Community Sports Festival"
        ];
        const subtitles = [
          "Where Champions Are Born",
          "Celebrating Our Victories",
          "Building Strong Teams",
          "Nurturing Future Stars",
          "Building Tomorrow's Athletes"
        ];
        const descriptions = [
          "Join India's premier sports academy and unlock your potential with world-class training facilities and expert coaches.",
          "Our dedication and hard work have led us to numerous victories and championships throughout the years.",
          "Experience the power of teamwork and collaboration as we build stronger athletes and better individuals.",
          "Investing in youth development to create the next generation of sports champions and leaders.",
          "Fostering sports culture and healthy competition with over 500 participants from local schools."
        ];
        const ctaLinks = ["#members", "#experiences", "#activities", "#donations", "#gallery"];
        const ctaTexts = ["Join Today", "Our Journey", "Explore", "Support Us", "View Gallery"];
        
        return {
          id: photo.id,
          title: titles[index] || photo.title,
          subtitle: subtitles[index] || "Excellence in Sports",
          description: descriptions[index] || "Discover the world of sports excellence at Ledo Sports Academy.",
          backgroundImage: photo.url,
          ctaText: ctaTexts[index] || "Learn More",
          ctaLink: ctaLinks[index] || "#activities",
          redirectUrl: "",
          openNewTab: false
        };
      });
      
      // Update hero slides via API
      // First, delete existing hero slides
      const existingSlides = await api.hero.getAll();
      for (const slide of existingSlides) {
        await api.hero.delete(slide.id);
      }
      
      // Then create new hero slides
      for (const slideData of heroSlidesData) {
        await api.hero.create(slideData);
      }
      
      // Reload hero slides data
      appData.heroSlides = await api.hero.getAll();
    }
  } catch (error) {
    console.error('Error updating hero slides from gallery:', error);
    showMessage('Failed to update hero slides. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    const topFivePhotos = appData.gallery
      .filter(function(photo) { return photo.isTopFive; })
      .sort(function(a, b) { return a.order - b.order; })
      .slice(0, 5);
    
    if (topFivePhotos.length >= 5) {
      appData.heroSlides = topFivePhotos.map(function(photo, index) {
        const titles = [
          "Welcome to Ledo Sports Academy",
          "Championship Excellence",
          "Team Spirit & Unity",
          "Youth Development Program",
          "Community Sports Festival"
        ];
        const subtitles = [
          "Where Champions Are Born",
          "Celebrating Our Victories",
          "Building Strong Teams",
          "Nurturing Future Stars",
          "Building Tomorrow's Athletes"
        ];
        const descriptions = [
          "Join India's premier sports academy and unlock your potential with world-class training facilities and expert coaches.",
          "Our dedication and hard work have led us to numerous victories and championships throughout the years.",
          "Experience the power of teamwork and collaboration as we build stronger athletes and better individuals.",
          "Investing in youth development to create the next generation of sports champions and leaders.",
          "Fostering sports culture and healthy competition with over 500 participants from local schools."
        ];
        const ctaLinks = ["#members", "#experiences", "#activities", "#donations", "#gallery"];
        const ctaTexts = ["Join Today", "Our Journey", "Explore", "Support Us", "View Gallery"];
        
        return {
          id: photo.id,
          title: titles[index] || photo.title,
          subtitle: subtitles[index] || "Excellence in Sports",
          description: descriptions[index] || "Discover the world of sports excellence at Ledo Sports Academy.",
          backgroundImage: photo.url,
          ctaText: ctaTexts[index] || "Learn More",
          ctaLink: ctaLinks[index] || "#activities",
          redirectUrl: "",
          openNewTab: false
        };
      });
    }
  }
}

// Home Events Functions
function renderHomeEvents() {
  renderRecentEvents();
  renderUpcomingEvents();
}

function renderRecentEvents() {
  const grid = document.getElementById('recentEventsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const recentEvents = appData.activities
    .filter(function(activity) { return activity.status === 'recent'; })
    .slice(0, 3);
  
  recentEvents.forEach(function(event) {
    const eventCard = createEventCard(event);
    grid.appendChild(eventCard);
  });
}

function renderUpcomingEvents() {
  const grid = document.getElementById('upcomingEventsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const upcomingEvents = appData.activities
    .filter(function(activity) { return activity.status === 'upcoming'; })
    .slice(0, 3);
  
  upcomingEvents.forEach(function(event) {
    const eventCard = createEventCard(event);
    grid.appendChild(eventCard);
  });
}

function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const hasRedirect = event.redirectUrl && event.redirectUrl.trim();

  card.innerHTML = 
    '<img src="' + event.image + '" alt="' + event.title + '" class="event-image" onerror="this.style.display=\'none\'">' +
    '<h4 class="event-title">' + event.title + '</h4>' +
    '<div class="event-meta">' +
      '<span>📅 ' + formattedDate + '</span>' +
      '<span>🕐 ' + event.time + '</span>' +
    '</div>' +
    '<p class="event-description">' + event.description + '</p>' +
    (hasRedirect ? '<div class="redirect-indicator">🔗 Custom Link</div>' : '');

  // Add click event for redirect functionality
  card.addEventListener('click', function(e) {
    // Don't handle clicks on buttons or other interactive elements
    if (!e.target.matches('button') && !e.target.closest('button')) {
      if (hasRedirect) {
        handleRedirectUrl(event.redirectUrl, '#activities', event.openNewTab);
      }
    }
  });

  return card;
}

async function renderCharts() {
  try {
    const financialData = await api.dashboard.getFinancialOverview();
    renderFinancialChart(financialData);
    renderExpenseChart(financialData);
  } catch (error) {
    console.error('Error loading financial data for charts:', error);
    showMessage('Failed to load financial data for charts', 'error');
  }
}

function renderFinancialChart(data) {
  const ctx = document.getElementById('financialChart');
  if (!ctx) return;

  if (financialChart) {
    financialChart.destroy();
  }

  // Prepare data for chart
  const months = [];
  const donationData = [];
  const expenseData = [];

  // Process donations by month
  data.donationsByMonth.forEach(item => {
    const monthName = new Date(2023, item._id - 1, 1).toLocaleString('default', { month: 'short' });
    months.push(monthName);
    donationData.push(item.total);
  });

  // Process expenses by month
  data.expensesByMonth.forEach(item => {
    const monthIndex = months.indexOf(new Date(2023, item._id - 1, 1).toLocaleString('default', { month: 'short' }));
    if (monthIndex !== -1) {
      expenseData[monthIndex] = item.total;
    } else {
      months.push(new Date(2023, item._id - 1, 1).toLocaleString('default', { month: 'short' }));
      expenseData.push(item.total);
      donationData.push(0);
    }
  });

  // Sort months chronologically
  const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const sortedIndices = months.map((month, index) => ({ month, index })).sort((a, b) => {
    return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
  });

  const sortedMonths = sortedIndices.map(item => months[item.index]);
  const sortedDonations = sortedIndices.map(item => donationData[item.index] || 0);
  const sortedExpenses = sortedIndices.map(item => expenseData[item.index] || 0);

  financialChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedMonths,
      datasets: [
        {
          label: 'Donations',
          data: sortedDonations,
          backgroundColor: '#1FB8CD',
          borderColor: '#1FB8CD',
          borderWidth: 1
        },
        {
          label: 'Expenses',
          data: sortedExpenses,
          backgroundColor: '#B4413C',
          borderColor: '#B4413C',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '₹' + value.toLocaleString();
            }
          }
        }
      }
    }
  });
}

function renderExpenseChart(data) {
  const ctx = document.getElementById('expenseChart');
  if (!ctx) return;

  if (expenseChart) {
    expenseChart.destroy();
  }

  // Prepare data for chart
  const categories = data.expensesByCategory.map(item => item._id);
  const amounts = data.expensesByCategory.map(item => item.total);

  expenseChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: categories,
      datasets: [{
        data: amounts,
        backgroundColor: [
          '#1FB8CD',
          '#B4413C',
          '#FFC185',
          '#8A6FDF',
          '#50C878',
          '#FF7F50'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.raw || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: ₹${value.toLocaleString()} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// CRUD operations for Hero Slides
async function saveHeroSlide() {
  const title = document.getElementById('heroSlideTitle').value;
  const subtitle = document.getElementById('heroSlideSubtitle').value;
  const description = document.getElementById('heroSlideDescription').value;
  const backgroundImage = document.getElementById('heroSlideBackgroundImage').value;
  const ctaText = document.getElementById('heroSlideCtaText').value;
  const ctaLink = document.getElementById('heroSlideCtaLink').value;
  const redirectUrl = document.getElementById('heroSlideRedirectUrl').value;
  const openNewTab = document.getElementById('heroSlideOpenNewTab').checked;

  // Validate URLs
  if (redirectUrl && !isValidUrl(redirectUrl)) {
    showMessage('Please enter a valid redirect URL starting with http:// or https://', 'error');
    return;
  }

  if (!isValidUrl(backgroundImage)) {
    showMessage('Please enter a valid background image URL starting with http:// or https://', 'error');
    return;
  }

  const slideData = { 
    title, 
    subtitle, 
    description, 
    backgroundImage, 
    ctaText, 
    ctaLink, 
    redirectUrl, 
    openNewTab 
  };

  try {
    if (currentEditingItem) {
      await api.hero.update(currentEditingItem, slideData);
      showMessage('Hero slide updated successfully');
    } else {
      await api.hero.create(slideData);
      showMessage('Hero slide created successfully');
    }
    
    // Reload data and update UI
    await loadAllData();
    renderHeroManagement();
    updateHeroSlides();
  } catch (error) {
    console.error('Error saving hero slide:', error);
    showMessage('Failed to save hero slide', 'error');
  }
}

async function editHeroSlide(id) {
  try {
    const slide = await api.hero.getById(id);
    
    currentEditingItem = id;
    currentEditingType = 'heroSlide';
    
    document.getElementById('heroSlideModalTitle').textContent = 'Edit Hero Slide';
    document.getElementById('heroSlideTitle').value = slide.title;
    document.getElementById('heroSlideSubtitle').value = slide.subtitle;
    document.getElementById('heroSlideDescription').value = slide.description;
    document.getElementById('heroSlideBackgroundImage').value = slide.backgroundImage;
    document.getElementById('heroSlideCtaText').value = slide.ctaText || '';
    document.getElementById('heroSlideCtaLink').value = slide.ctaLink || '';
    document.getElementById('heroSlideRedirectUrl').value = slide.redirectUrl || '';
    document.getElementById('heroSlideOpenNewTab').checked = slide.openNewTab || false;
    
    document.getElementById('heroSlideModal').classList.remove('hidden');
  } catch (error) {
    console.error('Error loading hero slide for editing:', error);
    showMessage('Failed to load hero slide data', 'error');
  }
}

async function deleteHeroSlide(id) {
  if (confirm('Are you sure you want to delete this hero slide?')) {
    try {
      await api.hero.delete(id);
      showMessage('Hero slide deleted successfully');
      
      // Reload data and update UI
      await loadAllData();
      renderHeroManagement();
      updateHeroSlides();
    } catch (error) {
      console.error('Error deleting hero slide:', error);
      showMessage('Failed to delete hero slide', 'error');
    }
  }
}

function updateHeroSlides() {
  renderSlides();
}

// Hero Slideshow Function
function renderHeroSlideshow() {
  const slidesWrapper = document.getElementById('slidesWrapper');
  const indicatorsContainer = document.getElementById('slideshowIndicators');
  
  if (!slidesWrapper || !indicatorsContainer) return;
  
  slidesWrapper.innerHTML = '';
  indicatorsContainer.innerHTML = '';
  
  appData.heroSlides.forEach(function(slide, index) {
    // Create slide
    const slideElement = document.createElement('div');
    slideElement.className = index === 0 ? 'slide active' : 'slide';
    slideElement.style.backgroundImage = 'url("' + slide.backgroundImage + '")';
    
    slideElement.innerHTML = 
      '<div class="slide-overlay">' +
        '<div class="slide-content">' +
          '<h1 class="slide-title">' + slide.title + '</h1>' +
          '<h2 class="slide-subtitle">' + slide.subtitle + '</h2>' +
          '<p class="slide-description">' + slide.description + '</p>' +
          '<button class="slide-cta" data-cta-link="' + slide.ctaLink + '" data-redirect-url="' + (slide.redirectUrl || '') + '" data-open-new-tab="' + (slide.openNewTab ? 'true' : 'false') + '">' + slide.ctaText + '</button>' +
        '</div>' +
      '</div>';
    
    slidesWrapper.appendChild(slideElement);
    
    // Add event listener to CTA button
    const ctaButton = slideElement.querySelector('.slide-cta');
    if (ctaButton) {
      ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const defaultUrl = this.getAttribute('data-cta-link');
        const redirectUrl = this.getAttribute('data-redirect-url');
        const openNewTab = this.getAttribute('data-open-new-tab') === 'true';
        handleRedirectUrl(redirectUrl, defaultUrl, openNewTab);
      });
    }
    
    // Create indicator with proper event handling
    const indicator = document.createElement('div');
    indicator.className = index === 0 ? 'indicator active' : 'indicator';
    indicator.setAttribute('data-slide-index', index);
    indicator.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide-index'));
      goToSlide(slideIndex);
    });
    
    indicatorsContainer.appendChild(indicator);
  });
}

// Activities rendering function
function renderActivities() {
  const grid = document.getElementById('activitiesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';

  appData.activities.forEach(function(activity) {
    const activityCard = createActivityCard(activity);
    grid.appendChild(activityCard);
  });
}

function createActivityCard(activity) {
  const card = document.createElement('div');
  card.className = 'activity-card';
  
  const formattedDate = new Date(activity.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const hasRedirect = activity.redirectUrl && activity.redirectUrl.trim();

  card.innerHTML = 
    '<img src="' + activity.image + '" alt="' + activity.title + '" class="activity-image" onerror="this.style.display=\'none\'">' +
    '<h4 class="activity-title">' + activity.title + '</h4>' +
    '<div class="activity-meta">' +
      '<span>📅 ' + formattedDate + '</span>' +
      '<span>🕐 ' + activity.time + '</span>' +
    '</div>' +
    '<p class="activity-description">' + activity.description + '</p>' +
    (hasRedirect ? '<div class="redirect-indicator">🔗 Custom Link</div>' : '') +
    '<div class="card-actions">' +
      '<button class="btn btn--sm btn--outline" onclick="editActivity(' + activity.id + ')">Edit</button>' +
      '<button class="btn btn--sm btn--outline" onclick="deleteActivity(' + activity.id + ')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
    '</div>';

  // Add click event for redirect functionality
  card.addEventListener('click', function(e) {
    // Don't handle clicks on buttons or other interactive elements
    if (!e.target.matches('button') && !e.target.closest('button')) {
      if (hasRedirect) {
        handleRedirectUrl(activity.redirectUrl, '#activities', activity.openNewTab);
      }
    }
  });

  return card;
}

// Members filtering function
function filterMembers(searchTerm) {
  const cards = document.querySelectorAll('.member-card');
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  cards.forEach(function(card) {
    if (normalizedSearch === '') {
      card.style.display = 'block';
    } else {
      const name = card.getAttribute('data-member-name') || '';
      const role = card.getAttribute('data-member-role') || '';
      const isMatch = name.includes(normalizedSearch) || role.includes(normalizedSearch);
      card.style.display = isMatch ? 'block' : 'none';
    }
  });
}

// Save member function
async function saveMember() {
  const name = document.getElementById('memberName').value;
  const contact = document.getElementById('memberContact').value;
  const phone = document.getElementById('memberPhone').value;
  const role = document.getElementById('memberRole').value;
  const joinDate = document.getElementById('memberJoinDate').value;
  const image = document.getElementById('memberImage').value || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';

  try {
    const memberData = {
      name: name,
      contact: contact,
      phone: phone,
      role: role,
      joinDate: joinDate,
      image: image
    };

    if (currentEditingItem) {
      // Update existing member
      await api.member.update(currentEditingItem, memberData);
      
      // Update weekly fees member name
      const weeklyFees = await api.weeklyFee.getByMember(currentEditingItem);
      if (weeklyFees && weeklyFees.length > 0) {
        for (const fee of weeklyFees) {
          fee.memberName = name;
          await api.weeklyFee.update(fee._id, fee);
        }
      }
    } else {
      // Create new member
      const newMember = await api.member.create(memberData);
      
      // Add weekly fee record for new member
      await api.weeklyFee.create({
        memberId: newMember._id, // Use _id instead of id for MongoDB ObjectId
        memberName: name,
        payments: [
          { date: new Date("2025-08-03"), amount: 20, status: "pending" }
        ]
      });
    }

    // Reload data
    appData.members = await api.member.getAll();
    appData.weeklyFees = await api.weeklyFee.getAll();
    
    // Update UI
    renderMembers();
    renderWeeklyFees();
    updateDashboardMetrics();
    showMessage(currentEditingItem ? 'Member updated successfully' : 'Member added successfully');
    return;
  } catch (error) {
    console.error('Error saving member:', error);
    showMessage('Failed to save member. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    if (currentEditingItem) {
      const index = appData.members.findIndex(function(m) { return m.id === currentEditingItem; });
      if (index !== -1) {
        appData.members[index] = Object.assign({}, appData.members[index], { name: name, contact: contact, phone: phone, role: role, joinDate: joinDate, image: image });
      }
      
      // Update weekly fees member name
      const feeIndex = appData.weeklyFees.findIndex(function(f) { return f.memberId === currentEditingItem; });
      if (feeIndex !== -1) {
        appData.weeklyFees[feeIndex].memberName = name;
      }
    } else {
      const newId = Math.max.apply(Math, appData.members.map(function(m) { return m.id; }).concat([0])) + 1;
      appData.members.push({ id: newId, name: name, contact: contact, phone: phone, role: role, joinDate: joinDate, image: image });
      
      // Add weekly fee record for new member
      appData.weeklyFees.push({
        memberId: newId, // In local data, we use the local ID
        memberName: name,
        payments: [
          { date: new Date("2025-08-03"), amount: 20, status: "pending" }
        ]
      });
    }
    
    renderMembers();
    renderWeeklyFees();
    updateDashboardMetrics();
  }
}

function renderMembers() {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appData.members.forEach(function(member) {
    const memberCard = createMemberCard(member);
    grid.appendChild(memberCard);
  });
}

function renderDonations() {
  const grid = document.getElementById('donationsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appData.donations.forEach(function(donation) {
    const donationCard = createDonationCard(donation);
    grid.appendChild(donationCard);
  });
}

function createDonationCard(donation) {
  const card = document.createElement('div');
  card.className = 'donation-card';
  
  const formattedDate = new Date(donation.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  card.innerHTML = 
    '<div class="donation-header">' +
      '<div class="donor-name">' + donation.donorName + '</div>' +
      '<div class="donation-amount">₹' + donation.amount.toLocaleString() + '</div>' +
    '</div>' +
    '<div class="donation-meta">' +
      '<span>📅 ' + formattedDate + '</span>' +
    '</div>' +
    '<div class="donation-purpose">' + donation.purpose + '</div>' +
    '<div class="card-actions">' +
      '<button class="btn btn--sm btn--outline" onclick="editDonation(' + donation.id + ')">Edit</button>' +
      '<button class="btn btn--sm btn--outline" onclick="deleteDonation(' + donation.id + ')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
    '</div>';

  return card;
}

function renderWeeklyFees() {
  const grid = document.getElementById('weeklyFeesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appData.weeklyFees.forEach(function(feeRecord) {
    const feeCard = createFeeCard(feeRecord);
    grid.appendChild(feeCard);
  });
}

function createFeeCard(feeRecord) {
  const card = document.createElement('div');
  card.className = 'fee-card';
  
  const paidCount = feeRecord.payments.filter(function(p) { return p.status === 'paid'; }).length;
  const totalCount = feeRecord.payments.length;
  const paidAmount = paidCount * 20;

  const paymentsHTML = feeRecord.payments.map(function(payment) {
    const dateStr = new Date(payment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const cursor = isAdminMode ? 'pointer' : 'default';
    return '<div class="payment-item ' + payment.status + '">' +
      '<span>' + dateStr + '</span>' +
      '<span class="status-badge ' + payment.status + '" onclick="togglePaymentStatus(' + feeRecord.memberId + ', \'' + payment.date + '\')" style="cursor: ' + cursor + ';">' +
        payment.status +
      '</span>' +
    '</div>';
  }).join('');

  card.innerHTML = 
    '<div class="fee-header">' +
      '<div class="member-name">' + feeRecord.memberName + '</div>' +
      '<div class="payment-summary">' + paidCount + '/' + totalCount + ' payments (₹' + paidAmount + ')</div>' +
    '</div>' +
    '<div class="payment-history">' +
      paymentsHTML +
    '</div>';

  return card;
}

function updateTotalDonations() {
  const total = appData.donations.reduce(function(sum, donation) { return sum + donation.amount; }, 0);
  const totalElement = document.getElementById('totalDonations');
  if (totalElement) {
    totalElement.textContent = '₹' + total.toLocaleString();
  }
}

async function togglePaymentStatus(memberId, paymentDate) {
  if (!isAdminMode) return;
  
  try {
    // Find the fee record and payment locally first to determine the next status
    const feeRecord = appData.weeklyFees.find(function(f) { return f.memberId === memberId; });
    if (!feeRecord) {
      showMessage('Fee record not found', 'error');
      return;
    }
    
    const payment = feeRecord.payments.find(function(p) { return p.date === paymentDate; });
    if (!payment) {
      showMessage('Payment not found', 'error');
      return;
    }
    
    // Determine the next status
    let newStatus;
    if (payment.status === 'pending') {
      newStatus = 'paid';
    } else if (payment.status === 'paid') {
      newStatus = 'overdue';
    } else {
      newStatus = 'pending';
    }
    
    // Update payment status via API
    await api.weeklyFee.updatePaymentStatus(feeRecord.id, paymentDate, newStatus);
    
    // Reload weekly fees data
    appData.weeklyFees = await api.weeklyFee.getAll();
    
    // Update UI
    renderWeeklyFees();
    updateDashboardMetrics();
    showMessage('Payment status updated to ' + newStatus);
  } catch (error) {
    console.error('Error updating payment status:', error);
    showMessage('Failed to update payment status. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    const feeRecord = appData.weeklyFees.find(function(f) { return f.memberId === memberId; });
    if (!feeRecord) return;
    
    const payment = feeRecord.payments.find(function(p) { return p.date === paymentDate; });
    if (!payment) return;
    
    // Cycle through statuses: pending -> paid -> overdue -> pending
    if (payment.status === 'pending') {
      payment.status = 'paid';
    } else if (payment.status === 'paid') {
      payment.status = 'overdue';
    } else {
      payment.status = 'pending';
    }
    
    renderWeeklyFees();
    updateDashboardMetrics();
  }
}

function updateDashboardMetrics() {
  // Calculate metrics
  const totalMembers = appData.members.length;
  const totalActivities = appData.activities.length;
  const totalDonations = appData.donations.reduce(function(sum, d) { return sum + d.amount; }, 0);
  const totalExpenses = appData.expenses.reduce(function(sum, e) { return sum + e.amount; }, 0);
  const netBalance = totalDonations - totalExpenses;
  
  // Calculate fee metrics
  let feesCollected = 0;
  let pendingFees = 0;
  let overdueFees = 0;
  
  appData.weeklyFees.forEach(function(member) {
    member.payments.forEach(function(payment) {
      if (payment.status === 'paid') {
        feesCollected += payment.amount;
      } else if (payment.status === 'pending') {
        pendingFees += payment.amount;
      } else if (payment.status === 'overdue') {
        overdueFees += payment.amount;
      }
    });
  });

  // Update DOM elements with safe access
  const elements = {
    totalMembersCount: document.getElementById('totalMembersCount'),
    totalActivitiesCount: document.getElementById('totalActivitiesCount'),
    totalDonationsAmount: document.getElementById('totalDonationsAmount'),
    totalExpensesAmount: document.getElementById('totalExpensesAmount'),
    netBalanceAmount: document.getElementById('netBalanceAmount'),
    feesCollectedAmount: document.getElementById('feesCollectedAmount')
  };

  if (elements.totalMembersCount) elements.totalMembersCount.textContent = totalMembers;
  if (elements.totalActivitiesCount) elements.totalActivitiesCount.textContent = totalActivities;
  if (elements.totalDonationsAmount) elements.totalDonationsAmount.textContent = '₹' + totalDonations.toLocaleString();
  if (elements.totalExpensesAmount) elements.totalExpensesAmount.textContent = '₹' + totalExpenses.toLocaleString();
  if (elements.netBalanceAmount) elements.netBalanceAmount.textContent = '₹' + netBalance.toLocaleString();
  if (elements.feesCollectedAmount) elements.feesCollectedAmount.textContent = '₹' + feesCollected.toLocaleString();
}

// Dashboard functions
async function renderDashboard() {
  try {
    const dashboardData = await api.dashboard.getStats();
    updateDashboardMetricsFromData(dashboardData);
  } catch (error) {
    console.error('Error loading dashboard data:', error);
    showMessage('Failed to load dashboard data', 'error');
    
    // Fallback to local calculation
    updateDashboardMetrics();
  }
}

function updateDashboardMetricsFromData(data) {
  // Update DOM elements with safe access
  const elements = {
    totalMembersCount: document.getElementById('totalMembersCount'),
    totalActivitiesCount: document.getElementById('totalActivitiesCount'),
    totalDonationsAmount: document.getElementById('totalDonationsAmount'),
    totalExpensesAmount: document.getElementById('totalExpensesAmount'),
    netBalanceAmount: document.getElementById('netBalanceAmount'),
    feesCollectedAmount: document.getElementById('feesCollectedAmount'),
    pendingFeesAmount: document.getElementById('pendingFeesAmount'),
    overdueFeesAmount: document.getElementById('overdueFeesAmount'),
    totalExperiencesCount: document.getElementById('totalExperiencesCount')
  };

  if (elements.totalMembersCount) elements.totalMembersCount.textContent = data.totalMembers;
  if (elements.totalActivitiesCount) elements.totalActivitiesCount.textContent = data.totalActivities;
  if (elements.totalDonationsAmount) elements.totalDonationsAmount.textContent = '₹' + data.totalDonations.toLocaleString();
  if (elements.totalExpensesAmount) elements.totalExpensesAmount.textContent = '₹' + data.totalExpenses.toLocaleString();
  if (elements.netBalanceAmount) elements.netBalanceAmount.textContent = '₹' + data.netBalance.toLocaleString();
  if (elements.feesCollectedAmount) elements.feesCollectedAmount.textContent = '₹' + data.weeklyFeesCollected.toLocaleString();
  if (elements.pendingFeesAmount) elements.pendingFeesAmount.textContent = '₹' + data.pendingFees.toLocaleString();
  if (elements.overdueFeesAmount) elements.overdueFeesAmount.textContent = '₹' + data.overdueFees.toLocaleString();
  if (elements.totalExperiencesCount) elements.totalExperiencesCount.textContent = data.totalExperiences;
}

function createMemberCard(member) {
  const card = document.createElement('div');
  card.className = 'member-card';
  card.setAttribute('data-member-name', member.name.toLowerCase());
  card.setAttribute('data-member-role', member.role.toLowerCase());
  
  const formattedDate = new Date(member.joinDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  card.innerHTML = 
    '<img src="' + member.image + '" alt="' + member.name + '" class="member-image" onerror="this.style.display=\'none\'">' +
    '<h4 class="member-name">' + member.name + '</h4>' +
    '<div class="member-role">' + member.role + '</div>' +
    '<div class="member-info">' +
      '<div>📧 ' + member.contact + '</div>' +
      '<div>📞 ' + member.phone + '</div>' +
      '<div>📅 Joined: ' + formattedDate + '</div>' +
    '</div>' +
    '<div class="card-actions">' +
      '<button class="btn btn--sm btn--outline" onclick="editMember(' + member.id + ')">Edit</button>' +
      '<button class="btn btn--sm btn--outline" onclick="deleteMember(' + member.id + ')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
    '</div>';

  return card;
}

async function editMember(id) {
  try {
    // Try to get member from API
    const member = await api.member.getById(id);
    if (!member) {
      showMessage('Member not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'member';
    
    const elements = {
      modalTitle: document.getElementById('memberModalTitle'),
      name: document.getElementById('memberName'),
      contact: document.getElementById('memberContact'),
      phone: document.getElementById('memberPhone'),
      role: document.getElementById('memberRole'),
      joinDate: document.getElementById('memberJoinDate'),
      image: document.getElementById('memberImage'),
      modal: document.getElementById('memberModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Member';
    if (elements.name) elements.name.value = member.name;
    if (elements.contact) elements.contact.value = member.contact;
    if (elements.phone) elements.phone.value = member.phone;
    if (elements.role) elements.role.value = member.role;
    if (elements.joinDate) elements.joinDate.value = member.joinDate;
    if (elements.image) elements.image.value = member.image;
    if (elements.modal) elements.modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading member for editing:', error);
    
    // Fallback to local data if API fails
    const member = appData.members.find(function(m) { return m.id === id; });
    if (!member) {
      showMessage('Member not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'member';
    
    const elements = {
      modalTitle: document.getElementById('memberModalTitle'),
      name: document.getElementById('memberName'),
      contact: document.getElementById('memberContact'),
      phone: document.getElementById('memberPhone'),
      role: document.getElementById('memberRole'),
      joinDate: document.getElementById('memberJoinDate'),
      image: document.getElementById('memberImage'),
      modal: document.getElementById('memberModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Member';
    if (elements.name) elements.name.value = member.name;
    if (elements.contact) elements.contact.value = member.contact;
    if (elements.phone) elements.phone.value = member.phone;
    if (elements.role) elements.role.value = member.role;
    if (elements.joinDate) elements.joinDate.value = member.joinDate;
    if (elements.image) elements.image.value = member.image;
    if (elements.modal) elements.modal.classList.remove('hidden');
  }
}

async function deleteMember(id) {
  if (confirm('Are you sure you want to delete this member?')) {
    try {
      // Try to delete member via API
      await api.member.delete(id);
      
      // The backend should handle deleting related weekly fees, but we'll reload all data
      appData.members = await api.member.getAll();
      appData.weeklyFees = await api.weeklyFee.getAll();
      
      // Update UI
      renderMembers();
      renderWeeklyFees();
      updateDashboardMetrics();
      showMessage('Member deleted successfully');
    } catch (error) {
      console.error('Error deleting member:', error);
      showMessage('Failed to delete member. Using local data instead.', 'error');
      
      // Fallback to local data if API fails
      appData.members = appData.members.filter(function(m) { return m.id !== id; });
      appData.weeklyFees = appData.weeklyFees.filter(function(f) { return f.memberId !== id; });
      renderMembers();
      renderWeeklyFees();
      updateDashboardMetrics();
    }
  }
}

async function editDonation(id) {
  try {
    // Try to get donation from API
    const donation = await api.donation.getById(id);
    if (!donation) {
      showMessage('Donation not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'donation';
    
    const elements = {
      modalTitle: document.getElementById('donationModalTitle'),
      donorName: document.getElementById('donorName'),
      amount: document.getElementById('donationAmount'),
      date: document.getElementById('donationDate'),
      purpose: document.getElementById('donationPurpose'),
      modal: document.getElementById('donationModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Donation';
    if (elements.donorName) elements.donorName.value = donation.donorName;
    if (elements.amount) elements.amount.value = donation.amount;
    if (elements.date) elements.date.value = donation.date;
    if (elements.purpose) elements.purpose.value = donation.purpose;
    if (elements.modal) elements.modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading donation for editing:', error);
    
    // Fallback to local data if API fails
    const donation = appData.donations.find(function(d) { return d.id === id; });
    if (!donation) {
      showMessage('Donation not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'donation';
    
    const elements = {
      modalTitle: document.getElementById('donationModalTitle'),
      donorName: document.getElementById('donorName'),
      amount: document.getElementById('donationAmount'),
      date: document.getElementById('donationDate'),
      purpose: document.getElementById('donationPurpose'),
      modal: document.getElementById('donationModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Donation';
    if (elements.donorName) elements.donorName.value = donation.donorName;
    if (elements.amount) elements.amount.value = donation.amount;
    if (elements.date) elements.date.value = donation.date;
    if (elements.purpose) elements.purpose.value = donation.purpose;
    if (elements.modal) elements.modal.classList.remove('hidden');
  }
}

async function saveDonation() {
  const donorName = document.getElementById('donorName').value;
  const amount = parseInt(document.getElementById('donationAmount').value);
  const date = document.getElementById('donationDate').value;
  const purpose = document.getElementById('donationPurpose').value;

  try {
    const donationData = {
      donorName: donorName,
      amount: amount,
      date: date,
      purpose: purpose
    };

    if (currentEditingItem) {
      // Update existing donation
      await api.donation.update(currentEditingItem, donationData);
    } else {
      // Create new donation
      await api.donation.create(donationData);
    }

    // Reload donations data
    appData.donations = await api.donation.getAll();
    
    // Update UI
    renderDonations();
    updateTotalDonations();
    updateDashboardMetrics();
    renderCharts();
    showMessage(currentEditingItem ? 'Donation updated successfully' : 'Donation added successfully');
    return;
  } catch (error) {
    console.error('Error saving donation:', error);
    showMessage('Failed to save donation. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    if (currentEditingItem) {
      const index = appData.donations.findIndex(function(d) { return d.id === currentEditingItem; });
      if (index !== -1) {
        appData.donations[index] = Object.assign({}, appData.donations[index], { donorName: donorName, amount: amount, date: date, purpose: purpose });
      }
    } else {
      const newId = Math.max.apply(Math, appData.donations.map(function(d) { return d.id; }).concat([0])) + 1;
      appData.donations.push({ id: newId, donorName: donorName, amount: amount, date: date, purpose: purpose });
    }

    renderDonations();
    updateTotalDonations();
    updateDashboardMetrics();
    renderCharts();
  }
}

async function deleteDonation(id) {
  if (confirm('Are you sure you want to delete this donation?')) {
    try {
      // Try to delete donation via API
      await api.donation.delete(id);
      
      // Reload donations data
      appData.donations = await api.donation.getAll();
      
      // Update UI
      renderDonations();
      updateTotalDonations();
      updateDashboardMetrics();
      renderCharts();
      showMessage('Donation deleted successfully');
    } catch (error) {
      console.error('Error deleting donation:', error);
      showMessage('Failed to delete donation. Using local data instead.', 'error');
      
      // Fallback to local data if API fails
      appData.donations = appData.donations.filter(function(d) { return d.id !== id; });
      renderDonations();
      updateTotalDonations();
      updateDashboardMetrics();
      renderCharts();
    }
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  setupAdminLoginLogout();
});