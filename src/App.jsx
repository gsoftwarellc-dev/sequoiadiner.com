import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Story from './pages/Story'
import PrivateEvents from './pages/PrivateEvents'
import Menu from './pages/Menu'
import GiftCards from './pages/GiftCards'
import CallNowButton from './components/CallNowButton'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/story" element={<Story />} />
          <Route path="/page/contact" element={<Contact />} />
          <Route path="/page/pdf-menu" element={<Menu />} />
          <Route path="/page/gift-cards" element={<GiftCards />} />
          <Route path="/page/private-events--restaurant-buyout" element={<PrivateEvents />} />
        </Routes>
      </main>
      <Footer />
      <CallNowButton />
      <ScrollToTopButton />
    </>
  )
}

export default App
