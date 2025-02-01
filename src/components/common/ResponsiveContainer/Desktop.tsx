import { Icon, IconType } from "@/assets/icons";
import { useMount } from "@/hooks/useMount";
import { Menu, useNavigation } from "@/hooks/useNavigation";
import { capitalize } from "@/utils/string";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function Desktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="flex h-[100vh] w-[260px] flex-col justify-between px-[20px] pb-[80px] pt-[20px]">
        <div>
          <header className="flex items-center">
            <button className="h-[36px] w-[36px] rounded-[10px] bg-[#6390FA]"></button>
            <h1 className="ml-[12px] text-title-1-medium text-gray-800">
              for-the-block
            </h1>
          </header>

          <nav className="mb-[36px] mt-[26px]">
            <ul className="flex flex-col gap-[10px]">
              <NavigationItem menu="chat">블록챗</NavigationItem>
              <NavigationItem menu="information">소식</NavigationItem>
              <NavigationItem menu="poll">투표</NavigationItem>
            </ul>
          </nav>

          <h3 className="p-[12px] text-body-2-medium text-gray-600">
            최근 검색어
          </h3>
          <ul className="flex flex-col gap-[4px]">
            {[
              "블록체인",
              "이더리움 백서 주요 내용은 무엇인가요?",
              "블록체인은 어떤 문제를 해결하려고 만들어졌어?",
              "새로운 블록체인 프로토콜의 특징은?",
              "이더리움 백서 주요 내용은 무엇인가요?",
            ].map((text, index) => (
              <li
                key={index}
                className="truncate px-[12px] py-[6px] text-body-2-regular text-gray-900"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        <ThemeSwitch />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}

const NavigationItem = ({
  menu,
  children,
}: {
  menu: Menu;
  children: React.ReactNode;
}) => {
  const { isActiveMenu, handleChangeMenu } = useNavigation();

  return (
    <li
      className={clsx(
        "flex h-[36px] w-[100%] cursor-pointer items-center rounded-[8px] px-[12px]",
        isActiveMenu(menu) && "bg-gray-200",
      )}
      onClick={handleChangeMenu(menu)}
    >
      <Icon
        name={capitalize(menu) as IconType}
        className={isActiveMenu(menu) ? "fill-gray-900" : "fill-gray-500"}
      />
      <span
        className={clsx(
          "ml-[8px] text-body-1-medium",
          isActiveMenu(menu) ? "text-gray-900" : "text-gray-500",
        )}
      >
        {children}
      </span>
    </li>
  );
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-[100%] rounded-full bg-gray-200 p-[4px]">
      <button
        onClick={() => setTheme("light")}
        className={clsx(
          "flex w-[100%] items-center justify-center gap-[6px] rounded-full px-[20px] py-[4px]",
          theme === "light" ? "bg-white" : "",
        )}
      >
        <Icon
          name={"LightMode"}
          className={theme === "light" ? "fill-gray-900" : "fill-gray-500"}
        />
        <span className={theme === "light" ? "text-gray-800" : "text-gray-500"}>
          Light
        </span>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={clsx(
          "flex w-[100%] items-center justify-center gap-[6px] rounded-full px-[20px] py-[4px]",
          theme === "dark" ? "bg-dark" : "",
        )}
      >
        <Icon
          name={"DarkMode"}
          className={theme === "dark" ? "fill-gray-900" : "fill-gray-500"}
        />
        <span className={theme === "dark" ? "text-gray-800" : "text-gray-500"}>
          Dark
        </span>
      </button>
    </div>
  );
};
