-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "offer" BOOLEAN NOT NULL,
    "sales" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "duration" TEXT,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);
