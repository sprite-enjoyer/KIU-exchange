import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import styles from "../styles/offers.module.scss";
import { OfferProps } from "@/components/OfferCard";
import { Container } from "@nextui-org/react";

const fakeOffersList: OfferProps[] = [
  {
    offerID: 1,
    offerMaker: "dildoLeggings",
    itemWanted: "ganja",
    itemOffered: "saponi"
  },
  {
    offerID: 2,
    offerMaker: "sam ganja",
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
    offerMaker: "celqi gogos postebi",
    itemWanted: "siyvaruli",
    itemOffered: "gasiebuli traki"
  }
]

const offers = () => {
  return (
    <>
      <Header />
      <Container css={{ overflow: "scroll" }} fluid className={styles["main"]} >
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
            itemWanted={"xelis da yveris kremi sammagi "}
            itemOffered={"xinkali alublis gemoti"} />
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
    </>
  )
}

export default offers;