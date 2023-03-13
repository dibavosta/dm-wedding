import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const client = await connectToDatabase();
        const db = client.db;
        const usersCollection = db.collection("user");

        const user = await usersCollection.findOne({
          username: credentials?.username,
        });

        if (!user) {
          client.client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials?.password ?? "",
          user.password
        );

        if (!isValid) {
          client.client.close();
          throw new Error("Could not log you in!");
        }

        return { username: user.username } as any;
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
