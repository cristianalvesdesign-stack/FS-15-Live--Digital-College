import { Outlet } from "react-router";
import AppMenu from "./components/menu/AppMenu";

function App() {
  return   (
  <>
    <header className=''>
      <AppMenu />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>

  </>
  )
}

export default App;