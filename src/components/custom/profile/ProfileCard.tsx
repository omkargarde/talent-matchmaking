"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TTalentProfile } from "@/types/data.types";
import { setSelectedCategory } from "@/stores/profile/profilesSlice";
import { store } from "@/stores/store";
import Link from "next/link";

export default function ProfileCard(
  props: Readonly<{
    profile: TTalentProfile;
  }>,
) {
  const { profile } = props;
  const dispatch = store();

  function unselectCategory(category: string) {
    dispatch(setSelectedCategory(category));
  }

  return (
    <Card key={profile.id}>
      <CardHeader>
        <CardTitle className="text-xl">{profile.name}</CardTitle>
        <CardDescription className="flex gap-1">
          {profile.categories.map((category) => (
            <Badge
              asChild
              key={category}
              className="cursor-pointer rounded-full"
            >
              <Button onClick={() => unselectCategory(category)}>
                {category}
              </Button>
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-700">
          <div>
            <strong>Skills:</strong> {profile.skills.join(", ")}
          </div>
          <div>
            <strong>Style:</strong> {profile.style_tags.join(", ")}
          </div>
          <div>
            <strong>Budget:</strong> {profile.budget_range}
          </div>
          <div>
            <strong>Experience:</strong> {profile.experience_years} yrs
          </div>
          <div>
            <strong>Platforms:</strong> {profile.platforms.join(", ")}
          </div>
          <div>
            <strong>Languages:</strong> {profile.languages.join(", ")}
          </div>
        </div>
        <div className="flex justify-end text-sm text-gray-700">
          <Link href={`/profile/${profile.id}`} className="cursor-pointer">
            <Button variant="default">Profile</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
