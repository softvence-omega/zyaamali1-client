// components/CustomButton.tsx
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
};

export default function PrimaryButton({
  children,
  icon,
  onClick,
}: PrimaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="h-[52px] my-2 lg:my-0 rounded-[48px] lg:px-[40px] py-[10px] text-white bg-gradient-to-r from-[#654FAE] via-[#A891FB] to-[#8E6EFF] flex items-center justify-center gap-[10px] hover:opacity-90 transition-all duration-200"
    >
      {children}
      {icon && <span>{icon}</span>}
    </Button>
  );
}
