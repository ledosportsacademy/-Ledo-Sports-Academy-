/**
 * API Client for Ledo Sports Academy
 * This file provides functions to interact with the backend API
 */

const API_BASE_URL = '/api';

// Generic API request function
async function apiRequest(endpoint, method = 'GET', data = null) {
  const url = `${API_BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API request failed with status ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}

// Hero Slides API
const heroApi = {
  getAll: () => apiRequest('/hero-slides'),
  getById: (id) => apiRequest(`/hero-slides/${id}`),
  create: (data) => apiRequest('/hero-slides', 'POST', data),
  update: (id, data) => apiRequest(`/hero-slides/${id}`, 'PATCH', data),
  delete: (id) => apiRequest(`/hero-slides/${id}`, 'DELETE')
};

// Activities API
const activityApi = {
  getAll: () => apiRequest('/activities'),
  getByStatus: (status) => apiRequest(`/activities/status/${status}`),
  getById: (id) => apiRequest(`/activities/${id}`),
  create: (data) => apiRequest('/activities', 'POST', data),
  update: (id, data) => apiRequest(`/activities/${id}`, 'PATCH', data),
  delete: (id) => apiRequest(`/activities/${id}`, 'DELETE')
};

// Members API
const memberApi = {
  getAll: () => apiRequest('/members'),
  getById: (id) => apiRequest(`/members/${id}`),
  create: (data) => apiRequest('/members', 'POST', data),
  update: (id, data) => apiRequest(`/members/${id}`, 'PATCH', data),
  delete: (id) => apiRequest(`/members/${id}`, 'DELETE')
};

// Donations API
const donationApi = {
  getAll: () => apiRequest('/donations'),
  getTotal: () => apiRequest('/donations/total'),
  getById: (id) => apiRequest(`/donations/${id}`),
  create: (data) => apiRequest('/donations', 'POST', data),
  update: (id, data) => apiRequest(`/donations/${id}`, 'PATCH', data),
  delete: (id) => apiRequest(`/donations/${id}`, 'DELETE')
};

// Expenses API
const expenseApi = {
  getAll: () => apiRequest('/expenses'),
  getTotal: () => apiRequest('/expenses/total'),
  getByCategory: (category) => apiRequest(`/expenses/category/${category}`),
  getById: (id) => apiRequest(`/expenses/${id}`),
  create: (data) => apiRequest('/expenses', 'POST', data),
  update: (id, data) => apiRequest(`/expenses/${id}`, 'PATCH', data),
  delete: (id) => apiRequest(`/expenses/${id}`, 'DELETE')
};

// Experiences API
const experienceApi = {
  getAll: () => apiRequest('/experiences'),
  getById: (id) => apiRequest(`/experiences/${id}`),
  create: (data) => apiRequest('/experiences', 'POST', data),
  update: (id, data) => apiRequest(`/experiences/${id}`, 'PATCH', data),
  delete: (id) => apiRequest(`/experiences/${id}`, 'DELETE')
};

// Weekly Fees API
const weeklyFeeApi = {
  getAll: () => apiRequest('/weekly-fees'),
  getByMember: (memberId) => apiRequest(`/weekly-fees/member/${memberId}`),
  getStats: () => apiRequest('/weekly-fees/stats'),
  getById: (id) => apiRequest(`/weekly-fees/${id}`),
  create: (data) => apiRequest('/weekly-fees', 'POST', data),
  addPayment: (id, data) => apiRequest(`/weekly-fees/${id}/payment`, 'POST', data),
  updatePaymentStatus: (id, date, status) => apiRequest(`/weekly-fees/${id}/payment-status`, 'PATCH', { date, status }),
  update: (id, data) => apiRequest(`/weekly-fees/${id}`, 'PATCH', data),
  delete: (id) => apiRequest(`/weekly-fees/${id}`, 'DELETE')
};

// Gallery API
const galleryApi = {
  getAll: () => apiRequest('/gallery'),
  getTopFive: () => apiRequest('/gallery/top-five'),
  getByAlbum: (album) => apiRequest(`/gallery/album/${album}`),
  getById: (id) => apiRequest(`/gallery/${id}`),
  create: (data) => apiRequest('/gallery', 'POST', data),
  update: (id, data) => apiRequest(`/gallery/${id}`, 'PATCH', data),
  toggleTopFive: (id) => apiRequest(`/gallery/${id}/toggle-top-five`, 'PATCH'),
  updateOrder: (id, order) => apiRequest(`/gallery/${id}/update-order/${order}`, 'PATCH'),
  delete: (id) => apiRequest(`/gallery/${id}`, 'DELETE')
};

// Dashboard API
const dashboardApi = {
  getStats: () => apiRequest('/dashboard'),
  updateStats: () => apiRequest('/dashboard/update', 'POST'),
  getFinancialOverview: () => apiRequest('/dashboard/financial-overview'),
  getRecentActivities: () => apiRequest('/dashboard/recent-activities')
};

// Export all API functions
const api = {
  hero: heroApi,
  activity: activityApi,
  member: memberApi,
  donation: donationApi,
  expense: expenseApi,
  experience: experienceApi,
  weeklyFee: weeklyFeeApi,
  gallery: galleryApi,
  dashboard: dashboardApi
};