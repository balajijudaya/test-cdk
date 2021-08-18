exports.handler = async (event) => {
  var responseBody = {
      "random": Math.floor(Math.random() *  1000) + 1
  };
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type":"application/json",
            },
        body: JSON.stringify(responseBody),
    };
    return response;
};
