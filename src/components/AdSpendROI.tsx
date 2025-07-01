
import React from 'react';
import { DollarSign, TrendingUp, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdSpendROI = () => {
  const spendMetrics = [
    {
      title: 'Total Ad Spend',
      value: '$45,280',
      change: '+8.5%',
      trend: 'up',
      period: 'This Month'
    },
    {
      title: 'Cost Per Click',
      value: '$2.15',
      change: '-5.2%',
      trend: 'down',
      period: 'Average'
    },
    {
      title: 'Cost Per Acquisition',
      value: '$24.50',
      change: '+2.1%',
      trend: 'up',
      period: 'Average'
    },
    {
      title: 'Return on Ad Spend',
      value: '425%',
      change: '+12.8%',
      trend: 'up',
      period: 'ROAS'
    }
  ];

  const campaignROI = [
    {
      name: 'Summer Sale Campaign',
      spend: '$12,500',
      revenue: '$54,200',
      roi: '334%',
      status: 'Excellent'
    },
    {
      name: 'Brand Awareness',
      spend: '$8,900',
      revenue: '$22,100',
      roi: '148%',
      status: 'Good'
    },
    {
      name: 'Product Launch',
      spend: '$15,200',
      revenue: '$38,900',
      roi: '156%',
      status: 'Good'
    },
    {
      name: 'Retargeting',
      spend: '$6,800',
      revenue: '$31,400',
      roi: '362%',
      status: 'Excellent'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent':
        return 'bg-green-500/20 text-green-400';
      case 'Good':
        return 'bg-blue-500/20 text-blue-400';
      case 'Average':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-red-500/20 text-red-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Spend Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {spendMetrics.map((metric, index) => (
          <Card 
            key={metric.title}
            className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-green-400" />
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  metric.trend === 'up' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-slate-400">{metric.title}</p>
                <p className="text-xs text-slate-500">{metric.period}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campaign ROI Table */}
      <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            Campaign ROI Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 font-medium py-3 px-4">Campaign</th>
                  <th className="text-left text-slate-400 font-medium py-3 px-4">Ad Spend</th>
                  <th className="text-left text-slate-400 font-medium py-3 px-4">Revenue</th>
                  <th className="text-left text-slate-400 font-medium py-3 px-4">ROI</th>
                  <th className="text-left text-slate-400 font-medium py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {campaignROI.map((campaign, index) => (
                  <tr 
                    key={campaign.name} 
                    className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="py-4 px-4">
                      <div className="text-white font-medium">{campaign.name}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">{campaign.spend}</td>
                    <td className="py-4 px-4 text-slate-300">{campaign.revenue}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-semibold">{campaign.roi}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdSpendROI;
