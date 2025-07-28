"use client";
import ProfileCard from "./ProfileCard";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  getFilteredProfiles,
  getSelectedCategory,
  setSelectedCategory,
} from "@/stores/profile/profilesSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/stores/useAppDispatch";

export default function ProfileGrid() {
  const dispatch = useAppDispatch();
  const profiles = useSelector(getFilteredProfiles);
  const selectedCategory = useSelector(getSelectedCategory);

  function unselectCategory() {
    dispatch(setSelectedCategory(null));
  }

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
              <Button onClick={unselectCategory}>
                {selectedCategory}
                <X />
              </Button>
            </Badge>
          </>
        )}
      </section>
      <div className="grid gap-2 md:grid-cols-3">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </>
  );
}
