import { BrowserRouter, Routes, Route } from 'react-router';
import { AboutUsPage, HomePage, BlogPage, PricingPage, ServicesPage, UseCasesPage } from './pages';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='use-cases' element={<UseCasesPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path='blog' element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}