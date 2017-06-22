(function(exports) {
    function EmployeeManagerController(opts, model, view) {
        this.model = model;
        this.view = view;
        this.addButton = document.getElementById(opts.addButtonId);
        this.deleteButtonClass = opts.deleteButtonClass;
        this.editButtonClass = opts.editButtonClass;
    };

    EmployeeManagerController.prototype = {
        init: function(data) {
            this.model.loadData(data);
            this.view.fillTable(this.model.employees);
            this.setupAdd();
            this.setUpDelete();
            this.setUpEdit();
        },
        reinit: function(){
            this.view.fillTable(this.model.employees);
            this.setUpDelete();
            this.setUpEdit();
        },
        setupAdd: function() {
            this.addButton.addEventListener("click", (e) => {
                e.preventDefault();
                const employee = this.view.addData();
                this.model.addEmployee(employee);
                this.view.clearAddForm(this.addButton);
                this.reinit();
            });
        },
        getButtons: function(buttonClass) {
            return document.querySelectorAll(buttonClass);
        },
        addClickEventListeners: function(els, cb) {
            els.forEach(function(el) {
                el.addEventListener("click", cb);
            })
        },
        setUpDelete: function() {
            const deleteButtons = this.getButtons(this.deleteButtonClass);
            this.addClickEventListeners(deleteButtons, (e) => {
                e.preventDefault();
                let employeeId = e.target.closest('tr').id;
                this.model.deleteEmployee(employeeId);
                this.reinit();
            })
        },
        setUpEdit: function() {
            const editButtons = this.getButtons(this.editButtonClass)
            this.addClickEventListeners(editButtons, (e) => {
                e.preventDefault();
                let employeeId = e.target.closest('tr').id;
                const employeeData = this.model.getEmployee(employeeId);
                this.view.editForm(this.addButton, employeeData[0]);
                this.model.deleteEmployee(employeeId); // TODO Shortcut instead of actually editing :S
            });
        }

    }

    exports.EmployeeManagerController = EmployeeManagerController;
})(this);
