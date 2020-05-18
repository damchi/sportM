/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var functionFunctionCreateFirstTrainingName = process.env.FUNCTION_FUNCTIONCREATEFIRSTTRAINING_NAME
var storageTrainingDescriptionBucketName = process.env.STORAGE_TRAININGDESCRIPTION_BUCKETNAME
var storageTrainingDescriptionBucketName = process.env.STORAGE_TRAININGDESCRIPTION_BUCKETNAME
var apiSportmTrainingTableName = process.env.API_SPORTM_TRAININGTABLE_NAME
var apiSportmTrainingTableArn = process.env.API_SPORTM_TRAININGTABLE_ARN
var apiSportmGraphQLAPIIdOutput = process.env.API_SPORTM_GRAPHQLAPIIDOUTPUT

Amplify Params - DO NOT EDIT */

let AWS = require('aws-sdk');

let s3 = new AWS.S3();
exports.handler =  async function (event, context) {
  //eslint-disable-line
  try {
    const Bucket = event.Records[0].s3.bucket.name;
    const Key = event.Records[0].s3.object.key;
    console.log('Bucket', Bucket);
    console.log('Key', Key);

    const objectHead = await s3.headObject({ Bucket, Key }).promise();
    console.log( objectHead);

    // callback();
  } catch(err) {
    console.error('Error', err);
    // callback(err);
  }
  // await event.Records.forEach(  record => {
  //   let params = {
  //     Bucket: record.s3.bucket.name,
  //     Key: record.s3.object.key
  //   };
  //   console.log(params);
  //   const objectHead =   s3.headObject(params).promise();
  //   console.log('Alas! I will never discover that the objectHead is:', objectHead);
  //
  //
  //   //   console.log('logs lambda');
  // //   console.log('records:' + JSON.stringify(record));
  // //   console.log('keys dot :' + JSON.stringify(record.s3.object.key));
  // //
  // //   console.log('record event Name :' + record.eventName);
  // //   console.log('DynamoDB Record: %j', record.dynamodb);
  // });
  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};
