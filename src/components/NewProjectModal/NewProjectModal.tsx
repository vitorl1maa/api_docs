import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  CircleHelp,
  FileCode,
  FolderPlus,
  ImagePlus,
  LibraryBig,
  X,
} from "lucide-react";
import { AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";
import SelectInput from "../SelectInput/SelectInput";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const NewModalProject = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/api-doc");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="border rounded-md h-48 w-72 flex justify-center items-center cursor-pointer hover:border-blue-500">
          <div className="flex flex-col items-center hover:text-blue-500">
            <span>
              <FolderPlus />
            </span>
            <button className="font-bold text-md">Novo projeto</button>
          </div>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-between">
          <Avatar className="w-14 h-14 cursor-pointer">
            <AvatarImage alt="@shadcn" />
            <AvatarFallback>
              <ImagePlus />
            </AvatarFallback>
          </Avatar>

          <AlertDialogCancel className="border-none">
            <X />
          </AlertDialogCancel>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Nome do projeto</label>
            <Input />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Repositório</label>
            <Input />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col gap-2 ite">
                <label className="text-sm font-bold">Stacks utilizadas</label>
                <SelectInput />
              </div>

              <CircleHelp size={15} className="cursor-pointer" />
            </div>
          </div>

          <div>
            <Input />
          </div>

          <div className="w-full flex gap-5">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-bold">Adicionar APIs</label>

              <Button onClick={handleNavigation} className="w-full">
                <LibraryBig />
              </Button>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm font-bold">
                Adicionar documentação
              </label>

              <Button className="w-full">
                <FileCode />
              </Button>
            </div>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewModalProject;
