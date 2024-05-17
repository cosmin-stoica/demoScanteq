import ScrollToTop from "./app/elements/scroll-to-top";
import RootLayout from "./layouts/root-layout";
import Loader from "./app/elements/loader";
import { useState } from "react";
import { AppProvider } from "./app/components/maintenance/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {

  const [isLoading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    setLoading(false);
  }, 500);

  useEffect(() => {
    const auth = getAuth(); // Ottieni l'oggetto auth dalla tua configurazione Firebase

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && (user.email === 'admin@auth.com' || user.email === 'demo@auth.com' || user.email === 'sabelt@auth.com' || user.email === 'lamborghini@auth.com' || user.email === 'cosmin.stoica@scanteq.com')) {
        // Aggiungi il codice per gestire l'email come desideri
        // setEmail(user.email);
        setAuthChecked(true);
      } else {
        // Se l'utente non è autenticato, reindirizza solo se non si trova su una pagina specifica
        const currentPath = window.location.pathname;
        const allowedPaths = ['/', '', "/mes", "/masp-caratteristiche", "/masp-operazioni", "/masp-tracciabilita", "/mes", "/incostruzione", "/picking", "/about-us", "/mission", "/leadership", "/portfolio", "/services", "/hardware-solutions", "/schede-hardware", "/supervisor", "/automazione", "/masp", "/imagina", "/contact-us", "/login"]; // Aggiungi i percorsi consentiti
        if (!allowedPaths.includes(currentPath)) {
          navigate('/login');
        } else {
          setAuthChecked(true);
        }
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

  if (isLoading || !authChecked) {
    return null;
  }


  return (
    <>
    <AppProvider>
      { isLoading && <Loader /> }
      <ScrollToTop />
      <RootLayout />
      </AppProvider>
    </>
  );
}

export default App;
