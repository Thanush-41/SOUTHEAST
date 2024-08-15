import Hero from "@/components/Notes/Hero";
import Navbar from "@/components/Universitypage/Navbar";

export default function Home() {
  return (
   <>
      <div className="sm:grid hidden">
      <Navbar/>
      <Hero/>
      </div>
   </>
  );
}
