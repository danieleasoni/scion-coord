scionApp
    .factory('userService', ["$http", "$q", function ($http, $q) {
    return {
        // Load the user's data
        userPageData: function () {
            // $http returns a promise, which has a then function, which also returns a promise
            return $http.get('/api/userPageData').then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        },
        // Create SCIONLab VM
        generateSCIONLabVM: function (user) {
            // $http returns a promise, which has a then function, which also returns a promise
            // TODO(ercanucan): compose the URL in a cleaner fashion
            let url = '/api/as/generateVM?isVPN=' + (!user.isNotVPN) + '&scionLabVMIP='
                + user.scionLabVMIP;
            return $http.post(url).then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        },
        // Remove SCIONLab VM
        removeSCIONLabVM: function (user) {
            // $http returns a promise, which has a then function, which also returns a promise
            console.log("Inside remove VM");
            return $http.post('/api/as/removeVM').then(function (response) {
                // The then function here is an opportunity to modify the response
                console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
        }
    };
}]);
