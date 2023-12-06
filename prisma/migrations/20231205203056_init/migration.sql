/*
  Warnings:

  - Added the required column `match_awayteam_id` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_hometeam_id` to the `match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "match" ADD COLUMN     "match_awayteam_id" VARCHAR NOT NULL,
ADD COLUMN     "match_hometeam_id" VARCHAR NOT NULL;
