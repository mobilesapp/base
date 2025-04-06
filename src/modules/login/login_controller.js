const loginService = require("./login_service");


exports.validCustomer = async (req, res, next) => {
    try {
    const { customer } = req.query;
    const isValidCustomerRes = await loginService.isValidCustomer(customer);
    res.status(200).json({
    status: "success",
    message: "Success Validation",
    data: {
    isValidCustomerRes,
    },
    });
    } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Error Validating Heart Beat." });
    }
    };