import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name must be at least 3 characters")
      .required(),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: yup
      .string()
      .min(3, "The subject must be at least 3 characters")

      .required("Subject is required"),
    body: yup
      .string()
      .min(3, "The subject must be at least 3 characters")

      .required("Body is required"),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data, event) {
    event.preventDefault();

    console.log(data);
  }

  return (
    <>
      <article className="bg-theme2 opacity-75 p-3 lg:p-10 m-3 font-bold text-blue-50 rounded-e-3xl shadow-2xl shadow-slate-800 w-11/12 sm:w-3/4  block mx-auto leading-5 ">
        <h1 className="pb-4 font-bold"> CONTACT FORM</h1>
        <h2 className="pb-4 font-medium">Get in Touch with Us!</h2>
        <p className="pb-2 font-medium">
          At BuyMe, we’re here to help you with any questions or concerns you
          might have. Whether you need assistance with your order, have a
          product inquiry, or just want to share your feedback, we’re all ears!
        </p>
        <p className="pb-2 font-medium">
          Fill out the form below, and our friendly customer support team will
          get back to you as soon as possible.
        </p>
        <p className="pb-2 font-medium">Common Reasons to Contact Us:</p>
        <ul className="pb-2 font-medium list-disc p-5">
          <li>
            Order Inquiries: Questions about your recent purchase or tracking
            your order.
          </li>
          <li>
            Product Information: Need more details about a product? We’re happy
            to help!
          </li>
          <li>
            Returns & Exchanges: Assistance with returning or exchanging an
            item.
          </li>
          <li>
            Feedback & Suggestions: We value your input and would love to hear
            your thoughts.
          </li>
        </ul>
        <p className="pb-2 font-medium">
          Your Information: Please provide your Name, Email, Subject, and
          Message. Thank you for choosing BuyMe! We look forward to assisting
          you.
        </p>
      </article>
      <div className="m-auto w-4/5 sm:w-4/6 xl:w-2/4">
        <form className="grid grid-rows-1" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-left mt-10" htmlFor="full-name">
            YOUR FULL NAME
          </label>
          <input
            className=" border-solid border-2 border-theme1 rounded-md w-2/4 p-2 m-2"
            id="full-name"
            {...register("fullName")}
            autoComplete="name"
          />
          <p className="text-red-600">{errors.fullName?.message}</p>
          <label className="text-left" htmlFor="email">
            E-MAIL
          </label>
          <input
            placeholder="example@domain.com"
            className=" border-solid border-2 border-theme1 rounded-md w-2/4 p-2 m-2"
            id="email"
            {...register("email")}
            autoComplete="email"
          />
          <p className="text-red-600">{errors.email?.message}</p>
          <label className="text-left" htmlFor="subject">
            SUBJECT
          </label>
          <input
            className=" border-solid border-2 border-theme1 rounded-md w-2/4 p-2 m-2"
            id="subject"
            {...register("subject")}
            autoComplete="subject"
          />
          <p className="text-red-600">{errors.subject?.message}</p>
          <label className="text-left" htmlFor="body">
            MESSAGE
          </label>

          <textarea
            className=" border-solid border-2 border-theme1 rounded-md w-4/4 p-3 m-2"
            id="body"
            {...register("body")}
            autoComplete="off"
          />
          <p className="text-red-600">{errors.body?.message}</p>
          <button className=" w-auto px-4 py-2 bg-theme2 text-white m-5  rounded-lg hover:bg-green-800 hover:shadow-slate-600 shadow-md text-center font-semibold">
            <input type="submit" value="" />
            SUBMIT FORM
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;

// This form was build using the examples from the curriculum (module 4, lesson 5). I have then iterated upon this and added different fields, as well as validation.

/*function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const formData = {
      fullName,
      email,
      subject,
      body,
    };

    fetch("http://www.example.com", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  function onFirstNameChange(event) {
    setFullName(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onSubjectChange(event) {
    setSubject(event.target.value);
  }
  function onBodyChange(event) {
    setBody(event.target.value);
  }

  return (
    <>
      <h1 className="text-center m-5 font-medium">Contact</h1>
      <div className="p-4">
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col justify-center items-center p-4"
        >
          <label htmlFor="full-name">Your full name</label>
          <input
            name="full-name"
            value={fullName}
            required
            minLength="3"
            className="border-theme1 border-solid border-y-2 w-1/4"
            placeholder="Your full name"
            onChange={onFirstNameChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            required
            className="border-theme2 border-solid border-y-2 w-1/4"
            placeholder="Your email address"
            onChange={onEmailChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            value={subject}
            required
            minLength="3"
            className="border-theme1 border-solid border-y-2 w-1/4"
            placeholder="The subject of your inquiry"
            onChange={onSubjectChange}
          />
          <label htmlFor="body">Message</label>
          <textarea
            name="body"
            value={body}
            required
            className="border-theme2 border-solid border-y-2 w-2/4"
            placeholder="Your message"
            onChange={onBodyChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;*/
