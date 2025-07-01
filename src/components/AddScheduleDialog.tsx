
import React, { useState } from 'react';
import { Calendar, Clock, Mail, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface AddScheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddScheduleDialog = ({ open, onOpenChange }: AddScheduleDialogProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');
  const [recipients, setRecipients] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !frequency || !time) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    console.log('Creating new schedule:', {
      title,
      description,
      frequency,
      time,
      recipients
    });

    toast({
      title: "Schedule Created",
      description: `${title} has been scheduled successfully`,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setFrequency('');
    setTime('');
    setRecipients('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            Add New Schedule
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Create a new automated report schedule
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Title *</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Monthly Performance Report"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Description</label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the report"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Frequency *</label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="daily" className="text-slate-300 focus:bg-slate-700">Daily</SelectItem>
                <SelectItem value="weekly" className="text-slate-300 focus:bg-slate-700">Weekly</SelectItem>
                <SelectItem value="monthly" className="text-slate-300 focus:bg-slate-700">Monthly</SelectItem>
                <SelectItem value="quarterly" className="text-slate-300 focus:bg-slate-700">Quarterly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Time *</label>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Recipients (optional)</label>
            <Input
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
              placeholder="team@company.com, manager@company.com"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>
        </form>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Create Schedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;
