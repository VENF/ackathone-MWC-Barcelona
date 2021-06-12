import Head from "next/head";
import { Layout, VerifyAccount } from "@infrastructure/components";

export default function VerifyPage() {
  return (
    <div>
      <Head>
        <title>Unete a la comunidad</title>
        <meta name="app" content="app" />
      </Head>
      <Layout>
        <VerifyAccount/>
      </Layout>
    </div>
  );
}
