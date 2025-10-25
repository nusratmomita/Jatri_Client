import React, { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { AuthContext } from "../Authentication/AuthContext";


const DashboardRoot = () => {

    const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings by user email
  useEffect(() => {
    const fetchBookings = async () => {
      if (!user?.email) return;

      try {
        const token = await user.getIdToken(); // verifyFirebaseToken requires it
        const res = await fetch(
          `https://jatri-server.vercel.app/bookings/email?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-[#FFF2F2] to-[#DAD2FF]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#2D336B] mb-4"></div>
        <p className="text-xl font-medium text-gray-700">Loading your dashboard...</p>
      </div>
    );
  }

  // 🧮 Calculations
  const totalBookings = bookings.length;
  const totalPrice = bookings.reduce(
    (sum, item) => sum + (item.totalPrice || item.price || 0),
    0
  );

  // 📊 Count cars by model (or type)
  const carTypeCount = bookings.reduce((acc, b) => {
    const model = b.carModel || "BMW";
    acc[model] = (acc[model] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(carTypeCount).map(([name, value]) => ({
    name,
    value,
  }));

  const statusCounts = bookings.reduce(
    (acc, b) => {
      const status = (b.bookingStatus || "unknown").toLowerCase();
      if (status.includes("confirm")) acc.confirmed++;
      else if (status.includes("pending")) acc.pending++;
      else if (status.includes("cancel")) acc.canceled++;
      else acc.other++;
      return acc;
    },
    { confirmed: 0, pending: 0, canceled: 0, other: 0 }
  );

  const COLORS = ["#2D336B", "#9333ea", "#010006", "#5a5f9e", "#b8b3e8"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF2F2] to-[#DAD2FF] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#2D336B] mb-2">
            Welcome back, {user?.displayName || "User"}! 👋
          </h1>
          <p className="text-gray-600">Here's an overview of your booking activity</p>
        </div>

        {/* Summary Cards - Top Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#2D336B] hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Total Bookings</p>
                <p className="text-4xl font-bold text-[#2D336B]">{totalBookings}</p>
              </div>
              <div className="bg-gradient-to-br from-[#2D336B] to-[#5a5f9e] rounded-full p-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Total Spent</p>
                <p className="text-4xl font-bold text-green-600">${totalPrice}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">Favorite Car</p>
                <p className="text-2xl font-bold text-purple-600">
                  {chartData.length > 0
                    ? chartData.reduce((a, b) => (a.value > b.value ? a : b)).name
                    : "N/A"}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Status Cards - Second Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Confirmed</p>
              <div className="bg-green-100 rounded-full p-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-green-600">{statusCounts.confirmed}</p>
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                style={{ width: totalBookings > 0 ? `${(statusCounts.confirmed / totalBookings) * 100}%` : '0%' }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Pending</p>
              <div className="bg-yellow-100 rounded-full p-2">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-yellow-600">{statusCounts.pending}</p>
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-500"
                style={{ width: totalBookings > 0 ? `${(statusCounts.pending / totalBookings) * 100}%` : '0%' }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Canceled</p>
              <div className="bg-red-100 rounded-full p-2">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-red-600">{statusCounts.canceled}</p>
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"
                style={{ width: totalBookings > 0 ? `${(statusCounts.canceled / totalBookings) * 100}%` : '0%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#2D336B]">
              Car Preference Analysis
            </h2>
            <div className="bg-gradient-to-br from-[#2D336B] to-[#5a5f9e] rounded-lg px-4 py-2">
              <span className="text-white text-sm font-semibold">Statistics</span>
            </div>
          </div>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={true}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '8px'
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="bg-gray-100 rounded-full p-6 mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg font-medium">No booking data available yet</p>
              <p className="text-gray-400 text-sm mt-1">Start booking to see your statistics</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;