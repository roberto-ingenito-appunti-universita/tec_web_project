
export function checkUserAuth(req, _, next) {
    console.log(req.headers);
    next();
    /* const authHeader = req.headers['authorization']
    const token = authHeader?.split(' ')[1]

    if (!token) {
        next({ statusCode: 401, message: 'Unauthorized user' })
        return;
    } else {
        AuthController.isTokenValid(token, (err, decodedToken) => {
            if (err) {
                next({ statusCode: 401, message: 'Unauthorized user' })
            } else {
                next();
            }
        })
    } */
}
