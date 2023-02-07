import { GetServerSidePropsContext } from "next";
import { OfferProps } from "@/components/OfferCard";
import { Button, Col, Container, Input, PressEvent, Row, Text, Textarea, Image, Spacer } from "@nextui-org/react";
import styles from "../../styles/offer.module.scss";
import Header from "@/components/Header";
import Scrollbar from "@/components/Scrollbar";
import prismaClient from "prisma/prisma";
import { Offer } from "@prisma/client";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  let id = context.params?.id ? context.params?.id.toString() : "";
  const redirectObj = { redirect: { destination: "/404" } };

  const offer = await prismaClient.offer.findUnique({ where: { id: id } });
  if (!offer) return redirectObj;

  return offer ? { props: { ...offer } } : redirectObj
};

const offer = ({ id, offerMaker, itemOffered, itemWanted, exchangeLocation, description }: Offer) => {

  const onClickHandler = (e: PressEvent) => {
    //TODO
  };

  return (
    <>
      <Scrollbar />
      <Header LeftComponent={undefined} />
      <Container fluid responsive className={styles["main"]}>
        <div className={styles["main__infoContainer"]}>
          <Container
            display="flex"
            justify="center"
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
          <Spacer />
          <div className={styles["main__infoContainer__middleDiv"]} >
            <Text b>User: <Text>{offerMaker}</Text></Text>
            <Text b>location: <Text>{exchangeLocation.toString()}</Text> </Text>
            <Spacer y={0.5} />
            <Text>
              User "{offerMaker}" {" "}
              wants "{itemWanted}" and
              offers "{itemOffered}" in return.
              The location of the exchange will be "{exchangeLocation.toString()}".
            </Text>
          </div>
          <div className={styles["main__infoContainer__bottomDiv"]} >
            <Input
              aria-label="E-mail"
              labelLeft={<span style={{ minWidth: "50px" }} >E-mail:</span>}
              bordered
              borderWeight="light"
              width="80%"
              type={"email"}
            />
            <Textarea
              aria-label="Additioinal information"
              placeholder="Additional information"
              bordered
              borderWeight="light"
              width="80%"
            />
            <Button
              className={styles["btn"]}
              onPress={onClickHandler}
            >
              Contact to exchange
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};


export default offer;





// {
//   <>
//     <Card.Divider height={1} css={{ backgroundColor: "#177373" }} />
//     <Card.Footer css={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

//       <Spacer y={0.5} />
//       <Text h5 b>Additional information: </Text>
//       <Text>
//         {description}
//       </Text>
//     </Card.Footer>
//   </>
// }