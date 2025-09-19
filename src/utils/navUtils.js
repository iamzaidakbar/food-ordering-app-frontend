import axios from "axios";

export const handleLogOut = async (serverUrl, setUserData, dispatch) => {
    try {
        const result = await axios.get(`${serverUrl}/api/auth/signout`, {
            withCredentials: true,
        });
        dispatch(setUserData(null));
    } catch (error) {
        console.log(error);
    }
};


export const handleSearchItems = async (serverUrl, query, currentCity, setSearchItems, dispatch) => {
    try {
        const result = await axios.get(
            `${serverUrl}/api/item/search-items?query=${query}&city=${currentCity}`,
            { withCredentials: true }
        );
        dispatch(setSearchItems(result.data));
    } catch (error) {
        console.log(error);
    }
};