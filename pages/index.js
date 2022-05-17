import Head from "next/head";
import Input from "../components/Inputs/Input";
import Email from "../components/Inputs/Email";
import Phone from "../components/Inputs/Phone";
import Password from "../components/Inputs/Password";
import Textarea from "../components/Inputs/Textarea";
import Select from "../components/Inputs/Select";
import Checkbox from "../components/Inputs/Checkbox";
import CheckboxMultiSelect from "../components/Inputs/CheckboxMultiSelect";
import Radio from "../components/Inputs/Radio";

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
          <Textarea />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Select</span>
          <Select />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Checkbox</span>
          <Checkbox />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Checkbox Multiselect</span>
          <CheckboxMultiSelect />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Radio</span>
          <Radio />
        </div>
      </main>
    </div>
  );
}
