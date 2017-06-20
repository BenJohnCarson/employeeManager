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
            const self = this;
            this.addButton.addEventListener("click", function(e) {
                e.preventDefault();
                const employee = self.view.addData();
                self.model.addEmployee(employee);
                self.view.clearAddForm(self.addButton);
                self.reinit();
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
            const self = this;
            const deleteButtons = this.getButtons(this.deleteButtonClass);
            this.addClickEventListeners(deleteButtons, function(e){
                e.preventDefault();
                let employeeId = this.closest('tr').id;
                self.model.deleteEmployee(employeeId);
                self.reinit();
            })
        },
        setUpEdit: function() {
            const self = this;
            const editButtons = this.getButtons(this.editButtonClass)
            this.addClickEventListeners(editButtons, function(e){
                e.preventDefault();
                let employeeId = this.closest('tr').id;
                const employeeData = self.model.getEmployee(employeeId);
                self.view.editForm(self.addButton, employeeData[0]);
                self.model.deleteEmployee(employeeId); // TODO Shortcut instead of actually editing :S
            });
        }

    }

    exports.EmployeeManagerController = EmployeeManagerController;
})(this);
