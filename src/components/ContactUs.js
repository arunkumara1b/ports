import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //   emailjs
  //     .sendForm(
  //       "service_drjck0b",
  //       "template_kk3473c",
  //       form.current,
  //       "KuyFZGJbhARnAI-NX"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         Swal.fire("Good job!", "You clicked the button!", "success");
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  const [state, handleSubmit] = useForm("xnqybblq");
  if (state.succeeded) {
    return (
      <>
      <div className="thankyoucontent">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <img
              src="https://i.ibb.co/Lkn7rkG/thank-you-envelope.png"
              alt="thank-you-envelope"
              border="0"
            />
            <div className="thankss">Thank you For Your Mail</div>
          </div>
        </div>
        </div>
      </>
    );
  }
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            {/* <h4>Linked in :
                  {resumeData.linkedinId}
                </h4> */}
          </div>
        </aside>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            id="name"
            // required={true}
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            // required={true}
            id="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            // required={true}
            id="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
