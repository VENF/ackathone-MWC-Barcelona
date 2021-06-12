import Head from "next/head";
import { Layout, Register  } from "@infrastructure/components";

export default function RegisterPage() {
  return (
    <div>
      <Head>
        <title>Unete a la comunidad</title>
        <meta name="app" content="app" />
      </Head>
      <Layout>
        <Register />
      </Layout>
    </div>
  );
}
