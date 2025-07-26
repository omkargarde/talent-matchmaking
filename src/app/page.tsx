import Sidebar from "../components/custom/Sidebar";
import ProfileGrid from "@/components/custom/ProfileGrid";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl md:text-2xl">Talent match maker</h1>
      <div className="mx-4 flex gap-2">
        <div>
          <Sidebar />
        </div>
        <ProfileGrid />
      </div>
    </>
  );
}
