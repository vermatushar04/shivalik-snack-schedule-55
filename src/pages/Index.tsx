
import { PageTransition } from '@/components/ui/transitions';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
