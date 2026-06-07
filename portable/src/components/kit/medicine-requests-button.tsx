import { MenuButton } from "@components/kit/menu-button";
import { Link } from "@components/ui/interactive/link";
import { useCart } from "@contexts/cart";

export function MedicineRequestsButton() {
  const { count } = useCart();

  return (<>
    <Link url="/medicines">
      <MenuButton
        icon="PageStarRegular"
        badge={count}
      />
    </Link>
  </>);
}

