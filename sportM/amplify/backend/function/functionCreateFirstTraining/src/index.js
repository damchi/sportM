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

Amplify Params - DO NOT EDIT *///import {Storage} from "aws-amplify";


exports.handler = function(event, context) {
  let client = AWS.S3()
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  //Storage.get('new/tt.json').then(result => console.log(result));
  event.Records.forEach(record => {
    console.log('logs lambda');
    console.log('records:' + JSON.stringify(record));
    console.log('record event Name :'+record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};
