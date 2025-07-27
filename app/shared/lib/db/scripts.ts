import { PrismaClient } from '@prisma/client';
import { mockMovies } from './mock-data/mock-movies';
import { mockUser } from './mock-data/mock-user';

const prisma = new PrismaClient();

export async function clearData() {
  try {
    console.log('🗑️  Clearing all data from database...');
    
    const deletedMovies = await prisma.movie.deleteMany({});
    console.log(`✅ Deleted ${deletedMovies.count} movies`);
    
    const deletedUsers = await prisma.user.deleteMany({});
    console.log(`✅ Deleted ${deletedUsers.count} users`);
    
    console.log('🎉 Database cleared successfully!');
  } catch (error) {
    console.error('❌ Error clearing database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function seedDatabase() {
  try {
    console.log('🌱 Seeding database with mock data...');
    
    prism

    // Create user
    const user = await prisma.user.upsert({
      where: { email: mockUser.email },
      update: {},
      create: {
        name: mockUser.name,
        email: mockUser.email,
      },
    });
    console.log(`✅ Created/updated user: ${user.name}`);
    
    // Create movies
    const moviePromises = mockMovies.map((movieData) =>
      prisma.movie.create({
        data: {
          userId: user.id,
          genre: movieData.genre as Genre,
          logline: movieData.logline,
          review: movieData.review,
          alternateEnding: movieData.alternateEnding,
          sequelIdea: movieData.sequelIdea,
          summary: movieData.summary,
        },
      })
    );
    
    const movies = await Promise.all(moviePromises);
    console.log(`✅ Created ${movies.length} movies`);
    
    console.log('🎉 Database seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  const command = process.argv[2];
  
  if (command === 'seed') {
    seedDatabase()
      .then(() => {
        console.log('Seed script completed successfully');
        process.exit(0);
      })
      .catch((error) => {
        console.error('Seed script failed:', error);
        process.exit(1);
      });
  } else {
    clearData()
      .then(() => {
        console.log('Clear script completed successfully');
        process.exit(0);
      })
      .catch((error) => {
        console.error('Clear script failed:', error);
        process.exit(1);
      });
  }
}

