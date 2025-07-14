import { TalentProfiles } from "@/data/talent-profile";
import { TTalentProfiles } from "@/types/Talent-profile";
import ProfileGrid from "./(profile)/ProfileGrid";

export default function Home() {
  const profiles: TTalentProfiles = TalentProfiles;
  return (
    <>
      <h1 className="md:text-2xl text-3xl">Talent match maker</h1>
      <ProfileGrid profiles={profiles} />
    </>
  );
}
