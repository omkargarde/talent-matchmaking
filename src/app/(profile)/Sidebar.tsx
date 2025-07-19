import { Select, SelectContent, SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

export default function Sidebar(props: {
  TalentLocations: string | null;
  TalentSkills: string | null;
  TalentPlatforms: string | null;
  setLocation: (value: string | null) => void;
  setSkill: (skill: string | null) => void;
  setPlatform: (platform: string | null) => void;
}) {
  return (
    <>
      <div>
        <section className="rounded-2xl border p-4">
          <section>
            <h2 className="py-2 text-xl">Location:</h2>
            <Select onValueChange={(value) => setLocation(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {TalentLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </section>
          <section>
            <h2 className="py-2 text-xl">Skills:</h2>
            <Select onValueChange={(skill) => setSkill(skill)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Skill" />
              </SelectTrigger>
              <SelectContent>
                {TalentSkills.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </section>
          <section>
            <h2 className="py-2 text-xl">Platform:</h2>
            <Select onValueChange={(platform) => setPlatform(platform)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Platform" />
              </SelectTrigger>
              <SelectContent>
                {TalentPlatforms.map((Platform) => (
                  <SelectItem key={Platform} value={Platform}>
                    {Platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </section>
        </section>
      </div>
    </>
  );
}
