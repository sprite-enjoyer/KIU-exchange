import styles from "../styles/header.module.scss";
import { Card, Container, Image, Link, Spacer, Text } from "@nextui-org/react";


const Header = () => {

  return (
    <div className={styles["main"]}>
      <Text className={styles["main__txt"]} weight={"medium"} size={"1.5em"} color="$darkGreen" >
        KIU exchange
      </Text>
      <Link
        href="https://github.com/sprite-enjoyer/KIU-exchange"
        target="_blank"
        className={styles["main__link"]}
      >
        <Image css={{ marginBottom: "0px" }} src={"/github.svg"} width={"30px"} objectFit="contain" />
      </Link>
    </div >
  );
};


export default Header;