"use client";

import { usePathname, useRouter } from "next/navigation";

export type Menu = "chat" | "poll" | "information";

export const useNavigation = () => {
  const pathname = usePathname();
  const activeMenu = pathname?.split("/")[1] || "chat";

  const isActiveMenu = (menu: Menu) => {
    return activeMenu === menu;
  };

  const router = useRouter();
  const handleChangeMenu = (menu: Menu) => () => {
    router.push(`/${menu}`);
  };

  return { isActiveMenu, handleChangeMenu };
};
