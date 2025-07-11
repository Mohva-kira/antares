import React, { useEffect, useState } from "react";
import {
  addArrayElement,
  handleInputChange,
  handleSubmit,
  removeArrayElement,
  updateNestedArrayElement,
} from "../utils";
import { HiOutlineX } from "react-icons/hi";

const Form = ({
  fields,
  title,
  setIsVisible,
  post,
  isVisible,
  selectedData,
}) => {
  const [dataToSend, setDataToSend] = useState();
  const [errors, setErrors] = useState();
  const send = (data) => {
    console.log("Données envoyées :", data);
    post(data);
  };

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  // Initialiser les données du formulaire
  useEffect(() => {
    if (selectedData) {
      setIsUpdateMode(true);
      setDataToSend(selectedData.attributes);

      console.log("selectedData", selectedData);
    } else {
      setIsUpdateMode(false);
      // Réinitialiser avec des valeurs par défaut
      const initialData = {};
      fields.forEach((field) => {
        initialData[field.name] = field.defaultValue || "";
      });
      setDataToSend(initialData);
    }
    // Réinitialiser les erreurs
    setErrors({});
  }, [selectedData, fields]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    setDataToSend((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));

    // Effacer l'erreur du champ si elle existe
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(
      dataToSend,
      fields,
      setErrors,
      send,
      setIsVisible,
      isUpdateMode
    );
  };

  const handleClose = () => {
    setIsVisible(false);
    setDataToSend({});
    setErrors({});
  };

  if (!isVisible) return null;

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
        <div className="w-full flex justify-between items-center">
          <h2 className="text-white font-semibold text-lg">
            {isUpdateMode ? `Modifier ${title}` : `Créer ${title}`}
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors duration-200 p-1"
            aria-label="Fermer">
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(dataToSend, fields, setErrors, send, setIsVisible);
        }}
        className="p-5 bg-gray-100 flex flex-wrap space-x-4  rounded-lg w-full mx-auto">
        {fields.map((field) => (
          <div key={field.name} className="w-full sm:w-[450px] mb-4">
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                value={(dataToSend && dataToSend[field.name]) || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-full p-2 border rounded-2xl"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                value={(dataToSend && dataToSend[field.name]) || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className="w-full p-2 border rounded-2xl">
                <option value="">{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
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
                      className="mb-4 p-4 border rounded-2xl shadow-md bg-white ">
                      {field?.fields?.map((subField) => (
                        <div key={subField.name} className="mb-2">
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
                            className="w-full p-2 border rounded-2xl"
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
                className="w-full p-2 border rounded-2xl shadow-md"
              />
            )}
            {errors && errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-end w-full space-x-3 pt-6 border-t border-gray-200 dark:border-gray-600">
          <button
            type="button"
            onClick={handleClose}
            className="px-6 py-2 w-1/4 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200 font-medium">
            Annuler
          </button>
          <button
            type="submit"
            className={`px-6 py-2 w-2/3 text-white rounded-lg font-medium transition-colors duration-200 ${
              isUpdateMode
                ? "bg-orange-600 hover:bg-orange-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}>
            {isUpdateMode ? "Mettre à jour" : "Créer"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
