import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Programs from './pages/Programs/Programs'
import SuccessStories from './pages/SuccessStories/SuccessStories'
import About from './pages/About/About'
import Newsletter from './pages/Newsletter/Newsletter'
import Contact from './pages/Contact/Contact'

import ProgramOne from './pages/ProgramPages/ProgramOne/ProgramOne'
import ProgramTwo from './pages/ProgramPages/ProgramTwo/ProgramTwo'
import ProgramThree from './pages/ProgramPages/ProgramThree/ProgramThree'
import ProgramFour from './pages/ProgramPages/ProgramFour/ProgramFour'
import ProgramFive from './pages/ProgramPages/ProgramFive/ProgramFive'
import ProgramSix from './pages/ProgramPages/ProgramSix/ProgramSix'

function App() {
  const path = window.location.pathname

  let page

  switch (path) {
    case '/programs':
      page = <Programs />
      break

    case '/success-stories':
      page = <SuccessStories />
      break

    case '/about':
      page = <About />
      break

    case '/newsletter':
      page = <Newsletter />
      break

    case '/contact':
      page = <Contact />
      break

    case '/programs/program-one':
      page = <ProgramOne />
      break

    case '/programs/program-two':
      page = <ProgramTwo />
      break

    case '/programs/program-three':
      page = <ProgramThree />
      break

    case '/programs/program-four':
      page = <ProgramFour />
      break

    case '/programs/program-five':
      page = <ProgramFive />
      break

    case '/programs/program-six':
      page = <ProgramSix />
      break

    default:
      page = <Home />
  }

  return (
    <>
      <Header />

      {page}

      <Footer />
    </>
  )
}

export default App