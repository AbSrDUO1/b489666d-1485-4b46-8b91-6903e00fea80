"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const navLinks = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How to Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' },
];

export default function Home() {
  return (
    <SiteThemeProvider
      theme={{
        styleVariant: "funAndTrendy",
        colorTemplate: 1,
        textAnimation: "slide",
      }}
    >
      <NavbarStyleApple
        navItems={navLinks}
        logoSrc="/images/logo.svg"
        logoAlt="BrandName"
        brandName="BrandName"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to BrandName"
          description="Your fun and trendy SaaS solution"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Us"
          descriptions={[
            "We provide innovative solutions.",
            "Join us in revolutionizing SaaS.",
            "Connect with us through our socials."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="Essential metrics for our token"
          kpiItems={[
            { value: "100M", description: "Total Supply" },
            { value: "50M", description: "Circulating Supply" },
            { value: "10%", description: "Tax on Transactions" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={200}
          logoHeight={100}
          columns={[
            { title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] },
            { title: 'Services', items: [{ label: 'Pricing', onClick: () => {} }, { label: 'Support', onClick: () => {} }] },
            { title: 'Legal', items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }] },
          ]}
          copyrightText="© 2023 BrandName. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
