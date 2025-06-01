// components/CustomButton.tsx
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type OutlineButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
};

export default function OutlineButton({
  children,
  icon,
  onClick,
}: OutlineButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="h-[52px] rounded-[48px] lg:px-[40px] lg:py-[10px] text-blue-500 hover:text-white bg-transparent border border-blue-500 flex items-center justify-center gap-[10px] hover:opacity-90 transition-all duration-200"
    >
      {children}
      {icon && <span className="text-3xl">{icon}</span>}
    </Button>
  );
}
