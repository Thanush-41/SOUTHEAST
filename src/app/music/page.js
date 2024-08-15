import Music from "@/components/Music/Music";
import Navbar from "@/components/Music/Navbar";

export default function Home() {
  return (
   <>
      <div className="sm:grid hidden"><Navbar/>
      <Music/></div>
   </>
  );
}
