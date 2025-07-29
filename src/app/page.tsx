import Sidebar from "../components/custom/Sidebar";
import ProfileGrid from "@/components/custom/ProfileGrid";
import ActiveJobFilters from "@/components/custom/ActiveJobFilters";

export default function Home() {
  return (
    <>
      <section className="m-6">
        <h1 className="text-3xl md:text-2xl">Talent match maker</h1>
        <ActiveJobFilters />
        <div className="flex gap-2">
          <div>
            <Sidebar />
          </div>
          <ProfileGrid />
        </div>
      </section>
    </>
  );
}
