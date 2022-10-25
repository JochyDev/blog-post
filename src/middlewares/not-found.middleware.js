module.exports = ( req, res, next ) => {
    res.status(400).send({
        status: 404,
        message: 'Recource not found'
    })
}