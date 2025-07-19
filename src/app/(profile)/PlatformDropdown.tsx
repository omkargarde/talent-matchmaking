import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TalentPlatforms } from "@/data/talent-profile";
export default function PlatformDropdown(props: {
  setPlatform: (platform: string | null) => void;
}) {
  const { setPlatform } = props;
  return (
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
  );
}
