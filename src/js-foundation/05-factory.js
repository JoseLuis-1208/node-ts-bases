// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

// import { getAge } from '../plugins/get-age-plugin.js';
// import { getUUID } from '../plugins/get-id-plugin.js';

import { getAge, getUUID } from '../plugins/index.js'


const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {

    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate)
    }
  }
}


// const obj = { name: "Jose Luis ", birthdate: '2001-04-16' };
// const jose = buildPerson(obj);
// console.log(jose);


export { buildMakePerson };