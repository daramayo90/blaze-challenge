-- CreateTable
CREATE TABLE "match" (
    "id" SERIAL NOT NULL,
    "teamId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "opponent" TEXT NOT NULL,
    "score" TEXT NOT NULL,

    CONSTRAINT "match_pkey" PRIMARY KEY ("id")
);
