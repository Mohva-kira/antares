import React, { useState } from "react";
import { addArrayElement, handleInputChange, handleSubmit } from "../utils";

const Form = ({ fields, title, setIsVisible, post }) => {
  const [dataToSend, setDataToSend] = useState();
  const [errors, setErrors] = useState();
  const send = (data) => {
    console.log("Données envoyées :", data);
    post(data);
  };

  return (
    <div className="lg:w-1/2 w-full bg-slate-400 dark:bg-gray-700 p-5 rounded-2xl flex flex-col justify-center shadow-md">
      <div className="w-full flex justify-end relative">
        <p
          onClick={() => setIsVisible(false)}
          className="text-white cursor-pointer dark:text-white">
          {" "}
          X{" "}
        </p>
      </div>
      <div className="w-full mb-4 border-b-2 border-gray-700 dark:border-black p-2 flex justify-center">
        <h2 className="text-gray-900 dark:text-white font-semibold">{title}</h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(dataToSend, fields, setErrors, send, setIsVisible);
        }}
        className="p-5 bg-gray-100 flex flex-wrap justify-center items-center gap-4 rounded-2xl w-full mx-auto">
        {fields?.map((field) => (
          <>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                value={(dataToSend && dataToSend[field.name]) || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-full p-2 border rounded"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                value={(dataToSend && dataToSend[field.name]) || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-2/5 p-2 border rounded">
                <option value="">{field.placeholder}</option>
                {field?.options?.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            ) : field.type === "array" ? (
              <div className="w-full">
                <label className="block mb-2 font-semibold">
                  {field.placeholder}
                </label>
                {((dataToSend && dataToSend[field.name]) || [{}])?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 w-2/5 border rounded bg-white">
                      {field?.fields?.map((subField) => (
                        <div key={subField.name} className="mb-2 w-full">
                          <input
                            type={subField.type}
                            name={subField.name}
                            placeholder={subField.placeholder}
                            value={(item && item[subField.name]) || ""}
                            onChange={(e) =>
                              updateNestedArrayElement(
                                field.name,
                                index,
                                subField.name,
                                e.target.value,
                                setDataToSend
                              )
                            }
                            className="w-full p-2 border rounded"
                            required={subField.required}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          removeArrayElement(field.name, index, setDataToSend)
                        }
                        className="bg-red-500 text-white p-2 rounded w-full">
                        Supprimer cette expérience
                      </button>
                    </div>
                  )
                )}
                <button
                  type="button"
                  onClick={() =>
                    addArrayElement(field.name, setDataToSend, field.fields)
                  }
                  className="bg-blue-500 text-white p-2 rounded w-full">
                  Ajouter une expérience
                </button>
              </div>
            ) : (
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={(dataToSend && dataToSend[field.name]) || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-2/5 p-2 border rounded"
              />
            )}
            {errors && errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </>
        ))}

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Form;
