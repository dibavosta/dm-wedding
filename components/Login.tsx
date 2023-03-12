import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import * as React from "react";
import Title from "@/components/Title";
import LoginForm from "./LoginForm";
import { signIn } from "next-auth/react";
import Container from "./Container";
import Footer from "./Footer";
import LoggedOutHeader from "./LoggedOutHeader";
import styles from "@/components/LoggedOutHeader.module.css";
interface LoginProps {
  locale: Locale;
}

function Login(props: LoginProps) {
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
    <div className={styles.container}>
      <LoggedOutHeader locale={props.locale} />
      <Container style={{}}>
        <Head>
          <title>{t("login.title")}</title>
        </Head>
        <section>
          <Title style={{}} titleText={t("login.title")} />
          <LoginForm
            onSubmitForm={loginResponseHandler}
            locale={props.locale}
          />
        </section>
      </Container>
      <Footer locale={props.locale} />
    </div>
  );
}

export default Login;
