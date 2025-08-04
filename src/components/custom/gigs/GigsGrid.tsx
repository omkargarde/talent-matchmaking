"use client";
import { useAppSelector } from "@/stores/store";
import { getGigs } from "@/stores/gigs/gigsSlice";
import { Calendar, Eye, MapPin, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import getUrgencyColor from "@/functions/getUrgencyColor";
import getStatusColor from "@/functions/getStatusColor";
import formatDate from "@/functions/formatDate";
import formatCurrency from "@/functions/formatCurrency";
import { useState } from "react";

export default function GigsGrid() {
  const gigs = useAppSelector(getGigs);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Filter gigs based on search and filters
  const filteredGigs = gigs.filter((gig) => {
    const matchesSearch =
      gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gig.brief_text.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || gig.category === selectedCategory;

    const matchesCity = selectedCity === "all" || gig.city === selectedCity;

    const matchesStatus =
      selectedStatus === "all" || gig.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesCity && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            Available Gigs
          </h1>
          <p className="text-gray-600">
            Discover and apply for creative projects
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-lg border bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input
                  placeholder="Search gigs..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  className="pl-10"
                />
              </div>
            </div>
            <Select
              value={selectedCategory}
              onValueChange={(selectedCategory) => {
                setSelectedCategory(selectedCategory);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Photography">Photography</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Writing">Writing</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedCity}
              onValueChange={(selectedCity) => {
                setSelectedCity(selectedCity);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedStatus}
              onValueChange={(selectedStatus) => {
                setSelectedStatus(selectedStatus);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredGigs.length} of {gigs.length} gigs
          </p>
        </div>

        {/* Gigs Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredGigs.map((gig) => (
            <Card
              key={gig.id}
              className="bg-white transition-shadow duration-200 hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-start justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {gig.category}
                  </Badge>
                  <Badge className={`text-xs ${getStatusColor(gig.status)}`}>
                    {gig.status.replace("_", " ").toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="line-clamp-2 text-lg leading-tight font-semibold">
                  {gig.title}
                </CardTitle>
                <CardDescription className="mt-2 line-clamp-3 text-sm text-gray-600">
                  {gig.brief_text}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Budget and Location */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold text-green-600">
                      {formatCurrency(Number(gig.budget))}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{gig.city}</span>
                  </div>
                </div>

                {/* Date and Urgency */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{formatDate(gig.start_date)}</span>
                    {!gig.is_date_fixed && (
                      <span className="ml-1 text-orange-500">(Flexible)</span>
                    )}
                  </div>
                  <Badge className={`text-xs ${getUrgencyColor(gig.urgency)}`}>
                    {gig.urgency}
                  </Badge>
                </div>

                {/* Style Tags */}
                <div className="mb-4 flex flex-wrap gap-1">
                  {gig.style_tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Expectation Level and Indicators */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Star className="mr-1 h-4 w-4" />
                    <span className="capitalize">{gig.expectation_level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    {gig.has_docs && (
                      <Badge variant="outline" className="text-xs">
                        📄 Docs
                      </Badge>
                    )}
                    {gig.references_given && (
                      <Badge variant="outline" className="text-xs">
                        📎 Refs
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <Eye className="mr-1 h-4 w-4" />
                    View Details
                  </Button>
                  {gig.status === "open" && (
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredGigs.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4 text-gray-400">
              <Search className="mx-auto h-12 w-12" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              No gigs found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
