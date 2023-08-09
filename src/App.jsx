import Footer from "./components/Footer"
import Hero from "./components/Hero"
import OfficerCarousel from "./components/Carousel";

function App() {

  return (
    <div className="App">
      <>
      <div className="bg-black bg-opacity-80">
      
      <Hero/>
      
    <main className="h-full box-border m-0 p-0">
      <div className="contents">
        <div style={{minHeight:"100%", width:"auto"}}className="relative flex flex-col flex-nowrap gap-6 justify-start overflow-hidden p-0 min-h-full h-min">

          <OfficerCarousel/>
        </div>
        <Footer />
      </div>
    </main>
    

      
      </div>
    </>  
    </div>
  );
}

export default App;