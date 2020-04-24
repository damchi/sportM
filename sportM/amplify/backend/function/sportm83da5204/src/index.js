
exports.handler = async (event) => {
  let training = new Training();
  // let trainingWeek = Training[]
  // training.trainingDay = new Date().

  for (let i = 0; i < 7; i++) {
    training.trainingDay = moment().startOf('isoWeek').add(i, 'days').format('dddd MMMM Do');
    // const nextWeekDay = moment().startOf('isoWeek').add(i + 7, 'days').format('dddd MMMM Do');
    // if (moment().isoWeekday() > 5 && ((i + 7 === 7 || i + 7 === 9 || i + 7 === 11) && this.athlete.membershipType === 'master')) {
    //   this.nextWeek = moment().isoWeek() + 1;
    //   this.nextWeekDays.push(nextWeekDay)
    // }
    // if ((i === 0 || i === 2 || i === 4) && this.athlete.membershipType === 'master') {
    //   this.week = moment().isoWeek();
    //   this.weekDays.push(day);
    // }
  }

  // this.CreateTraining()
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
