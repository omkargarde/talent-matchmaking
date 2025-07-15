import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TTalentProfile } from "@/types/Talent-profile";

export default function ProfileCard(
  props: Readonly<{
    profile: TTalentProfile;
    setSelectedCategory: (category: string) => void;
  }>
) {
  const profile = props.profile;
  const setSelectedCategory = props.setSelectedCategory;
  return (
    <Card key={profile.id}>
      <CardHeader>
        <CardTitle className="text-xl">{profile.name}</CardTitle>
        <CardDescription className="flex gap-1">
          {profile.categories.map((category) => (
            <Badge
              asChild
              key={category}
              className="rounded-full cursor-pointer"
            >
              <Button onClick={() => setSelectedCategory(category)}>
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
      </CardContent>
    </Card>
  );
}
