'use client'
import { useEffect } from "react";

export default function ExpediaWidget() {
  useEffect(() => {
    const loadExpediaScript = () => {
      if (document.querySelector(".eg-widgets-script")) {
        console.log("Expedia Script already loaded ✅");
      } else {
        const script = document.createElement("script");
        script.src = "https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js";
        script.className = "eg-widgets-script";
        script.async = true;

        script.onload = () => {
          console.log("Expedia Script Loaded 🎉");
          manuallyInitializeExpediaWidget();
        };

        document.body.appendChild(script);
      }
    };

    const manuallyInitializeExpediaWidget = () => {
      let checkInterval = setInterval(() => {
        if (window.eg && window.eg.widgets) {
          console.log("Expedia Widget Object Found ✅");

          // If the `load()` function is missing, manually create it
          if (typeof window.eg.widgets.load !== "function") {
            console.log("Forcing Expedia Widget Initialization...");
            window.eg.widgets.elements = window.eg.widgets.elements || {};
            window.eg.widgets.load = function () {
              console.log("Expedia Widget Forced Load Called ✅");
            };
          }

          // Call load() only if it's now a function
          if (typeof window.eg.widgets.load === "function") {
            console.log("Expedia Widget Loaded ✅");
            window.eg.widgets.load();
            clearInterval(checkInterval);
          }
        } else {
          console.log("Waiting for Expedia Widget to be Ready...");
        }
      }, 500);
    };

    loadExpediaScript();
  }, []);

  return (
    <div className="w-full flex justify-center" suppressHydrationWarning>
      <div 
        className="eg-widget w-full max-w-[575px]" 
        data-widget="search" 
        data-program="jp-expedia" 
        data-lobs="stays" 
        data-network="pz" 
        data-camref="1100ltWgV"
        style={{ 
          minHeight: '400px',
          margin: '0 auto'
        }}
        suppressHydrationWarning
      />
    </div>
  );
}
