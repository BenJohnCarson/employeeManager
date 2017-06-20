(function() {
    window.onload = function() {

        const myEmployeeManager = new EmployeeManagerController(
            {
                addButtonId: "add",
                deleteButtonClass: ".delete",
                editButtonClass: ".edit"
            },
            new EmployeeManagerModel(),
            new EmployeeManagerView({
                employeeTableId: "employee-table",
                addFormId: "add-form"
            })
        );

        myEmployeeManager.init([
            {
                name: "Ben",
                id: "123",
                experience: "Junior",
                skillsOn: "Javascript, Ruby",
                salary: 36000
            },
            {
                name: "Tom",
                id: "456",
                experience: "Senior",
                skillsOn: "Javascript, Java, Ember",
                salary: 50000
            }
        ]);
    }
})();
