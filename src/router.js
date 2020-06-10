module.exports = function(app){
    
    //firebase admin
    app.get('/admin', function(req, res){
        require('./firebase/admin')(res);
    });

    //firebase login
}
