
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TimeSlot, timeSlots as initialTimeSlots } from '@/lib/data';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';
import TimeSlotComponent from './TimeSlot';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const RoomBooking = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(initialTimeSlots);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [name, setName] = useState<string>('');

  // Function to book a time slot
  const bookTimeSlot = () => {
    if (!selectedSlot) {
      toast.error('Please select a time slot');
      return;
    }

    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    // Update the time slot
    const updatedTimeSlots = timeSlots.map(slot => 
      slot.id === selectedSlot.id
        ? { ...slot, isBooked: true, bookedBy: name }
        : slot
    );

    setTimeSlots(updatedTimeSlots);
    setSelectedSlot(null);
    setName('');
    toast.success('Meeting room booked successfully!');
  };

  // Function to handle time slot selection
  const handleSlotSelection = (slot: TimeSlot) => {
    if (slot.isBooked) {
      toast.error('This slot is already booked');
      return;
    }
    setSelectedSlot(slot);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Room Booking</h1>
        <p className="text-muted-foreground">
          Book the meeting room for your events and discussions
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
            
            {/* Date Picker */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pointer-events-auto">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    disabled={(date) =>
                      date < new Date() || date > addDays(new Date(), 30)
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            
            {/* Selected Slot */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Selected Slot</label>
              <div className="p-3 bg-secondary rounded-md">
                {selectedSlot ? (
                  <p className="font-medium">
                    {selectedSlot.startTime} - {selectedSlot.endTime}
                  </p>
                ) : (
                  <p className="text-muted-foreground">No slot selected</p>
                )}
              </div>
            </div>
            
            {/* Book Button */}
            <Button 
              className="w-full" 
              onClick={bookTimeSlot} 
              disabled={!selectedSlot || !name.trim()}
            >
              Book Meeting Room
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
            <h2 className="text-xl font-semibold mb-4">Available Time Slots</h2>
            <p className="text-muted-foreground mb-6">
              Select a time slot for {format(date, 'PPPP')}
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {timeSlots.map((slot) => (
                <TimeSlotComponent
                  key={slot.id}
                  slot={slot}
                  isSelected={selectedSlot?.id === slot.id}
                  onSelect={() => handleSlotSelection(slot)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;
