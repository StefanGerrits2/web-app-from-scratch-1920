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

// https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
const Fetcher = {
    get: (url) =>
        fetch(url)
            .then(checkStatus)
            .then(res => res.json())
};

export { Fetcher };