const uniqueInventory = filtered_inventory.filter((v, i) => {
        return filtered_inventory.map((val) => val.Description).indexOf(v.Description) === i
    });
