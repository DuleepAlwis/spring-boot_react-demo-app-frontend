import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/';

class EmployeeService{

    getAllEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL+"api/employee/getAll");
    }
}

let empService = new EmployeeService();
export default empService;