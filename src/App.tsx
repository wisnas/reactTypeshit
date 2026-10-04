import guh from "./assets/guhs.png"
import kar from "./assets/karakScreen.png"
import unity from "./assets/unity.png"
import sigmagrozy from "./assets/sigmabmatcha.jpg"
import './App.css'

function App() {

  return (
    <>
      <div className="w-full flex m-8 gap-6">
       
        <img src={sigmagrozy} className="h-62 w-62 object-cover rounded-xl" alt="sigmagrozy logo" />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-sky-50">
            Ondřej Brož
          </h1>
          <h2 className="text-sky-500">
            sigma
          </h2>

          <text className="text-gray-500 w-7/8">
            jsem goat studuju na spš pork a miluju chodidla
          </text>
        </div>

      </div>


      <div className="h-px w-full bg-gray-500"></div>
      <div className="w-full flex justify-center mt-2">
        <h2 className="center text-sky-500">My Projects</h2>
      </div>  

      <div className="w-full flex m-8 gap-6 justify-end text-right">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-sky-50 ">
              Sigma Karak
            </h2>
        

            <text className="text-gray-500">
              jsi kár
            </text>
          </div>
          <img src={kar} className="h-100 w-100 object-cover rounded-xl" alt="sigmagrozy logo" />
        </div>


        
        <div className="w-full flex m-8 gap-6">
       
          <img src={guh} className="h-100 w-120 object-cover rounded-xl" alt="sigmagrozy logo" />

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-sky-50">
              Guhs
            </h2>
     

            <text className="text-gray-500 w-7/8">
              guhs
            </text>
          </div>

        </div>

        <div className="w-full flex m-8 gap-6 justify-end text-right">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-sky-50">
              Time Jump
            </h2>
            <text className="text-gray-500">
              jsem goat studuju na spš pork a miluju chodidla
            </text>
          </div>
          <img src={unity} className="h-100 w-160 object-cover rounded-xl" alt="sigmagrozy logo" />
        </div>

      
      <div className="ticks"></div>

      <section id="next-steps">
        
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
