"use client";
import { TTalentProfiles } from "@/types/Talent-profile";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProfileGrid(
  props: Readonly<{ profiles: TTalentProfiles }>
) {
  const profiles = props.profiles;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProfiles =
    selectedCategory === null
      ? profiles
      : profiles.filter((profile) =>
          profile.categories.includes(selectedCategory)
        );

  return (
    <>
      <section
        className={`transition-all duration-300 overflow-hidden min-h-12  ${
          selectedCategory !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {selectedCategory !== null && (
          <>
            <span>showing all the</span>
            <Badge asChild className="rounded-full cursor-pointer">
              <Button onClick={() => setSelectedCategory(null)}>
                {selectedCategory}
                <X />
              </Button>
            </Badge>
          </>
        )}
      </section>
      <div className="grid md:grid-cols-3 gap-2">
        {filteredProfiles.map((profile) => (
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
