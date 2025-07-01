
import React from 'react';
import { FileText, BarChart3, PieChart, TrendingUp, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TemplatesSection = () => {
  const templates = [
    {
      name: 'Campaign Performance',
      description: 'Track key metrics across all campaigns',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'ROI Analysis',
      description: 'Analyze return on investment',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Audience Insights',
      description: 'Understand your target audience',
      icon: PieChart,
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Custom Report',
      description: 'Build your own dashboard',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <FileText className="w-5 h-5 text-white" />
          </div>
          Dashboard Templates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {templates.map((template, index) => (
            <div
              key={template.name}
              className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-3 rounded-lg bg-gradient-to-r ${template.color} mb-3 w-fit`}>
                <template.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{template.name}</h3>
              <p className="text-slate-400 text-sm mb-3">{template.description}</p>
              <Button size="sm" variant="outline" className="w-full bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700">
                Use Template
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplatesSection;
