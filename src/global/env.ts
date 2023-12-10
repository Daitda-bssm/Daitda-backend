const { JWT_SECRET_KEY, BSM_AUTH_CLIENT_ID, BSM_AUTH_CLIENT_SECRET } =
  process.env;

const getEnvCofigs = () => {
  if (!JWT_SECRET_KEY) throw new Error("JWT_SECRET_KEY is not defined");
  if (!BSM_AUTH_CLIENT_ID) throw new Error("BSM_AUTH_CLIENT_ID is not defined");
  if (!BSM_AUTH_CLIENT_SECRET)
    throw new Error("BSM_AUTH_CLIENT_SECRET is not defined");

  return { JWT_SECRET_KEY, BSM_AUTH_CLIENT_ID, BSM_AUTH_CLIENT_SECRET };
};

export default getEnvCofigs;
