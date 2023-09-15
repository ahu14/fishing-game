import styles from "../styles/Home.module.css";
import homestyles from "../styles/Fish.module.css";
import Link from "next/link";


export default function Home(){
  return (
    <>
      <div className="w-100 h-screen flex align-center justify-center bg-[#7bb5ff]">
        <div className="w-[80%] h-screen grid grid-rows-4 items-center justify-center">
          <div id={styles.title} className="grid self-end">YOUR FISHING GAME</div>

          <Link href="/play">
            <div className="text-center py-2 px-4 bg-slate-200
            rounded hover:bg-slate-300">Single Player</div>
          </Link>

          <Link href="/play2">
            <div className="text-center py-2 px-4 bg-slate-200 
            rounded hover:bg-slate-300">Multi Player</div>
          </Link>
        </div>
      </div>

      <div className={homestyles.fish} style={{top : '70vh',
      left: '40vw', width: '10vw', height: '10vw'}}></div>

      <div className={homestyles.fish} style={{top : '50vh',
      left: '65vw', width: '8vw', height: '8vw', transform: 'rotate(180deg)'}}></div>

      <div className={homestyles.enemyFish} style={{top : '45vh',
      left: '25vw', width: '8vw', height: '8vw'}}></div>
    </>
  )
}