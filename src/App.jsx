import Content from "./components/Content"
import Faq from "./components/Faq"
import NavBar from "./components/NavBar"
import NavigationAddressBar from "./components/NavigationAddressBar"


function App() {

  return (
    <div className="flex flex-1 items-center justify-center w-full">
      <div className="flex flex-col w-[90vw] items-center">
      <NavBar/>
      <NavigationAddressBar/>
      <Content/>
      <Faq/>
      </div>
    </div>
  )
}

export default App
