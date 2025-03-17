
import { motion } from 'framer-motion';
import { DailyMenu, MenuItem } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MenuDisplayProps {
  menu: DailyMenu;
}

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const MenuDisplay = ({ menu }: MenuDisplayProps) => {
  const mealTypes = [
    { title: 'Breakfast', items: menu.breakfast },
    { title: 'Lunch', items: menu.lunch },
    { title: 'Dinner', items: menu.dinner },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {mealTypes.map((meal, index) => (
        <motion.div key={meal.title} variants={itemVariant} className="col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-display">{meal.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {meal.items.map((item: MenuItem, idx: number) => (
                  <li key={idx} className="flex flex-col">
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium">{item.name}</span>
                      <Badge variant={item.type === 'veg' ? 'outline' : item.type === 'non-veg' ? 'destructive' : 'secondary'} className="ml-2">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MenuDisplay;
