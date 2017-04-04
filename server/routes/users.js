import express from 'express';
import signupValidation from '../../src/helpers/signupValidation';


let router = express.Router();
router.post('/', (req, res) => {

    const {errors, isValid} = signupValidation(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    }
});

export default router;
