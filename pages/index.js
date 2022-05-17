import Head from "next/head";
import Input from "../components/Inputs/Input";
import Email from "../components/Inputs/Email";
import Phone from "../components/Inputs/Phone";
import Password from "../components/Inputs/Password";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>React Final Form Starter</title>
      </Head>

      <main className="main">
        <div className="form-wrapper">
          <span className="form-title">Input</span>
          <Input />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Email</span>
          <Email />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Phone</span>
          <Phone />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Password</span>
          <Password />
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
