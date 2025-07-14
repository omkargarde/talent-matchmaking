import { TTalentProfiles } from "@/types/Talent-profile";
import ProfileCard from "./ProfileCard";

export default function ProfileGrid(
  props: Readonly<{ profiles: TTalentProfiles }>
) {
  const profiles = props.profiles;
  return (
    <div className="grid md:grid-cols-3 gap-2">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
