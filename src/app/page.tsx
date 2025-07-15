import { TalentProfiles } from "@/data/talent-profile";
import { TTalentProfiles } from "@/types/Talent-profile";
import ProfileGrid from "./(profile)/ProfileGrid";

export default function Home() {
  const profiles: TTalentProfiles = TalentProfiles;
  return (
    <>
      <h1 className="text-3xl md:text-2xl">Talent match maker</h1>
      <div className="flex">
        <section>
          <section>
            <h2>Location:</h2>
          </section>
          <section>
            <h2>Skills:</h2>
          </section>
          <section>
            <h2>Platform:</h2>
          </section>
        </section>
        <ProfileGrid profiles={profiles} />
      </div>
    </>
  );
}
