"use client";
import { useState } from "react";
import Sidebar from "../components/custom/Sidebar";
import ProfileGrid from "@/components/custom/ProfileGrid";
import { useAppSelector } from "@/stores/useAppDispatch";
import {
  getFilteredProfiles,
  getProfiles,
} from "@/stores/profile/profilesSlice";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);

  const profiles = useAppSelector(getProfiles);

  const filteredProfiles = useAppSelector(getFilteredProfiles);

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
