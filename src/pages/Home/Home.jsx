import HomeHero from './HomeHero/HomeHero'
import ExplorePrograms from './ExplorePrograms/ExplorePrograms'
import Contact from './Contact/Contact'

function Home() {
  return (
    <div className="home-page">
      <HomeHero />
      <ExplorePrograms />
      <Contact />
    </div>
  )
}

export default Home