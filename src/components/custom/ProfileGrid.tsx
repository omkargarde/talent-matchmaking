"use client";
import ProfileCard from "./ProfileCard";
import { getFilteredProfiles } from "@/stores/profile/profilesSlice";
import { useSelector } from "react-redux";

export default function ProfileGrid() {
  const profiles = useSelector(getFilteredProfiles);

  return (
    <>
      <div className="grid gap-2 md:grid-cols-3">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </>
  );
}
