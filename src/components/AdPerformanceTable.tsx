
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';

const AdPerformanceTable = () => {
  const adData = [
    {
      id: 1,
      campaign: 'Summer Sale 2024',
      impressions: '245K',
      clicks: '3.2K',
      ctr: '1.31%',
      cpc: '$2.45',
      conversions: 127,
      status: 'Active',
      trend: 'up',
      trendValue: '+12%'
    },
    {
      id: 2,
      campaign: 'Black Friday Deals',
      impressions: '189K',
      clicks: '5.1K',
      ctr: '2.70%',
      cpc: '$1.89',
      conversions: 284,
      status: 'Active',
      trend: 'up',
      trendValue: '+24%'
    },
    {
      id: 3,
      campaign: 'Spring Collection',
      impressions: '156K',
      clicks: '1.8K',
      ctr: '1.15%',
      cpc: '$3.21',
      conversions: 89,
      status: 'Paused',
      trend: 'down',
      trendValue: '-8%'
    },
    {
      id: 4,
      campaign: 'Holiday Special',
      impressions: '298K',
      clicks: '4.7K',
      ctr: '1.58%',
      cpc: '$2.12',
      conversions: 198,
      status: 'Active',
      trend: 'up',
      trendValue: '+18%'
    },
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Campaign Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Campaign</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Impressions</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Clicks</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">CTR</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">CPC</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Conversions</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium">Trend</th>
                <th className="text-left py-3 px-4 text-slate-300 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {adData.map((row, index) => (
                <tr 
                  key={row.id} 
                  className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <td className="py-4 px-4">
                    <div className="font-medium text-white">{row.campaign}</div>
                  </td>
                  <td className="py-4 px-4 text-slate-300">{row.impressions}</td>
                  <td className="py-4 px-4 text-slate-300">{row.clicks}</td>
                  <td className="py-4 px-4 text-slate-300">{row.ctr}</td>
                  <td className="py-4 px-4 text-slate-300">{row.cpc}</td>
                  <td className="py-4 px-4 text-slate-300">{row.conversions}</td>
                  <td className="py-4 px-4">
                    <Badge 
                      variant={row.status === 'Active' ? 'default' : 'secondary'}
                      className={row.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      }
                    >
                      {row.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className={`flex items-center gap-1 ${
                      row.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {row.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="text-sm font-medium">{row.trendValue}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdPerformanceTable;
