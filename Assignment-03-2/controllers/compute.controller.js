const computeCalculation = (req, res) => {
    const q = parseInt(req.query.multiply);
    const p = parseInt(req.params.value);
    if (req.query && req.params && isFinite(q) && isFinite(p)) {
        const result = q * p;
        res.status(200).json({ result });
    } else {
        res.status(400).json({ "error ": "Ah ha, something wrong. Check the query string (multiply) or your value and try again." });
    }

}

module.exports = {
    computeCalculation
}