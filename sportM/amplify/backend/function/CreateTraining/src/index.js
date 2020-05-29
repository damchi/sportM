/* Amplify Params - DO NOT EDIT
	API_SPORTM_GRAPHQLAPIENDPOINTOUTPUT
	API_SPORTM_GRAPHQLAPIIDOUTPUT
	API_SPORTM_TRAININGTABLE_ARN
	API_SPORTM_TRAININGTABLE_NAME
	AUTH_SPORTM745BB06D_USERPOOLID
	ENV
	FUNCTION_CREATETRAINING_NAME
	REGION
Amplify Params - DO NOT EDIT */

let AWS = require('aws-sdk');
let s3 = new AWS.S3();
//TODO: update to layers when available for amplify
let moment = require('moment');
let uuid = require('node-uuid');


let apiSportmTrainingTableName = process.env.API_SPORTM_TRAININGTABLE_NAME
let dynamodb = new AWS.DynamoDB.DocumentClient();


function insertTraining(event) {
  const Bucket = event.Records[0].s3.bucket.name;
  const Key = event.Records[0].s3.object.key;
  const objectHead = s3.headObject({Bucket, Key}).promise();
  let start = moment(new Date(objectHead.Metadata.trainingstart), "YYYY-MM-DD");
  let end = moment(new Date(objectHead.Metadata.trainingend), "YYYY-MM-DD");
  let days = JSON.parse("[" + objectHead.Metadata.trainingdays + "]");

  try {
    for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
      for (const e of days) {
        console.log('e:' + e);
        console.log('m:' + m);
        if (moment(m).day() === e) {
          console.log('in')
          console.log(Bucket)
          let params = {
            TableName: apiSportmTrainingTableName,
            Item: {
              "id": uuid.v1(),
              "trainingDate": moment(m).format('YYYY-MM-DD'),
              "statut": true,
              "athleteCategory": objectHead.Metadata.trainingmembercategory,
              "trainingTime": objectHead.Metadata.trainingtime
            }
          };
          dynamodb.put(params).promise();
        }
      }
    }
    return true;
  } catch (err) {
    console.error('Error', err);
  }
}

exports.handler = async (event, context) => {
  //eslint-disable-line
  await insertTraining(event);

};
