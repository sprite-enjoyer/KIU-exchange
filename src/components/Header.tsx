import styles from "../styles/header.module.scss";
import { Link, Text, Image } from "@nextui-org/react";

export interface HeaderProps {
  LeftComponent: ((() => JSX.Element) | undefined),
}

const Header = ({ LeftComponent }: HeaderProps) => {

  return (
    <div className={styles["main"]}>
      {LeftComponent && <LeftComponent />}
      <Text className={styles["main__txt"]} weight={"medium"} size={"2em"} >
        KIU exchange
      </Text>
      <Link
        href="https://github.com/sprite-enjoyer/KIU-exchange"
        target="_blank"
        className={styles["main__link"]}
      >
        <Image css={{ opacity: "40%" }} src={"/github.svg"} width={"25px"} />
      </Link>
    </div >
  );
};


export default Header;