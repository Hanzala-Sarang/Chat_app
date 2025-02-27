import logo from "./logo.svg";
import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "932521306226-ieejpv1rd26jlrmrsj0ug35tbk3o1mhg.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
