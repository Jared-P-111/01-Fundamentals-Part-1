

//switch statements use a strict comparison and type conversion doesn't take place. 

const day = 'thursday';

switch(day) {
    case 'monday':  //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('Record videos');
        break;

    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend 🙌🙌🎉🥂🥂');
        break;

    default:
        console.log('Not a valid day!');   
}

if (day === "wednesday" || day === "thursday"){
    console.log('write code examples.');
}