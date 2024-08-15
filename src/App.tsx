import { BookText } from "lucide-react";

import { ThemeProvider } from "./context/ThemeContext";
import { ButtonTheme } from "./components/ButtonTheme/ButtonTheme";
import RoutesApp from "./routes";

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

          <div className="flex items-center gap-6">
            <h1 className="font-bold">Fulano de Tal</h1>
            <ButtonTheme />
          </div>
        </div>

        <RoutesApp />
      </ThemeProvider>
    </main>
  );
}

export default App;
