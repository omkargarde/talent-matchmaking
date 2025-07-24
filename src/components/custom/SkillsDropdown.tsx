import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TalentSkills } from "@/data/talent-profile";
export default function SkillsDropdown(props: {
  setSkill: (skill: string | null) => void;
}) {
  const { setSkill } = props;
  return (
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
  );
}
