/*
  Warnings:

  - You are about to drop the column `date` on the `match` table. All the data in the column will be lost.
  - You are about to drop the column `opponent` on the `match` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `match` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `match` table. All the data in the column will be lost.
  - Added the required column `country_name` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `league_logo` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `league_name` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_awayteam_name` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_awayteam_score` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_date` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_hometeam_name` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_hometeam_score` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_referee` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `match_stadium` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_away_badge` to the `match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_home_badge` to the `match` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "match" DROP COLUMN "date",
DROP COLUMN "opponent",
DROP COLUMN "score",
DROP COLUMN "teamId",
ADD COLUMN     "country_name" VARCHAR NOT NULL,
ADD COLUMN     "league_logo" VARCHAR NOT NULL,
ADD COLUMN     "league_name" VARCHAR NOT NULL,
ADD COLUMN     "match_awayteam_name" VARCHAR NOT NULL,
ADD COLUMN     "match_awayteam_score" VARCHAR NOT NULL,
ADD COLUMN     "match_date" VARCHAR NOT NULL,
ADD COLUMN     "match_hometeam_name" VARCHAR NOT NULL,
ADD COLUMN     "match_hometeam_score" VARCHAR NOT NULL,
ADD COLUMN     "match_referee" VARCHAR NOT NULL,
ADD COLUMN     "match_stadium" VARCHAR NOT NULL,
ADD COLUMN     "team_away_badge" VARCHAR NOT NULL,
ADD COLUMN     "team_home_badge" VARCHAR NOT NULL;
