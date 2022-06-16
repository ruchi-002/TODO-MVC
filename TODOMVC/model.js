class ToDoItem {
    constructor(label) {
      this.label = label;
      this.isCompleted = false;
    }
  
    toggle() {
      this.isCompleted = !this.isCompleted;
    }
  }
  
  class AppModel {
    constructor() {
      this.todoCollection = [];
      this.filterType = "All";
    }
  
    addTodoItem(todoItem) {
      this.todoCollection.push(todoItem);
    }
  
    //To delete a todo of a particular index
    delete(index) {
      this.todoCollection.splice(index, 1);
      this.render();
    }
  
    //To count total todos
    count() {
      let array = this.todoCollection.filter((item) => !item.isCompleted);
      return array.length;
    }
  
    render() {
      // To empty the array so that the previous todo should not get added with new todo
      document.getElementById("ul").innerHTML = "";
  
      for (let i in this.todoCollection) {
        let li = document.createElement("li");
        li.className = "todostyle";
  
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
  
        let todoLabel = document.createElement("label");
        todoLabel.innerHTML = this.todoCollection[i].label;
  
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        deleteButton.className = "dltbtn";
  
        // To delete a todo
        deleteButton.addEventListener("click", () => {
          this.delete(i);
        });
  
        // To make a completed todo striked after rendering again
        if (this.todoCollection[i].isCompleted) {
          li.style.textDecoration = "line-through";
          checkbox.setAttribute("checked", true); //To marked the checkbox checked after re rendring page
        }
  
        // To strike a done todo
        checkbox.addEventListener("change", () => {
          if (checkbox.checked) li.style.textDecoration = "line-through";
          else li.style.textDecoration = "none";
          this.todoCollection[i].toggle();
          this.render();
        });
  
        li.appendChild(checkbox);
        li.appendChild(todoLabel);
        li.appendChild(deleteButton);
  
        // Filter of 'All', 'Active', 'Completed'
        if (app.filterType === "All") {
          document.getElementById("ul").appendChild(li);
        } else if (
          app.filterType === "Active" &&
          !this.todoCollection[i].isCompleted
        ) {
          document.getElementById("ul").appendChild(li);
          console.log(this.todoCollection);
          console.log(li);
        } else if (
          app.filterType === "Completed" &&
          this.todoCollection[i].isCompleted
        ) {
          document.getElementById("ul").appendChild(li);
        }
  
        document.getElementById("count").innerHTML = this.count();
      }
    }
  }
  