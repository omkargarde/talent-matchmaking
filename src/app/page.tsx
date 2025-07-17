import {
  TalentLocations,
  TalentPlatforms,
  TalentProfiles,
  TalentSkills,
} from "@/data/talent-profile";
import { TTalentProfiles } from "@/types/Talent-profile";
import ProfileGrid from "./(profile)/ProfileGrid";

export default function Home() {
  const profiles: TTalentProfiles = TalentProfiles;
  return (
    <>
      <h1 className="text-3xl md:text-2xl">Talent match maker</h1>
      <div className="mx-4 flex gap-2">
        <div>
          <section className="rounded-2xl border p-4">
            <section>
              <h2 className="py-2 text-xl">Location:</h2>
              <select>
                {TalentLocations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
            </section>
            <section>
              <h2 className="py-2 text-xl">Skills:</h2>
              <ul>
                {TalentSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="py-2 text-xl">Platform:</h2>
              <ul>
                {TalentPlatforms.map((Platform) => (
                  <li key={Platform}>{Platform}</li>
                ))}
              </ul>
            </section>
          </section>
        </div>
        <ProfileGrid profiles={profiles} />
      </div>
    </>
  );
}
