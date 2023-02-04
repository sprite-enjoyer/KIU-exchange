import { Button, Card, Container, Grid, Row, Text, Image, Col, Spacer, useTheme } from "@nextui-org/react";
import styles from "../styles/offerCard.module.scss";

export interface OfferProps {
  offerID: number,
  offerMaker: string,
  itemWanted: string,
  itemOffered: string
}

const OfferCard = ({ offerID, offerMaker, itemOffered, itemWanted }: OfferProps) => {

  const onClickHandler = () => {
    //TODO redirect to card details with offerID.
  }
  return (
    <Card isHoverable isPressable
      variant="bordered"
      css={{ width: "350px", height: "150px", outline: "transparent", padding: "0" }}
      onPress={onClickHandler}
    >
      <Card.Header>
        <Text b>{offerMaker} :</Text>
      </Card.Header>
      <Card.Divider height={1} css={{ backgroundColor: "#177373" }} />
      <Card.Body css={{ padding: "0" }}>
        <Container
          css={{ width: "100%", height: "100%", padding: "0" }}
          display="flex"
          justify="center"
          alignItems="center"
        >
          <Row fluid justify="center" align="center" gap={1} >
            <Col css={{ display: "flex", justifyContent: "center" }} span={12} >
              <Text h5 className={styles["itemOffered"]} >{itemOffered}</Text>
            </Col>
            <Col span={4} >
              <Image src="./logo.svg" width={20} />
            </Col>
            <Col css={{ display: "flex", justifyContent: "center" }} span={12}>
              <Text className={styles["itemWanted"]} h5>{itemWanted}</Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <Card.Divider />
    </Card>
  );
};


export default OfferCard;