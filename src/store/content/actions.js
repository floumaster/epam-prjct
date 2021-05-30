export const contentActionTypes = {
    SET_CARS: 'CONTENT.SET_CARS',
    FETCH_CARS: 'CONTENT.FETCH_CARS',
    SET_CITY: 'CONTENT.SET_CITY',
    SET_TITLE: 'CONTENT.SET_TITLE',
    SET_CURRENT_PAGE: 'CONTENT.SET_CURRENT_PAGE',
    SET_PAGES: 'CONTENT.SET_PAGES',
    SET_QUERY_OBJ: 'CONTENT.SET_QUERY_OBJ',
    SET_OLD_CARS: 'CONTENT.SET_OLD_CARS',
    SET_PERSON: 'CONTENT.SET_PERSON',
    SET_IS_CONTENT_VISIBLE: 'CONTENT.SET_IS_CONTENT_VISIBLE'
}

export const contentActions = {
    setCars: (payLoad) => ({type: contentActionTypes.SET_CARS, payLoad}),
    fetchCars: (city, page, query) => ({type: contentActionTypes.FETCH_CARS, city, page, query}),
    setCity: (payLoad) => ({type: contentActionTypes.SET_CITY, payLoad}),
    setTitle: (payLoad) => ({type: contentActionTypes.SET_TITLE, payLoad}),
    setCurrPage: (payLoad) => ({type: contentActionTypes.SET_CURRENT_PAGE, payLoad}),
    setPages: (payLoad) => ({type: contentActionTypes.SET_PAGES, payLoad}),
    setQueryObj: (payLoad) => ({type: contentActionTypes.SET_QUERY_OBJ, payLoad}),
    setOldCars: (payLoad) => ({type: contentActionTypes.SET_OLD_CARS, payLoad}),
    setPerson: (payLoad) => ({type: contentActionTypes.SET_PERSON, payLoad}),
    setIsContentVisible: (payLoad) => ({type: contentActionTypes.SET_IS_CONTENT_VISIBLE, payLoad})
}
