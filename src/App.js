import AuthProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
