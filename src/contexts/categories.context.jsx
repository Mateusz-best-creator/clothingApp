import { createContext, useState, useEffect } from "react";

import { 
    // addCollectionAndDocuments,
    getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});

    useEffect(() => {
        const  getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setcategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}



//  now when we arleady have our data withn firestore database
    // we can delete this useEffect hook
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])