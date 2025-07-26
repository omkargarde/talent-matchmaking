"use client";
import ProfileCard from "./ProfileCard";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getFilteredProfiles,
  setSelectedCategory,
} from "@/stores/profile/profilesSlice";
import { useSelector } from "react-redux";

export default function ProfileGrid() {
  const profiles = useSelector(getFilteredProfiles);
  return (
    <>
      <section
        className={`min-h-12 overflow-hidden transition-all duration-300 ${
          selectedCategory !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {selectedCategory !== null && (
          <>
            <span>showing all the</span>
            <Badge asChild className="cursor-pointer rounded-full">
              <Button onClick={() => setSelectedCategory(null)}>
                {selectedCategory}
                <X />
              </Button>
            </Badge>
          </>
        )}
      </section>
      <div className="grid gap-2 md:grid-cols-3">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
    </>
  );
}
