import Payment from "@/components/Payments/payment";
import Navbar from "@/components/Music/Navbar";
export default function Home() {
  return (
   <>
      <div className="sm:grid hidden">
      <Navbar/>
      <Payment/>
      </div>
   </>
  );
}
