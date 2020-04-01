 function TodoView() {
    /*
    *   TaskCount 영역
    * */
    let root = document.querySelector('.mainPosition');
    let taskDiv = document.createElement('div');
    let compTaskP = document.createElement('p');
    let compTaskSpan = document.createElement('span');
    let pendTaskP = document.createElement('p');
    let pendTaskSpan = document.createElement('span');

    compTaskP.textContent = 'Completed Tasks : ';
    pendTaskP.textContent = 'Pending Tasks : ';

    compTaskSpan.setAttribute('id','completedCount');
    pendTaskSpan.setAttribute('id','pendingCount');

    compTaskP.append(compTaskSpan);
    pendTaskP.append(pendTaskSpan);
    taskDiv.append(compTaskP, pendTaskP);

    /*
    *   TodoItem append 영역
    * */
    let listDiv = document.createElement('div');

    /*
    *   add Todolist button
    * */
    let addBtnDiv = document.createElement('div');
    let addBtn = document.createElement('button');
    let btnImage = document.createElement('img');

    addBtnDiv.setAttribute('class','addBtnDiv');
    btnImage.setAttribute('class','addBtnImg');

    addBtn.append(btnImage);
    addBtnDiv.append(addBtn);


    let newItemDiv = document.createElement('div');
    let newItemTitleP = document.createElement('p');
    let newItemProjectP = document.createElement('p');
    let newItemInputTitle = document.createElement('input');
    let newItemInputProject = document.createElement('input');
    let btnDiv = document.createElement('div');
    let createInput = document.createElement('button');
    let cancelInput = document.createElement('button');

    newItemTitleP.textContent = 'Title';
    newItemProjectP.textContent = 'Project';
    createInput.textContent = "Create";
    cancelInput.textContent = "Cancel";

    newItemDiv.setAttribute('class','newItemTemplate');
    newItemInputTitle.setAttribute('type','text');
    newItemInputProject.setAttribute('type','text');
    btnDiv.setAttribute('class', 'newItemInputBtn');
    createInput.setAttribute('class', 'newItemCreateInput');
    cancelInput.setAttribute('class', 'newItemCancelInput');

    btnDiv.append(createInput, cancelInput);
    newItemDiv.append(newItemTitleP, newItemInputTitle, btnDiv, newItemProjectP, newItemInputProject);
    root.append(taskDiv, listDiv, addBtnDiv, newItemDiv);



    this.updateTasksCount = function (compTask, pendTask) {
        compTaskSpan.textContent = compTask;
        pendTaskSpan.textContent = pendTask;
    };

    addClickEvent(addBtn, function () {
        newItemDiv.classList.add('show');
        addBtnDiv.classList.add('hide');
    });

    addClickEvent(cancelInput, function () {
        newItemInputTitle.value = '';
        newItemInputProject.value = '';
        newItemDiv.classList.remove('show');
        addBtnDiv.classList.remove('hide');
    });

    addClickEvent(listDiv, function (e) {
        if(e.target.className === 'editIcon'){
            e.target.parentElement.nextSibling.classList.add('show');
            e.target.parentElement.classList.add('hide');
        }
    });

    /*this.createListItem = function (data) {
        let listItemDiv = document.createElement('div');
        let listTitleDiv = document.createElement('div');
        let listProjectDiv = document.createElement('div');
        let delIcon = document.createElement('img');
        let editIcon = document.createElement('img');
        let toggleDiv = document.createElement('div');

        listTitleDiv.textContent = data.title;
        listProjectDiv.textContent = data.project;
        toggleDiv.textContent = 'Pending';

        listItemDiv.setAttribute('class','listItem');
        listItemDiv.setAttribute('id',data.id);
        listTitleDiv.setAttribute('class','listTitle');
        listProjectDiv.setAttribute('class','listProject');
        delIcon.setAttribute('class','delIcon');
        editIcon.setAttribute('class','editIcon');
        toggleDiv.setAttribute('class','listBottomBtn');

        listItemDiv.append(listTitleDiv, listProjectDiv, delIcon, editIcon, toggleDiv);

        let editDiv = document.createElement('div');
        let editTitleP = document.createElement('p');
        let editTitleInput = document.createElement('input');
        let editProjectP = document.createElement('p');
        let editProjectInput = document.createElement('input');
        let editBtn = document.createElement('button');

        editTitleP.textContent = 'Title';
        editProjectP.textContent = 'Project';
        editBtn.textContent = 'Close X';
        editTitleInput.value = data.title;
        editProjectInput.value = data.project;

        editDiv.setAttribute('class','editDiv');
        editTitleInput.setAttribute('class','editTitleInput');
        editProjectInput.setAttribute('class','editProjectInput');
        editBtn.setAttribute('class','editCloseBtn');

        editDiv.append(editTitleP, editTitleInput, editProjectP, editProjectInput, editBtn);

        listDiv.append(listItemDiv, editDiv);
    };*/
    this.createListItem = function (idx, title, project) {
        let listItemDiv = document.createElement('div');
        let listTitleDiv = document.createElement('div');
        let listProjectDiv = document.createElement('div');
        let delIcon = document.createElement('img');
        let editIcon = document.createElement('img');
        let toggleDiv = document.createElement('div');

        listTitleDiv.textContent = title;
        listProjectDiv.textContent = project;
        toggleDiv.textContent = 'Pending';

        listItemDiv.setAttribute('class','listItem');
        listItemDiv.setAttribute('id',idx);
        listTitleDiv.setAttribute('class','listTitle');
        listProjectDiv.setAttribute('class','listProject');
        delIcon.setAttribute('class','delIcon');
        editIcon.setAttribute('class','editIcon');
        toggleDiv.setAttribute('class','listBottomBtn');

        listItemDiv.append(listTitleDiv, listProjectDiv, delIcon, editIcon, toggleDiv);

        let editDiv = document.createElement('div');
        let editTitleP = document.createElement('p');
        let editTitleInput = document.createElement('input');
        let editProjectP = document.createElement('p');
        let editProjectInput = document.createElement('input');
        let editBtn = document.createElement('button');

        editTitleP.textContent = 'Title';
        editProjectP.textContent = 'Project';
        editBtn.textContent = 'Close X';
        editTitleInput.value = title;
        editProjectInput.value = project;

        editDiv.setAttribute('class','editDiv');
        editTitleInput.setAttribute('class','editTitleInput');
        editProjectInput.setAttribute('class','editProjectInput');
        editBtn.setAttribute('class','editCloseBtn');

        editDiv.append(editTitleP, editTitleInput, editProjectP, editProjectInput, editBtn);

        listDiv.append(listItemDiv, editDiv);
    };

    this.bindCreateInputBtn = function(handler){
        createInput.addEventListener('click', function() {
            if(newItemInputTitle.value !== '' && newItemInputProject.value !== ''){
                handler({
                    title: newItemInputTitle.value,
                    project: newItemInputProject.value
                });
                newItemInputTitle.value = '';
                newItemInputProject.value = '';
                newItemDiv.classList.remove('show');
                addBtnDiv.classList.remove('hide');
            }
        });
    };

    this.bindToggleStatus = function (handler) {
        listDiv.addEventListener('click',function (e) {
            if(e.target.className === 'listBottomBtn'){
                handler(e.target.parentElement.id);
                e.target.classList.add('complete');
                e.target.innerHTML = 'Completed';
            }
        });
    };

    this.bindDeleteItem = function (handler) {
        listDiv.addEventListener('click',function (e) {
            if(e.target.className === 'delIcon'){
                handler(e.target.parentElement.id);
                e.target.parentElement.nextSibling.remove();
                e.target.parentElement.remove();
            }
        });
    };

    this.bindEditInputBtn = function (handler) {
        listDiv.addEventListener('click', function (e) {
            if(e.target.className === 'editCloseBtn'){
                let target = e.target.parentElement;
                handler({
                    id: target.previousSibling.id,
                    title: target.getElementsByClassName('editTitleInput')[0].value,
                    project: target.getElementsByClassName('editProjectInput')[0].value,
                });
                target.classList.remove('show');
                target.previousSibling.classList.remove('hide');
            }
        });
    };

    this.updateEditData = function (editData) {
        let editTarget = document.getElementById(editData.id);
        editTarget.getElementsByClassName('listTitle')[0].textContent = editData.data.title;
        editTarget.getElementsByClassName('listProject')[0].textContent = editData.data.project;
    }

};
function addClickEvent(target, listener){
    target.addEventListener('click',listener);
};
/*TodoView.prototype = {
    /!*bindAddBtn: function () {
         this.addBtn.addEventListener('click',function () {
             this.newItemDiv.classList.add('show');
             this.addBtnDiv.classList.add('hide');
         }.bind(this));
     },
     bindCreateInputBtn: function (handler) {
         this.createInput.addEventListener('click', function() {
             if(this.newItemInputTitle.value !== '' && this.newItemInputProject.value !== ''){
                 handler({
                     title: this.newItemInputTitle.value,
                     project: this.newItemInputProject.value
                 });
                 this.newItemInputTitle.value = '';
                 this.newItemInputProject.value = '';
                 this.newItemDiv.classList.remove('show');
                 this.addBtnDiv.classList.remove('hide');
             }
         }.bind(this));
     },
    bindCancelInputBtn: function () {
        this.cancelInput.addEventListener('click',function () {
            this.newItemInputTitle.value = '';
            this.newItemInputProject.value = '';
            this.newItemDiv.classList.remove('show');
            this.addBtnDiv.classList.remove('hide');
        }.bind(this));
    },
    createListItem: function (data) {

        let listItemDiv = document.createElement('div');
        let listTitleDiv = document.createElement('div');
        let listProjectDiv = document.createElement('div');
        let delIcon = document.createElement('input');
        let editIcon = document.createElement('input');
        let toggleDiv = document.createElement('div');

        listTitleDiv.textContent = data.title;
        listProjectDiv.textContent = data.project;
        toggleDiv.textContent = 'Pending';

        listItemDiv.setAttribute('class','listItem');
        listItemDiv.setAttribute('id',data.id);
        listTitleDiv.setAttribute('class','listTitle');
        listProjectDiv.setAttribute('class','listProject');
        delIcon.setAttribute('type','image');
        delIcon.setAttribute('class','delIcon');
        delIcon.setAttribute('src','../Image/deleteItem.png');
        editIcon.setAttribute('type','image');
        editIcon.setAttribute('class','editIcon');
        editIcon.setAttribute('src','../Image/editImage.png');
        toggleDiv.setAttribute('class','listBottomBtn');

        listItemDiv.append(listTitleDiv, listProjectDiv, delIcon, editIcon, toggleDiv);

        let editDiv = document.createElement('div');
        let editTitleP = document.createElement('p');
        let editTitleInput = document.createElement('input');
        let editProjectP = document.createElement('p');
        let editProjectInput = document.createElement('input');
        let editBtn = document.createElement('button');

        editTitleP.textContent = 'Title';
        editProjectP.textContent = 'Project';
        editBtn.textContent = 'Close X';
        editTitleInput.value = data.title;
        editProjectInput.value = data.project;

        editDiv.setAttribute('class','editDiv');
        editTitleInput.setAttribute('class','editTitleInput');
        editProjectInput.setAttribute('class','editProjectInput');
        editBtn.setAttribute('class','editCloseBtn');

        editDiv.append(editTitleP, editTitleInput, editProjectP, editProjectInput, editBtn);

        this.listDiv.append(listItemDiv, editDiv);
    },
    bindToggleStatus: function (handler) {
        this.listDiv.addEventListener('click',function (e) {
            if(e.target.className === 'listBottomBtn'){
                handler(e.target.parentElement.id);
                e.target.classList.add('complete');
                e.target.innerHTML = 'Completed';
            }
        });
    },
    bindDeleteItem: function(handler) {
       this.listDiv.addEventListener('click',function (e) {
           if(e.target.className === 'delIcon'){
               handler(e.target.parentElement.id);
               e.target.parentElement.remove();
           }
       });
    },
    editTemplate : function () {
       this.listDiv.addEventListener('click',function (e) {
           if(e.target.className === 'editIcon'){
               e.target.parentElement.classList.add('hide');
               e.target.parentElement.nextSibling.classList.add('show');
           }
       }.bind(this));
    },
    bindEditInputBtn: function (handler) {
        this.listDiv.addEventListener('click', function (e) {
            if(e.target.className === 'editCloseBtn'){
                let target = e.target.parentElement;
                handler({
                    id: target.previousSibling.id,
                    title: target.getElementsByClassName('editTitleInput')[0].value,
                    project: target.getElementsByClassName('editProjectInput')[0].value,
                });
                target.classList.remove('show');
                target.previousSibling.classList.remove('hide');
            }
        });
    },
    updateEditData: function (editData) {
        let editTarget = document.getElementById(editData.id);
        editTarget.getElementsByClassName('listTitle')[0].textContent = editData.title;
        editTarget.getElementsByClassName('listProject')[0].textContent = editData.project;
    }*!/
};*/
export { TodoView };