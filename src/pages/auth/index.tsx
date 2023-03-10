import Layout from "@/components/layout";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const AuthPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full h-full">
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              const credential = credentialResponse.credential;

              const res = await axios.post(
                `http://127.0.0.1:8080/user/google-auth`,
                { credentialString: credential }
              );

              console.log(res);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </Layout>
  );
};

export default AuthPage;
