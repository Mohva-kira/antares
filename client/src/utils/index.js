export const handleInputChange = (e, setDataToSend, setErrors) => {
    const { id, value, files } = e.target;

    setDataToSend((prev) => ({
        ...prev,
        [id]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
        ...prev,
        [id]: "",
    }));
};

export const validateForm = (dataToSend, selected) => {
    let newErrors = {};

    console.log('les champs', selected)
    selected.forEach((item) => {
        if (!dataToSend[item.name]) {
            newErrors[item.name] = `Ce champ ${item.name} est requis`;
        }
    });

    return {
        isValid: Object.keys(newErrors).length === 0,
        errors: newErrors,
    };
};

export const handleSubmit = (dataToSend, selected, setErrors, send, setShowForm) => {
    const { isValid, errors } = validateForm(dataToSend, selected);

    if (isValid) {
        send(dataToSend);
        setShowForm((prev) => !prev);
    } else {
        setErrors(errors);
    }
};


export const addArrayElement = (fieldName, setDataToSend) => {
    console.log('mes champs', fieldName)
    setDataToSend((prevData) => ({
        ...prevData,
        [fieldName]: [...(prevData && prevData[fieldName] || []), ""],
    }));
};

export const updateArrayElement = (fieldName, index, value, setDataToSend) => {
    setDataToSend((prevData) => {
        const updatedArray = [...(prevData[fieldName] || [])];
        updatedArray[index] = value;
        return { ...prevData, [fieldName]: updatedArray };
    });
};

export const removeArrayElement = (fieldName, index, setDataToSend) => {
    setDataToSend((prevData) => {
        const updatedArray = [...(prevData[fieldName] || [])];
        updatedArray.splice(index, 1);
        return { ...prevData, [fieldName]: updatedArray };
    });
};

export const updateNestedArrayElement = (arrayName, index, key, value, setDataToSend) => {
    setDataToSend((prev) => {
        const newArray = [...(prev && prev[arrayName] || [{}])];
        newArray[index] = { ...newArray[index], [key]: value };
        return { ...prev, [arrayName]: newArray };
    });
};

export function validatePasswordComplexity(password) {
    const criteria = {
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasLength: password.length >= 8
    };
    
    const isValid = criteria.hasUppercase && criteria.hasLowercase && criteria.hasNumber;
    
    const missingCriteria = [];
    if (!criteria.hasUppercase) missingCriteria.push("majuscule");
    if (!criteria.hasLowercase) missingCriteria.push("minuscule");
    if (!criteria.hasNumber) missingCriteria.push("chiffre");
    if (!criteria.hasLength) missingCriteria.push("8 caractères minimum");
    if (missingCriteria.length === 0) {
      missingCriteria.push("aucune");
    }
    
    return {
      isValid,
      missingCriteria
    };
  }