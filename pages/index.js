import Head from "next/head";
import { InputForm } from "../components/Inputs/Input";
import { EmailForm } from "../components/Inputs/Email";
import { PhoneForm } from "../components/Inputs/Phone";
import { PasswordForm } from "../components/Inputs/Password";
import { TextareaForm } from "../components/Inputs/Textarea";
import { SelectForm } from "../components/Inputs/Select";
import { SelectCustomForm } from "../components/Inputs/SelectCustom";
import { CheckboxForm } from "../components/Inputs/Checkbox";
import { CheckboxMultiSelectForm } from "../components/Inputs/CheckboxMultiSelect";
import { RadiosForm } from "../components/Inputs/Radios";
import { ComboboxForm } from "../components/Inputs/Combobox";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>React Final Form Starter</title>
      </Head>

      <main className="main">
        <div className="form-wrapper">
          <span className="form-title">Input</span>
          <InputForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Email</span>
          <EmailForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Phone</span>
          <PhoneForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Password</span>
          <PasswordForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Textarea</span>
          <TextareaForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Select</span>
          <SelectForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Select: Custom</span>
          <SelectCustomForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Combobox</span>
          <ComboboxForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Checkbox</span>
          <CheckboxForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Checkbox Multiselect</span>
          <CheckboxMultiSelectForm />
        </div>

        <div className="form-wrapper">
          <span className="form-title">Radio</span>
          <RadiosForm />
        </div>
      </main>
    </div>
  );
}
