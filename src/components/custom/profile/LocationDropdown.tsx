"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/stores/store";
import {
  getProfileLocations,
  setLocation,
} from "@/stores/profile/profilesSlice";

export default function LocationDropdown() {
  const dispatch = useAppDispatch();
  const TalentLocations = useAppSelector(getProfileLocations);

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
