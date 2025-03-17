
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { TimeSlot } from '@/lib/data';
import { cn } from '@/lib/utils';

interface TimeSlotProps {
  slot: TimeSlot;
  isSelected: boolean;
  onSelect: () => void;
}

const TimeSlotComponent = ({ slot, isSelected, onSelect }: TimeSlotProps) => {
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      variants={itemVariant}
      whileHover={{ scale: slot.isBooked ? 1 : 1.02 }}
      className={cn(
        "rounded-lg p-4 cursor-pointer transition-all border",
        slot.isBooked
          ? "bg-secondary/50 border-border"
          : isSelected
          ? "bg-primary/10 border-primary"
          : "bg-white hover:bg-secondary/30 border-border"
      )}
      onClick={slot.isBooked ? undefined : onSelect}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={cn(
          "font-medium",
          slot.isBooked ? "text-muted-foreground" : ""
        )}>
          {slot.startTime} - {slot.endTime}
        </span>
        {slot.isBooked ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-destructive/10 text-destructive">
            <X className="w-3 h-3 mr-1" />
            Booked
          </span>
        ) : isSelected ? (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
            <Check className="w-3 h-3 mr-1" />
            Selected
          </span>
        ) : (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
            Available
          </span>
        )}
      </div>
      {slot.isBooked && slot.bookedBy && (
        <p className="text-xs text-muted-foreground">
          Booked by: {slot.bookedBy}
        </p>
      )}
    </motion.div>
  );
};

export default TimeSlotComponent;
