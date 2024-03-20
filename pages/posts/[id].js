import styles from "../../styles/Home.module.css";
// build time
export async function getStaticPaths(context) {
  return {
    paths: [{ params: { id: "post1" } }, { params: { id: "post2" } }],
    fallback: false, // false will show 404 if not exists, blocking will generate the page on first request, caches it
    // if true, it the server will return DUMMY page, which is expected to have loader or something implemented -> blocking will just be stuck until the initial server-side render is created
  };
}

// build time AND upon request and revalidate need
// the revalidation works as expected ONLY IN PROD ENV!
export async function getStaticProps({ params }) {
  return {
    props: {
      post: {
        name: params.id,
        curTime: new Date().getTime(),
      },
    },
    revalidate: 100, // In seconds
  };
}

export default function Posts({ post }) {
  return (
    <div className={styles.container}>
      {"Welcome to post: " +
        post.name +
        ". The post was generated on " +
        new Date(post.curTime).toTimeString()}
    </div>
  );
}


///////////////// EXAMPLE OF FALLBACK HANDLING FOLLOWS!

// import { useRouter } from 'next/router'

// function Post({ post }) {
//     const router = useRouter()

//     // If the page is not yet generated, this will be displayed
//     // initially until getStaticProps() finishes running
//     if (router.isFallback) {
//         return <div>Loading...</div>
//     }

//     // Render post...
//     if (router.isFallback) {
//         return <div>Loading...</div>
//     }

//     return <div>post.body</div>

// }