class TodoControllerClass{
    constructor(model, view){
        this.model = model;
        this.view = view;
        this.view.bindCreateInputBtn(this.handleAddItem.bind(this));
        /*this.view.bindToggleStatus(this.handleToggleTodo.bind(this));
        this.view.bindDeleteItem(this.handleDeleteTodo.bind(this));
        this.view.bindEditInputBtn(this.handleEditTodo.bind(this));*/
    }


    handleAddItem({ title, project }){
        let todo = this.model.addTodo(title, project);
        this.view.updateTasksCount(this.model.CompTaskCount, this.model.PendTaskCount);
        this.view.createListItem(todo);
        console.log(this.model.listData);
    };
/*    handleToggleTodo(id){
        this.model.toggleTodo(parseInt(id));
        this.view.updateTasksCount(this.model.CompTaskCount, this.model.PendTaskCount);
        console.log(this.model.listData);
    };
    handleDeleteTodo(id){
        this.model.deleteTodo(parseInt(id));
        this.view.updateTasksCount(this.model.CompTaskCount, this.model.PendTaskCount);
        console.log(this.model.listData);
    }
    handleEditTodo({id, title, project}){
        let editData = this.model.editTodo(parseInt(id), title, project);
        this.view.updateEditData(editData);
    }*/
}
export {TodoControllerClass}