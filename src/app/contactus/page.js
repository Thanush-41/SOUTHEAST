import Navbar from "@/components/Music/Navbar";
import Contact from "@/components/contactus/contact";
export default function Home() {
  return (
   <>
      <div className="sm:grid hidden">
      <Navbar/>
      <Contact/>
      </div>
   </>
  );
}
