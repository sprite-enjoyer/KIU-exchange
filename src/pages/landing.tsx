import Header from "@/components/Header";
import styles from "../styles/landingPage.module.scss";
import { Button, Container, Input, PressEvent, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";

const LandingPage = () => {

  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');

  const onClickHandler = (e: PressEvent) => {
    console.log(username);
    console.log(location);

    localStorage.setItem("KIUexchange_username", username);
    localStorage.setItem("KIUexchange_location", location);

    console.log(localStorage.getItem("KIUexchange_username"));
    console.log(localStorage.getItem("KIUexchange_location"));

  };

  useEffect(() => {

    setUsername(localStorage.getItem("KIUexchange_username") ?? "");
    setLocation(localStorage.getItem("KIUexchange_location") ?? "");

  }, []);

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            css={{ width: "60vw", "@xs": { width: "15vw" } }}
            underlined
            labelPlaceholder="Username"
            as="input"
          />
          <Spacer y={2} />
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            css={{ width: "60vw", "@xs": { width: "15vw" } }}
            underlined
            labelPlaceholder="location (optional)"
            as="input"
          />
          <Spacer y={1.5} />
          <Button onPress={onClickHandler} css={{ backgroundColor: "$lightGreen", outline: "transparent" }} auto>continue</Button >
        </Container>
      </div>
    </>
  );
}

export default LandingPage;