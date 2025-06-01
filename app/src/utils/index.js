export const handleInputChange = (e, setDataToSend, setErrors) => {
    console.log('handleInputChange', e)
    if (!e || !e.target) return;
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
        if (!dataToSend[item.name] && item.required) {
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