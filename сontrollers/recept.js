const array = ["220-260 грамм мука", "200 грамм сахар", "2 штук яйцо", "100 грамм сливочное масло", "1 ч. л. корица", "0,5 ч. л. сода", "щепот. соль"]
const DB_RECEPTS = [];

exports.getCookes = function getCookes(request, response) {
    console.log('Был вызван рецепт печенки')
    response.status(200).json(array);
}
exports.allRecept = function allRecept(req, res) {
    res.status(200).json(DB_RECEPTS)
}
exports.createRecept = function createRecept(req, res) {
    const clientData = req.body;

    console.log(clientData)

    DB_RECEPTS.push(clientData)

    res.status(201).json(`Рецепт ${clientData.name} успешно создан`)
}



