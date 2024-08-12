import { useContext } from "react";

import Login from "@/components/Login/Login";

const Home = () => {
  return (
    <main className="flex items-center justify-center h-full">
      <div>
        <Login />
      </div>
    </main>
  );
};

export default Home;
