// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000


function calculateSalary(role) {
  switch (role) {
    case 'ceo':
      console.log('the Ceo salary is 2200 eur');
      break;
      
      case 'manager':
        console.log('the Manager salary is 1800 eur');
        break;

        case 'cto':
          console.log('the Cto salary is 1800 eur');
          break;

          case 'developer':
            console.log('the Developer salary is 1500 eur');
            break;

            
  
    default:
      console.log('the salary is è 1000 eur');
      break;
  }


}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);