
// import OutletsHero from "./OutletsHero/OutletsHero"
import OutletsLocations from "./OutletsLocations/OutletsLocations"
// import OutletsMap from "./OutletsMap/OutletsMap"
// import OutletsCTA from "./OutletsCTA/OutletsCTA"

const OutletsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow pt-16">
        {/* <OutletsHero /> */}
        <OutletsLocations />
        {/* <OutletsMap />
        <OutletsCTA /> */}
      </main>

    </div>
  )
}

export default OutletsPage
