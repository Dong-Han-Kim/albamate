import AlbaformSection from '@/features/landing/components/AlbaformSection';
import AnywhereSection from '@/features/landing/components/AnywhereSection';
import ApplySection from '@/features/landing/components/ApplySection';
import FooterSection from '@/features/landing/components/FooterSection';
import HeroSection from '@/features/landing/components/HeroSection';
import LandingBg from '@/features/landing/components/LandingBg';
import ManageSection from '@/features/landing/components/ManageSection';

const Home = () => {
  return (
    <main>
      <LandingBg />
      <HeroSection />
      <AnywhereSection />
      <AlbaformSection />
      <ManageSection />
      <ApplySection />
      <FooterSection />
    </main>
  );
};

export default Home;
