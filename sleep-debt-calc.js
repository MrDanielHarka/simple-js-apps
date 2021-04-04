const userInput = 7;

const getSleepHours = day => {
 switch(day) {
  case 'monday':
    return 8;
    break;
  case 'tuesday':
    return 7;
    break;
  case 'wednesday':
    return 6;
    break;
  case 'thursday':
    return 5;
    break;
  case 'friday':
    return 5;
    break;
  case 'saturday':
    return 9;
    break;
  case 'sunday':
    return 10;
    break;
  default:
    return 'Error!'
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

const getIdealSleepHours = () => {
  const idealHours = userInput;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  console.log('Ideal sleep hours:', idealSleepHours);
  console.log('Actual sleep hours:', actualSleepHours);

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours){
    console.log('More sleep than needed!');
  } else {
    console.log('Less sleep than needed!');
  }

    if (actualSleepHours > idealSleepHours){
    console.log(`${actualSleepHours-idealSleepHours} sleep hours not needed!`);
  } else if (idealSleepHours > actualSleepHours){
    console.log(`${idealSleepHours-actualSleepHours} sleep hours needed!`);
  }
};

calculateSleepDebt();
