export const fetchProductsList = async () => {
    try {
        let url = "";
        url = `https://makeup-api.herokuapp.com/api/v1/products.json`
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        return console.warn(err);
    }
}

export const fetchProductsItem = async (id) => {
    try {
        const response = await fetch(
            `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        );
        return await response.json();
    } catch (err) {
        return console.warn(err);
    }
};