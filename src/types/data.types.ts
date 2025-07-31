import { TalentProfiles } from "@/data/talent-profile";
import { GigsDataset } from "@/data/gigs-dataset";

// profile
export type TTalentProfiles = typeof TalentProfiles;
export type TTalentProfile = (typeof TalentProfiles)[number];
// gigs
export type TGigsDatasets = typeof GigsDataset;
export type TGigsDataset = (typeof GigsDataset)[number];
