
export interface MenuItem {
  name: string;
  description: string;
  type: 'veg' | 'non-veg' | 'dessert';
}

export interface DailyMenu {
  day: string;
  breakfast: MenuItem[];
  lunch: MenuItem[];
  dinner: MenuItem[];
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  bookedBy?: string;
}

export const weeklyMenu: DailyMenu[] = [
  {
    day: 'Monday',
    breakfast: [
      { name: 'Poha', description: 'Flattened rice with vegetables and spices', type: 'veg' },
      { name: 'Boiled Eggs', description: 'Boiled eggs with salt and pepper', type: 'non-veg' },
      { name: 'Tea/Coffee', description: 'Hot beverage of your choice', type: 'veg' }
    ],
    lunch: [
      { name: 'Rajma Chawal', description: 'Kidney beans curry with rice', type: 'veg' },
      { name: 'Tandoori Roti', description: 'Whole wheat bread baked in tandoor', type: 'veg' },
      { name: 'Pickle & Papad', description: 'Spicy condiments', type: 'veg' }
    ],
    dinner: [
      { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich buttery tomato gravy', type: 'veg' },
      { name: 'Jeera Rice', description: 'Cumin-flavored rice', type: 'veg' },
      { name: 'Gulab Jamun', description: 'Sweet milk solid dumplings', type: 'dessert' }
    ]
  },
  {
    day: 'Tuesday',
    breakfast: [
      { name: 'Idli Sambar', description: 'Steamed rice cakes with lentil soup', type: 'veg' },
      { name: 'Coconut Chutney', description: 'Coconut-based condiment', type: 'veg' },
      { name: 'Tea/Coffee', description: 'Hot beverage of your choice', type: 'veg' }
    ],
    lunch: [
      { name: 'Chole Bhature', description: 'Spiced chickpea curry with fried bread', type: 'veg' },
      { name: 'Vegetable Raita', description: 'Yogurt with mixed vegetables', type: 'veg' },
      { name: 'Green Salad', description: 'Fresh vegetables', type: 'veg' }
    ],
    dinner: [
      { name: 'Butter Chicken', description: 'Chicken in rich buttery tomato gravy', type: 'non-veg' },
      { name: 'Veg Biryani', description: 'Spiced rice with vegetables', type: 'veg' },
      { name: 'Rasmalai', description: 'Sweet cottage cheese dumplings in milk', type: 'dessert' }
    ]
  },
  {
    day: 'Wednesday',
    breakfast: [
      { name: 'Aloo Paratha', description: 'Potato-stuffed flatbread', type: 'veg' },
      { name: 'Yogurt', description: 'Plain yogurt', type: 'veg' },
      { name: 'Tea/Coffee', description: 'Hot beverage of your choice', type: 'veg' }
    ],
    lunch: [
      { name: 'Dal Makhani', description: 'Creamy black lentil curry', type: 'veg' },
      { name: 'Steamed Rice', description: 'Plain rice', type: 'veg' },
      { name: 'Mixed Pickle', description: 'Assorted pickled vegetables', type: 'veg' }
    ],
    dinner: [
      { name: 'Malai Kofta', description: 'Fried veggie balls in creamy gravy', type: 'veg' },
      { name: 'Garlic Naan', description: 'Garlic-flavored leavened bread', type: 'veg' },
      { name: 'Fruit Custard', description: 'Sweet custard with mixed fruits', type: 'dessert' }
    ]
  },
  {
    day: 'Thursday',
    breakfast: [
      { name: 'Upma', description: 'Savory semolina porridge', type: 'veg' },
      { name: 'Bread Omelette', description: 'Egg omelette with bread', type: 'non-veg' },
      { name: 'Tea/Coffee', description: 'Hot beverage of your choice', type: 'veg' }
    ],
    lunch: [
      { name: 'Kadhi Pakora', description: 'Yogurt curry with fried gram flour dumplings', type: 'veg' },
      { name: 'Pulao', description: 'Vegetable rice', type: 'veg' },
      { name: 'Boondi Raita', description: 'Yogurt with fried gram flour droplets', type: 'veg' }
    ],
    dinner: [
      { name: 'Fish Curry', description: 'Fish in tangy curry', type: 'non-veg' },
      { name: 'Veg Pulao', description: 'Rice cooked with vegetables and spices', type: 'veg' },
      { name: 'Ice Cream', description: 'Vanilla ice cream', type: 'dessert' }
    ]
  },
  {
    day: 'Friday',
    breakfast: [
      { name: 'Masala Dosa', description: 'Crispy rice crepe with spiced potato filling', type: 'veg' },
      { name: 'Sambar', description: 'Lentil stew with vegetables', type: 'veg' },
      { name: 'Tea/Coffee', description: 'Hot beverage of your choice', type: 'veg' }
    ],
    lunch: [
      { name: 'Pindi Chole', description: 'Spicy chickpea curry', type: 'veg' },
      { name: 'Kulcha', description: 'Leavened flatbread', type: 'veg' },
      { name: 'Onion Salad', description: 'Sliced onions with lemon', type: 'veg' }
    ],
    dinner: [
      { name: 'Chicken Biryani', description: 'Fragrant rice with chicken and spices', type: 'non-veg' },
      { name: 'Veg Korma', description: 'Mixed vegetables in rich creamy gravy', type: 'veg' },
      { name: 'Kheer', description: 'Rice pudding', type: 'dessert' }
    ]
  },
  {
    day: 'Saturday',
    breakfast: [
      { name: 'Puri Bhaji', description: 'Fried bread with potato curry', type: 'veg' },
      { name: 'Boiled Eggs', description: 'Boiled eggs with salt and pepper', type: 'non-veg' },
      { name: 'Tea/Coffee', description: 'Hot beverage of your choice', type: 'veg' }
    ],
    lunch: [
      { name: 'Veg Pulao', description: 'Rice cooked with vegetables and spices', type: 'veg' },
      { name: 'Raita', description: 'Yogurt with cucumber', type: 'veg' },
      { name: 'Papad', description: 'Crispy lentil wafer', type: 'veg' }
    ],
    dinner: [
      { name: 'Mutton Rogan Josh', description: 'Aromatic lamb curry', type: 'non-veg' },
      { name: 'Paneer Tikka Masala', description: 'Grilled cottage cheese in spicy gravy', type: 'veg' },
      { name: 'Gajar Ka Halwa', description: 'Sweet carrot pudding', type: 'dessert' }
    ]
  },
  {
    day: 'Sunday',
    breakfast: [
      { name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread', type: 'veg' },
      { name: 'Fresh Fruit', description: 'Assorted seasonal fruits', type: 'veg' },
      { name: 'Tea/Coffee', description: 'Hot beverage of your choice', type: 'veg' }
    ],
    lunch: [
      { name: 'Special Thali', description: 'Assorted dishes with rice, bread, and sides', type: 'veg' },
      { name: 'Sweet Lassi', description: 'Sweet yogurt drink', type: 'veg' },
      { name: 'Papad & Pickle', description: 'Crispy lentil wafer with pickle', type: 'veg' }
    ],
    dinner: [
      { name: 'Hyderabadi Biryani', description: 'Spiced rice with meat and vegetables', type: 'non-veg' },
      { name: 'Dal Tadka', description: 'Tempered yellow lentils', type: 'veg' },
      { name: 'Jalebi with Rabri', description: 'Sweet fried batter soaked in sugar syrup with thickened milk', type: 'dessert' }
    ]
  }
];

export const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const startHour = 9; // 9 AM
  const endHour = 21; // 9 PM
  
  for (let hour = startHour; hour < endHour; hour++) {
    slots.push({
      id: `slot-${hour}`,
      startTime: `${hour}:00`,
      endTime: `${hour + 1}:00`,
      isBooked: Math.random() > 0.7, // Randomly set some slots as booked
      bookedBy: ''
    });
  }
  
  return slots;
};

export const timeSlots: TimeSlot[] = generateTimeSlots();
