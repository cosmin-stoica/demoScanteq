import ScrollToTop from "./app/elements/scroll-to-top";
import RootLayout from "./layouts/root-layout";
import Loader from "./app/elements/loader";
import { useState, useEffect } from "react";
import { AppProvider } from "./app/components/supervisor/supervisor_tecnico/maintenance/AppContext";
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
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && ['admin@auth.com', 'demo@auth.com', 'sabelt@auth.com', 'lamborghini@auth.com', 'cosmin.stoica@scanteq.com'].includes(user.email)) {
        setAuthChecked(true);
      } else {
        const currentPath = window.location.pathname;
        const allowedPaths = [
          '/', '', "/unitadicontrollo", "/schede-automazione", "/scheda-controllo-digitale", "/mes",
          "/masp-caratteristiche", "/masp-operazioni", "/masp-tracciabilita", "/mes", "/incostruzione",
          "/picking", "/about-us", "/mission", "/leadership", "/portfolio", "/services",
          "/hardware-solutions", "/schede-hardware", "/supervisor", "/automazione", "/masp", "/imagina",
          "/contact-us", "/login"
        ];

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

      if (totalImages === 0) {
        setImagesLoaded(true);
        return; // No images to load, mark as loaded
      }

      const imageLoaded = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setImagesLoaded(true);
        }
      };

      setImagesLoaded(false); // Reset the images loaded state when the route changes

      images.forEach((img) => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener("load", imageLoaded);
          img.addEventListener("error", imageLoaded); // Consider the image loaded even if there's an error
        }
      });

      const timeoutId = setTimeout(() => {
        setImagesLoaded(true);
      }, 3000); // Reduced timeout to 3 seconds

      // Clean up event listeners when the component unmounts
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
