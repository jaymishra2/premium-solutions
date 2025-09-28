'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Eye, Package, Newspaper, MessageSquare, FileText } from 'lucide-react'

interface DashboardStats {
  products: number
  news: number
  contacts: number
  quotes: number
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>({
    products: 0,
    news: 0,
    contacts: 0,
    quotes: 0
  })
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    setStats({
      products: 8,
      news: 6,
      contacts: 12,
      quotes: 5
    })
  }, [])

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Eye },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'news', name: 'News', icon: Newspaper },
    { id: 'contacts', name: 'Contacts', icon: MessageSquare },
    { id: 'quotes', name: 'Quotes', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-steel-900">Admin Dashboard</h1>
          <p className="text-steel-600 mt-2">Manage your website content and customer inquiries</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-steel-500 hover:text-steel-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Package className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-steel-600">Total Products</p>
                    <p className="text-2xl font-bold text-steel-900">{stats.products}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Newspaper className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-steel-600">News Articles</p>
                    <p className="text-2xl font-bold text-steel-900">{stats.news}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-steel-600">Contact Inquiries</p>
                    <p className="text-2xl font-bold text-steel-900">{stats.contacts}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-steel-600">Quote Requests</p>
                    <p className="text-2xl font-bold text-steel-900">{stats.quotes}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-steel-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <button className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Plus className="w-5 h-5 text-primary-600" />
                  <span className="text-steel-700">Add Product</span>
                </button>
                <button className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Plus className="w-5 h-5 text-green-600" />
                  <span className="text-steel-700">Add News Article</span>
                </button>
                <button className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="w-5 h-5 text-yellow-600" />
                  <span className="text-steel-700">View Contacts</span>
                </button>
                <button className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="w-5 h-5 text-purple-600" />
                  <span className="text-steel-700">View Quotes</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-steel-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-steel-700">New quote request from ABC Company</span>
                  </div>
                  <span className="text-sm text-steel-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-steel-700">New contact form submission</span>
                  </div>
                  <span className="text-sm text-steel-500">4 hours ago</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-steel-700">Product "Stainless Steel Plate 304" updated</span>
                  </div>
                  <span className="text-sm text-steel-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would contain specific management interfaces */}
        {activeTab !== 'overview' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-steel-900 mb-4">
              {tabs.find(tab => tab.id === activeTab)?.name} Management
            </h3>
            <p className="text-steel-600">
              This section would contain the management interface for {activeTab}. 
              In a full implementation, you would have forms to add, edit, and delete items.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
