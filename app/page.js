import CalcBTN from "@/components/CalcBTN";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[380px] h-[500px] m-[5px] rounded-xl bg-slate-300 ">
        <div className="py-[35px] px-[50px] m-[5%] rounded-[20px] border-[5px] border-solid border-white h-0 flex justify-center items-center">
          <p className="m-0 p-0 text-[30px]"></p>
        </div>
        <div className="flex flex-row justify-center flex-wrap bg-slate-200 pt-[10px]">
          {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "X", "C", 0, "=", "/"].map(
            (value) => (
              <CalcBTN key={value} value={value}></CalcBTN>
            )
          )}
        </div>
      </div>
    </div>
  );
}
