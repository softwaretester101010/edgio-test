import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

// simple ssr on each request
// old way would be getInitialProps -> that would work the same way my engine works -> further requests would be invoked client side
// this contacts the node server serving, runs the query there also, so its more secure etc etc -> also, i can access DB directly for example (if needed), not having to create additional endpoints to call
export async function getServerSideProps(context) {
  return {
    props: {
      curTime: new Date().getTime(),
    },
  };
}

export default function Products({ curTime }) {
  const router = useRouter();
  const { id } = router.query;
  return <div className={styles.container}>{"Hello " + id + ", it's " + new Date(curTime).toLocaleTimeString()}</div>;
}
