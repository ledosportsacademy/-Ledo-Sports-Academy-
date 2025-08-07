const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const HeroSlide = require('../models/HeroSlide');
const Activity = require('../models/Activity');
const Member = require('../models/Member');
const Donation = require('../models/Donation');
const Expense = require('../models/Expense');
const Experience = require('../models/Experience');
const WeeklyFee = require('../models/WeeklyFee');
const Gallery = require('../models/Gallery');
const Dashboard = require('../models/Dashboard');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ledo-sports-academy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  seedDatabase();
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1);
});

async function seedDatabase() {
  try {
    // Clear existing data
    await Promise.all([
      HeroSlide.deleteMany({}),
      Activity.deleteMany({}),
      Member.deleteMany({}),
      Donation.deleteMany({}),
      Expense.deleteMany({}),
      Experience.deleteMany({}),
      WeeklyFee.deleteMany({}),
      Gallery.deleteMany({}),
      Dashboard.deleteMany({})
    ]);

    console.log('Cleared existing data');

    // Seed hero slides
    const heroSlides = [
      {
        title: 'Welcome to Ledo Sports Academy',
        subtitle: 'Nurturing Champions Since 2010',
        description: 'Join us in our journey to create the next generation of sports stars',
        backgroundImage: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ctaText: 'Join Now',
        ctaLink: '#members',
        redirectUrl: '',
        openNewTab: false
      },
      {
        title: 'Summer Training Camp',
        subtitle: 'June 15 - July 30, 2023',
        description: 'Intensive training sessions with professional coaches',
        backgroundImage: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ctaText: 'Register',
        ctaLink: '#activities',
        redirectUrl: '',
        openNewTab: false
      },
      {
        title: 'State Championship Winners',
        subtitle: 'Congratulations to our U-15 Team',
        description: 'Our academy\'s U-15 team won the state championship for the third consecutive year',
        backgroundImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ctaText: 'View Gallery',
        ctaLink: '#gallery',
        redirectUrl: '',
        openNewTab: false
      }
    ];

    await HeroSlide.insertMany(heroSlides);
    console.log('Seeded hero slides');

    // Seed activities
    const activities = [
      {
        title: 'Weekend Tournament',
        date: new Date('2023-07-15'),
        time: '09:00 AM - 05:00 PM',
        description: 'Inter-academy tournament with 8 participating academies',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
        status: 'upcoming',
        type: 'tournament',
        priority: 'high',
        redirectUrl: '',
        openNewTab: false
      },
      {
        title: 'Friendly Match vs Riverside Academy',
        date: new Date('2023-06-30'),
        time: '04:00 PM - 06:00 PM',
        description: 'Friendly match with our neighboring academy',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        status: 'upcoming',
        type: 'match',
        priority: 'medium',
        redirectUrl: '',
        openNewTab: false
      },
      {
        title: 'Summer Training Camp',
        date: new Date('2023-06-15'),
        time: '08:00 AM - 12:00 PM',
        description: 'Intensive summer training for all age groups',
        image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        status: 'upcoming',
        type: 'training',
        priority: 'high',
        redirectUrl: '',
        openNewTab: false
      },
      {
        title: 'District Championship',
        date: new Date('2023-05-20'),
        time: '10:00 AM - 06:00 PM',
        description: 'Our U-15 team secured 1st place in the district championship',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        status: 'recent',
        type: 'tournament',
        priority: 'high',
        redirectUrl: '',
        openNewTab: false
      },
      {
        title: 'Free Trial Session',
        date: new Date('2023-05-10'),
        time: '04:00 PM - 05:30 PM',
        description: 'Free trial session for new joiners',
        image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        status: 'recent',
        type: 'trial',
        priority: 'medium',
        redirectUrl: '',
        openNewTab: false
      }
    ];

    await Activity.insertMany(activities);
    console.log('Seeded activities');

    // Seed members
    const members = [
      {
        name: 'Rahul Sharma',
        contact: 'rahul.sharma@example.com',
        phone: '9876543210',
        joinDate: new Date('2020-06-15'),
        role: 'student',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'Priya Patel',
        contact: 'priya.patel@example.com',
        phone: '9876543211',
        joinDate: new Date('2021-03-10'),
        role: 'student',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        name: 'Amit Kumar',
        contact: 'amit.kumar@example.com',
        phone: '9876543212',
        joinDate: new Date('2019-08-22'),
        role: 'coach',
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
      },
      {
        name: 'Neha Singh',
        contact: 'neha.singh@example.com',
        phone: '9876543213',
        joinDate: new Date('2022-01-05'),
        role: 'student',
        image: 'https://randomuser.me/api/portraits/women/4.jpg'
      },
      {
        name: 'Rajesh Verma',
        contact: 'rajesh.verma@example.com',
        phone: '9876543214',
        joinDate: new Date('2020-11-18'),
        role: 'admin',
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
      }
    ];

    const savedMembers = await Member.insertMany(members);
    console.log('Seeded members');

    // Seed donations
    const donations = [
      {
        donorName: 'City Sports Foundation',
        amount: 25000,
        date: new Date('2023-04-15'),
        purpose: 'Equipment'
      },
      {
        donorName: 'Local Business Association',
        amount: 15000,
        date: new Date('2023-03-22'),
        purpose: 'Tournament Sponsorship'
      },
      {
        donorName: 'Alumni Association',
        amount: 10000,
        date: new Date('2023-02-10'),
        purpose: 'Scholarship Fund'
      },
      {
        donorName: 'Parent Committee',
        amount: 8000,
        date: new Date('2023-05-05'),
        purpose: 'Facility Maintenance'
      },
      {
        donorName: 'Anonymous Donor',
        amount: 5000,
        date: new Date('2023-01-30'),
        purpose: 'General Fund'
      }
    ];

    await Donation.insertMany(donations);
    console.log('Seeded donations');

    // Seed expenses
    const expenses = [
      {
        description: 'New Training Equipment',
        amount: 12000,
        date: new Date('2023-05-10'),
        category: 'Equipment',
        vendor: 'Sports Gear Ltd.',
        paymentMethod: 'Bank Transfer'
      },
      {
        description: 'Field Maintenance',
        amount: 8000,
        date: new Date('2023-04-25'),
        category: 'Maintenance',
        vendor: 'Green Turf Services',
        paymentMethod: 'Check'
      },
      {
        description: 'Tournament Registration Fee',
        amount: 5000,
        date: new Date('2023-03-15'),
        category: 'Registration',
        vendor: 'District Sports Association',
        paymentMethod: 'Online Payment'
      },
      {
        description: 'Utility Bills',
        amount: 3500,
        date: new Date('2023-05-01'),
        category: 'Utilities',
        vendor: 'City Power & Water',
        paymentMethod: 'Auto Debit'
      },
      {
        description: 'Team Uniforms',
        amount: 15000,
        date: new Date('2023-02-20'),
        category: 'Apparel',
        vendor: 'Sports Wear Co.',
        paymentMethod: 'Credit Card'
      }
    ];

    await Expense.insertMany(expenses);
    console.log('Seeded expenses');

    // Seed experiences
    const experiences = [
      {
        title: 'State Championship Victory',
        date: new Date('2023-04-10'),
        description: 'Our U-15 team won the state championship for the third consecutive year',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        title: 'Academy Inauguration Anniversary',
        date: new Date('2023-01-15'),
        description: 'Celebrated 10 years since the academy was founded',
        image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        title: 'Coach Certification Program',
        date: new Date('2023-03-05'),
        description: 'All our coaches completed the advanced certification program',
        image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80'
      },
      {
        title: 'New Training Facility',
        date: new Date('2022-11-20'),
        description: 'Opened our new indoor training facility with state-of-the-art equipment',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80'
      },
      {
        title: 'National Player Selection',
        date: new Date('2023-02-28'),
        description: 'Two of our academy players were selected for the national youth team',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      }
    ];

    await Experience.insertMany(experiences);
    console.log('Seeded experiences');

    // Seed weekly fees
    const weeklyFees = [];

    for (const member of savedMembers) {
      const payments = [];
      const currentDate = new Date();
      
      // Generate 4 weekly payments for each member
      for (let i = 0; i < 4; i++) {
        const paymentDate = new Date(currentDate);
        paymentDate.setDate(currentDate.getDate() - (i * 7)); // Weekly intervals
        
        let status = 'paid';
        if (i === 2) status = 'pending';
        if (i === 3) status = 'overdue';
        
        payments.push({
          date: paymentDate,
          amount: 20, // Fixed weekly fee amount
          status: status
        });
      }
      
      weeklyFees.push({
        memberId: member._id,
        memberName: member.name,
        payments: payments
      });
    }

    await WeeklyFee.insertMany(weeklyFees);
    console.log('Seeded weekly fees');

    // Seed gallery
    const gallery = [
      {
        title: 'Training Session',
        url: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        album: 'Training',
        isTopFive: true,
        order: 1
      },
      {
        title: 'Championship Trophy',
        url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        album: 'Tournaments',
        isTopFive: true,
        order: 2
      },
      {
        title: 'Team Photo',
        url: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        album: 'Team',
        isTopFive: true,
        order: 3
      },
      {
        title: 'Indoor Facility',
        url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80',
        album: 'Facilities',
        isTopFive: true,
        order: 4
      },
      {
        title: 'Academy Anniversary',
        url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        album: 'Events',
        isTopFive: true,
        order: 5
      },
      {
        title: 'Coach Training',
        url: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
        album: 'Coaching',
        isTopFive: false,
        order: 0
      },
      {
        title: 'Youth Practice',
        url: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        album: 'Training',
        isTopFive: false,
        order: 0
      }
    ];

    await Gallery.insertMany(gallery);
    console.log('Seeded gallery');

    // Seed dashboard
    const totalMembers = await Member.countDocuments();
    const totalActivities = await Activity.countDocuments();
    
    const donationsResult = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' }
        }
      }
    ]);
    const totalDonations = donationsResult.length > 0 ? donationsResult[0].total : 0;
    
    const expensesResult = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' }
        }
      }
    ]);
    const totalExpenses = expensesResult.length > 0 ? expensesResult[0].total : 0;
    
    const netBalance = totalDonations - totalExpenses;
    const totalExperiences = await Experience.countDocuments();
    
    const weeklyFeesData = await WeeklyFee.find();
    let weeklyFeesCollected = 0;
    let pendingFees = 0;
    let overdueFees = 0;
    
    weeklyFeesData.forEach(fee => {
      fee.payments.forEach(payment => {
        if (payment.status === 'paid') {
          weeklyFeesCollected += payment.amount;
        } else if (payment.status === 'pending') {
          pendingFees += payment.amount;
        } else if (payment.status === 'overdue') {
          overdueFees += payment.amount;
        }
      });
    });
    
    const dashboard = new Dashboard({
      totalMembers,
      totalActivities,
      totalDonations,
      totalExpenses,
      netBalance,
      weeklyFeesCollected,
      pendingFees,
      overdueFees,
      totalExperiences,
      lastUpdated: new Date()
    });
    
    await dashboard.save();
    console.log('Seeded dashboard');

    console.log('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}