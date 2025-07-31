import { TalentProfiles } from "@/data/talent-profile";
import { gigsDataset } from "@/data/gigs-dataset";

// profile
export type TTalentProfiles = typeof TalentProfiles;
export type TTalentProfile = (typeof TalentProfiles)[number];
// gigs
export type TGigsDatasets = typeof gigsDataset;
export type TGigsDataset = (typeof gigsDataset)[number];
