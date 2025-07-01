
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { exportDashboardReport } from '@/utils/exportUtils';

const DashboardHeader = () => {
  const [selectedDateRange, setSelectedDateRange] = useState('30');

  const dateRanges = [
    { value: '7', label: 'Last 7 Days' },
    { value: '30', label: 'Last 30 Days' },
    { value: '90', label: 'Last 90 Days' },
    { value: '365', label: 'Last Year' },
  ];

  const handleExportReport = () => {
    console.log(`Exporting report for ${selectedDateRange} days`);
    exportDashboardReport(selectedDateRange);
  };

  return (
    <header className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ad Insights Dashboard
                </h1>
                <p className="text-slate-400">Real-time advertising performance analytics</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
              <SelectTrigger className="w-40 bg-slate-800/50 border-slate-600 text-slate-300">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                {dateRanges.map((range) => (
                  <SelectItem 
                    key={range.value} 
                    value={range.value}
                    className="text-slate-300 focus:bg-slate-700 focus:text-white"
                  >
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              onClick={handleExportReport}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
