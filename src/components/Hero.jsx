import { delay } from "framer-motion"
import Bubble from "./Bubble"


function Hero() {
  return (  
    <>
      <section className="h-screen min-h-[30rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-full w-full flex-col items-center justify-center py-16">
        {/* hero inner */}
        <div className="relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center py-0 px-8 h-min max-w-[1240px] w-full">
          {/* heading & cta */}
          <div className="z-2 relative flex flex-col flex-none flex-nowrap content-center overflow-visible items-center justify-center h-min max-w-md w-full">
            <div className="relative flex flex-col flex-none flex-nowrap items-center justify-center gap-8 overflow-hidden h-min max-w-lg	 w-full">
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <h1 className="text-white text-center text-5xl font-bold">Introducing <br/>Design & Code</h1>
              </div>
              <div className="relative flex flex-col flex-none shrink-0	break-words whitespace-pre-wrap justify-start h-auto w-full">
                <p className="text-[#BBBBBB]  text-center font-medium">We are a UCF student organization that specializes in web design. Dedicated and focused on creating content for the digital world. </p>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-10 h-min-content overflow-hidden relative w-min-content"> */}
              <button className="transition duration-200 hover:scale-105 bg-white font-bold rounded-xl py-4 px-6 mt-8">Become a member</button>
            {/* </div> */}
          </div>
        </div>
          
          <Bubble
            name="JavaScript"
            hex="#facc15"
            position="bubble1"
            right= {false}
            coordinates = {
              {
                x: '30%',
                y: '-50%',
                delay: 4
              }
            }
          />

          <Bubble
            name="HTML"
            hex="#ec8816"
            position="bubble2"
            right= {true}
            coordinates = {
              {
                x: '20%',
                y: '-20%',
                delay: 5
              }
            }
          />
          <Bubble
            name="React"
            hex="#72daf4"
            position="bubble3"
            right= {false}
            coordinates = {
              {
                x: '20%',
                y: '20%',
                delay: 6
              }
            }
          /> 
        </div>
      </section>
    </>
  )
}

export default Hero

