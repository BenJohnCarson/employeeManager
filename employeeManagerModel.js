(function(exports) {
    function EmployeeManagerModel() {
        this.employees = [];
    };

    EmployeeManagerModel.prototype = {
        loadData: function(data) {
            for(let i=0; i < data.length; i++) {
                this.employees.push(data[i]);
            }
        },
        addEmployee: function(employee) {
            this.employees.push(employee);
        },
        deleteEmployee: function(id) {
            this.employees = this.employees.filter(function(employee){
                return employee.id !== id;
            });
        },
        getEmployee: function(id) {
            const employee = this.employees.filter(function(employee){
                return employee.id === id;
            })
            return employee;
        }
    }

    exports.EmployeeManagerModel = EmployeeManagerModel;
})(this);
