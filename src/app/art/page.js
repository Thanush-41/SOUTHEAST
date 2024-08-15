import Art from "@/components/Art/Art";
import Navbar from "@/components/Music/Navbar";

export default function Home() {
  return (
   <>
      <div className="sm:grid hidden"><Navbar/>
      <Art/></div>
   </>
  );
}
