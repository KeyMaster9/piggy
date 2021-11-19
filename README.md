routes/html : in here, handle routes handing them middleware with the 'Handler' naming scheme from the './html' dir
routes/api: this should be the same:

example:


const registrationHandler = rqeuier('./api/register/registrationHandler');
router.post('/register', [
    registrationHandler
]);