// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [message, setMessage] = useState("");

//   const onSubmit = (data) => {
//     const { name, email, subject, message } = data;

//     emailjs
//       .send(
//         "gmail",
//         "YOUR_TEMPLATE_ID",
//         {
//           name,
//           email,
//           subject,
//           message,
//         },
//         YOUR_USER_ID
//       )
//       .then(
//         () => {
//           setMessage("Gửi email thành công!");
//         },
//         (error) => {
//           setMessage("Gửi email thất bại!");
//         }
//       );
//   };

//   return (
//     <section className="contact" id="contact">
//       <h2>Liên hệ</h2>
//       <div className="contact-info">
//         <p>Email: [Địa chỉ email]</p>
//         <p>Điện thoại: [Số điện thoại]</p>
//         <p>Địa chỉ: [Địa chỉ]</p>
//       </div>
//       <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="name">Họ và tên:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           {...register({ required: true })}
//         />
//         {errors.name && (
//           <span className="error">Họ và tên không được bỏ trống!</span>
//         )}

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           {...register({
//             required: true,
//             pattern: /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
//           })}
//         />
//         {errors.email && <span className="error">Email không hợp lệ!</span>}

//         <label htmlFor="subject">Tiêu đề:</label>
//         <input
//           type="text"
//           id="subject"
//           name="subject"
//           {...register({ required: true })}
//         />
//         {errors.subject && (
//           <span className="error">Tiêu đề không được bỏ trống!</span>
//         )}

//         <label htmlFor="message">Nội dung:</label>
//         <textarea
//           id="message"
//           name="message"
//           {...register({ required: true })}
//           rows="5"
//         ></textarea>
//         {errors.message && (
//           <span className="error">Nội dung không được bỏ trống!</span>
//         )}

//         <button type="submit" disabled={!formState.isValid}>
//           Gửi
//         </button>
//         {message && (
//           <p
//             className={
//               message === "Gửi email thành công!" ? "success" : "error"
//             }
//           >
//             {message}
//           </p>
//         )}
//       </form>
//     </section>
//   );
// };

// export default Contact;
