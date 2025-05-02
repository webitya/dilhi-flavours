
import HomePageHero from "./HomePageHero/HomePageHero"
import HomePageAbout from "./HomePageAbout/HomePageAbout"
import HomePageMenu from "./HomePageMenu/HomePageMenu"
import HomePageGallery from "./HomePageGallery/HomePageGallery"
import HomePageOutlets from "./HomePageOutlets/HomePageOutlets"
import HomePageCTA from "./HomePageCTA/HomePageCTA"
import HomePageTestimonials from "./HomePageTestimonials/HomePageTestimonials"
import HomePageSpecials from "./HomePageSpecials/HomePageSpecials"
import HomePageChefs from "./HomePageChefs/HomePageChefs"

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <HomePageHero />
        <HomePageAbout />
        <HomePageSpecials />
        <HomePageMenu />
        <HomePageGallery />
        <HomePageTestimonials />
        <HomePageChefs />
        <HomePageOutlets />
        <HomePageCTA />
      </main>
   
    </div>
  )
}

export default HomePage
