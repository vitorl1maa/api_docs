import iconImage from "../../assets/icon.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ArchiveRestore,
  EllipsisVerticalIcon,
  FolderOpenDot,
  FolderPlus,
  Link,
  Trash2,
} from "lucide-react";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CardProject = () => {
  return (
    <section className="flex gap-5 flex-wrap">
      <div className="border rounded-md h-48 w-72 cursor-pointer hover:border-blue-500">
        <div className="h-full p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 h-12">
              <img src={iconImage} className="w-10 rounded-full" />
              <h1 className="font-bold">School Mobile</h1>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none" asChild>
                <button className="focus:border-0">
                  <EllipsisVerticalIcon size={15} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-20">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer  text-red-600 focus:bg-red-600/30 focus:text-red-600">
                    <Trash2 size={15} />
                    <span>Deletar</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer ">
                    <ArchiveRestore size={15} />
                    <span>Arquivar</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a
            href="https://bitbucket.org/inspelldesenv/workspace/projects/SCHOOL"
            target="_blank"
            className="flex items-center gap-1 text-xs font-bold text-blue-500"
          >
            <Link size={15} />
            Repositório
          </a>

          <div className="flex gap-2">
            <span className="w-11 h-10 p-2 border rounded-md flex justify-center items-center bg-muted">
              <Icon
                icon="vscode-icons:file-type-reactts"
                className="text-[3rem] "
              />
            </span>
            <span className="w-11 h-10 p-2 border rounded-md flex justify-center items-center bg-muted">
              <Icon icon="devicon:nodejs" className="text-[3rem] " />
            </span>
            <span className="w-11 h-10 p-2 border rounded-md flex justify-center items-center bg-muted">
              <Icon
                icon="skill-icons:styledcomponents"
                className="text-[3rem] "
              />
            </span>
          </div>
        </div>
      </div>

      <div className="border rounded-md h-48 w-72 cursor-pointer hover:border-blue-500">
        <div className="h-full p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 h-12">
              <Avatar>
                <AvatarImage alt="projeto" />
                <AvatarFallback>
                  <FolderOpenDot />
                </AvatarFallback>
              </Avatar>
              <h1 className="font-bold">iFitness</h1>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none" asChild>
                <button className="focus:border-0">
                  <EllipsisVerticalIcon size={15} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-20">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer  text-red-600 focus:bg-red-600/30 focus:text-red-600">
                    <Trash2 size={15} />
                    <span>Deletar</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex items-center gap-2 cursor-pointer ">
                    <ArchiveRestore size={15} />
                    <span>Arquivar</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a
            href="https://bitbucket.org/inspelldesenv/workspace/projects/IF"
            target="_blank"
            className="flex items-center gap-1 text-xs font-bold text-blue-500"
          >
            <Link size={15} />
            Repositório
          </a>

          <div className="flex gap-2">
            <span className="w-11 h-10 p-2 border rounded-md flex justify-center items-center bg-muted">
              <Icon
                icon="vscode-icons:file-type-angular"
                className="text-[3rem] "
              />
            </span>
            <span className="w-11 h-10 p-2 border rounded-md flex justify-center items-center bg-muted">
              <Icon icon="logos:php" className="text-[3rem] " />
            </span>
            <span className="w-11 h-10 p-2 border rounded-md flex justify-center items-center bg-muted">
              <Icon icon="logos:bootstrap" className="text-[3rem] " />
            </span>
          </div>
        </div>
      </div>

      <div className="border rounded-md h-48 w-72 flex justify-center items-center cursor-pointer hover:border-blue-500">
        <div className="flex flex-col items-center hover:text-blue-500">
          <span>
            <FolderPlus />
          </span>
          <button className="font-bold text-md">Novo projeto</button>
        </div>
      </div>
    </section>
  );
};

export default CardProject;
