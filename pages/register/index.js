import Head from "next/head";
import { Layout, Register } from "@infrastructure/components";

export default function RegisterPage() {
  return (
    <div>
      <Head>
        <title>Comienza tu aventura</title>
      </Head>
      <Layout>
        <Register />
      </Layout>
    </div>
  );
}
