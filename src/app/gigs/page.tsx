import Sidebar from "@/components/custom/Sidebar";
import ProfileGrid from "@/components/custom/ProfileGrid";

export default function GigsPage() {
  return (
    <>
      <section className="m-6">
        <h1 className="text-3xl md:text-2xl">Gigs</h1>
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
