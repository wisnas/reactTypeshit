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
          <h2 className="bg-gradient-to-b from-sky-500 to-sky-500/60 bg-clip-text text-transparent">
            Student
          </h2>

          <text className="text-gray-500 w-7/8">
            I am currently studying at SPŠ Prosek. I enjoy both 3D modeling and programming, with my main focus currently being game development. In my free time, I play football and love reading.
          </text>
        </div>

      </div>


      <section id="spacer"></section>
      <div className="w-full flex justify-center mt-2">
        <h2 className="center bg-gradient-to-b from-sky-500 to-sky-500/60
      bg-clip-text text-transparent">My Projects</h2>
      </div>  

      <div className="w-full flex flex-col-reverse md:flex-row m-8 gap-6 items-center text-center md:justify-end md:text-right">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-sky-50 ">
              Sigma Karak
            </h2>
        

            <text className="text-gray-500">
              A Pygame remake of the board game Karak, featuring hand-drawn pixel art.
            </text>
          </div>
          <img src={kar} className="h-100 w-100 object-cover rounded-xl" alt="sigmagrozy logo" />
        </div>

        <div className="w-full flex flex-col-reverse md:flex-row-reverse my-8 px-4 gap-6 items-center text-center md:justify-end md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-sky-50">
              Low Poly Weapons
            </h2>
     
            <text className="text-gray-500 w-7/8">
              A collection of low-poly, fully modular firearms created in Maya.
            </text>
          </div>
          <img src={guh} className="h-100 w-120 object-cover rounded-xl" alt="sigmagrozy logo" />

          

        </div>

        <div className="w-full flex flex-col-reverse md:flex-row my-8 px-4 gap-6 items-center text-center md:justify-end md:text-right">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-sky-50 ">
              Time Jump
            </h2>
            <text className="text-gray-500">
              A fast-paced single-player parkour game focused on speedrunning - currently in development.
            </text>
          </div>
          <img src={unity} className="h-100 w-160 object-cover rounded-xl" alt="sigmagrozy logo" />
        </div>

      


      <section id="spacer"></section>
      <div className="w-full flex justify-center mt-2">
        <h2 className="center bg-gradient-to-b from-sky-500 to-sky-500/60
      bg-clip-text text-transparent">My Blog</h2>
      </div>  

      <div className="flex items-center">
        <div className="flex w-full gap-5 overflow-x-auto p-6 scrollbar-thin">

          <div className="h-96 w-60 shrink-0 flex-col overflow-hidden 
          rounded-2xl border border-cyan-500/20 bg-linear-to-b from-cyan-950/80 p-5 
          duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <h3 className="text-lg font-semibold text-cyan-50">
              Getting back on pitch
            </h3>
            <div className="my-3 h-px w-full bg-cyan-300" />
            <p className="overflow-y-auto pr-1 text-sm text-cyan-100/70 break-words">
              Recovering from my injury and finally getting back into regular football training
            </p>
          </div>
          <div className="h-96 w-60 shrink-0 flex-col overflow-hidden 
          rounded-2xl border border-cyan-500/20 bg-linear-to-b from-cyan-950/80 p-5 
          duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <h3 className="text-lg font-semibold text-cyan-50">
              TimeJump Dev Progress
            </h3>
            <div className="my-3 h-px w-full bg-cyan-300" />
            <p className="overflow-y-auto pr-1 text-sm text-cyan-100/70 break-words">
              Started building the in-game interface, heavily inspired by the CRT computer terminals from Alien: Isolation. Focusing on cathode-ray tube aesthetics.
            </p>
          </div>
          <div className="h-96 w-60 shrink-0 flex-col overflow-hidden 
          rounded-2xl border border-cyan-500/20 bg-linear-to-b from-cyan-950/80 p-5 
          duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <h3 className="text-lg font-semibold text-cyan-50">
              TimeJump: Soviet-Era Architecture
            </h3>
            <div className="my-3 h-px w-full bg-cyan-300" />
            <p className="overflow-y-auto pr-1 text-sm text-cyan-100/70 break-words">
              Currently modeling brutalist, old Soviet-style apartment blocks and industrial buildings for the game world.
            </p>
          </div>
        </div>
      </div>
      

      <section id="spacer"></section>
      <div className="w-full flex justify-center mt-2">
        <h2 className="center bg-gradient-to-b from-sky-500 to-sky-500/60
      bg-clip-text text-transparent">My certificates</h2>
      </div> 

      <div className="flex items-center">
        <div className="w-full gap-5 overflow-x-auto p-6 scrollbar-thin">

          <div className="h-96 w-60 shrink-0 flex-col overflow-hidden 
          rounded-2xl border border-red-500/20 bg-linear-to-b from-red-950/80 p-5 
          duration-300 hover:-translate-y-1 hover:border-red-400/40 items-center justify-center">
            <h3 className="text-lg font-semibold text-red-50">
              No certificates Yet
            </h3>
          </div>
        </div>
      </div>
      
      <section id="spacer"></section>

      <section id="next-steps">
        
        <div id="social">
          <h2 className="center bg-gradient-to-b from-sky-500 to-sky-500/60
      bg-clip-text text-transparent">My Socials</h2>
          <ul>
            <li>
              <a href="https://github.com/wisnas" target="_blank">
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
              <a href="https://www.instagram.com/ona.broz/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
