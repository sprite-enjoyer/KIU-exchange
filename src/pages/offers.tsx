import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import styles from "../styles/offers.module.scss";
import { Button, Container, Text } from "@nextui-org/react";
import { useState } from "react";
import AddOfferModal, { AddOfferProps } from "@/components/AddOfferModal";
import Scrollbar from "@/components/Scrollbar";
import { GetServerSideProps } from "next/types";
import prismaClient from "prisma/prisma";
import { Offer } from "@prisma/client";

export interface OffersProps {
  offersList: Offer[]
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const offers = await prismaClient.offer.findMany();
  return { props: { offersList: offers } };

};

const offers = ({ offersList }: OffersProps) => {

  const [visible, setVisible] = useState(false);
  const onClickHandler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const HeaderButton = () => {
    return (
      <Button onPress={onClickHandler} className={styles["headerButton"]}>
        <Text h4 color="white" css={{ margin: "0" }}>Add</Text>
      </Button>
    );
  };

  return (
    <>
      <Header LeftComponent={() => <HeaderButton />} />
      <div className={styles["main"]} >
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
          <Scrollbar />
          {
            offersList.map((offer: Offer) =>
              <OfferCard
                key={offer.number}
                offerID={offer.number}
                offerMaker={offer.offerMaker}
                itemWanted={offer.itemWanted ?? "not specified"}
                itemOffered={offer.itemOffered ?? "not specified"}
                location={offer.exchangeLocation}
                description={offer.description}
              />)
          }
        </Container>
      </div>
    </>
  );
};

export default offers;