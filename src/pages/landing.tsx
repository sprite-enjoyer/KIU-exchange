import Header from "@/components/Header";
import styles from "../styles/landing.module.scss";
import { Button, Container, Input, PressEvent, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Scrollbar from "@/components/Scrollbar";

const LandingPage = () => {

  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');

  const onClickHandler = (e: PressEvent) => {

    localStorage.setItem("KIUexchange_username", username);
    localStorage.setItem("KIUexchange_location", location);

  };

  useEffect(() => {

    setUsername(localStorage.getItem("KIUexchange_username") ?? "");
    setLocation(localStorage.getItem("KIUexchange_location") ?? "");

  }, []);

  return (
    <>
      <Scrollbar />
      <Header LeftComponent={undefined} />
      <div className={styles["main"]}>
        <Container
          css={{ padding: "0" }}
          responsive
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className={styles["main__inputGroup"]} >
            <Input
              bordered
              borderWeight="light"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              labelPlaceholder="Username"
            />
            <Spacer y={2} />
            <Input
              bordered
              borderWeight="light"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              labelPlaceholder="location (optional)"
            />
            <Spacer y={1.5} />
            <Button auto className={styles["main__btn"]} onPress={onClickHandler}>
              continue
            </Button >
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;