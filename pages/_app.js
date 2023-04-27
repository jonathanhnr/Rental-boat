import "../styles/styles.scss"
import NavBar from "../components/NavBar/NavBar";
import Layout from "../components/Layout/Layout";


export default function App({ Component, pageProps }) {
  return (
     <Layout>
       <Component {...pageProps} />
     </Layout>
  )
}
