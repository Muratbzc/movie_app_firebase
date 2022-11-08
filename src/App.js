import AuthProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router/AppRouter";
import { userObserver } from "./auth/firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    userObserver();
  }, []);
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
