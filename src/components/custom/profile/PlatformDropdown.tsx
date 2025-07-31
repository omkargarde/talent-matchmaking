"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getProfilePlatforms,
  setPlatform,
} from "@/stores/profile/profilesSlice";
import { store, useAppSelector } from "@/stores/store";

export default function PlatformDropdown() {
  const dispatch = store();
  const TalentPlatforms = useAppSelector(getProfilePlatforms);

  function handleValueChange(platform: string) {
    dispatch(setPlatform(platform));
  }

  return (
    <section>
      <h2 className="py-2 text-xl">Platform:</h2>
      <Select onValueChange={(platform) => handleValueChange(platform)}>
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
  );
}
