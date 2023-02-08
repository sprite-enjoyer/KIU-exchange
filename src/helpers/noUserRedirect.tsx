import { useRouter } from "next/router";
import { useEffect } from "react";

const noUserRedirect = () => {
  const router = useRouter();
  useEffect(() => { if (!localStorage.getItem("KIUexchange_username")) router.replace("/") }, []);
};


export default noUserRedirect;