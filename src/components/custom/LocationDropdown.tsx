import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TalentLocations } from "@/data/talent-profile";
import { useAppDispatch } from "@/stores/useAppDispatch";
import { setLocation } from "@/stores/profile/profilesSlice";

export default function LocationDropdown() {
  const dispatch = useAppDispatch();

  function handleValueChange(location: string) {
    dispatch(setLocation(location));
  }

  return (
    <section>
      <h2 className="py-2 text-xl">Location:</h2>
      <Select onValueChange={(value) => handleValueChange(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Location" />
        </SelectTrigger>
        <SelectContent>
          {TalentLocations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
