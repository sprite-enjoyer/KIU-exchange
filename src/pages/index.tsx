import Header from "@/components/Header";
import styles from "../styles/landing.module.scss";
import { Button, Container, Input, PressEvent, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Scrollbar from "@/components/Scrollbar";
import { useRouter } from "next/router";
import noUserRedirect from "@/helpers/NoUserRedirect";

const index = () => {

  const router = useRouter();
  const [username, setUsername] = useState('');

  const onClickHandler = (e: PressEvent) => {
    localStorage.setItem("KIUexchange_username", username);
    router.push("/offers");
  };

  useEffect(() => setUsername(localStorage.getItem("KIUexchange_username") ?? ""), []);

  return (
    <>
      <Scrollbar />
      <Header LeftComponent={undefined} />
      <div className={styles["main"]}>
        <Container display="flex" justify="center" direction="column" alignContent="center" alignItems="center">
          <Input
            bordered
            borderWeight="light"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            labelPlaceholder="Username"
          />

          <Spacer y={2} />
          <Button color={"success"} css={{ minWidth: "0", width: "100px" }} onPress={onClickHandler}>
            continue
          </Button >
        </Container>
      </div>
    </>
  );
}

export default index;