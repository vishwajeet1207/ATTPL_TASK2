const logger = (req, res, next) => {
    const startTime = new Date(); // Record the start time of the request
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Time: ${startTime.toISOString()}`);
    console.log(`Endpoint: ${req.path}`);
    console.log("Request Headers:", req.headers);
  
   
    const originalSend = res.send;
    res.send = function (data) {
      console.log("Response Data:", JSON.stringify(data, null, 2));
      return originalSend.apply(res, arguments);
    };
  
   
    res.on("finish", () => {
      const endTime = new Date();
      const responseTime = endTime - startTime;
      console.log(`Response Time: ${responseTime/60}s`);
    });
  
    next();
  };
  
  module.exports = logger;