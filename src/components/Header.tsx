import styles from "../styles/header.module.scss";
import { Image, Link, Text } from "@nextui-org/react";


const Header = () => {

  return (
    <div className={styles["main"]}>
      <Text className={styles["main__txt"]} weight={"medium"} size={"2em"} >
        KIU exchange
      </Text>
      <Link
        href="https://github.com/sprite-enjoyer/KIU-exchange"
        target="_blank"
        className={styles["main__link"]}
      >
        <Image src={"/github.svg"} width={"35px"} />
      </Link>
    </div >
  );
};


export default Header;