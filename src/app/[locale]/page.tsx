import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import DeepDive from '@/components/DeepDive';
import PlanYourVisit from '@/components/PlanYourVisit';
import DidYouKnow from '@/components/DidYouKnow';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Intro />
        <BasicInfo />
        <DeepDive />
        <PlanYourVisit />
        <DidYouKnow />
        <Gallery />
        <Reviews />
        <FAQ />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
