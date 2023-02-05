import { GetServerSideProps } from "next";
import OfferCard, { OfferProps } from "@/components/OfferCard";
import { Button, Container, Input, PressEvent, Spacer, Textarea } from "@nextui-org/react";
import styles from "../../styles/offer.module.scss";
import Header from "@/components/Header";

export const getServerSideProps: GetServerSideProps<OfferProps> = async (context) => {
  const offerID = context.params?.offerID;
  //TODO lookup the offerID in the database
  //If offer exists, return information as props.
  //If offer doesn't exist, redirect to not found page.

  return {
    props: {
      offerID: 15,
      offerMaker: "me",
      itemOffered: "tvitmprinavi",
      itemWanted: "zooparki",
      location: "F344",
      description: "zaan magari ragaca",
      mini: false
    }
  };
};

const offer = ({ offerID, offerMaker, itemOffered, itemWanted, location, description, mini }: OfferProps) => {

  const onClickHandler = (e: PressEvent) => {
    //TODO
    console.log("TODO!")
  };

  return (
    <Container fluid responsive className={styles["main"]}>
      <Header />
      <Container
        fluid
        responsive
        display="flex"
        justify="center"
        css={{ marginTop: "15vh", padding: "0" }}
      >
        <OfferCard
          offerID={offerID}
          offerMaker={offerMaker}
          itemWanted={itemWanted}
          itemOffered={itemOffered}
          location={location}
          description={description}
          mini={false}
        />
      </Container>
      <div style={{ height: "5px", width: "100vw" }} />
      <Container
        responsive
        fluid
        display="flex"
        direction="column"
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Input
          css={{ width: "60vw", "@xs": { width: "15vw" } }}
          underlined
          labelPlaceholder="E-mail"
        />
        <Spacer y={2} />
        <Textarea
          css={{ width: "60vw", "@xs": { width: "15vw" } }}
          underlined
          labelPlaceholder="Comment"
          minRows={2}
          maxRows={4}
        />
        <Spacer y={2} />
        <Button
          onPress={onClickHandler}
          css={{ backgroundColor: "$green1", outline: "transparent", width: "80px" }}
        >
          Contact to exchange
        </Button>
      </Container>
    </Container >
  );
};


export default offer;