(function(exports) {
    function EmployeeManagerView(opts) {
        this.employeeTable = document.getElementById(opts.employeeTableId);
        this.addForm = document.getElementById(opts.addFormId);
    };

    EmployeeManagerView.prototype = {
        fillTable: function(employees) {
            let t = "";
            for(let i=0; i < employees.length; i++){
                t += this.renderEmployee(employees[i]);
            }
            this.employeeTable.innerHTML = t;
        },
        renderEmployee: function(employee) {
            return `
                <tr id="${employee.id}">
                    <td>${employee.name}</td>
                    <td>${employee.id}</td>
                    <td>${employee.experience}</td>
                    <td>${employee.skillsOn}</td>
                    <td>${employee.salary}</td>
                    <td><button type="button" class="btn btn-info edit">Edit</button></td>
                    <td><button type="button" class="btn btn-danger delete">Delete</button></td>
                </tr>
            `
        },
        addData: function() {
            const data = {
                name: this.addForm.name.value,
                id: this.addForm.id.value,
                experience: this.addForm.experience.value,
                skillsOn: this.addForm.skillsOn.value,
                salary: this.addForm.salary.value,
            }

            return data;
        },
        clearAddForm: function(addButton) {
            this.addForm.reset();
            addButton.innerText = "Add";
        },
        editForm: function(addButton, data) {
            addButton.innerText = "Edit";
            this.addForm.name.value = data.name ;
            this.addForm.id.value = data.id;
            this.addForm.experience.value = data.experience;
            this.addForm.skillsOn.value = data.skillsOn;
            this.addForm.salary.value = data.salary;
        }

    }

    exports.EmployeeManagerView = EmployeeManagerView;
})(this);
