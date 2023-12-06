-- CreateTable
CREATE TABLE "player" (
    "id" SERIAL NOT NULL,
    "player_name" VARCHAR NOT NULL,
    "player_number" VARCHAR NOT NULL,
    "player_type" VARCHAR NOT NULL,
    "player_age" VARCHAR NOT NULL,
    "player_match_played" VARCHAR NOT NULL,
    "player_goals" VARCHAR NOT NULL,
    "player_assists" VARCHAR NOT NULL,
    "player_birthdate" VARCHAR NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);
