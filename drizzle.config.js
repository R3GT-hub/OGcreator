/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: `postgresql://accounts:UtYvjWTf81NB@ep-dark-term-a5mk8grb.us-east-2.aws.neon.tech/OGcreator?sslmode=require`,
    }
  };