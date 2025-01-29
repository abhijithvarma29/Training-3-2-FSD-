//? take array of objects, each object contains empid, empname, empcompany, empsalary and empaddress where empaddress is again an object which contains empcity,emparea. print all those values on the ui in the form of table

let employees =[
    {
        empid: 1,
        empname: "Ravi",
        empcompany: "ABC",
        empsalary: 50000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "Kompally"
        }
    },
    {
        empid: 2,
        empname: "Raj",
        empcompany: "XYZ",
        empsalary: 60000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "miyapur"
        }
    },
    {
        empid: 3,
        empname: "Rohan",
        empcompany: "XYZ",
        empsalary: 70000,
        empaddress: {
            empcity: "Hyderabad",
            emparea: "Kompally"
        }
    }
]
const table = document.getElementById("table");
employees.forEach(emp => {
table.innerHTML += `
    <tr>
        <td>${emp.empid}</td>
        <td>${emp.empname}</td>
        <td>${emp.empcompany}</td>
        <td>${emp.empsalary}</td>
        <td>${emp.empaddress.empcity}</td>
        <td>${emp.empaddress.emparea}</td>
    </tr>
    `;
});
