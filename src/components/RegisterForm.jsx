import React from "react";
import { useFormik } from "formik";

export default function RegisterForm() {
  // useFormik hook unu Formik kütüphanesinden çağırdık ve yazdırdık
  // input içindeki value ve onchange 'i de bu formiğin değerlerine bağlıyoruz
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: " ",
      age: " ",
      password: " ",
      confirmPassword: " ",
      term: " ",
    },
    onSubmit: (values) => {
      // your form submit handler
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email Gitiniz ..!"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="text"
            id="age"
            placeholder="Yaşınızı giriniz ..!"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifre giriniz ..!"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz ..!"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "15px",
            }}
          >
            <input
              style={{
                width: "20px",
                height: "20px",
              }}
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label>Kullanıcı sözleşmesini kabul ediyorum</label>
          </div>
        </div>
        <button className="saveButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
