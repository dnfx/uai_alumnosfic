

async function getData(endPoint) {
    /*
        getData -> realiza get req. a la API desarrollada. Debemos
                    indicar el endPoint al que deseamos ingresar.
        retorna la data en JSON y, en caso de no encontrar el endpoint
            retorna el error como variable err.

    */
    const mainApiUrl = 'https://api-alumnosfic.azurewebsites.net/';
    const apiEndPointUrl = mainApiUrl + endPoint;

    let endPointResponse = await fetch(apiEndPointUrl).then(
        (response) => response.json()
        ).then(
            (actualData) => {
                return actualData;
            }
            ).catch(err => {
                return err
            });
    return endPointResponse
}

export default getData;

