const checkStatus = response => {
    if (response.ok) {
        return response;
    } 
    else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

const Fetcher = {
    get: (url) =>
        fetch(url)
            .then(checkStatus)
            .then(res => res.json())
};

export { Fetcher };