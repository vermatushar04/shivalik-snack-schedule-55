
import { motion } from 'framer-motion';
import { CalendarCheck, MessageSquareDashed, UtensilsCrossed, Wifi } from 'lucide-react';

const features = [
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: 'Delicious Meals',
    description: 'Enjoy a variety of nutritious and tasty Indian cuisine prepared by our skilled chefs.',
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
    title: 'Meeting Room',
    description: 'Book our well-equipped meeting room for group studies or professional meetings.',
  },
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: 'High-Speed WiFi',
    description: 'Stay connected with our reliable high-speed internet connection throughout the hostel.',
  },
  {
    icon: <MessageSquareDashed className="h-8 w-8 text-primary" />,
    title: '24/7 Support',
    description: 'Our dedicated staff is available round the clock to assist with any issues or queries.',
  },
];

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

const Features = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-primary">Shivalik</span> Hostel?
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide comfortable accommodation with modern amenities to make your stay pleasant and productive.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
