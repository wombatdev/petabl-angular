

//filter name customSearch
.filter('searchFilter',[function(){
    /** @data is the original data**/
    /** @visits is the search query for visits**/
    /** @walking is the search query for walking**/
    return function(data,visits,walking){
        var output = []; // store result in this
        /**@case1 if both searches are present**/
        if(!!skill && !!status){
            skill = skill.toLowerCase();
            status = status.toLowerCase();
            //loop over the original array
            for(var i = 0;i<data.length; i++){
                // check if any result matching the search request
                if(data[i].skill.toLowerCase().indexOf(skill) !== -1 && data[i].status.toLowerCase().indexOf(status) !== -1){
                    //push data into results array
                    output.push(data[i]);
                }
            }
        } else if(!!skill){ /**@case2 if only skill query is present**/
            skill = skill.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].skill.toLowerCase().indexOf(skill) !== -1){
                    output.push(data[i]);
                }
            }
        } else if(!!status){ /**@case3 if only status query is present**/
            status = status.toLowerCase();
            for(var i = 0;i<data.length; i++){
                if(data[i].status.toLowerCase().indexOf(status) !== -1){
                    output.push(data[i]);
                }
            }
        } else {
            /**@case4 no query is present**/
            output = data;
        }
        return output; // finally return the result
    }
}]);
