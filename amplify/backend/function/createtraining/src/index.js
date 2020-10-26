let AWS = require('aws-sdk');
let s3 = new AWS.S3();
//TODO: update to layers when available for amplify
let moment = require('moment');
let uuid = require('node-uuid');


let apiSportmTrainingTableName = process.env.API_SPORTM_TRAININGTABLE_NAME
let dynamodb = new AWS.DynamoDB.DocumentClient();


exports.handler = async (event) => {
  //eslint-disable-line
  //test
  const Bucket = event.Records[0].s3.bucket.name;
  // console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
  const Key = event.Records[0].s3.object.key;
  const objectHead = await s3.headObject({Bucket, Key}).promise();
  let start = moment(new Date(objectHead.Metadata.trainingstart), "YYYY-MM-DD");
  let end = moment(new Date(objectHead.Metadata.trainingend), "YYYY-MM-DD");
  let days = JSON.parse("[" + objectHead.Metadata.trainingdays + "]");

  try {
    for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
      for (const e of days) {
        if (moment(m).day() === e) {
          let params = {
            TableName: apiSportmTrainingTableName,
            Item: {
              "id": uuid.v1(),
              "trainingDate": moment(m).format('YYYY-MM-DD'),
              "statut": true,
              "name": objectHead.Metadata.trainingname,
              "membershipType": objectHead.Metadata.trainingmembercategory,
              "trainingTime": objectHead.Metadata.trainingtime,
              "createdAt":moment().format(),
              "updatedAt":moment().format()
            }
          };
          await dynamodb.put(params).promise();
        }
      }
    }
    return true;
  } catch (err) {
    console.error('Error', err);
    return false;
  }
};
