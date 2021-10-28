const [products, setProducts] = useState([])

const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
        let tempProducts = []
        tempProducts = snapshot.docs.map((doc) => (
            {
                id: doc.id,
                product: doc.data()
            }
        ));
        setProducts(tempProducts);
    })
}

useEffect(()=>{
    console.log("Call products");
    getProducts()
}, [])