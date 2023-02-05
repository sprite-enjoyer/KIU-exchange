import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import styles from "../styles/offers.module.scss";
import { OfferProps } from "@/components/OfferCard";
import { Container } from "@nextui-org/react";

const fakeOffersList: OfferProps[] = [
  {
    offerID: 1,
    offerMaker: "bilbo leggings",
    itemWanted: "telefoni",
    itemOffered: "saponi"
  },
  {
    offerID: 2,
    offerMaker: "sam gemji",
    itemWanted: "televizori",
    itemOffered: "balzami"
  },
  {
    offerID: 3,
    offerMaker: "facha zazulia",
    itemWanted: "cxeni",
    itemOffered: "tvitmfrinavi"
  }, {
    offerID: 4,
    offerMaker: "zaali",
    itemWanted: "gitara",
    itemOffered: "fleita"
  }
]

const offers = () => {
  return (
    <Container responsive fluid className={styles["main"]} >
      <Header />
      <Container
        display="flex"
        direction="column"
        justify="center"
        alignContent="center"
        css={{ marginTop: "20vh", gap: "20px" }}
      >
        <OfferCard
          key={9999}
          offerID={9999}
          offerMaker={"imena me ra"}
          itemWanted={"xelis kremi "}
          itemOffered={"xinkali"} />
        {fakeOffersList.map((offer: OfferProps) =>
          <OfferCard
            key={offer.offerID}
            offerID={offer.offerID}
            offerMaker={offer.offerMaker}
            itemWanted={offer.itemWanted}
            itemOffered={offer.itemOffered}
          />)}
      </Container>
    </Container>
  )
}

export default offers;