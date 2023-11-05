// ./app\page.js
"use client";
import CalcBTN from "@/components/CalcBTN";
import NumField from "@/components/NumField";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [equation, setEquation] = useState("");

  const appendSymbols = (val) => {
    if (val === "C") {
      setEquation("");
      return;
    } 
    setEquation(equation + val.toString());
    console.log(equation, typeof val);
  };
  const updateText = () => {
    try {
      setEquation(eval(equation))
    } catch (err) {
      setEquation("ERROR")
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-[380px] h-[500px] m-[5px] rounded-xl bg-slate-300 ">
        <div className="py-[35px] px-[50px] m-[5%] rounded-[20px] border-[5px] border-solid border-white h-0 flex justify-center items-center">
          <NumField value={equation} />
        </div>
        <div className="flex flex-row justify-center flex-wrap bg-slate-200 pt-[10px]">
          {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "X", "C", 0, "=", "/"].map(
            (value) => {
              if (value === "=") {
                return (
                  <CalcBTN
                    key={value}
                    value={value}
                    onClick={updateText}
                  ></CalcBTN>
                );
              } else {
                return (
                  <CalcBTN
                    key={value}
                    value={value}
                    onClick={appendSymbols}
                  ></CalcBTN>
                );
              }
            }
          )}
        </div>
      </div>
    </div>
  );
}
