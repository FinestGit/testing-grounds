import React, { useEffect } from "react";

const Login: React.FC = () => {
  const client_id = "f3cea039fd2e82ab18be";
  const redirect_uri = "http://localhost:3000/oauth/callback";
  const scope = "read:user";
  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`;

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.location.assign(GITHUB_AUTH_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default Login;
