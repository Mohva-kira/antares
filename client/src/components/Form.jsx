import React, { useEffect, useState } from "react";
import {
  addArrayElement,
  handleInputChange,
  handleSubmit,
  removeArrayElement,
  updateNestedArrayElement,
} from "../utils";
import { HiOutlineX } from "react-icons/hi";
import { styles } from "../config/colors";

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
    <div className={`${styles.form.container} lg:w-4/5 w-full flex flex-col justify-center shadow-lg`}>
      <div className="w-full flex justify-end relative mb-4">
        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1"
          aria-label="Fermer">
          <HiOutlineX className="w-6 h-6" />
        </button>
      </div>
      
      <div className="w-full mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {isUpdateMode ? `Modifier ${title}` : `Créer ${title}`}
        </h2>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(dataToSend, fields, setErrors, send, setIsVisible);
        }}
        className="flex flex-wrap gap-4">
        {fields.map((field) => (
          <div key={field.name} className="w-full sm:w-[450px]">
            {field.label && (
              <label className={styles.form.label} htmlFor={field.name}>
                {field.label}
              </label>
            )}
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                placeholder={field.placeholder}
                value={(dataToSend && dataToSend[field.name]) || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className={errors && errors[field.name] ? styles.input.error : styles.input.base}
                rows={field.rows || 4}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                value={(dataToSend && dataToSend[field.name]) || ""}
                onChange={(e) => handleInputChange(e, setDataToSend, setErrors)}
                className={errors && errors[field.name] ? styles.input.error : styles.input.base}>
                <option value="">{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "array" ? (
              <div className="w-full">
                <label className={styles.form.label}>
                  {field.placeholder}
                </label>
                {((dataToSend && dataToSend[field.name]) || [{}])?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                      {field?.fields?.map((subField) => (
                        <div key={subField.name} className="mb-3">
                          {subField.label && (
                            <label className={styles.form.label} htmlFor={`${field.name}-${index}-${subField.name}`}>
                              {subField.label}
                            </label>
                          )}
                          <input
                            type={subField.type}
                            name={subField.name}
                            id={`${field.name}-${index}-${subField.name}`}
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
                            className={styles.input.base}
                            required={subField.required}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          removeArrayElement(field.name, index, setDataToSend)
                        }
                        className={styles.button.danger + " w-full mt-2"}>
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
                  className={styles.button.secondary + " w-full"}>
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
                className={errors && errors[field.name] ? styles.input.error : styles.input.base}
              />
            )}
            {errors && errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="flex justify-end w-full space-x-3 pt-6 border-t border-gray-200 mt-6">
          <button
            type="button"
            onClick={handleClose}
            className={styles.button.outline}>
            Annuler
          </button>
          <button
            type="submit"
            className={styles.button.primary}>
            {isUpdateMode ? "Mettre à jour" : "Créer"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
