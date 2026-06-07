import * as iconoir from "@attaditya/iconoir-preact/regular";
import { MenuButton } from "@components/kit/menu-button";
import { Link } from "@components/ui/interactive/link";

export function LinkMenuButton({ url, icon }: {
  url: string;
  icon: keyof typeof iconoir;
}) {
  return (<>
    <Link url={url}>
      <MenuButton
        icon={icon}
      />
    </Link>
  </>);
}

