// Main talents table
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const talents = sqliteTable("talents", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  city: text("city").notNull(),
  hometown: text("hometown").notNull(),
  budgetRangeMin: integer("budget_range_min").notNull(),
  budgetRangeMax: integer("budget_range_max").notNull(),
  experienceYears: integer("experience_years").notNull(),
  // Soft skills as individual columns
  communicationSkill: text("communication_skill").notNull(),
  punctualitySkill: text("punctuality_skill").notNull(),
  collaborationSkill: text("collaboration_skill").notNull(),
  initiativeSkill: text("initiative_skill").notNull(),
  adaptabilitySkill: text("adaptability_skill").notNull(),
  // time stamps
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date()),
});

// Categories (Director, Photographer, etc.)
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentCategories = sqliteTable("talent_categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
});

// Skills (Fashion Shoots, Corporate Shoots, etc.)
export const skills = sqliteTable("skills", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentSkills = sqliteTable("talent_skills", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  skillId: integer("skill_id")
    .notNull()
    .references(() => skills.id, { onDelete: "cascade" }),
});

// Style tags (documentary, vibrant, cinematic, etc.)
export const styleTags = sqliteTable("style_tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentStyleTags = sqliteTable("talent_style_tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  styleTagId: integer("style_tag_id")
    .notNull()
    .references(() => styleTags.id, { onDelete: "cascade" }),
});

// Platforms (Personal Website, Behance, etc.)
export const platforms = sqliteTable("platforms", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentPlatforms = sqliteTable("talent_platforms", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  platformId: integer("platform_id")
    .notNull()
    .references(() => platforms.id, { onDelete: "cascade" }),
});

// Software skills with proficiency levels
export const softwareSkills = sqliteTable("software_skills", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentSoftwareSkills = sqliteTable("talent_software_skills", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  softwareSkillId: integer("software_skill_id")
    .notNull()
    .references(() => softwareSkills.id, { onDelete: "cascade" }),
  proficiencyLevel: integer("proficiency_level").notNull(), // 1-10 scale
});

export const languages = sqliteTable("languages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentLanguages = sqliteTable("talent_languages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  languageId: integer("language_id")
    .notNull()
    .references(() => languages.id, { onDelete: "cascade" }),
});

export const pastCompanies = sqliteTable("past_companies", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  companyName: text("company_name").notNull(),
});

export const endorsements = sqliteTable("endorsements", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  endorserName: text("endorser_name").notNull(),
});

export const interestTags = sqliteTable("interest_tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentInterestTags = sqliteTable("talent_interest_tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  interestTagId: integer("interest_tag_id")
    .notNull()
    .references(() => interestTags.id, { onDelete: "cascade" }),
});

export const tierTags = sqliteTable("tier_tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const talentTierTags = sqliteTable("talent_tier_tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  tierTagId: integer("tier_tag_id")
    .notNull()
    .references(() => tierTags.id, { onDelete: "cascade" }),
});

export const availabilityCalendar = sqliteTable("availability_calendar", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  talentId: integer("talent_id")
    .notNull()
    .references(() => talents.id, { onDelete: "cascade" }),
  city: text("city").notNull(),
  fromDate: text("from_date").notNull(), // YYYY-MM-DD format
  toDate: text("to_date").notNull(), // YYYY-MM-DD format
});
