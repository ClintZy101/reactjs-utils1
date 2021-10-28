const [branchSelector, setBranchSelector] = useState("all");

const filtered_inventory = inventory.filter(inv => {
    if (branchSelector === "all") {
        return inv
    } else if (inv.BranchName.toLowerCase().includes(branchSelector.toLowerCase())) {
        return inv
    } 
})



