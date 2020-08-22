const express = require('express');
const router = express.Router();

router.get('/:loginId',(req, res, next) => {
    const id = req.params.loginId;
    if ( id === 'special') {
        res.status(200).json({
            message: "Your Login is Successfully",
            id: id 
        });
    } else {
        res.status(200).json({
            message: "Login Fail"
        });
    }
});



module.exports = router;