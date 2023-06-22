import { useEffect } from "react";

const setTittle = (title) => useEffect(() => {
    document.title = `${title} | Battle Toys`;
}, []);
export default setTittle