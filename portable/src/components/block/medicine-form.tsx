import { useState } from "preact/hooks";

import { MedicineCard } from "@components/block/medicine-card";
import { Section } from "@components/kit/section";
import { Button } from "@components/ui/interactive/button";
import { Input } from "@components/ui/interactive/input";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { Medicine } from "@interfaces/medince";
import { useClasses } from "@styles";

export function MedicineForm() {
  const [preview, setPreview] = useState<Medicine>({
    id: "",
    name: "",
    imageUrl: "",
    price: {
      final: 0,
      original: 0,
      currency: {
        prefix: "",
        suffix: "INR",
      }
    },
  });

  return (
    <Section className={useClasses("medicine-form")}>
      <Heading size="large">
        Approve Medicine
      </Heading>

      <Container className={useClasses("medicine-form-layout")}>
        <Container className={useClasses("medicine-form-data")}>
          <Container className={useClasses("medicine-form-details")}>
            <Container className={useClasses("medicine-form-field")}>
              <Text className={useClasses("medicine-form-label")}>
                Medicine Name
              </Text>

              <Input placeholder="Medicine Name" />
            </Container>

            <Container className={useClasses("medicine-form-field")}>
              <Text className={useClasses("medicine-form-label")}>
                Medicine Image URL
              </Text>

              <Input placeholder="Medicine Image URL" />
            </Container>

            <Container className={useClasses("medicine-form-field")}>
              <Text className={useClasses("medicine-form-label")}>
                Medicine Original Price
              </Text>

              <Input placeholder="Medicine Original Price" />
            </Container>

            <Container className={useClasses("medicine-form-field")}>
              <Text className={useClasses("medicine-form-label")}>
                Medicine Price
              </Text>

              <Input placeholder="Medicine Price" />
            </Container>
          </Container>

          <Button>
            Save Medicine
          </Button>
        </Container>

        <Container className={useClasses("medicine-form-preview")}>
          <MedicineCard
            medicine={preview}
          />
        </Container>
      </Container>
    </Section>
  );
}

