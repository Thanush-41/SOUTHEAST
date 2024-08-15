import Podcast from "@/components/Podcast/Podcast";
import Navbar from "@/components/Music/Navbar";
import Scrooler from "@/components/Podcast/Scrooler";

export default function Home() {
  return (
   <>
      <div className="sm:grid hidden">
      <Navbar/>
      <Podcast/>
      </div>
   </>
  );
}
