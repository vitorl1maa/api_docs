import SideBar from "@/components/SideBar/SideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { methods } from "@/utils/methods";
import { Plus } from "lucide-react";

const ApiDoc = () => {
  return (
    <section className="h-screen flex">
      <SideBar />
      <div className="h-full w-full flex items-center justify-center flex-col px-8">
        <form className="w-full h-full border rounded-md px-8 my-5">
          <div className="w-96 mt-5">
            <label>Base Url</label>
            <Input className="mt-2" />
          </div>

          <div className="w-full mt-5 flex items-end gap-3">
            <div className="w-96">
              <label>Endpoint</label>
              <Input className="mt-2" />
            </div>

            <div>
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Métodos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Métodos</SelectLabel>
                    {methods.map((method) => (
                      <SelectItem key={method.name} value={method.name}>
                        {method.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button>
                <Plus size={18} />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApiDoc;
