import { Button } from "./ui/button";
export default function CalcBTN({ value, onClick }) {
  return (
    <Button className="w-[70px] h-[70px] font-bold text-[30px] m-[10px]" onClick={() => onClick(value)}>{value}</Button>
  );
}
