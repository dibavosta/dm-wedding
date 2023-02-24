import { Locale } from "@/types/Locale";
import { useTranslation } from "next-i18next";
import * as React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";

interface LoginFormProps {
  onSubmitForm: (params: any) => void;
  locale: Locale;
}

function LoginForm(props: LoginFormProps) {
  const { t } = useTranslation("common");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const userInfo = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };
    props.onSubmitForm(userInfo);
  }

  return (
    <div className="additional-form">
      <div className="form-container">
        <form id="loginForm" className="form" onSubmit={submitHandler}>
          <div className="input-control">
            <label htmlFor="userName">Username</label>
            <input required type="text" id="userName" ref={usernameRef} />
          </div>
          <div className="input-control">
            <label htmlFor="password">Password</label>
            <input required id="password" type="password" ref={passwordRef} />
          </div>
        </form>
      </div>
      <div className="bottom-button">
        <Button
          variant="contained"
          form="loginForm"
          type="submit"
          endIcon={<SendIcon />}
          sx={{
            background: "#b97b52",
            ":hover": {
              bgcolor: "#8f683d",
            },
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
