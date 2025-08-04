"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import { getProfileSkills, setSkill } from "@/stores/profile/profilesSlice";

export default function SkillsDropdown() {
  const dispatch = useAppDispatch();
  const TalentSkills = useAppSelector(getProfileSkills);

  function handleValueChange(skill: string) {
    dispatch(setSkill(skill));
  }

  return (
    <section>
      <h2 className="py-2 text-xl">Skills:</h2>
      <Select onValueChange={(skill) => handleValueChange(skill)}>
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
