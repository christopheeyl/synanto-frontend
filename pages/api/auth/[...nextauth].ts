import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password'},
            },
            authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
/*                 if (email !== "john@gmail.com" || password !== "1234") {
                    throw new Error('invalid credentials');
                }; */
                return { id: 1, name: 'John', email: 'john@gmail.com' };
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
    },
}

export default NextAuth(authOptions);