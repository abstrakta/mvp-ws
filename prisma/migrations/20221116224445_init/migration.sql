-- CreateEnum
CREATE TYPE "DaoMemberRole" AS ENUM ('ADJUDICATOR', 'MEDIATOR', 'ORDINARY');

-- CreateEnum
CREATE TYPE "DaoStatus" AS ENUM ('PROPOSED', 'ACTIVE', 'SUSPENDED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "PublicationStatus" AS ENUM ('DRAFT', 'DRAFT_REVIEW', 'LIVE_PUBLISHED', 'LIVE_ARCHIVED');

-- CreateTable
CREATE TABLE "AssetBundle" (
    "id" SERIAL NOT NULL,
    "idOfPortfolio" INTEGER,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) NOT NULL,
    "publicationStatus" "PublicationStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "AssetBundle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetDetails" (
    "id" SERIAL NOT NULL,
    "idOfBundle" INTEGER,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "publicationStatus" "PublicationStatus" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "AssetDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssetPortfolio" (
    "id" SERIAL NOT NULL,
    "idOfOwner" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssetPortfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dao" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "status" "DaoStatus" NOT NULL DEFAULT 'ACTIVE',

    CONSTRAINT "Dao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DaoMember" (
    "id" SERIAL NOT NULL,
    "idOfDao" INTEGER NOT NULL,
    "idOfMember" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) NOT NULL,
    "memberRole" "DaoMemberRole" NOT NULL DEFAULT 'ORDINARY',

    CONSTRAINT "DaoMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "AssetBundle" ADD CONSTRAINT "AssetBundle_idOfPortfolio_fkey" FOREIGN KEY ("idOfPortfolio") REFERENCES "AssetPortfolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetDetails" ADD CONSTRAINT "AssetDetails_idOfBundle_fkey" FOREIGN KEY ("idOfBundle") REFERENCES "AssetBundle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssetPortfolio" ADD CONSTRAINT "AssetPortfolio_idOfOwner_fkey" FOREIGN KEY ("idOfOwner") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DaoMember" ADD CONSTRAINT "DaoMember_idOfDao_fkey" FOREIGN KEY ("idOfDao") REFERENCES "Dao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DaoMember" ADD CONSTRAINT "DaoMember_idOfMember_fkey" FOREIGN KEY ("idOfMember") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
