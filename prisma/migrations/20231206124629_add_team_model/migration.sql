-- AlterTable
ALTER TABLE "player" ADD COLUMN     "teamId" INTEGER;

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "team_key" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,
    "team_country" TEXT NOT NULL,
    "team_badge" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
