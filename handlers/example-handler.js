const request = require("request");

function buildExampleHandler(){
  return async function exampleHandler(message, context){
    const options = {
      url: "https://vfpsteambi.app/vfps/vfpsws/vfpsconsbsapi.php?dni=45536161&token=EL213X550VFP9AY&format=json&imagen=ready",
      json: true
    };

    return new Promise(function (resolve, reject) {
      request(options, function (err, resp) {
        if (err) {
          console.log(err);
          return reject({err: err});
        }
        console.log(resp.body)
        return resolve({response:resp.body});
      });
    });
  }
}

exports.buildExampleHandler = buildExampleHandler;