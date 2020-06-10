

module.exports = function(res){
    import React, { Component } from "react";
    var admin = require("firebase-admin");
    var serviceAccount = require("../../e4u-chat-firebase-adminsdk-i9hi2-f7ce883132.json");
    var users = [];

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://e4u-chat.firebaseio.com"
    });
    
    async componentDidMount() {
        this.setState({ adminError: null });
    }
    /*
    function listAllUsers(nextPageToken) {
        let users = [];
        admin.auth().listUsers(1000, nextPageToken)
        .then(function(listUsersResult) {
            
            listUsersResult.users.forEach(function(userRecord) {
                console.log('user', userRecord.toJSON());
                //users.push(userRecord.toJSON());
            });

        if (listUsersResult.pageToken) {
            // List next batch of users.
            listAllUsers(listUsersResult.pageToken);
        }
        })

        .catch(function(error) {
            console.log('Error listing users:', error);
        });
        console.log(users);
    }

    // Start listing users from the beginning, 1000 at a time.
    listAllUsers();
    */
    res.send('<pre>'+users+'</pre>');
}