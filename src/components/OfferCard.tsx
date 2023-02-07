import { Card, Container, Row, Text, Image, Col, Spacer } from "@nextui-org/react";
import styles from "../styles/offerCard.module.scss";

export interface OfferProps {
  offerMaker: string,
  itemWanted: string,
  itemOffered: string,
  location: string,
  description: string,
}

const OfferCard = ({ offerMaker, itemOffered, itemWanted, location, description }: OfferProps) => {

  const onClickHandler = () => {
    //TODO redirect to card details with offerID.
  };

  return (
    <Card isHoverable isPressable variant="bordered" className={styles["main"]} onPress={onClickHandler}>
      <Card.Header css={{ display: "flex", justifyContent: "space-between" }} >
        <Text b>{offerMaker}</Text>
        <Text >{location}</Text>
      </Card.Header>
      <Card.Divider height={1} css={{ backgroundColor: "#177373" }} />
      <Card.Body css={{ padding: "0", height: "80px", maxHeight: "80px" }}>
        <Container
          css={{ width: "100%", height: "100%", padding: "0" }}
          display="flex"
          justify="space-around"
          alignItems="center"
        >
          <Row fluid justify="center" align="center" gap={1} >
            <Col css={{ display: "flex", justifyContent: "center" }} span={12} >
              <Text h4 className={styles["itemWanted"]}>{itemWanted}</Text>
            </Col>
            <Col span={4} >
              <Image src="\logo.svg" width={20} />
            </Col>
            <Col css={{ display: "flex", justifyContent: "center" }} span={12}>
              <Text h4 className={styles["itemOffered"]} >{itemOffered}</Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};


export default OfferCard;