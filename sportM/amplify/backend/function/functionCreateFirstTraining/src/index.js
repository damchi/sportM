import {Storage} from "aws-amplify";

exports.handler = function(event, context) {
  //eslint-disable-line
  // this.CreateTraining()
  console.log(JSON.stringify(event, null, 2));
  Storage.list('new/').then(result => console.log(result));
  event.Records.forEach(record => {
    console.log('logs lambda');
    console.log('records:' + JSON.stringify(record));
    console.log('record event Name :'+record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
};
