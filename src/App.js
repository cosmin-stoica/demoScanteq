import ScrollToTop from "./app/elements/scroll-to-top";
import RootLayout from "./layouts/root-layout";
import Loader from "./app/elements/loader";
import { useState, useEffect } from "react";
import { AppProvider } from "./app/components/maintenance/AppContext";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import i18n from "./globals/traduttore/i18n";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = getAuth(); // Ottieni l'oggetto auth dalla tua configurazione Firebase

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && (user.email === 'admin@auth.com' || user.email === 'demo@auth.com' || user.email === 'sabelt@auth.com' || user.email === 'lamborghini@auth.com' || user.email === 'cosmin.stoica@scanteq.com')) {
        setAuthChecked(true);
      } else {
        const currentPath = window.location.pathname;
        const allowedPaths = ['/', '', "/unitadicontrollo", "/schede-automazione", "/scheda-controllo-digitale", "/mes", "/masp-caratteristiche", "/masp-operazioni", "/masp-tracciabilita", "/mes", "/incostruzione", "/picking", "/about-us", "/mission", "/leadership", "/portfolio", "/services", "/hardware-solutions", "/schede-hardware", "/supervisor", "/automazione", "/masp", "/imagina", "/contact-us", "/login"]; // Aggiungi i percorsi consentiti
        if (!allowedPaths.includes(currentPath)) {
          navigate('/login');
        } else {
          setAuthChecked(true);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (authChecked) {
      const images = document.querySelectorAll("img");
      const totalImages = images.length;
      let loadedImages = 0;

      const imageLoaded = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setImagesLoaded(true);
        }
      };

      setImagesLoaded(false); // Resetta lo stato delle immagini caricate quando cambia la rotta

      images.forEach((img) => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener("load", imageLoaded);
          img.addEventListener("error", imageLoaded); // Considera l'immagine caricata anche se c'è un errore
        }
      });

      const timeoutId = setTimeout(() => {
        setImagesLoaded(true);
      }, 5000); // Timeout di 5 secondi per evitare loop infinito

      // Pulisci gli event listener quando il componente si smonta
      return () => {
        clearTimeout(timeoutId);
        images.forEach((img) => {
          img.removeEventListener("load", imageLoaded);
          img.removeEventListener("error", imageLoaded);
        });
      };
    }
  }, [authChecked, location]);

  if (isLoading || !authChecked || !imagesLoaded) {
    return <Loader />;
  }

  return (
    <AppProvider>
      <ScrollToTop />
      <RootLayout />
    </AppProvider>
  );
}

export default App;

