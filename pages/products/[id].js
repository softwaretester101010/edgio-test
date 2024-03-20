import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

// build time
export async function getStaticProps(context) {
  return {
    props: {
      message: "This is product: ",
    },
  };
}

// build time
export async function getStaticPaths(context) {
  return {
    paths: [{ params: { id: "computer" } }, { params: { id: "headphones" } }],
    fallback: false,
  };
}

export default function Products({ message }) {
  const router = useRouter();
  const { id } = router.query;
  return <div className={styles.container}>{message + id}</div>;
}
