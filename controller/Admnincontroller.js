export const signup = async (req, res) => {
    // req.body is already validated
    console.log(req.body);

    res.json({
        message: "Admin created"
    });
};