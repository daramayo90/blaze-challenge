/*
  Warnings:

  - You are about to drop the `match` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `team` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_teamId_fkey";

-- DropTable
DROP TABLE "match";

-- DropTable
DROP TABLE "player";

-- DropTable
DROP TABLE "team";

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "country_name" VARCHAR NOT NULL,
    "league_name" VARCHAR NOT NULL,
    "match_date" VARCHAR NOT NULL,
    "match_hometeam_id" VARCHAR NOT NULL,
    "match_hometeam_name" VARCHAR NOT NULL,
    "match_hometeam_score" VARCHAR NOT NULL,
    "match_awayteam_id" VARCHAR NOT NULL,
    "match_awayteam_name" VARCHAR NOT NULL,
    "match_awayteam_score" VARCHAR NOT NULL,
    "match_stadium" VARCHAR NOT NULL,
    "match_referee" VARCHAR NOT NULL,
    "team_home_badge" VARCHAR NOT NULL,
    "team_away_badge" VARCHAR NOT NULL,
    "league_logo" VARCHAR NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "team_key" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,
    "team_country" TEXT NOT NULL,
    "team_badge" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "player_name" VARCHAR NOT NULL,
    "player_number" VARCHAR NOT NULL,
    "player_type" VARCHAR NOT NULL,
    "player_age" VARCHAR NOT NULL,
    "player_match_played" VARCHAR NOT NULL,
    "player_goals" VARCHAR NOT NULL,
    "player_assists" VARCHAR NOT NULL,
    "player_birthdate" VARCHAR NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
