import { Card, Container, Row, Text, Image, Col, Spacer } from "@nextui-org/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import styles from "../styles/offerCard.module.scss";

export interface OfferProps {
  id: string,
  offerMaker: string,
  itemWanted: string,
  itemOffered: string,
  location: string,
  description: string,
}

const OfferCard = ({ id, offerMaker, itemOffered, itemWanted, location, description }: OfferProps) => {
  const router = useRouter();
  const onClickHandler = () => router.push(`/offer/${id}`);

  return (
    <Card isHoverable isPressable variant="bordered" className={styles["main"]} onPress={onClickHandler}>
      <Card.Header css={{ display: "flex", justifyContent: "space-between" }} >
        <Text b>{offerMaker}</Text>
        <Text >{location}</Text>
      </Card.Header>
      <Card.Divider height={1} />
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