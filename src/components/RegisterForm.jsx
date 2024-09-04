import React from "react";
import { useFormik } from "formik";
import { registerFormSchemas } from "../shemas/RegisterFormSchemas";

export default function RegisterForm() {
  const submit = (values, action) => {
    // inputlarımızı temizleyen fonkfiyon yazdık
    setTimeout(() => {
      action.resetForm();
    }, 2000);
    // console.log(values);
    // console.log(action);
  };
  // useFormik hook unu Formik kütüphanesinden çağırdık ve yazdırdık
  // input içindeki value ve onchange 'i de bu formiğin değerlerine bağlıyoruz
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: registerFormSchemas,
    onSubmit: submit,
  });
  //   console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email Giriniz ..!"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="input-error">{errors.email}</p>}
        </div>
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz ..!"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p className="input-error">{errors.age}</p>}
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
          {errors.password && <p className="input-error">{errors.password}</p>}
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
          {errors.confirmPassword && (
            <p className="input-error">{errors.confirmPassword}</p>
          )}
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
          {errors.term && <p className="input-error">{errors.term}</p>}
        </div>
        <button className="saveButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
