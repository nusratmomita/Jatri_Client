import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CompareCars = () => {
  const [cars, setCars] = useState([]);
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);

  // Fetch cars from backend
  useEffect(() => {
    fetch("https://jatri-server.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  // Build comparison data for Recharts
  const data =
    car1 && car2
      ? [
          { name: car1.car_model, rental_price: car1.rental_price },
          { name: car2.car_model, rental_price: car2.rental_price },
        ]
      : [];

  // Prevent selecting same car
  const availableCarsForSecondDropdown = car1
    ? cars.filter((c) => c._id !== car1._id)
    : cars;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Vehicle Comparison Tool
          </h1>
          <p className="text-slate-600 mt-2">
            Compare rental prices and features side by side
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Dropdowns */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">
            Select Vehicles to Compare
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                First Vehicle
              </label>
              <select
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={(e) =>
                  setCar1(cars.find((c) => c._id === e.target.value) || null)
                }
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a vehicle
                </option>
                {cars.map((car) => (
                  <option key={car._id} value={car._id}>
                    {car.car_model}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Second Vehicle
              </label>
              <select
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={(e) =>
                  setCar2(
                    availableCarsForSecondDropdown.find(
                      (c) => c._id === e.target.value
                    ) || null
                  )
                }
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a vehicle
                </option>
                {availableCarsForSecondDropdown.map((car) => (
                  <option key={car._id} value={car._id}>
                    {car.car_model}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Chart */}
        {car1 && car2 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Rental Price Comparison
            </h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#475569' }}
                    axisLine={{ stroke: '#cbd5e1' }}
                  />
                  <YAxis 
                    tick={{ fill: '#475569' }}
                    axisLine={{ stroke: '#cbd5e1' }}
                    label={{ value: '$ per day', angle: -90, position: 'insideLeft', fill: '#475569' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="rental_price"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                    name="Daily Rate"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Details */}
        {car1 && car2 && (
          <div className="grid md:grid-cols-2 gap-8">
            {[car1, car2].map((car) => (
              <div
                key={car._id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-56 bg-slate-100">
                  <img
                    src={car.car_image}
                    alt={car.car_model}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {car.car_model}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Daily Rate</span>
                      <span className="text-xl font-bold text-blue-600">
                        ${car.rental_price}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Location</span>
                      <span className="text-slate-900">{car.car_location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Total Bookings</span>
                      <span className="text-slate-900">{car.car_booking_count}</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Registration</span>
                      <span className="text-slate-900 font-mono text-sm">{car.reg_no}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                      Features
                    </h4>
                    <div className="space-y-2">
                      {car.car_features.map((f, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!car1 && !car2 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                No Comparison Yet
              </h3>
              <p className="text-slate-600">
                Select two vehicles from the dropdowns above to start comparing
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareCars;