import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom"
import { TiArrowBack } from "react-icons/ti"

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
  .required()

function Contact() {
  const [submitForm, setSubmitForm] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  function onSubmit(data) {
    reset()
    console.log(data)
    setSubmitForm(true)
  }

  let contactContent
  if (submitForm) {
    contactContent = (
      <div className="bg-white border-solid border-2 border-theme1 opacity-75 p-3 lg:p-10 m-3  text-black rounded-e-3xl shadow-xl w-11/12 sm:w-3/4  block mx-auto leading-5">
        <h3 className="mb-3 font-extrabold ">Ticket Submitted</h3>
        <p className="mb-8">
          Thank you for reaching out to us! We value your feedback and are here
          to assist you with any questions or concerns you may have.
        </p>

        <h4 className="mb-3 font-bold">Evaluation Time</h4>

        <p className="mb-8">
          Once your ticket is submitted, our support team will review it
          promptly. We strive to respond to all tickets within 24 hours.
        </p>
        <p className="mb-5">
          However, the evaluation time may vary depending on the complexity of
          your request. Rest assured, we are committed to providing you with a
          thorough and timely response.
        </p>
        <p className="text-center mb-2">Go Back</p>
        <Link to="/" className="text-center">
          <div className="text-black font-extrabold mx-auto flex flex-row justify-center align-middle bg-white p-5">
            <TiArrowBack />
            <span className="sr-only">Go back to the homepage</span>
          </div>
        </Link>
      </div>
    )
  } else {
    contactContent = (
      <>
        <article className="bg-theme2 opacity-75 p-3 lg:p-10 m-3 font-bold text-black rounded-e-3xl shadow-2xl shadow-slate-800 w-11/12 sm:w-3/4  block mx-auto leading-5 ">
          <h1 className="pb-4 font-bold"> CONTACT FORM</h1>
          <h2 className="pb-4 font-medium">Get in Touch with Us!</h2>
          <p className="pb-2 font-medium">
            At BuyThat, we’re here to help you with any questions or concerns
            you might have. Whether you need assistance with your order, have a
            product inquiry, or just want to share your feedback, we’re all
            ears!
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
              Product Information: Need more details about a product? We’re
              happy to help!
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
            Message. Thank you for choosing BuyThat! We look forward to
            assisting you.
          </p>
        </article>
        <form className="grid grid-rows-1" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-left mt-10" htmlFor="full-name">
            YOUR FULL NAME*
          </label>
          <input
            className=" border-solid border-2 border-theme1 rounded-md w-2/4 p-2 m-2"
            id="full-name"
            {...register("fullName")}
            autoComplete="name"
          />
          <p className="text-red-600">{errors.fullName?.message}</p>
          <label className="text-left" htmlFor="email">
            E-MAIL*
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
            SUBJECT*
          </label>
          <input
            className=" border-solid border-2 border-theme1 rounded-md w-2/4 p-2 m-2"
            id="subject"
            {...register("subject")}
            autoComplete="subject"
          />
          <p className="text-red-600">{errors.subject?.message}</p>
          <label className="text-left" htmlFor="body">
            MESSAGE*
          </label>
          <textarea
            className=" border-solid border-2 border-theme1 rounded-md w-4/4 p-3 m-2"
            id="body"
            {...register("body")}
            autoComplete="off"
          />{" "}
          <p>* All fields are required.</p>
          <p className="text-red-600">{errors.body?.message}</p>
          <button
            type="submit"
            className="w-auto px-4 py-2 bg-teal-700 text-white m-5  rounded-lg hover:bg-green-800 hover:shadow-slate-600 shadow-md text-center font-semibold"
          >
            SUBMIT FORM
          </button>
        </form>
      </>
    )
  }

  return <div className="m-auto w-4/5 sm:w-4/6 xl:w-2/4">{contactContent}</div>
}

export default Contact
