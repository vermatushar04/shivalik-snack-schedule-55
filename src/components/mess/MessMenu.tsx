
import { useState } from 'react';
import { motion } from 'framer-motion';
import { DailyMenu, weeklyMenu } from '@/lib/data';
import MenuDisplay from './MenuDisplay';
import PDFUploader from './PDFUploader';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MessMenu = () => {
  const [selectedDay, setSelectedDay] = useState<string>(weeklyMenu[0].day);
  const [view, setView] = useState<'weekly' | 'pdf'>('weekly');

  // Find the menu for the selected day
  const selectedDayMenu = weeklyMenu.find(menu => menu.day === selectedDay) || weeklyMenu[0];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Mess Menu</h1>
          <p className="text-muted-foreground">
            Explore our delicious Indian cuisine served throughout the week
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button 
            variant={view === 'weekly' ? 'default' : 'outline'} 
            onClick={() => setView('weekly')}
          >
            Weekly Menu
          </Button>
          <Button 
            variant={view === 'pdf' ? 'default' : 'outline'} 
            onClick={() => setView('pdf')}
          >
            PDF Menu
          </Button>
        </div>
      </div>

      {view === 'weekly' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Tabs defaultValue={selectedDay} onValueChange={setSelectedDay} className="w-full">
            <TabsList className="w-full flex mb-6 overflow-x-auto no-scrollbar">
              {weeklyMenu.map((menu) => (
                <TabsTrigger 
                  key={menu.day}
                  value={menu.day}
                  className="flex-1"
                >
                  {menu.day}
                </TabsTrigger>
              ))}
            </TabsList>
            {weeklyMenu.map((menu: DailyMenu) => (
              <TabsContent key={menu.day} value={menu.day} className="mt-0">
                <MenuDisplay menu={menu} />
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <PDFUploader />
        </motion.div>
      )}
    </div>
  );
};

export default MessMenu;
