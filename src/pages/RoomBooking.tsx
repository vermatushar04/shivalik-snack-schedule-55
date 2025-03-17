
import { PageTransition } from '@/components/ui/transitions';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RoomBooking from '@/components/booking/RoomBooking';

const RoomBookingPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 px-6 md:px-10 pb-16">
          <div className="max-w-7xl mx-auto">
            <RoomBooking />
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default RoomBookingPage;
