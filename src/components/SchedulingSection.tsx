import React, { useState } from 'react';
import { Calendar, Share2, Clock, Users, Mail, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AddScheduleDialog from './AddScheduleDialog';

const SchedulingSection = () => {
  const [isAddScheduleOpen, setIsAddScheduleOpen] = useState(false);

  const schedulingOptions = [
    {
      title: 'Daily Reports',
      description: 'Automated daily performance summaries',
      icon: Calendar,
      status: 'Active',
      nextRun: '6:00 AM Tomorrow'
    },
    {
      title: 'Weekly Analysis',
      description: 'Comprehensive weekly insights',
      icon: Clock,
      status: 'Scheduled',
      nextRun: 'Monday 9:00 AM'
    }
  ];

  const sharingOptions = [
    {
      title: 'Team Dashboard',
      description: 'Share with marketing team',
      icon: Users,
      recipients: 8
    },
    {
      title: 'Executive Summary',
      description: 'Monthly reports for leadership',
      icon: Mail,
      recipients: 3
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scheduling Section */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              Scheduled Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {schedulingOptions.map((schedule, index) => (
              <div key={schedule.title} className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <schedule.icon className="w-5 h-5 text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">{schedule.title}</h3>
                      <p className="text-slate-400 text-sm">{schedule.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    schedule.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {schedule.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Next: {schedule.nextRun}</span>
                  <Button size="sm" variant="outline" className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700">
                    Configure
                  </Button>
                </div>
              </div>
            ))}
            <Button 
              onClick={() => setIsAddScheduleOpen(true)}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Add New Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Sharing Section */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg">
                <Share2 className="w-5 h-5 text-white" />
              </div>
              Sharing & Collaboration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sharingOptions.map((sharing, index) => (
              <div key={sharing.title} className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <sharing.icon className="w-5 h-5 text-purple-400" />
                    <div>
                      <h3 className="text-white font-semibold">{sharing.title}</h3>
                      <p className="text-slate-400 text-sm">{sharing.description}</p>
                    </div>
                  </div>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                    {sharing.recipients} users
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Share2 className="w-3 h-3 mr-1" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline" className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700">
                    <Download className="w-3 h-3 mr-1" />
                    Export
                  </Button>
                </div>
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
              <Users className="w-4 h-4 mr-2" />
              Manage Access
            </Button>
          </CardContent>
        </Card>
      </div>

      <AddScheduleDialog 
        open={isAddScheduleOpen} 
        onOpenChange={setIsAddScheduleOpen} 
      />
    </>
  );
};

export default SchedulingSection;
