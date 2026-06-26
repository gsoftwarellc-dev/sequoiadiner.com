import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Story from './pages/Story'
import PrivateEvents from './pages/PrivateEvents'
import Placeholder from './pages/Placeholder'
import CallNowButton from './components/CallNowButton'

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
          <Route path="/page/pdf-menu" element={<Placeholder title="Menu" />} />
          <Route path="/page/private-events--restaurant-buyout" element={<PrivateEvents />} />
        </Routes>
      </main>
      <Footer />
      <CallNowButton />
    </>
  )
}

export default App
