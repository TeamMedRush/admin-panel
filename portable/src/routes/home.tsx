import { Footer } from "@components/block/footer";
import { LinkMenuButton } from "@components/kit/link-menu-button";
import { Menu } from "@components/kit/menu";
import { MenuBrand } from "@components/kit/menu-brand";
import { ThemeButton } from "@components/kit/theme-button";
import { Container } from "@components/ui/structure/container";
import { Top } from "@components/ui/structure/top";
import { HomeView } from "@components/view/home-view";
import { CartProvider } from "@contexts/cart";
import { NewMedicinePage } from "@routes/new-medicine";
import { useForwarded } from "@utils/path";
import { type LayoutProps, useRouter } from "@utils/router";

function Layout({ dynamic, children }: LayoutProps) {
  return <>
    <Container>
      <Menu position="top-left">
        <MenuBrand />
      </Menu>

      <CartProvider>
        <Menu position="top-right">
          <ThemeButton />
          <LinkMenuButton
            url="/partners"
            icon="UserBadgeCheckRegular"
          />

          <LinkMenuButton
            url="/medicines"
            icon="PharmacyCrossTagRegular"
          />

          <LinkMenuButton
            url="/new-medicine"
            icon="PlusRegular"
          />

          <LinkMenuButton
            url="/"
            icon="HomeSimpleRegular"
          />
        </Menu>

        <Top />
        {children}

        {(!children && !dynamic) && (
          <HomeView />
        )}

        <Footer />
      </CartProvider>
    </Container>
  </>;
}

export function HomePage() {
  return useRouter(useForwarded(), Layout, {
    "new-medicine": NewMedicinePage,
  });
}

