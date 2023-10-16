"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import Container from "./Container";
import { auth } from "@/app/libraries/firebase";

export default function UpdateAccount() {
  const [user, loading] = useAuthState(auth);

  // const formik = useFormik({
  //   // Initial
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },

  //   // Validate Form
  //   validationSchema: Yup.object({
  //     email: Yup.string()
  //       .email(20, "Invalid email address")
  //       .required("Email is required"),
  //   }),

  //   // Submit Form
  //   onSubmit: (values) => {
  //     console.log(values);
  //     createUserWithEmail(values);
  //   },
  // });

  return (
    <div>
      <h1>Update Accout Info</h1>

      <Container>
        {/* Forms */}
        <form onSubmit={formik.handleSubmit}>
          {/* Name Input */}
          {/* <div className='pb-4'>
                        <label className={`block text-sm pb-2 ${formik.touched.name && formik.errors.name ? "text-cyan-600" : ""}`} htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}</label>
                        <input className='border-2 border-gray-500 p-2 rounded-md w-full focus:border-cyan-600 focus:ring-cyan-600' type="text" name='name' placeholder='Enter your name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div> */}

          {/* Email Input */}
          <div className="pb-4">
            <label
              className={`block pb-2 text-sm ${
                formik.touched.email && formik.errors.email
                  ? "text-cyan-600"
                  : ""
              }`}
              htmlFor="email"
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"}
            </label>
            <input
              className="w-full rounded-md border-2 border-gray-500 p-2 focus:border-cyan-600 focus:ring-cyan-600"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Password Input */}
          <div className="pb-4">
            <label
              className={`block pb-2 text-sm ${
                formik.touched.password && formik.errors.password
                  ? "text-cyan-600"
                  : ""
              }`}
              htmlFor="password"
            >
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : "Password"}
            </label>
            <input
              className="w-full rounded-md border-2 border-gray-500 p-2 focus:border-cyan-600 focus:ring-cyan-600"
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Start */}
          <button
            className="mt-6 w-full rounded-lg bg-cyan-600 py-3 text-sm text-white transition duration-500 hover:bg-cyan-700"
            type="submit"
          >
            Update
          </button>
        </form>
      </Container>
    </div>
  );
}
