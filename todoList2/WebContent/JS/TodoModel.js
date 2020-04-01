function TodoModel(){
    this.CompTaskCount = 0;
    this.PendTaskCount = 0;
    this.itemId = 1;
    //this.listData = [];
    this.data = {};

    this.addTodo = function(title, project){
        /*const todo = {
            id: this.itemId++,
            title,
            project,
            status: false,
        };
        this.listData.push(todo);
        this.PendTaskCount++;

        return todo;*/
        const val = {
            title,
            project,
            status: false
        };
        const idx = this.itemId++;
        this.data[idx] = val;
        this.PendTaskCount++;

        return {idx, val};
    };

    this.toggleTodo = function (id) {
        /*for(let ix=0; ix<this.listData.length; ix++){
            if(this.listData[ix].id === id){
                this.listData[ix].status = true;
                this.PendTaskCount--;
                this.CompTaskCount++;
            }
        }*/
        this.data[id].status = true;
        this.PendTaskCount--;
        this.CompTaskCount++;
    };

    this.deleteTodo = function (id) {
        /*for(let ix=0; ix<this.listData.length; ix++){
            if(this.listData[ix].id === id){
                this.listData[ix].status ? this.CompTaskCount-- : this.PendTaskCount--;
                this.listData.splice(ix,1);
            }
        }*/
        this.data[id].status ? this.CompTaskCount-- : this.PendTaskCount--;
        delete this.data[id];
    };

    this.editTodo = function(id, title, project){
        /*for(let ix=0; ix<this.listData.length; ix++){
            if(this.listData[ix].id === id){
                this.listData[ix].title = title;
                this.listData[ix].project = project;

                return this.listData[ix];
            }
        }*/
        let data = this.data[id];
        data.title = title;
        data.project = project;
        return {id, data};
    }
};

export {TodoModel};