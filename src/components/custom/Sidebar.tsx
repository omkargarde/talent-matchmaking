import SkillsDropdown from "./SkillsDropdown";
import PlatformDropdown from "./PlatformDropdown";
import LocationDropdown from "./LocationDropdown";

export default function Sidebar(props: {
  setLocation: (value: string | null) => void;
  setSkill: (skill: string | null) => void;
  setPlatform: (platform: string | null) => void;
}) {
  const { setLocation, setSkill, setPlatform } = props;
  return (
    <>
      <section className="rounded-2xl border p-4">
        <LocationDropdown />
        <SkillsDropdown />
        <PlatformDropdown />
      </section>
    </>
  );
}
