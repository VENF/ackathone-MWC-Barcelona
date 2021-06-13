import Head from "next/head";
import { Layout, CompleteProfile } from "@infrastructure/components";

export default function CompletePage() {
  return (
    <div>
      <Head>
        <title>Completa tu perfil</title>
        <meta name="app" content="app" />
      </Head>
      <Layout>
        <CompleteProfile />
      </Layout>
    </div>
  );
}
