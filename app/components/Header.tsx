"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface Props {
  label: string;
  showBackArrow?: boolean;
}

export default function Header({ label, showBackArrow }: Props) {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={24}
            className="cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
}
