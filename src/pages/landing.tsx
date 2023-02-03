import Header from "@/components/Header";
import styles from "../styles/landingPage.module.scss";
import { Button, Card, Container, Grid, Input, Link, Spacer, Text } from "@nextui-org/react";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className={styles["main"]}>
        <Container
          css={{ marginBottom: "20vh", "@xs": { marginBottom: "10vh" } }}
          responsive
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Input
            css={{ width: "60vw", "@xs": { width: "15vw" } }}
            underlined
            labelPlaceholder="Username"
          />
          <Spacer y={2} />
          <Input
            css={{ width: "60vw", "@xs": { width: "15vw" } }}
            underlined
            labelPlaceholder="location (optional)"
          />
          <Spacer y={1.5} />
          <Button css={{ backgroundColor: "$lightGreen", outline: "transparent" }} auto>continue</Button >
        </Container>
      </div>


    </>
  );
}

export default LandingPage;