import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda'

const response = (code, body: { [ key: string ]: any } ) => {
    return {
        statusCode: code,
        body: JSON.stringify(body)
    };
}

interface ICity {
    name: string;
    description: string;
    pupulation: number;
}

const cityData: { [key: string]: ICity } = {
    buenosAires: {
        name: 'Buenos Aires',
        description: 'La Ciudad de Buenos Aires o Ciudad Autónoma de Buenos Aires ―también llamada Capital Federal por ser sede del gobierno federal― es la capital de la República Argentina. Está situada en la región centro-este del país, sobre la orilla occidental del Río de la Plata, en plena llanura pampeana.',
        pupulation: 1258796
    },
    cordoba: {
        name: 'Cordoba',
        description: 'Córdoba, ciudad universitaria e industrial, está ubicada en el centro del país. ... La ciudad, que cuenta con más de 1.300.000 habitantes y es considerada la segunda ciudad en importancia del país, se erige en la llanura Pampeana, en la puerta de acceso a las sierras.',
        pupulation: 1300000
    },
    mendoza: {
        name: 'Mendoza',
        description: 'Mendoza es una ciudad del oeste de Argentina y capital de la provincia homónima. Se localiza en la llanura al este de la cordillera de los Andes. Es una de las principales ciudades del país, y con su aglomerado urbano, denominado Gran Mendoza alcanza una población total que supera el millón de habitantes.',
        pupulation: 500000
    }
}


export const handler: APIGatewayProxyHandler = async (event) => {

    const city = event.pathParameters?.city;

    if( !city || !cityData[city] ) {
        return response(400, { message: 'City not found.' });
    }

    return response(200, cityData[city]);
}



