

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("dragon-news");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
   baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [
    "https://dragon-news-beta-cyan.vercel.app",
    "https://dragon-news-7slxd3j3l-itsnovel2-8593s-projects.vercel.app",
    "http://localhost:3000",
  ],
  emailAndPassword:{
    enabled: true,
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        }, 
    },
    session: {
      cookieCache: {
        enabled: true,
        strategy:"jwt",
        maxAge: 7 * 24 * 60 * 60
      }
  },
});