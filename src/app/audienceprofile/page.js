import Profile from "@/components/Audience Profile/Profile";
import Navbar from "@/components/Music/Navbar";

export default function Home() {
  return (
   <>
      <div className="sm:grid hidden">
      <Navbar/>
      <Profile/>
      </div>
   </>
  );
}
