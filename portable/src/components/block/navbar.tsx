import { Linklet } from "@components/kit/linklet";
import { Section } from "@components/kit/section";
import { useClasses } from "@styles";

export function Navbar() {
  return (
    <Section className={useClasses("navbar-container")}>
      <Linklet
        icon="PlusRegular"
        title="Approve Medicine"
        url="/new-medicine"
        newTab={false}
      />

      <Linklet
        icon="PharmacyCrossTagRegular"
        title="Medicines"
        url="/medicines"
        newTab={false}
      />

      <Linklet
        icon="UserBadgeCheckRegular"
        title="Partners"
        url="/partners"
        newTab={false}
      />
    </Section>
  )
}

