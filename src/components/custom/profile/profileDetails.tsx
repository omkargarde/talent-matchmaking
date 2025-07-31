"use client";
import { useAppSelector } from "@/stores/store";
import { getProfileById } from "@/stores/profile/profilesSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Briefcase,
  Calendar,
  Code,
  Globe,
  Home,
  MapPin,
  Star,
  Target,
  Users,
} from "lucide-react";

export default function ProfileDetails(props: { id: string }) {
  const { id } = props;
  const profile = useAppSelector(getProfileById(id));

  if (!profile) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <h1 className="text-destructive text-xl font-semibold">
                Profile Not Found
              </h1>
              <p className="text-muted-foreground mt-2">
                Something went wrong while loading this profile.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{profile.name}</CardTitle>
          <div className="text-muted-foreground flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>City: {profile.city}</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Hometown: {profile.hometown}</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Categories & Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Categories & Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.categories.map((category, i) => (
                    <Badge key={i} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-2 font-medium">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-2 font-medium">Special Styles</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.style_tags.map((tag, i) => (
                    <Badge key={i} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Professional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Budget Range:</span>
                <span className="text-muted-foreground">
                  {profile.budget_range}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Experience:</span>
                <span className="text-muted-foreground">
                  {profile.experience_years} years
                </span>
              </div>
              <div>
                <span className="font-medium">Platforms:</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {profile.platforms.map((platform, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-medium">Languages:</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {profile.languages.map((language, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tags & Tier */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Tags & Tier
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium">Interest Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.interest_tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-2 font-medium">Tier</h4>
                <div className="flex flex-wrap gap-2">
                  {profile.tier_tags.map((tier, i) => (
                    <Badge key={i} variant="default">
                      {tier}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(profile.soft_skills).map(([skill, level]) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between"
                  >
                    <span className="font-medium capitalize">{skill}</span>
                    <Badge variant="outline">{level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Software Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(profile.software_skills).map(
                  ([software, rating]) => (
                    <div
                      key={software}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium">{software}</span>
                      <div className="flex items-center gap-2">
                        <div className="bg-secondary h-2 w-20 rounded-full">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${(rating / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {rating}/10
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {profile.availability_calendar.map((availability, i) => (
                  <div
                    key={i}
                    className="bg-muted flex flex-col rounded-lg p-3 sm:flex-row sm:justify-between"
                  >
                    <span className="font-medium">{availability.city}</span>
                    <span className="text-muted-foreground text-sm">
                      {availability.from} to {availability.to}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section - Full Width */}
      <div className="mt-6 space-y-6">
        {/* Credits & Endorsements */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Past Credits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.past_credits.map((credit, i) => (
                  <Badge key={i} variant="secondary">
                    {credit}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Endorsements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.endorsements.map((endorsement, i) => (
                  <Badge key={i} variant="default">
                    {endorsement}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {profile.portfolio.map((item, i) => (
                <Card key={i} className="border-muted">
                  <CardContent className="pt-4">
                    <h4 className="mb-3 font-semibold">{item.title}</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">
                          Tags:
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {item.tags.map((tag, j) => (
                            <Badge
                              key={j}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground text-sm font-medium">
                          Keywords:
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {item.keywords.map((keyword, j) => (
                            <Badge
                              key={j}
                              variant="outline"
                              className="text-xs"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
