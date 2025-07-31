import SkillsDropdown from "./SkillsDropdown";
import PlatformDropdown from "./PlatformDropdown";
import LocationDropdown from "./LocationDropdown";

export default function Sidebar() {
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
