import React, { useEffect, useState } from "react";
import {
  addArrayElement,
  handleInputChange,
  handleSubmit,
  removeArrayElement,
  updateNestedArrayElement, 
} from "../utils";

const Form = ({ fields, title, setIsVisible, post, selected}) => {

  console.log('selected', selected);
  const [dataToSend, setDataToSend] = useState(selected?.attributes );
  const [errors, setErrors] = useState();


  useEffect(() => {
    if (selected?.attributes) {
      // Préremplir tous les champs avec selected.attributes
      const initialData = {};

      fields.forEach((field) => {
        if (field.type === "array" && Array.isArray(selected.attributes[field.name])) {
          initialData[field.name] = selected.attributes[field.name].map((item) => ({ ...item }));
        } else {
          initialData[field.name] = selected.attributes[field.name] ?? "";
        }
      });

      setDataToSend(initialData);
    }
  }, [selected, fields]);


  const send = (data) => {
    console.log("Données envoyées :", data);
    post(data);
  };

  return (
    <div className="lg:w-4/5 w-full bg-slate-400 dark:bg-gray-700 p-5 rounded-2xl flex flex-col justify-center shadow-md">
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
        className="p-5 bg-gray-100 flex flex-wrap space-x-4 rounded-lg w-full mx-auto">
        {fields?.map((field) => (
          <div key={field.name} className="w-full sm:w-[450px] mb-4">
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                value={dataToSend &&  dataToSend[field.name] || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-full p-2 border rounded-2xl"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                value={dataToSend[field.name] || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-full p-2 border rounded-2xl">
                <option value="">{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            ) : field.type === "array" ? (
              <div className="w-full">
                <label className="block mb-2 font-semibold">{field.placeholder}</label>
                {(dataToSend && dataToSend[field.name] || [{}]).map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 border rounded-2xl shadow-md bg-white">
                    {field?.fields?.map((subField) => (
                      <div key={subField.name} className="mb-2">
                        {subField.type === "textarea" ? (
                          <textarea
                            id={subField.name}
                            placeholder={subField.placeholder}
                            value={item[subField.name] || ""}
                            onChange={(e) =>
                              updateNestedArrayElement(
                                field.name,
                                index,
                                subField.name,
                                e.target.value,
                                setDataToSend
                              )
                            }
                            className="w-full p-2 border rounded-2xl"
                          />
                        ) : subField.type === "select" ? (
                          <select
                            id={subField.name}
                            value={item[subField.name] || ""}
                            onChange={(e) =>
                              updateNestedArrayElement(
                                field.name,
                                index,
                                subField.name,
                                e.target.value,
                                setDataToSend
                              )
                            }
                            className="w-full p-2 border rounded-2xl">
                            <option value="">{subField.placeholder}</option>
                            {subField.options.map((option) => (
                              <option key={option} value={option.value}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={subField.type}
                            name={subField.name}
                            placeholder={subField.placeholder}
                            value={item[subField.name] || ""}
                            onChange={(e) =>
                              updateNestedArrayElement(
                                field.name,
                                index,
                                subField.name,
                                e.target.value,
                                setDataToSend
                              )
                            }
                            className="w-full p-2 border rounded-2xl"
                            required={subField.required}
                          />
                        )}
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
                ))}
                <button
                  type="button"
                  onClick={() =>
                    addArrayElement(field.name, setDataToSend, field.fields)
                  }
                  className="bg-blue-500 text-white p-2 rounded w-full">
                  Ajouter une expérience
                </button>
              </div>
            ) : field.type === "file" ? (
              <input
                id={field.name}
                type="file"
                placeholder={field.placeholder}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-full p-2 border rounded-2xl shadow-md"
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={dataToSend && dataToSend[field.name] || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-full p-2 border rounded-2xl shadow-md"
              />
            )}
            {errors && errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
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
