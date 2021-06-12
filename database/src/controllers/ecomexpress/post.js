async function post(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('ecomexpress');
    const insert = await UserCollection.insertOne({
        ecomexpressId:  request .body.ecomexpressId,
        name:   request.body.name,
        number:request.body.number,
        fromaddress:request.body.fromaddress,
        toaddress:request.body.toaddress,
        date:request.body.date

    });
    response.send({ success: true, id: insert.insertedId });
}

module.exports = post;
