import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './views/LandingPage/LandingPage';
import AboutPage from './views/AboutPage/AboutPage';
import ServicePage from './views/ServicesPage/ServicesPage';
import PricingPlanPage from './views/PricingPlanPag/PricingPlanPage';
import TeamPage from './views/TeamPage/TeamPage';
import FaqPage from './views/FaqPage/FaqPage';
import ShopPage from './views/ShopPage/ShopPage';
import ProductDetailPage from './views/ProductDetail/ProductDetail';
import BlogPage from './views/BlogPage/BlogPage';
import BlogDetailPage from './views/BlogDetail/AvoidMistakesInSocialMediaPosts';
import ContactPage from './views/ContactPage/ContactPage';
import TestimonialsPage from './views/TestimonialsPage/TestimonialsPage';
import Footer from './components/Footer/Footer';

import ScrollToTopOnMount from './components/ScrollToTopOnMount/ScrollToTopOnMount';

function App() {
  return (
    <div>
      <ScrollToTopOnMount />
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/services' element={<ServicePage />}/>
        <Route path='/pricing' element={<PricingPlanPage />}/>
        <Route path='/team' element={<TeamPage />}/>
        <Route path='/faq' element={<FaqPage />}/>
        <Route path='/testimonials' element={<TestimonialsPage />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='/product-detail' element={<ProductDetailPage />}/>
        <Route path='/blog' element={<BlogPage />}/>
        <Route path='/blog-detail' element={<BlogDetailPage />}/>
        <Route path='/contact-us' element={<ContactPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
