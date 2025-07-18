"use client"
import {
  TalentLocations,
  TalentPlatforms,
  TalentProfiles,
  TalentSkills,
} from "@/data/talent-profile";
import { TTalentProfiles } from "@/types/Talent-profile";
import ProfileGrid from "./(profile)/ProfileGrid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);

  const profiles: TTalentProfiles = TalentProfiles;

  const filteredProfiles = profiles.filter((profile) => {
    const matchesCategory =
      selectedCategory === null ||
      profile.categories.includes(selectedCategory);

    const matchesLocation = location === null || profile.city === location ;

    const matchesSkill = skill === null || profile.skills.includes(skill);

    const matchesPlatform =
      platform === null || profile.platforms.includes(platform);

    return (
      matchesCategory && matchesLocation && matchesSkill && matchesPlatform
    );
  });
  return (
    <>
      <h1 className="text-3xl md:text-2xl">Talent match maker</h1>
      <div className="mx-4 flex gap-2">
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
        <ProfileGrid
          profiles={filteredProfiles}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </>
  );
}
