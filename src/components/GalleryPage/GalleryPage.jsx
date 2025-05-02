
// import GalleryHero from "./GalleryHero/GalleryHero"
import GalleryGrid from "./GalleryGrid/GalleryGrid"
// import GalleryVideos from "./GalleryVideos/GalleryVideos"

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
  
      <main className="flex-grow pt-16">
        {/* <GalleryHero /> */}
        <GalleryGrid />
        {/* <GalleryVideos /> */}
      </main>

    </div>
  )
}

export default GalleryPage
