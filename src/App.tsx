import Home from "@/pages/home/Home";

import { ThemeProvider } from "@/context/ThemeContext";
import { ButtonTheme } from "@/components/ButtonTheme/ButtonTheme";

import { BookText } from "lucide-react";
import RoutesApp from "@/routes";

function App() {
  return (
    <main className="flex flex-col h-screen">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex justify-between  px-8 py-2 border-b">
          <div className="flex gap-2 items-center">
            <span>
              <BookText />
            </span>
            <p>APIs Doc</p>
          </div>

          <ButtonTheme />
        </div>

        <RoutesApp />
      </ThemeProvider>
    </main>
  );
}

export default App;
