function TodoController(model, view){
    this.model = model;
    this.view = view;

    this.view.updateTasksCount(this.model.CompTaskCount, this.model.PendTaskCount);
    this.view.bindCreateInputBtn(handleAddItem.bind(this));
    this.view.bindToggleStatus(handleToggleTodo.bind(this));
    this.view.bindDeleteItem(handleDeleteTodo.bind(this));
    this.view.bindEditInputBtn(handleEditTodo.bind(this));

    function handleAddItem({ title, project }){
        let todo = this.model.addTodo(title, project);
        this.view.updateTasksCount(this.model.CompTaskCount, this.model.PendTaskCount);
        //this.view.createListItem(todo);
        this.view.createListItem(todo.idx, todo.val.title, todo.val.project);
    }
    function handleToggleTodo(id){
        this.model.toggleTodo(parseInt(id));
        this.view.updateTasksCount(this.model.CompTaskCount, this.model.PendTaskCount);
    }
    function handleDeleteTodo(id){
        this.model.deleteTodo(parseInt(id));
        this.view.updateTasksCount(this.model.CompTaskCount, this.model.PendTaskCount);
    }
    function handleEditTodo({id, title, project}){
        let editData = this.model.editTodo(parseInt(id), title, project);
        console.log(editData);
        this.view.updateEditData(editData);
    }
}

export {TodoController}