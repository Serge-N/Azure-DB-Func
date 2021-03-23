module.exports = function (context, req) {
        
    var performances = context.bindings.performances;
   
    context.log("The list is this long : " + performances.length);
   
    context.log("The requested course code is : " + (req.query.CourseID || (req.body && req.body.CourseID)));
   
    if (performances.length !== 0) {
        context.res = {
            body: JSON.stringify(performances), 
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
    else {
   
        context.res = {
            status: 404,
            body: "No Performance found",
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
   
    context.done();
};