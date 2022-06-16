//Created an object of appmodel and stored it in app object.
const app = new AppModel();

//Added Event Listener in "new-todo" class
document.getElementsByClassName("new-todo")[0].addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        // If a todo is empty, it will not add a blank todo
        if(document.getElementsByClassName("new-todo")[0].value === "") return;
        
        //stored value of "new-todo" class
        let value = document.getElementsByClassName("new-todo")[0].value;

        //Created an item object which stores the object of todoitem
        const item = new ToDoItem(value);

        app.addTodoItem(item);
        app.render();
        console.log(app.todoCollection)
        document.getElementsByClassName("new-todo")[0].value = "";
    }
})

document.getElementById('all').addEventListener('click', () => {
    app.filterType = 'All';
    app.render();
})
document.getElementById('active').addEventListener('click', () => {
    console.log("called ")
    app.filterType = 'Active';
    app.render();
})
document.getElementById('completed').addEventListener('click', () => {
    app.filterType = 'Completed';
    app.render();
})
document.getElementById('clear-completed').addEventListener('click', () => {
    app.todoCollection = app.todoCollection.filter((item) => item.isCompleted === false);
    app.render();
})
