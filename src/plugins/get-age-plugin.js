import getAgePlugin from 'get-age';


const getAge = (birthdate) => {
    if (!birthdate) return new Error('birthdate is required');

    return getAgePlugin(birthdate);
}

export { getAge };