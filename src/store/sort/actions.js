export const sortActionTypes = {
    SET_NAME_ASC: 'SORT.SET_NAME_ASC',
    SET_PRICE_ASC: 'SORT.SET_PRICE_ASC',
    SET_CAPACITY_ASC: 'SORT.SET_CAPACITY_ASC'
}

export const sortActions = {
    setNameAsc: (payLoad) => ({type: sortActionTypes.SET_NAME_ASC, payLoad}),
    setPriceAsc: (payLoad) => ({type: sortActionTypes.SET_PRICE_ASC, payLoad}),
    setCapacityAsc:  (payLoad) => ({type: sortActionTypes.SET_CAPACITY_ASC, payLoad})
}
