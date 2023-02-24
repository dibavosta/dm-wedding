import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
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
        // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };
        // if (
        //   credentials?.username == "admin" &&
        //   credentials?.password == "hello123"
        // ) {
        //   return user;
        // } else {
        //   return null;
        // }

        console.log("credentials: ", credentials);
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        console.log("username: ", username);
        console.log("password: ", password);

        // validate here your username and password
        if (username !== "admin" && password !== "hello123") {
          throw new Error("invalid credentials");
        }
        // confirmed users
        return { id: 1, name: "Guest" };
      },
    }),
  ],
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
});
