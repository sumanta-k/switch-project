const d = new Date(2023,5,10,8,0,0);
const month = d.getMonth();


switch (month){
    case 1:
        console.log("it's january");
        break;
    case 2:
        console.log("it's february");
        break;

    case 3:
        console.log("it's march");
        break;

    default:
        console.log("it's not january,february,march");
}