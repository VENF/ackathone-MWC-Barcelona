import { Layout, Base } from "@infrastructure/components";
import Head from "next/head";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Unete a la comunidad</title>
        <meta name="app" content="app" />
      </Head>
      <Layout>
        <Base/>
      </Layout>
    </div>
  );
}
