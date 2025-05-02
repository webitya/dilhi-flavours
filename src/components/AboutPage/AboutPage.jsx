
import AboutHero from "./AboutHero/AboutHero"
// import AboutStory from "./AboutStory/AboutStory"
// import AboutValues from "./AboutValues/AboutValues"
// import AboutTeam from "./AboutTeam/AboutTeam"
// import AboutTimeline from "./AboutTimeline/AboutTimeline"

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow pt-16">
        <AboutHero />
        {/* <AboutStory />
        <AboutValues />
        <AboutTimeline />
        <AboutTeam /> */}
      </main>

    </div>
  )
}

export default AboutPage
