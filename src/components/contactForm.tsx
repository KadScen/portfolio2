import { useState, ChangeEvent, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [inputName, setInputName] = useState<string | undefined>();
  const [inputEmail, setInputEmail] = useState<string | undefined>();
  const [inputMessage, setInputMessage] = useState<string | undefined>();
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const form = useRef<HTMLFormElement>(null);
  const refCaptcha = useRef(null); // <- add the useRef hook

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    // const token = refCaptcha.current.getValue(); // <- `getValue()` from the instantiated refCaptcha

    // const params = {
    //   // ...form.current,
    //   inputName,
    //   inputEmail,
    //   inputMessage,
    //   "g-recaptcha-response": token,
    // }; // <- Create this object spreading your state and adding the retrieved token as a value of 'g-recaptcha-response'

    // console.log("This is the Params: ", typeof params, params);

    if (form.current) {
      console.log(
        "This is the form current: ",
        typeof form.current,
        form.current
      );

      emailjs
        .sendForm(
          "service_jav4qsv",
          "template_s9iw0np",
          form.current,
          "EHbjPbtHX0xl5Q9kD"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSent(true);
            setIsButtonDisabled(false);
            setInputName("");
            setInputEmail("");
            setInputMessage("");
          },
          (error) => {
            console.log(error.text);
            setIsButtonDisabled(false);
          }
        );
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    return setInputName(e.currentTarget.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    return setInputEmail(e.currentTarget.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return setInputMessage(e.currentTarget.value);
  };

  const handleOnChange = (value: string | null) => {
    console.log("Captcha value", value);
    if (value) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  return (
    <div className="flex items-center flex-col space-y-2">
      <h3 className="font-mono text-2xl underline">Contact me</h3>
      <form
        className="flex items-center flex-col space-y-2"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          placeholder="Name"
          value={inputName}
          type="text"
          name="from_name"
          className="rounded-lg"
          onChange={handleName}
          required
        />
        <input
          placeholder="Email"
          value={inputEmail}
          type="email"
          name="from_email"
          className="rounded-lg"
          onChange={handleEmail}
          required
        />
        <textarea
          placeholder="Message"
          value={inputMessage}
          name="message"
          className="w-full rounded-lg"
          onChange={handleMessage}
          required
        />
        <ReCAPTCHA
          ref={refCaptcha}
          sitekey={import.meta.env.VITE_REACT_APP_RECAPTCHA_CLIENT_SITE_KEY}
          onChange={handleOnChange}
        />
        <input
          className={`py-2 w-full rounded-lg ${
            isButtonDisabled ? "" : "bg-white"
          }`}
          type="submit"
          value={
            isButtonDisabled
              ? "Please complete recaptcha to send message"
              : "Send"
          }
          disabled={isButtonDisabled}
        />
      </form>
      {isSent ? (
        <p className="text-emerald-500 font-bold">
          Message sent! Thank you, I'll get back to you ASAP :)
        </p>
      ) : null}
    </div>
  );
}

export default ContactForm;
