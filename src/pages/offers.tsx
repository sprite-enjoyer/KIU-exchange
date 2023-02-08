import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import styles from "../styles/offers.module.scss";
import { Button, Container, Text } from "@nextui-org/react";
import { useState } from "react";
import AddOfferModal from "@/components/AddOfferModal";
import Scrollbar from "@/components/Scrollbar";
import { GetServerSideProps } from "next/types";
import prismaClient from "prisma/prisma";
import { Offer } from "@prisma/client";
import noUserRedirect from "@/helpers/noUserRedirect";

export interface OffersProps {
  offersList: Offer[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const offers = await prismaClient.offer.findMany();
  return { props: { offersList: offers } };

};

const offers = ({ offersList }: OffersProps) => {
  noUserRedirect();

  const [visible, setVisible] = useState(false);
  const onClickHandler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const HeaderButton = () => {
    return (
      <Button color={"success"} onPress={onClickHandler} className={styles["headerButton"]}>
        <Text size={"medium"} color="white" css={{ margin: "0" }}>Add</Text>
      </Button>
    );
  };

  return (
    <>
      <Header LeftComponent={() => <HeaderButton />} />
      <div className={styles["main"]} >
        <AddOfferModal visible={visible} closeHandler={closeHandler} />
        <Container
          display="flex"
          direction="column"
          justify="center"
          alignContent="center"
          css={{ marginTop: "15vh", gap: "20px", marginBottom: "50px", overflow: "hidden" }}
        >
          <Scrollbar />
          {
            offersList.map((offer: Offer) =>
              <OfferCard
                id={offer.id}
                key={offer.id}
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