import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import ServicePage from './components/ServicesPage/ServicesPage';
import PricingPlanPage from './components/PricingPlanPag/PricingPlanPage';
import TeamPage from './components/TeamPage/TeamPage';
import FaqPage from './components/FaqPage/FaqPage';
import ShopPage from './components/ShopPage/ShopPage';
import ProductDetailPage from './components/ProductDetail/ProductDetail';
import BlogPage from './components/BlogPage/BlogPage';
import BlogDetailPage from './components/BlogDetail/AvoidMistakesInSocialMediaPosts';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/services' element={<ServicePage />}/>
        <Route path='/pricing' element={<PricingPlanPage />}/>
        <Route path='/team' element={<TeamPage />}/>
        <Route path='/faq' element={<FaqPage />}/>
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
