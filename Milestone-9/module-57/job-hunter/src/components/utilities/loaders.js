import { getStoredCart } from "./fakedb";

const currentJobLoader = async (id) => {
    const loadJobs = await fetch('https://api.jsonbin.io/v3/b/6435d77eebd26539d0a91d5e');
    const loadJobsData = await loadJobs.json();
    const exits = await loadJobsData?.record.find(job => job.id === parseInt(id))
    if (exits) {
        return (exits)
    }
    return {}
}

const savedJobLoader = async () => {
    const cartRes = await fetch('https://api.jsonbin.io/v3/b/6435d77eebd26539d0a91d5e');
    const jobs = await cartRes.json();
    const storedCart = getStoredCart()

    const savedCart = [];
    for(const id in storedCart){
        const addedCart =await jobs?.record.find(product=>product.id==id);
        if (addedCart) {
            savedCart.push(addedCart);
        }
    }
    // console.log(savedCart)
    return savedCart
}
export { currentJobLoader, savedJobLoader };