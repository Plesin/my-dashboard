import React from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { Dashlet } from "~/components/Dashlet";
import { Navbar } from "~/components/Navbar";

// import { api } from "~/utils/api";

export default function Home() {
  const { data: sessionData } = useSession();
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>My Dashboard</title>
        <meta name="description" content="Personal Dashboard App" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Navbar />
        <header className="my-5"></header>
        {sessionData ? (
          <div className="container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Dashlet title="Test Dashlet">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              </Dashlet>
              <Dashlet title="Test Dashlet">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
              </Dashlet>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}
