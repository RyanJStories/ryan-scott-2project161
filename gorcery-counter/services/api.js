const API_URL = 'http://localhost:3000'; 

export const fetchGroceries = async () => {
    try {
        const response = await fetch(`${API_URL}/groceries`);
        if (!response.ok) {
            throw new Error('Failed to fetch groceries');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching groceries:', error);
    }
};


export const fetchAmountOfGroceriesBought = async () => {
    try {
        const response = await fetch(`${API_URL}/amount-of-groceries-bought`);
        if (!response.ok) {
            throw new Error('Failed to fetch amount of groceries bought');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching amount of groceries bought:', error);
    }
};


export const fetchShoppingCart = async () => {
    try {
        const response = await fetch(`${API_URL}/shopping-cart`);
        if (!response.ok) {
            throw new Error('Failed to fetch shopping cart data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching shopping cart data:', error);
    }
};

export const fetchPrices = async () => {
    try {
        const response = await fetch(`${API_URL}/prices`);
        if (!response.ok) {
            throw new Error('Failed to fetch prices');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching prices:', error);
    }
};