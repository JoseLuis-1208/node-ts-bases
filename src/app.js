import './js-foundation/05-factory.js';
import getPokemonById from './js-foundation/06-promises.js';
// getPokemonById(4)
//     .then((pokemon) => console.log(({ pokemon })))
//     .catch((err) => console.error(err))
//     .finally(() => console.log('Finalmente'))

import { buildLogger } from './plugins/index.js';

const logger = buildLogger('app.js');

logger.log('Hola Mundo')
logger.error('Esto es algo malo')