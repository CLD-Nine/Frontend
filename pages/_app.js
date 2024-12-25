import { Toaster } from "@/components/ui/sonner";

import { CloudProvider } from "@/context/CloudContext";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CloudProvider>
      <div>
        <Toaster />

        {/* <div className='sticky top-0 z-50 glass'> */}
        <div className='sticky top-0 z-50 '>
          <Navbar />
        </div>

        <Component {...pageProps} />
      </div>
    </CloudProvider>
  );
}
