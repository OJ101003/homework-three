import { Button } from "./ui/button";
export default function CalcBTN({ value }) {
  return (
    <Button className="w-[70px] h-[70px] font-bold text-[30px] m-[10px]">{value}</Button>
  );
}
