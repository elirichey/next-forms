import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>React Final Form Starter</title>
      </Head>

      <main className="main">
        <div className="form-wrapper">
          <span className="form-title">Input</span>
        </div>

        <div className="form-wrapper">
          <span className="form-title">Textarea</span>
        </div>

        <div className="form-wrapper">
          <span className="form-title">Select</span>
        </div>

        <div className="form-wrapper">
          <span className="form-title">Checkbox</span>
        </div>

        <div className="form-wrapper">
          <span className="form-title">Radio</span>
        </div>
      </main>
    </div>
  );
}
