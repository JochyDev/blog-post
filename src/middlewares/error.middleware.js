module.exports = (err, req, res, next) => {
    const httpSatatus = err.status || 500;

    return res.status(httpSatatus).send({
        status: httpSatatus,
        message: err.message || 'Internal server error'
    })
}