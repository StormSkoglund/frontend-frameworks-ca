import { useState } from "react";

// This form was build using the examples from the curriculum (module 4, lesson 5). I have then iterated upon this and added different fields, as well as validation.

function Contact() {
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

export default Contact;
