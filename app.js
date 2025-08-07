// Application Data - Ledo Sports Academy with API Integration
let appData = {
  // This data will be replaced with API data when the application loads
  heroSlides: [
    {
      id: 1,
      title: "Welcome to Ledo Sports Academy",
      subtitle: "Where Champions Are Born",
      description: "Join India's premier sports academy and unlock your potential with world-class training facilities and expert coaches.",
      backgroundImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop",
      ctaText: "Join Today",
      ctaLink: "#members",
      redirectUrl: "https://forms.google.com/register",
      openNewTab: true
    },
    {
      id: 2,
      title: "Championship Victory 2024",
      subtitle: "Making History Together",
      description: "Celebrating our regional championship win with exceptional team performance and dedication.",
      backgroundImage: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=1200&h=800&fit=crop",
      ctaText: "Our Journey",
      ctaLink: "#experiences",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 3,
      title: "State-of-the-Art Facilities",
      subtitle: "Training Excellence",
      description: "Experience training like never before with our modern facilities, synthetic turf, and advanced equipment.",
      backgroundImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
      ctaText: "Explore",
      ctaLink: "#activities",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 4,
      title: "Community Sports Festival",
      subtitle: "Building Tomorrow's Athletes",
      description: "Fostering sports culture and healthy competition with over 500 participants from local schools.",
      backgroundImage: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&h=800&fit=crop",
      ctaText: "Support Us",
      ctaLink: "#donations",
      redirectUrl: "https://donate.example.com/ledo-academy",
      openNewTab: true
    }
  ],
  activities: [
    {
      id: 1,
      title: "Championship League Match vs Eagles FC",
      date: "2025-08-12",
      time: "16:00",
      description: "Ledo Sports Academy vs Eagles FC - Championship League Quarter Final match at home ground.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "match",
      priority: "high",
      redirectUrl: "https://tickets.example.com/eagles-match",
      openNewTab: true
    },
    {
      id: 2,
      title: "Annual Sports Day Celebration",
      date: "2025-08-18",
      time: "09:00",
      description: "Join us for our annual sports day with competitions, awards ceremony, and community celebration.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "event",
      priority: "high",
      redirectUrl: "https://events.example.com/sports-day-2025",
      openNewTab: true
    },
    {
      id: 3,
      title: "Weekly Training Session",
      date: "2025-08-06",
      time: "17:30",
      description: "Regular training session for all academy members at the main practice field.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      status: "recent",
      type: "training",
      priority: "medium",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 4,
      title: "Junior Academy Trials",
      date: "2025-08-22",
      time: "14:00",
      description: "Open trials for junior academy program. Ages 8-16 welcome to showcase their talent.",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "trial",
      priority: "high",
      redirectUrl: "https://trials.example.com/junior-academy",
      openNewTab: true
    },
    {
      id: 5,
      title: "Inter-Academy Tournament",
      date: "2025-08-25",
      time: "10:00",
      description: "Regional tournament featuring top sports academies. Multiple matches throughout the day.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e85d9d5c8?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "tournament",
      priority: "high",
      redirectUrl: "",
      openNewTab: false
    },
    {
      id: 6,
      title: "Skills Development Workshop",
      date: "2025-08-08",
      time: "15:00",
      description: "Special workshop focusing on advanced football techniques and tactical awareness.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      status: "upcoming",
      type: "workshop",
      priority: "medium",
      redirectUrl: "https://workshop.example.com/skills-dev",
      openNewTab: true
    }
  ],
  members: [
    {
      id: 1,
      name: "Arjun Sharma",
      contact: "arjun@email.com",
      phone: "+91-9876-543210",
      joinDate: "2023-01-15",
      role: "Team Captain",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Patel",
      contact: "priya@email.com",
      phone: "+91-9876-543211",
      joinDate: "2023-02-20",
      role: "Vice Captain",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332b6d9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      contact: "rohit@email.com",
      phone: "+91-9876-543212",
      joinDate: "2023-03-10",
      role: "Senior Player",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Anita Singh",
      contact: "anita@email.com",
      phone: "+91-9876-543213",
      joinDate: "2023-04-05",
      role: "Goalkeeper Coach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Vikram Gupta",
      contact: "vikram@email.com",
      phone: "+91-9876-543214",
      joinDate: "2023-05-12",
      role: "Defense Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Deepika Rao",
      contact: "deepika@email.com",
      phone: "+91-9876-543215",
      joinDate: "2023-06-18",
      role: "Forward",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Rahul Verma",
      contact: "rahul@email.com",
      phone: "+91-9876-543216",
      joinDate: "2023-07-22",
      role: "Midfielder",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Sneha Joshi",
      contact: "sneha@email.com",
      phone: "+91-9876-543217",
      joinDate: "2023-08-15",
      role: "Junior Trainer",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
    }
  ],
  donations: [
    {
      id: 1,
      donorName: "Ledo Foundation Trust",
      amount: 50000,
      date: "2025-07-10",
      purpose: "Infrastructure Development"
    },
    {
      id: 2,
      donorName: "Local Sports Committee",
      amount: 25000,
      date: "2025-07-15",
      purpose: "Equipment Purchase"
    },
    {
      id: 3,
      donorName: "Arjun Sharma",
      amount: 5000,
      date: "2025-07-20",
      purpose: "Youth Development Program"
    },
    {
      id: 4,
      donorName: "City Business Association",
      amount: 15000,
      date: "2025-07-25",
      purpose: "Tournament Participation"
    },
    {
      id: 5,
      donorName: "Anonymous Supporter",
      amount: 8000,
      date: "2025-08-01",
      purpose: "General Academy Operations"
    },
    {
      id: 6,
      donorName: "Parents Association",
      amount: 12000,
      date: "2025-08-02",
      purpose: "New Uniforms and Kit"
    }
  ],
  experiences: [
    {
      id: 1,
      title: "Regional Championship Victory 2024",
      date: "2024-12-20",
      description: "Ledo Sports Academy clinched the regional championship title after defeating three top academies. Our players showcased exceptional skill and teamwork throughout the tournament.",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "New Training Complex Inauguration",
      date: "2024-10-15",
      description: "Official opening of our state-of-the-art training complex with modern facilities, synthetic turf, and advanced training equipment. A milestone achievement for Ledo Sports Academy.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Community Sports Festival Success",
      date: "2024-08-18",
      description: "Organized and hosted the annual community sports festival with over 500 participants from 15 local schools. The event promoted sports culture and healthy competition.",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Academy's 5th Anniversary Celebration",
      date: "2024-06-10",
      description: "Celebrated Ledo Sports Academy's 5th anniversary with a grand ceremony attended by over 400 members, alumni, and supporters. Honored our achievements and future vision.",
      image: "https://images.unsplash.com/photo-1555717588-d53f4e5ea81c?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "First National Tournament Participation",
      date: "2024-04-25",
      description: "Ledo Sports Academy made its debut in the national tournament, reaching the semi-finals. A proud moment that marked our entry into elite-level competition.",
      image: "https://images.unsplash.com/photo-1526232761682-d26e85d9d5c8?w=400&h=300&fit=crop"
    }
  ],
  expenses: [
    {
      id: 1,
      description: "Training Equipment Purchase",
      amount: 15000,
      date: "2025-07-05",
      category: "Equipment",
      vendor: "Sports Pro Equipment Ltd",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 2,
      description: "Monthly Ground Maintenance",
      amount: 8000,
      date: "2025-07-01",
      category: "Maintenance",
      vendor: "Green Fields Services",
      paymentMethod: "Cash"
    },
    {
      id: 3,
      description: "Coach Transportation Allowance",
      amount: 3500,
      date: "2025-07-10",
      category: "Transportation",
      vendor: "Coaching Staff",
      paymentMethod: "UPI"
    },
    {
      id: 4,
      description: "Utility Bills - Electricity",
      amount: 4200,
      date: "2025-07-15",
      category: "Utilities",
      vendor: "State Electricity Board",
      paymentMethod: "Online"
    },
    {
      id: 5,
      description: "Medical Kit and First Aid Supplies",
      amount: 2800,
      date: "2025-07-18",
      category: "Medical",
      vendor: "MedCare Supplies",
      paymentMethod: "Card"
    },
    {
      id: 6,
      description: "Tournament Registration Fees",
      amount: 12000,
      date: "2025-07-22",
      category: "Tournament",
      vendor: "Regional Sports Federation",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 7,
      description: "Marketing and Publicity Materials",
      amount: 5500,
      date: "2025-07-25",
      category: "Marketing",
      vendor: "Creative Print Solutions",
      paymentMethod: "Cash"
    },
    {
      id: 8,
      description: "Insurance Premium",
      amount: 18000,
      date: "2025-07-28",
      category: "Insurance",
      vendor: "National Insurance Co",
      paymentMethod: "Bank Transfer"
    },
    {
      id: 9,
      description: "Refreshments for Training Sessions",
      amount: 3200,
      date: "2025-08-01",
      category: "Food & Beverage",
      vendor: "Local Caterers",
      paymentMethod: "UPI"
    },
    {
      id: 10,
      description: "Office Supplies and Stationery",
      amount: 1800,
      date: "2025-08-02",
      category: "Office",
      vendor: "Office Mart",
      paymentMethod: "Card"
    }
  ],
  weeklyFees: [
    {
      memberId: 1,
      memberName: "Arjun Sharma",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 2,
      memberName: "Priya Patel",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "overdue"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 3,
      memberName: "Rohit Kumar",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "paid"}
      ]
    },
    {
      memberId: 4,
      memberName: "Anita Singh",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "overdue"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 5,
      memberName: "Vikram Gupta",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "overdue"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 6,
      memberName: "Deepika Rao",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "paid"}
      ]
    },
    {
      memberId: 7,
      memberName: "Rahul Verma",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "pending"}
      ]
    },
    {
      memberId: 8,
      memberName: "Sneha Joshi",
      payments: [
        {"date": "2025-07-06", "amount": 20, "status": "paid"},
        {"date": "2025-07-13", "amount": 20, "status": "paid"},
        {"date": "2025-07-20", "amount": 20, "status": "paid"},
        {"date": "2025-07-27", "amount": 20, "status": "paid"},
        {"date": "2025-08-03", "amount": 20, "status": "paid"}
      ]
    }
  ],
  gallery: [
    {
      id: 1,
      title: "Training Session",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      album: "Training",
      isTopFive: true,
      order: 1
    },
    {
      id: 2,
      title: "Championship Trophy",
      url: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800",
      album: "Awards",
      isTopFive: true,
      order: 2
    },
    {
      id: 3,
      title: "Team Photo",
      url: "https://images.unsplash.com/photo-1555717588-d53f4e5ea81c?w=800",
      album: "Team",
      isTopFive: true,
      order: 3
    },
    {
      id: 4,
      title: "Youth Program",
      url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800",
      album: "Youth",
      isTopFive: true,
      order: 4
    },
    {
      id: 5,
      title: "Community Event",
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      album: "Community",
      isTopFive: true,
      order: 5
    },
    {
      id: 6,
      title: "Coach Training",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      album: "Training",
      isTopFive: false,
      order: 0
    },
    {
      id: 7,
      title: "Match Day",
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
      album: "Matches",
      isTopFive: false,
      order: 0
    },
    {
      id: 8,
      title: "Tournament Victory",
      url: "https://images.unsplash.com/photo-1526232761682-d26e85d9d5c8?w=800",
      album: "Awards",
      isTopFive: false,
      order: 0
    }
  ],
  dashboardStats: {
    totalMembers: 8,
    totalActivities: 6,
    totalDonations: 115000,
    totalExpenses: 74000,
    netBalance: 41000,
    weeklyFeesCollected: 640,
    pendingFees: 100,
    overdueFees: 60,
    totalExperiences: 5
  }
};

// Application state
let isAdminMode = false;
let currentEditingItem = null;
let currentEditingType = null;
let financialChart = null;
let expenseChart = null;
let slideshowInterval = null;
let currentSlideIndex = 0;
let isCurrentlyOnHome = true;
let isSlideshowPaused = false;
let currentLightboxIndex = 0;
let galleryImages = [];

// URL Validation Function
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

// Redirect URL Handler
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

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
  console.log('DOM loaded, initializing app...');
  try {
    await loadAllData();
    initializeApp();
    setupEventListeners();
    setupKeyboardShortcuts();
    console.log('App initialized successfully with API data');
  } catch (error) {
    console.error('Error initializing app with API data:', error);
    showMessage('Failed to load data from server. Using local data instead.', 'error');
    initializeApp();
    setupEventListeners();
    setupKeyboardShortcuts();
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
    
    console.log('All data loaded successfully from API');
  } catch (error) {
    console.error('Error loading data from API:', error);
    throw error;
  }
}

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

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Navigation - fix event delegation to work properly
  document.addEventListener('click', function(e) {
    // Handle navigation links properly
    if (e.target.classList.contains('nav-link') && !e.target.classList.contains('mobile-admin-login') && !e.target.classList.contains('mobile-admin-logout')) {
      e.preventDefault();
      e.stopPropagation();
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = href.substring(1);
        console.log('Navigating to section:', target);
        showSection(target);
        setActiveNavLink(e.target);
        
        // Update slideshow state based on current section
        isCurrentlyOnHome = (target === 'home');
        if (isCurrentlyOnHome && !isSlideshowPaused) {
          startSlideshow();
        } else {
          stopSlideshow();
        }
        
        // Close mobile menu if open
        const nav = document.getElementById('nav');
        if (nav) nav.classList.remove('active');
      }
    }
    
    // Handle logo click to go home
    if (e.target.closest('.logo')) {
      e.preventDefault();
      showSection('home');
      setActiveNavLink(document.querySelector('[href="#home"]'));
      isCurrentlyOnHome = true;
      startSlideshow();
      const nav = document.getElementById('nav');
      if (nav) nav.classList.remove('active');
    }
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('active');
    });
  }

  // Admin login/logout - with error handling
  setupAdminEventListeners();

  // Member search
  const memberSearch = document.getElementById('memberSearch');
  if (memberSearch) {
    memberSearch.addEventListener('input', function(e) {
      filterMembers(e.target.value);
    });
  }

  // PDF Export buttons
  setupPDFExportListeners();

  // Modal event listeners
  setupModalEventListeners();

  // Slideshow pause on hover
  setupSlideshowHoverListeners();

  // Lightbox event listeners
  setupLightboxEventListeners();
  
  console.log('Event listeners set up successfully');
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Check for Ctrl+Shift+A
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
      e.preventDefault();
      const adminLoginModal = document.getElementById('adminLoginModal');
      if (adminLoginModal && !isAdminMode) {
        adminLoginModal.classList.remove('hidden');
        const passwordInput = document.getElementById('adminPassword');
        if (passwordInput) {
          passwordInput.focus();
        }
      }
    }
    
    // Lightbox navigation
    if (e.code === 'Escape') {
      closeLightbox();
    }
    if (e.code === 'ArrowLeft') {
      previousLightboxImage();
    }
    if (e.code === 'ArrowRight') {
      nextLightboxImage();
    }
  });
}

function setupLightboxEventListeners() {
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightbox = document.getElementById('lightbox');

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', previousLightboxImage);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', nextLightboxImage);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
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

// Slideshow Functions
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

function startSlideshow() {
  if (slideshowInterval) clearInterval(slideshowInterval);
  
  // Only start if we're on home and not paused
  if (isCurrentlyOnHome && !isSlideshowPaused) {
    slideshowInterval = setInterval(function() {
      nextSlide();
    }, 3000); // 3 seconds
  }
}

function stopSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
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

// Hero Management Functions
function renderHeroManagement() {
  const grid = document.getElementById('heroSlidesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  appData.heroSlides.forEach(function(slide) {
    const slideCard = createHeroSlideCard(slide);
    grid.appendChild(slideCard);
  });
}

function createHeroSlideCard(slide) {
  const card = document.createElement('div');
  card.className = 'hero-slide-card';
  
  const hasRedirect = slide.redirectUrl && slide.redirectUrl.trim();
  
  card.innerHTML = 
    '<div class="slide-preview" style="background-image: url(\'' + slide.backgroundImage + '\')">' +
      '<div class="slide-preview-overlay">' + slide.ctaText + '</div>' +
    '</div>' +
    '<h4 class="slide-title">' + slide.title + '</h4>' +
    '<h5 class="slide-subtitle">' + slide.subtitle + '</h5>' +
    '<p class="slide-description">' + slide.description + '</p>' +
    '<div class="slide-meta">' +
      '<div class="slide-cta-info">Default: ' + slide.ctaLink + '</div>' +
      (hasRedirect ? 
        '<div class="redirect-url-info">Redirects to: ' + slide.redirectUrl + (slide.openNewTab ? ' (New Tab)' : '') + '</div>' : 
        '<div class="redirect-url-info">No redirect URL set</div>'
      ) +
    '</div>' +
    '<div class="card-actions">' +
      '<button class="btn btn--sm btn--outline" onclick="editHeroSlide(' + slide.id + ')">Edit</button>' +
      '<button class="btn btn--sm btn--outline" onclick="deleteHeroSlide(' + slide.id + ')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
    '</div>';
  
  return card;
}

// Gallery Functions
function renderGallery() {
  renderGalleryGrid();
  if (isAdminMode) {
    renderTop5Gallery();
  }
}

function renderGalleryGrid() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  galleryImages = appData.gallery.slice(); // Create copy for lightbox navigation
  
  appData.gallery.forEach(function(photo, index) {
    const galleryItem = createGalleryItem(photo, index);
    grid.appendChild(galleryItem);
  });
}

function createGalleryItem(photo, index) {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.setAttribute('data-index', index);
  
  item.innerHTML = 
    '<img src="' + photo.url + '" alt="' + photo.title + '" onerror="this.parentElement.style.display=\'none\'">' +
    (photo.isTopFive ? '<div class="gallery-top5-badge">Featured</div>' : '') +
    '<div class="gallery-item-info">' +
      '<h4 class="gallery-item-title">' + photo.title + '</h4>' +
      (photo.album ? '<div class="gallery-item-album">' + photo.album + '</div>' : '') +
      '<div class="card-actions">' +
        '<button class="btn btn--sm btn--outline" onclick="editGalleryItem(' + photo.id + ')">Edit</button>' +
        '<button class="btn btn--sm btn--outline" onclick="toggleTop5(' + photo.id + ')">' + 
          (photo.isTopFive ? 'Remove from Featured' : 'Add to Featured') + 
        '</button>' +
        '<button class="btn btn--sm btn--outline" onclick="deleteGalleryItem(' + photo.id + ')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
      '</div>' +
    '</div>';
  
  // Add click event for lightbox
  item.addEventListener('click', function(e) {
    if (!e.target.matches('button') && !e.target.closest('button')) {
      openLightbox(index);
    }
  });
  
  return item;
}

function renderTop5Gallery() {
  const container = document.getElementById('top5Gallery');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Create 5 slots
  for (let i = 1; i <= 5; i++) {
    const slot = document.createElement('div');
    slot.className = 'top5-item';
    slot.setAttribute('data-order', i);
    
    // Find photo for this order
    const photo = appData.gallery.find(function(p) { return p.isTopFive && p.order === i; });
    
    if (photo) {
      slot.classList.add('has-image');
      slot.innerHTML = 
        '<img src="' + photo.url + '" alt="' + photo.title + '">' +
        '<div class="order-number">' + i + '</div>';
    } else {
      slot.innerHTML = 
        '<div class="order-number">' + i + '</div>' +
        '<div class="empty-text">Drag photo here</div>';
    }
    
    // Add drag and drop functionality for admin
    if (isAdminMode) {
      setupTop5DragDrop(slot);
    }
    
    container.appendChild(slot);
  }
}

function setupTop5DragDrop(slot) {
  slot.addEventListener('dragover', function(e) {
    e.preventDefault();
    slot.style.backgroundColor = 'rgba(30, 58, 138, 0.1)';
  });
  
  slot.addEventListener('dragleave', function() {
    slot.style.backgroundColor = '';
  });
  
  slot.addEventListener('drop', function(e) {
    e.preventDefault();
    slot.style.backgroundColor = '';
    
    const photoId = parseInt(e.dataTransfer.getData('text/plain'));
    const order = parseInt(slot.getAttribute('data-order'));
    
    updateTop5Order(photoId, order);
  });
}

async function updateTop5Order(photoId, newOrder) {
  try {
    // Update the order via API
    await api.gallery.updateOrder(photoId, newOrder);
    
    // Reload gallery data
    appData.gallery = await api.gallery.getAll();
    
    // Re-render and update slideshow
    renderTop5Gallery();
    renderGalleryGrid();
    updateHeroSlidesFromGallery();
    renderHeroSlideshow();
    if (isCurrentlyOnHome) {
      startSlideshow();
    }
    
    showMessage('Featured photos updated successfully');
  } catch (error) {
    console.error('Error updating photo order:', error);
    showMessage('Failed to update photo order. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    // Remove any existing photo from this order
    appData.gallery.forEach(function(photo) {
      if (photo.order === newOrder && photo.id !== photoId) {
        photo.isTopFive = false;
        photo.order = 0;
      }
    });
    
    // Update the dragged photo
    const photo = appData.gallery.find(function(p) { return p.id === photoId; });
    if (photo) {
      photo.isTopFive = true;
      photo.order = newOrder;
    }

}

async function toggleTop5(photoId) {
  try {
    // Toggle top five status via API
    await api.gallery.toggleTopFive(photoId);
    
    // Reload gallery data
    appData.gallery = await api.gallery.getAll();
    
    // Re-render and update slideshow
    renderTop5Gallery();
    renderGalleryGrid();
    updateHeroSlidesFromGallery();
    renderHeroSlideshow();
    if (isCurrentlyOnHome) {
      startSlideshow();
    }
    
    // Determine message based on current state after reload
    const photo = appData.gallery.find(function(p) { return p.id === photoId; });
    if (photo && photo.isTopFive) {
      showMessage('Photo added to featured photos');
    } else {
      showMessage('Photo removed from featured photos');
    }
  } catch (error) {
    console.error('Error toggling top five status:', error);
    showMessage('Failed to update featured status. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    const photo = appData.gallery.find(function(p) { return p.id === photoId; });
    if (!photo) return;
    
    if (photo.isTopFive) {
      // Remove from top 5
      photo.isTopFive = false;
      photo.order = 0;
      showMessage('Photo removed from featured photos');
    } else {
      // Add to top 5 - find next available order
      const usedOrders = appData.gallery
        .filter(function(p) { return p.isTopFive; })
        .map(function(p) { return p.order; });
      
      let nextOrder = 1;
      for (let i = 1; i <= 5; i++) {
        if (usedOrders.indexOf(i) === -1) {
          nextOrder = i;
          break;
        }
      }
      
      if (nextOrder <= 5) {
        photo.isTopFive = true;
        photo.order = nextOrder;
        showMessage('Photo added to featured photos');
      } else {
        showMessage('Maximum 5 featured photos allowed. Remove one first.', 'error');
        return;
      }
    }
    
    // Re-render and update slideshow
    renderTop5Gallery();
    renderGalleryGrid();
    updateHeroSlidesFromGallery();
    renderHeroSlideshow();
    if (isCurrentlyOnHome) {
      startSlideshow();
    }
  }
}

// Lightbox Functions
function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  
  if (lightbox && lightboxImage && lightboxTitle) {
    const photo = galleryImages[index];
    if (photo) {
      lightboxImage.src = photo.url;
      lightboxImage.alt = photo.title;
      lightboxTitle.textContent = photo.title;
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function previousLightboxImage() {
  if (galleryImages.length > 0) {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentLightboxIndex);
  }
}

function nextLightboxImage() {
  if (galleryImages.length > 0) {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    openLightbox(currentLightboxIndex);
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
    .sort(function(a, b) { return new Date(a.date) - new Date(b.date); })
    .slice(0, 5);
  
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

function setupAdminEventListeners() {
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  const mobileAdminLogin = document.getElementById('mobileAdminLogin');
  const mobileAdminLogout = document.getElementById('mobileAdminLogout');
  const adminLoginModal = document.getElementById('adminLoginModal');
  const cancelLoginBtn = document.getElementById('cancelLoginBtn');
  const adminLoginForm = document.getElementById('adminLoginForm');

  console.log('Admin elements:', {
    loginBtn: !!adminLoginBtn,
    logoutBtn: !!adminLogoutBtn,
    mobileLogin: !!mobileAdminLogin,
    mobileLogout: !!mobileAdminLogout,
    modal: !!adminLoginModal,
    form: !!adminLoginForm
  });

  // Desktop admin logout
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Desktop admin logout button clicked');
      logout();
    });
  }

  // Mobile admin login
  if (mobileAdminLogin) {
    mobileAdminLogin.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Mobile admin login clicked');
      if (adminLoginModal) {
        adminLoginModal.classList.remove('hidden');
        const passwordInput = document.getElementById('adminPassword');
        if (passwordInput) {
          passwordInput.focus();
        }
      }
      // Close mobile menu
      const nav = document.getElementById('nav');
      if (nav) nav.classList.remove('active');
    });
  }

  // Mobile admin logout
  if (mobileAdminLogout) {
    mobileAdminLogout.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Mobile admin logout clicked');
      logout();
      // Close mobile menu
      const nav = document.getElementById('nav');
      if (nav) nav.classList.remove('active');
    });
  }

  if (cancelLoginBtn) {
    cancelLoginBtn.addEventListener('click', function() {
      if (adminLoginModal) {
        adminLoginModal.classList.add('hidden');
      }
      const passwordInput = document.getElementById('adminPassword');
      if (passwordInput) passwordInput.value = '';
    });
  }

  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log('Admin login form submitted');
      const passwordInput = document.getElementById('adminPassword');
      if (passwordInput) {
        const password = passwordInput.value;
        console.log('Password entered:', password ? 'YES' : 'NO');
        if (password === 'admin123') {
          console.log('Login successful');
          login();
          if (adminLoginModal) adminLoginModal.classList.add('hidden');
          passwordInput.value = '';
        } else {
          console.log('Login failed');
          showMessage('Invalid password. Please try again.', 'error');
          passwordInput.value = '';
        }
      }
    });
  }
}

function setupPDFExportListeners() {
  const exportAllDataBtn = document.getElementById('exportAllDataBtn');
  const exportFinancialBtn = document.getElementById('exportFinancialBtn');
  const exportMembersBtn = document.getElementById('exportMembersBtn');
  const exportExpensesBtn = document.getElementById('exportExpensesBtn');

  if (exportAllDataBtn) {
    exportAllDataBtn.addEventListener('click', function() {
      console.log('Export all data clicked');
      exportToPDF('all');
    });
  }
  if (exportFinancialBtn) {
    exportFinancialBtn.addEventListener('click', function() {
      console.log('Export financial clicked');
      exportToPDF('financial');
    });
  }
  if (exportMembersBtn) {
    exportMembersBtn.addEventListener('click', function() {
      console.log('Export members clicked');
      exportToPDF('members');
    });
  }
  if (exportExpensesBtn) {
    exportExpensesBtn.addEventListener('click', function() {
      console.log('Export expenses clicked');
      exportToPDF('expenses');
    });
  }
}

function setupModalEventListeners() {
  // Hero Slide modal
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
function renderDashboard() {
  updateDashboardMetrics();
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

function renderCharts() {
  renderFinancialChart();
  renderExpenseChart();
}

function renderFinancialChart() {
  const ctx = document.getElementById('financialChart');
  if (!ctx) return;

  if (financialChart) {
    financialChart.destroy();
  }

  const totalDonations = appData.donations.reduce(function(sum, d) { return sum + d.amount; }, 0);
  const totalExpenses = appData.expenses.reduce(function(sum, e) { return sum + e.amount; }, 0);
  const netBalance = totalDonations - totalExpenses;

  financialChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Donations', 'Expenses', 'Net Balance'],
      datasets: [{
        label: 'Amount (₹)',
        data: [totalDonations, totalExpenses, netBalance],
        backgroundColor: ['#1FB8CD', '#B4413C', '#FFC185'],
        borderColor: ['#1FB8CD', '#B4413C', '#FFC185'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
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

function renderExpenseChart() {
  const ctx = document.getElementById('expenseChart');
  if (!ctx) return;

  if (expenseChart) {
    expenseChart.destroy();
  }

  // Group expenses by category
  const expensesByCategory = {};
  appData.expenses.forEach(function(expense) {
    if (expensesByCategory[expense.category]) {
      expensesByCategory[expense.category] += expense.amount;
    } else {
      expensesByCategory[expense.category] = expense.amount;
    }
  });

  const labels = Object.keys(expensesByCategory);
  const data = Object.values(expensesByCategory);
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

  expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors.slice(0, labels.length),
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderRecentActivities() {
  const container = document.getElementById('recentActivitiesSummary');
  if (!container) return;

  container.innerHTML = '';

  // Get next 3 upcoming activities
  const upcomingActivities = appData.activities
    .filter(function(activity) { return new Date(activity.date) >= new Date(); })
    .sort(function(a, b) { return new Date(a.date) - new Date(b.date); })
    .slice(0, 3);

  upcomingActivities.forEach(function(activity) {
    const card = document.createElement('div');
    card.className = 'summary-activity-card';
    
    const formattedDate = new Date(activity.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    card.innerHTML = '<h4>' + activity.title + '</h4>' +
      '<div class="activity-date">📅 ' + formattedDate + ' at ' + activity.time + '</div>';

    container.appendChild(card);
  });
}

// Render functions
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

function renderMembers() {
  const grid = document.getElementById('membersGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appData.members.forEach(function(member) {
    const memberCard = createMemberCard(member);
    grid.appendChild(memberCard);
  });
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

function renderExpenses() {
  const grid = document.getElementById('expensesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  appData.expenses.forEach(function(expense) {
    const expenseCard = createExpenseCard(expense);
    grid.appendChild(expenseCard);
  });
}

function createExpenseCard(expense) {
  const card = document.createElement('div');
  card.className = 'expense-card';
  
  const formattedDate = new Date(expense.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  card.innerHTML = 
    '<div class="expense-header">' +
      '<div class="expense-description">' + expense.description + '</div>' +
      '<div class="expense-amount">₹' + expense.amount.toLocaleString() + '</div>' +
    '</div>' +
    '<div class="expense-meta">' +
      '<span>📅 ' + formattedDate + '</span>' +
      '<span>🏪 ' + expense.vendor + '</span>' +
      '<span>💳 ' + expense.paymentMethod + '</span>' +
      '<span class="expense-category">' + expense.category + '</span>' +
    '</div>' +
    '<div class="card-actions">' +
      '<button class="btn btn--sm btn--outline" onclick="editExpense(' + expense.id + ')">Edit</button>' +
      '<button class="btn btn--sm btn--outline" onclick="deleteExpense(' + expense.id + ')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
    '</div>';

  return card;
}

function renderExperiences() {
  const timeline = document.getElementById('experiencesTimeline');
  if (!timeline) return;

  timeline.innerHTML = '';

  // Sort experiences by date (newest first)
  const sortedExperiences = appData.experiences.slice().sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  sortedExperiences.forEach(function(experience) {
    const experienceCard = createExperienceCard(experience);
    timeline.appendChild(experienceCard);
  });
}

function createExperienceCard(experience) {
  const card = document.createElement('div');
  card.className = 'experience-card';
  
  const formattedDate = new Date(experience.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  card.innerHTML = 
    '<img src="' + experience.image + '" alt="' + experience.title + '" class="experience-image" onerror="this.style.display=\'none\'">' +
    '<div class="experience-content">' +
      '<h4 class="experience-title">' + experience.title + '</h4>' +
      '<div class="experience-date">📅 ' + formattedDate + '</div>' +
      '<p class="experience-description">' + experience.description + '</p>' +
      '<div class="card-actions">' +
        '<button class="btn btn--sm btn--outline" onclick="editExperience(' + experience.id + ')">Edit</button>' +
        '<button class="btn btn--sm btn--outline" onclick="deleteExperience(' + experience.id + ')" style="color: var(--club-red); border-color: var(--club-red);">Delete</button>' +
      '</div>' +
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

function updateTotalExpenses() {
  const total = appData.expenses.reduce(function(sum, expense) { return sum + expense.amount; }, 0);
  const totalElement = document.getElementById('totalExpenses');
  if (totalElement) {
    totalElement.textContent = '₹' + total.toLocaleString();
  }
}

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
    
    const elements = {
      modalTitle: document.getElementById('heroSlideModalTitle'),
      title: document.getElementById('heroSlideTitle'),
      subtitle: document.getElementById('heroSlideSubtitle'),
      description: document.getElementById('heroSlideDescription'),
      backgroundImage: document.getElementById('heroSlideBackgroundImage'),
      ctaText: document.getElementById('heroSlideCtaText'),
      ctaLink: document.getElementById('heroSlideCtaLink'),
      redirectUrl: document.getElementById('heroSlideRedirectUrl'),
      openNewTab: document.getElementById('heroSlideOpenNewTab'),
      modal: document.getElementById('heroSlideModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Hero Slide';
    if (elements.title) elements.title.value = slide.title;
    if (elements.subtitle) elements.subtitle.value = slide.subtitle;
    if (elements.description) elements.description.value = slide.description;
    if (elements.backgroundImage) elements.backgroundImage.value = slide.backgroundImage;
    if (elements.ctaText) elements.ctaText.value = slide.ctaText || '';
    if (elements.ctaLink) elements.ctaLink.value = slide.ctaLink || '';
    if (elements.redirectUrl) elements.redirectUrl.value = slide.redirectUrl || '';
    if (elements.openNewTab) elements.openNewTab.checked = slide.openNewTab || false;
    if (elements.modal) elements.modal.classList.remove('hidden');
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

// CRUD operations
async function saveActivity() {
  const title = document.getElementById('activityTitle').value;
  const date = document.getElementById('activityDate').value;
  const time = document.getElementById('activityTime').value;
  const description = document.getElementById('activityDescription').value;
  const image = document.getElementById('activityImage').value || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop';
  const status = document.getElementById('activityStatus').value;
  const redirectUrl = document.getElementById('activityRedirectUrl').value;
  const openNewTab = document.getElementById('activityOpenNewTab').checked;

  // Validate redirect URL if provided
  if (redirectUrl && !isValidUrl(redirectUrl)) {
    showMessage('Please enter a valid redirect URL starting with http:// or https://', 'error');
    return;
  }

  try {
    const activityData = {
      title: title,
      date: date,
      time: time,
      description: description,
      image: image,
      status: status,
      redirectUrl: redirectUrl,
      openNewTab: openNewTab
    };

    if (currentEditingItem) {
      // Update existing activity
      await api.activity.update(currentEditingItem, activityData);
    } else {
      // Create new activity
      await api.activity.create(activityData);
    }

    // Reload activities data
    appData.activities = await api.activity.getAll();
    
    // Update UI
    renderActivities();
    renderHomeEvents();
    renderRecentActivities();
    updateDashboardMetrics();
    showMessage(currentEditingItem ? 'Activity updated successfully' : 'Activity added successfully');
    return;
  } catch (error) {
    console.error('Error saving activity:', error);
    showMessage('Failed to save activity. Please try again.', 'error');
    return;
  }

  // Fallback to local data if API fails
  if (currentEditingItem) {
    const index = appData.activities.findIndex(function(a) { return a.id === currentEditingItem; });
    if (index !== -1) {
      appData.activities[index] = Object.assign({}, appData.activities[index], { 
        title: title, 
        date: date, 
        time: time, 
        description: description, 
        image: image, 
        status: status,
        redirectUrl: redirectUrl,
        openNewTab: openNewTab
      });
    }
  } else {
    const newId = Math.max.apply(Math, appData.activities.map(function(a) { return a.id; }).concat([0])) + 1;
    appData.activities.push({ 
      id: newId, 
      title: title, 
      date: date, 
      time: time, 
      description: description, 
      image: image, 
      status: status,
      redirectUrl: redirectUrl,
      openNewTab: openNewTab
    });
  }

  renderActivities();
  renderHomeEvents();
  renderRecentActivities();
  updateDashboardMetrics();
  showMessage(currentEditingItem ? 'Activity updated successfully' : 'Activity added successfully');
}

async function editActivity(id) {
  try {
    // Try to get activity from API
    const activity = await api.activity.getById(id);
    if (!activity) {
      showMessage('Activity not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'activity';
    
    const elements = {
      modalTitle: document.getElementById('activityModalTitle'),
      title: document.getElementById('activityTitle'),
      date: document.getElementById('activityDate'),
      time: document.getElementById('activityTime'),
      description: document.getElementById('activityDescription'),
      image: document.getElementById('activityImage'),
      status: document.getElementById('activityStatus'),
      redirectUrl: document.getElementById('activityRedirectUrl'),
      openNewTab: document.getElementById('activityOpenNewTab'),
      modal: document.getElementById('activityModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Activity';
    if (elements.title) elements.title.value = activity.title;
    if (elements.date) elements.date.value = activity.date;
    if (elements.time) elements.time.value = activity.time;
    if (elements.description) elements.description.value = activity.description;
    if (elements.image) elements.image.value = activity.image;
    if (elements.status) elements.status.value = activity.status || 'upcoming';
    if (elements.redirectUrl) elements.redirectUrl.value = activity.redirectUrl || '';
    if (elements.openNewTab) elements.openNewTab.checked = activity.openNewTab || false;
    if (elements.modal) elements.modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading activity for editing:', error);
    
    // Fallback to local data if API fails
    const activity = appData.activities.find(function(a) { return a.id === id; });
    if (!activity) {
      showMessage('Activity not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'activity';
    
    const elements = {
      modalTitle: document.getElementById('activityModalTitle'),
      title: document.getElementById('activityTitle'),
      date: document.getElementById('activityDate'),
      time: document.getElementById('activityTime'),
      description: document.getElementById('activityDescription'),
      image: document.getElementById('activityImage'),
      status: document.getElementById('activityStatus'),
      redirectUrl: document.getElementById('activityRedirectUrl'),
      openNewTab: document.getElementById('activityOpenNewTab'),
      modal: document.getElementById('activityModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Activity';
    if (elements.title) elements.title.value = activity.title;
    if (elements.date) elements.date.value = activity.date;
    if (elements.time) elements.time.value = activity.time;
    if (elements.description) elements.description.value = activity.description;
    if (elements.image) elements.image.value = activity.image;
    if (elements.status) elements.status.value = activity.status || 'upcoming';
    if (elements.redirectUrl) elements.redirectUrl.value = activity.redirectUrl || '';
    if (elements.openNewTab) elements.openNewTab.checked = activity.openNewTab || false;
    if (elements.modal) elements.modal.classList.remove('hidden');
  }
}

async function deleteActivity(id) {
  if (confirm('Are you sure you want to delete this activity?')) {
    try {
      // Try to delete activity via API
      await api.activity.delete(id);
      
      // Reload activities data
      appData.activities = await api.activity.getAll();
      
      // Update UI
      renderActivities();
      renderHomeEvents();
      renderRecentActivities();
      updateDashboardMetrics();
      showMessage('Activity deleted successfully');
    } catch (error) {
      console.error('Error deleting activity:', error);
      showMessage('Failed to delete activity. Using local data instead.', 'error');
      
      // Fallback to local data if API fails
      appData.activities = appData.activities.filter(function(a) { return a.id !== id; });
      renderActivities();
      renderHomeEvents();
      renderRecentActivities();
      updateDashboardMetrics();
    }
  }
}

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
          await api.weeklyFee.update(fee.id, fee);
        }
      }
    } else {
      // Create new member
      const newMember = await api.member.create(memberData);
      
      // Add weekly fee record for new member
      await api.weeklyFee.create({
        memberId: newMember.id,
        memberName: name,
        payments: [
          { date: "2025-08-03", amount: 20, status: "pending" }
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
        memberId: newId,
        memberName: name,
        payments: [
          { date: "2025-08-03", amount: 20, status: "pending" }
        ]
      });
    }
    
    renderMembers();
    renderWeeklyFees();
    updateDashboardMetrics();
  }
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

async function deleteDonation(id) {
  if (confirm('Are you sure you want to delete this donation record?')) {
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

async function saveExpense() {
  const description = document.getElementById('expenseDescription').value;
  const amount = parseInt(document.getElementById('expenseAmount').value);
  const date = document.getElementById('expenseDate').value;
  const category = document.getElementById('expenseCategory').value;
  const vendor = document.getElementById('expenseVendor').value;
  const paymentMethod = document.getElementById('expensePaymentMethod').value;

  try {
    const expenseData = {
      description: description,
      amount: amount,
      date: date,
      category: category,
      vendor: vendor,
      paymentMethod: paymentMethod
    };

    if (currentEditingItem) {
      // Update existing expense
      await api.expense.update(currentEditingItem, expenseData);
    } else {
      // Create new expense
      await api.expense.create(expenseData);
    }

    // Reload expenses data
    appData.expenses = await api.expense.getAll();
    
    // Update UI
    renderExpenses();
    updateTotalExpenses();
    updateDashboardMetrics();
    renderCharts();
    showMessage(currentEditingItem ? 'Expense updated successfully' : 'Expense added successfully');
    return;
  } catch (error) {
    console.error('Error saving expense:', error);
    showMessage('Failed to save expense. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    if (currentEditingItem) {
      const index = appData.expenses.findIndex(function(e) { return e.id === currentEditingItem; });
      if (index !== -1) {
        appData.expenses[index] = Object.assign({}, appData.expenses[index], { description: description, amount: amount, date: date, category: category, vendor: vendor, paymentMethod: paymentMethod });
      }
    } else {
      const newId = Math.max.apply(Math, appData.expenses.map(function(e) { return e.id; }).concat([0])) + 1;
      appData.expenses.push({ id: newId, description: description, amount: amount, date: date, category: category, vendor: vendor, paymentMethod: paymentMethod });
    }

    renderExpenses();
    updateTotalExpenses();
    updateDashboardMetrics();
    renderCharts();
  }
}

async function editExpense(id) {
  try {
    // Try to get expense from API
    const expense = await api.expense.getById(id);
    if (!expense) {
      showMessage('Expense not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'expense';
    
    const elements = {
      modalTitle: document.getElementById('expenseModalTitle'),
      description: document.getElementById('expenseDescription'),
      amount: document.getElementById('expenseAmount'),
      date: document.getElementById('expenseDate'),
      category: document.getElementById('expenseCategory'),
      vendor: document.getElementById('expenseVendor'),
      paymentMethod: document.getElementById('expensePaymentMethod'),
      modal: document.getElementById('expenseModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Expense';
    if (elements.description) elements.description.value = expense.description;
    if (elements.amount) elements.amount.value = expense.amount;
    if (elements.date) elements.date.value = expense.date;
    if (elements.category) elements.category.value = expense.category;
    if (elements.vendor) elements.vendor.value = expense.vendor;
    if (elements.paymentMethod) elements.paymentMethod.value = expense.paymentMethod;
    if (elements.modal) elements.modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading expense for editing:', error);
    
    // Fallback to local data if API fails
    const expense = appData.expenses.find(function(e) { return e.id === id; });
    if (!expense) {
      showMessage('Expense not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'expense';
    
    const elements = {
      modalTitle: document.getElementById('expenseModalTitle'),
      description: document.getElementById('expenseDescription'),
      amount: document.getElementById('expenseAmount'),
      date: document.getElementById('expenseDate'),
      category: document.getElementById('expenseCategory'),
      vendor: document.getElementById('expenseVendor'),
      paymentMethod: document.getElementById('expensePaymentMethod'),
      modal: document.getElementById('expenseModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Expense';
    if (elements.description) elements.description.value = expense.description;
    if (elements.amount) elements.amount.value = expense.amount;
    if (elements.date) elements.date.value = expense.date;
    if (elements.category) elements.category.value = expense.category;
    if (elements.vendor) elements.vendor.value = expense.vendor;
    if (elements.paymentMethod) elements.paymentMethod.value = expense.paymentMethod;
    if (elements.modal) elements.modal.classList.remove('hidden');
  }
}

async function deleteExpense(id) {
  if (confirm('Are you sure you want to delete this expense record?')) {
    try {
      // Try to delete expense via API
      await api.expense.delete(id);
      
      // Reload expenses data
      appData.expenses = await api.expense.getAll();
      
      // Update UI
      renderExpenses();
      updateTotalExpenses();
      updateDashboardMetrics();
      renderCharts();
      showMessage('Expense deleted successfully');
    } catch (error) {
      console.error('Error deleting expense:', error);
      showMessage('Failed to delete expense. Using local data instead.', 'error');
      
      // Fallback to local data if API fails
      appData.expenses = appData.expenses.filter(function(e) { return e.id !== id; });
      renderExpenses();
      updateTotalExpenses();
      updateDashboardMetrics();
      renderCharts();
    }
  }
}

async function saveExperience() {
  const title = document.getElementById('experienceTitle').value;
  const date = document.getElementById('experienceDate').value;
  const description = document.getElementById('experienceDescription').value;
  const image = document.getElementById('experienceImage').value || 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop';

  try {
    const experienceData = {
      title: title,
      date: date,
      description: description,
      image: image
    };

    if (currentEditingItem) {
      // Update existing experience
      await api.experience.update(currentEditingItem, experienceData);
    } else {
      // Create new experience
      await api.experience.create(experienceData);
    }

    // Reload experiences data
    appData.experiences = await api.experience.getAll();
    
    // Update UI
    renderExperiences();
    showMessage(currentEditingItem ? 'Experience updated successfully' : 'Experience added successfully');
  } catch (error) {
    console.error('Error saving experience:', error);
    showMessage('Failed to save experience. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    if (currentEditingItem) {
      const index = appData.experiences.findIndex(function(e) { return e.id === currentEditingItem; });
      if (index !== -1) {
        appData.experiences[index] = Object.assign({}, appData.experiences[index], { title: title, date: date, description: description, image: image });
      }
    } else {
      const newId = Math.max.apply(Math, appData.experiences.map(function(e) { return e.id; }).concat([0])) + 1;
      appData.experiences.push({ id: newId, title: title, date: date, description: description, image: image });
    }

    renderExperiences();
  }
}

async function editExperience(id) {
  try {
    // Try to get experience from API
    const experience = await api.experience.getById(id);
    if (!experience) {
      showMessage('Experience not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'experience';
    
    const elements = {
      modalTitle: document.getElementById('experienceModalTitle'),
      title: document.getElementById('experienceTitle'),
      date: document.getElementById('experienceDate'),
      description: document.getElementById('experienceDescription'),
      image: document.getElementById('experienceImage'),
      modal: document.getElementById('experienceModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Experience';
    if (elements.title) elements.title.value = experience.title;
    if (elements.date) elements.date.value = experience.date;
    if (elements.description) elements.description.value = experience.description;
    if (elements.image) elements.image.value = experience.image;
    if (elements.modal) elements.modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading experience for editing:', error);
    
    // Fallback to local data if API fails
    const experience = appData.experiences.find(function(e) { return e.id === id; });
    if (!experience) {
      showMessage('Experience not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'experience';
    
    const elements = {
      modalTitle: document.getElementById('experienceModalTitle'),
      title: document.getElementById('experienceTitle'),
      date: document.getElementById('experienceDate'),
      description: document.getElementById('experienceDescription'),
      image: document.getElementById('experienceImage'),
      modal: document.getElementById('experienceModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Experience';
    if (elements.title) elements.title.value = experience.title;
    if (elements.date) elements.date.value = experience.date;
    if (elements.description) elements.description.value = experience.description;
    if (elements.image) elements.image.value = experience.image;
    if (elements.modal) elements.modal.classList.remove('hidden');
  }
}

async function deleteExperience(id) {
  if (confirm('Are you sure you want to delete this experience?')) {
    try {
      // Try to delete experience via API
      await api.experience.delete(id);
      
      // Reload experiences data
      appData.experiences = await api.experience.getAll();
      
      // Update UI
      renderExperiences();
      showMessage('Experience deleted successfully');
    } catch (error) {
      console.error('Error deleting experience:', error);
      showMessage('Failed to delete experience. Using local data instead.', 'error');
      
      // Fallback to local data if API fails
      appData.experiences = appData.experiences.filter(function(e) { return e.id !== id; });
      renderExperiences();
    }
  }
}

// Gallery CRUD operations
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
      const existingItem = appData.gallery.find(function(g) { return g.id === currentEditingItem; });
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
    appData.gallery = await api.gallery.getAll();
    
    // Update UI
    renderGallery();
    showMessage(currentEditingItem ? 'Photo updated successfully' : 'Photo added successfully');
  } catch (error) {
    console.error('Error saving gallery item:', error);
    showMessage('Failed to save photo. Using local data instead.', 'error');
    
    // Fallback to local data if API fails
    if (currentEditingItem) {
      const index = appData.gallery.findIndex(function(g) { return g.id === currentEditingItem; });
      if (index !== -1) {
        appData.gallery[index] = Object.assign({}, appData.gallery[index], { title: title, url: url, album: album });
      }
    } else {
      const newId = Math.max.apply(Math, appData.gallery.map(function(g) { return g.id; }).concat([0])) + 1;
      appData.gallery.push({ 
        id: newId, 
        title: title, 
        url: url, 
        album: album, 
        isTopFive: false, 
        order: 0 
      });
    }

    renderGallery();
  }
}

async function editGalleryItem(id) {
  try {
    // Try to get gallery item from API
    const galleryItem = await api.gallery.getById(id);
    if (!galleryItem) {
      showMessage('Photo not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'gallery';
    
    const elements = {
      modalTitle: document.getElementById('galleryModalTitle'),
      title: document.getElementById('galleryTitle'),
      url: document.getElementById('galleryUrl'),
      album: document.getElementById('galleryAlbum'),
      modal: document.getElementById('galleryModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Photo';
    if (elements.title) elements.title.value = galleryItem.title;
    if (elements.url) elements.url.value = galleryItem.url;
    if (elements.album) elements.album.value = galleryItem.album || '';
    if (elements.modal) elements.modal.classList.remove('hidden');
  } catch (error) {
    console.error('Error loading gallery item for editing:', error);
    
    // Fallback to local data if API fails
    const galleryItem = appData.gallery.find(function(g) { return g.id === id; });
    if (!galleryItem) {
      showMessage('Photo not found', 'error');
      return;
    }

    currentEditingItem = id;
    currentEditingType = 'gallery';
    
    const elements = {
      modalTitle: document.getElementById('galleryModalTitle'),
      title: document.getElementById('galleryTitle'),
      url: document.getElementById('galleryUrl'),
      album: document.getElementById('galleryAlbum'),
      modal: document.getElementById('galleryModal')
    };

    if (elements.modalTitle) elements.modalTitle.textContent = 'Edit Photo';
    if (elements.title) elements.title.value = galleryItem.title;
    if (elements.url) elements.url.value = galleryItem.url;
    if (elements.album) elements.album.value = galleryItem.album || '';
    if (elements.modal) elements.modal.classList.remove('hidden');
  }
}

async function deleteGalleryItem(id) {
  if (confirm('Are you sure you want to delete this photo?')) {
    try {
      // Try to delete gallery item via API
      await api.gallery.delete(id);
      
      // Reload gallery data
      appData.gallery = await api.gallery.getAll();
      
      // Update UI
      renderGallery();
      
      // Update slideshow if a top 5 image was deleted
      updateHeroSlidesFromGallery();
      renderHeroSlideshow();
      if (isCurrentlyOnHome) {
        startSlideshow();
      }
      
      showMessage('Photo deleted successfully');
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      showMessage('Failed to delete photo. Using local data instead.', 'error');
      
      // Fallback to local data if API fails
      appData.gallery = appData.gallery.filter(function(g) { return g.id !== id; });
      renderGallery();
      
      // Update slideshow if a top 5 image was deleted
      updateHeroSlidesFromGallery();
      renderHeroSlideshow();
      if (isCurrentlyOnHome) {
        startSlideshow();
      }
    }
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

// PDF Export Functions (simplified for brevity)
function exportToPDF(type) {
  if (!window.html2pdf) {
    showMessage('PDF export library not loaded. Please refresh the page.', 'error');
    return;
  }

  showMessage('Generating PDF report...', 'info');
  
  const opt = {
    margin: 1,
    filename: 'ledo-sports-academy-' + type + '-report.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  let content = generateSimpleReport(type);

  const element = document.createElement('div');
  element.innerHTML = content;
  element.style.padding = '20px';
  element.style.fontFamily = 'Arial, sans-serif';

  html2pdf().set(opt).from(element).save().then(function() {
    showMessage('PDF report generated successfully!');
  }).catch(function() {
    showMessage('Error generating PDF report', 'error');
  });
}

function generateSimpleReport(type) {
  const totalDonations = appData.donations.reduce(function(sum, d) { return sum + d.amount; }, 0);
  const totalExpenses = appData.expenses.reduce(function(sum, e) { return sum + e.amount; }, 0);
  const netBalance = totalDonations - totalExpenses;

  return '<div style="text-align: center; margin-bottom: 30px;">' +
      '<h1 style="color: #1e3a8a; margin-bottom: 10px;">Ledo Sports Academy</h1>' +
      '<h2 style="color: #6b7280; margin-bottom: 5px;">' + type.charAt(0).toUpperCase() + type.slice(1) + ' Report</h2>' +
      '<p style="color: #6b7280;">Generated on ' + new Date().toLocaleDateString() + '</p>' +
    '</div>' +
    '<div style="margin-bottom: 30px;">' +
      '<h3 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px;">Academy Overview</h3>' +
      '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0;">' +
        '<div style="text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px;">' +
          '<h4>Total Members</h4>' +
          '<p style="font-size: 24px; font-weight: bold; color: #1e3a8a;">' + appData.members.length + '</p>' +
        '</div>' +
        '<div style="text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px;">' +
          '<h4>Total Activities</h4>' +
          '<p style="font-size: 24px; font-weight: bold; color: #1e3a8a;">' + appData.activities.length + '</p>' +
        '</div>' +
        '<div style="text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px;">' +
          '<h4>Net Balance</h4>' +
          '<p style="font-size: 24px; font-weight: bold; color: ' + (netBalance >= 0 ? '#10b981' : '#ef4444') + ';">₹' + netBalance.toLocaleString() + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
}