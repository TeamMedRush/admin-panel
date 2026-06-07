import { MenuButton } from "@components/kit/menu-button";
import { Link } from "@components/ui/interactive/link";
import { useCart } from "@contexts/cart";

export function NewMedicineButton() {
  const { count } = useCart();

  return (<>
    <Link url="/new-medicine">
      <MenuButton
        icon="PlusRegular"
        badge={count}
      />
    </Link>
  </>);
}

