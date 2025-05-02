
// import MenuHero from "./MenuHero/MenuHero"
import MenuCategories from "./MenuCategories/MenuCategories"
// import MenuSpecials from "./MenuSpecials/MenuSpecials"
// import MenuCTA from "./MenuCTA/MenuCTA"

const MenuPage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow pt-16">
        {/* <MenuHero /> */}
        <MenuCategories />
        {/* <MenuSpecials /> */}
        {/* <MenuCTA /> */}
      </main>

    </div>
  )
}

export default MenuPage
