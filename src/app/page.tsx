"use client"
import { TalentProfiles } from "@/data/talent-profile";
import { TTalentProfiles } from "@/types/Talent-profile";
import ProfileGrid from "./(profile)/ProfileGrid";
import { useState } from "react";
import Sidebar from "./(profile)/Sidebar";

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
          <Sidebar
            setLocation={setLocation}
            setPlatform={setPlatform}
            setSkill={setSkill}
          />
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
