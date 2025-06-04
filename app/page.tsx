import Header from './components/header'
import Hero from './home/hero';
import Products from './home/products';
import Reviews from './home/review';
import BrandPartners from './home/brandPartners';
import {About} from './home/about';
import CEO from './home/ceo';
import Footer from './components/footer';


export default function Home() {
  return (
    <>
     <Header/>
     <Hero />
     <About />
     <CEO />
     <Products/>
     <BrandPartners />
     <Reviews />
     <Footer/>
    </>
  );
}
