import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import * as React from "react";
import Title from "@/components/Title";
import LoginForm from "./LoginForm";
import { signIn } from "next-auth/react";
import Container from "./Container";

interface StoryTimeLineProps {
  locale: Locale;
}

function Login({ locale }: StoryTimeLineProps) {
  const { t } = useTranslation("common");

  async function loginResponseHandler(userInfo: any) {
    console.log("Gonna try and log in: ", userInfo);
    const res = await signIn("credentials", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    });
  }

  return (
    <Container style={{}}>
      <Head>
        <title>Login</title>
      </Head>
      <section>
        <Title style={{}} titleText="Log in" />
        <LoginForm onSubmitForm={loginResponseHandler} locale={locale} />
      </section>
    </Container>
  );
}

export default Login;
