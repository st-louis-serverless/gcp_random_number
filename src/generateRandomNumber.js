/**
 * stlsGenerateRandomNumber
 *
 * @param request HTTP request
 * @param response HTTP response
 */
exports.generateRandomNumber = (request, response) => {
    console.log("Starting generateRandomNumber");
    console.log("request.query: ", request.query);
    console.log("request.body: ", request.body);

    let min;
    let max;
    switch(request.method) {
        case 'GET':
            min = request.query.min ? parseInt(request.query.min) : 1;
            max = request.query.max ? parseInt(request.query.max) : 100;
            break;

        case 'POST':
            min = request.body.min ? request.body.min : 1;
            max = request.body.max ? request.body.max : 100;
            break;

        default:
            response.status(405).send();
            return;
    }
    const randomVal = Math.floor(Math.random() * (max - min + 1) + min);

    const results = {
        min: min,
        max: max,
        randomVal: randomVal
    };

    console.log('results:', results);

    response.status(200).send(results);
};