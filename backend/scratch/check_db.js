import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function checkDb() {
  console.log("Checking Database connection...");
  try {
    const projects = await prisma.project.findMany();
    console.log("SUCCESS: Connection established.");
    console.log(`Found ${projects.length} projects in the database.`);
  } catch (error) {
    console.error("FAILED: Could not connect to Supabase database.");
    console.error("Error Detail:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkDb();
