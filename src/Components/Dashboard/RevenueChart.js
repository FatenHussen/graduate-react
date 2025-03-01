import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = ({data}) => {
    const [selectedPeriod, setSelectedPeriod] = useState('daily');
  const [selectedMonth, setSelectedMonth] = useState('january');
  const months = Object.keys(data.daily);

  // Transform data into Recharts format
  const formatXAxis = (period) => {
    if (period === 'monthly') return 'Month';
    return period === 'daily' ? 'Day' : 'Week';
  };

  const getChartData = () => {
    if (selectedPeriod === 'monthly') {
      return months.map(month => ({
        name: month.charAt(0).toUpperCase() + month.slice(1),
        revenue: data.monthly[month]
      }));
    }
    
    return data[selectedPeriod][selectedMonth].map((value, index) => ({
      name: `${selectedPeriod === 'daily' ? 'Day' : 'Week'} ${index + 1}`,
      revenue: value
    }));
  };
  return (
    <div className="p-2 md:p-3 bg-[#cddce3] rounded-xl shadow-md shadow-[#8e8e8e]">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
      <h3 className="text-lg font-semibold text-gray-700">Revenue Overview</h3>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <div className="flex gap-2">
          {['daily', 'monthly'].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${selectedPeriod === period 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
        {selectedPeriod !== 'monthly' && (
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-200 text-sm"
          >
            {months.map(month => (
              <option key={month} value={month}>
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>

    <div className="h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={getChartData()}>
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            label={{ 
              value: formatXAxis(selectedPeriod),
              position: 'bottom',
              fontSize: 14
            }}
          />
          <YAxis
            stroke="#6b7280"
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
          />
          <Bar 
            dataKey="revenue" 
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
  )
}

export default RevenueChart