import { useState } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleNavigation = () => {
    navigation("/projects");
  };

  return (
    <form className="w-[400px] h-[350px] rounded-md border border-input p-8 flex flex-col justify-center gap-5">
      <div>
        <label className="font-semibold">Usuário(e-mail)</label>
        <Input
          className="mt-2 focus-visible:border-blue-500"
          type="email"
          required
        />
      </div>

      <div>
        <label className="font-semibold">Senha</label>
        <Input
          className="mt-2 focus-visible:border-blue-500"
          type={showPassword ? "text" : "password"}
          required
        />
      </div>

      <div className="relative">
        <div className="relative">
          <span className="absolute right-5 -top-[52px] ">
            {showPassword ? (
              <EyeOff
                className="cursor-pointer"
                size={25}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <Eye
                className="cursor-pointer"
                size={25}
                onClick={togglePasswordVisibility}
              />
            )}
          </span>
          <Button
            variant="outline"
            className="w-full font-bold mt-5 hover:translate-y-2 border-blue-500 bg-blue-600/10 text-blue-500"
            onClick={handleNavigation}
          >
            Entrar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
