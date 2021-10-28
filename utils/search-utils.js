const [searchTerm, setSearchTerm] = useState('')
const [searchResults, setSearchResults] = useState([{
    BranchName: '',
    ItemName: '',
    Category: '',
    Description: '',
    Cost: 0,
    Price: 0,
    Quantity: 0
}]);


useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        const fuse = new Fuse(inventory, {
            keys: [
                'ItemName',
                'Description',
                'Category',
            ],
            includeScore: true
        })

        const results = fuse.search(searchTerm);

        const searchRes = results.map(result => result.item)
        setSearchResults(searchRes)

    }, 2000)

    return () => clearTimeout(delayDebounceFn)
}, [searchTerm])


{jsonData.filter((val) => {
    if (searchterm === ""){
        return val
    } else if (val.firstname.toLowerCase().includes(searchterm.toLowerCase())) {
        return val
    }
}).map((val, key) => {
    retrun (
        <div key={key}>
            <p>{val.firstname}</p>
        </div>
    )
})

}