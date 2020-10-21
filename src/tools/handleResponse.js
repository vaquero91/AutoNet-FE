export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) { // TODO: mejorar esta funcion para manejar los errores
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                console.log(response.status);
            }
            console.log("Upsidupsi");
            const error = (data && data.message) || response.statusText;
            return error;
        }

        return data;
    });
}
