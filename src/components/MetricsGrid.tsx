
import React from 'react';
import { TrendingUp, TrendingDown, Eye, MousePointer, DollarSign, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MetricsGrid = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$124,350',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Impressions',
      value: '2.4M',
      change: '+8.2%',
      trend: 'up',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Click Rate',
      value: '3.24%',
      change: '-0.3%',
      trend: 'down',
      icon: MousePointer,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Conversions',
      value: '1,847',
      change: '+15.7%',
      trend: 'up',
      icon: Target,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.title}
          className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.color} shadow-lg`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                metric.trend === 'up' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {metric.change}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">{metric.value}</p>
              <p className="text-sm text-slate-400">{metric.title}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsGrid;
