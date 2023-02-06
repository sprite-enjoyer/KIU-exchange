import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import styles from "../styles/offers.module.scss";
import { OfferProps } from "@/components/OfferCard";
import { Button, Checkbox, Container, Text } from "@nextui-org/react";
import { useState } from "react";
import AddOfferModal, { AddOfferProps } from "@/components/AddOfferModal";

const fakeOffersList: Omit<OfferProps, "mini">[] = [
  {
    offerID: 1,
    offerMaker: "bilbo leggings",
    itemWanted: "telefoni",
    itemOffered: "saponi",
    location: "F344",
    description: "zaan magari ragaca",
  },
  {
    offerID: 2,
    offerMaker: "sam gemji",
    itemWanted: "televizori",
    itemOffered: "balzami",
    location: "F344",
    description: "zaan magari ragaca",
  },
  {
    offerID: 3,
    offerMaker: "facha zazulia",
    itemWanted: "cxeni",
    itemOffered: "tvitmfrinavi",
    location: "F344",
    description: "zaan magari ragaca",
  }, {
    offerID: 4,
    offerMaker: "zaali",
    itemWanted: "gitara",
    itemOffered: "fleita",
    location: "F344",
    description: "zaan magari ragaca",
  }
];

const offers = () => {

  const [visible, setVisible] = useState(false);
  const onClickHandler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const HeaderButton = () => {
    return (
      <Button onPress={onClickHandler} className={styles["headerButton"]}>
        <Text h4 color="white" css={{ margin: "0" }}>add</Text>
      </Button>
    );
  };

  return (
    <Container responsive fluid className={styles["main"]} >
      <Header LeftComponent={() => <HeaderButton />} />
      <AddOfferModal visible={visible} closeHandler={closeHandler} addOffer={function ({ offerMaker, itemOffered, itemWanted, description, location, email }: AddOfferProps): void {
        throw new Error("Function not implemented.");
      }} />
      <Container
        display="flex"
        direction="column"
        justify="center"
        alignContent="center"
        css={{ marginTop: "15vh", gap: "20px", marginBottom: "50px" }}
      >
        <OfferCard
          key={9999}
          offerID={9999}
          offerMaker={"imena me ra"}
          itemWanted={"xelis kremi"}
          location="F344"
          description="kai rame ra"
          mini={true}
          itemOffered={"xinkali"} />
        {fakeOffersList.map((offer: Omit<OfferProps, "mini">) =>
          <OfferCard
            key={offer.offerID}
            offerID={offer.offerID}
            offerMaker={offer.offerMaker}
            itemWanted={offer.itemWanted}
            itemOffered={offer.itemOffered}
            location={offer.location}
            description={offer.description}
            mini
          />)}
      </Container>
    </Container>
  )
}

export default offers;