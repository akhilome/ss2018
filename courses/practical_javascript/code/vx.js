/* 
* 	Author: Kizito Akhilome
* 	Author URL: https://akhilo.me/
* 	Based on: Practical Javascript (https://watchandcode.com/p/practical-javascript)	
* 
*	These code snnippets fulfil the requirements
*	poised by the Practical JS course from version
*	3 onwards.
*
* 	Naming Conventions: v[x]r[y], where:
*
*	v = Version, r = Requirement, 
* 	x & y = variable numerical values.
*
* 	For instance, v3r4 means: Version 3, Requirement 4.
*/


var todoList = {
	todos: [], // v3r1: It should store the todos array on an object
	displayTodos: function() {
		/* deprecated

		// v3r2: It should have a displayTodos method
		console.log("Current Todos: ", this.todos);

		*/
		console.log("Current Todos:");
		if (this.todos.length === 0) {
			console.log("Woot! Nothing to do."); // v5r2: .displayTodos should tell you if .todos is empty
		} else {
			for (var i = 0; i < this.todos.length; i++) {
				// v5r3: .displayTodos should show completed
				if (this.todos[i].completed === true) {
					console.log("(x) ", this.todos[i].todoText /* v5r1: .displayTodos should show .todoText */);
				} else {
					console.log("( ) ", this.todos[i].todoText);
				};
			};
		};
	},
	addTodo: function(todo) {
		/* deprecated

		// v3r3: It should have an addTodo method
		this.todos.push(todo);

		*/

		// v4r1: todoList.addTodo should add objects
		this.todos.push({
			todoText: todo,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(index, todo) {
		/* deprecated

		// v3r4: It should have a changeTodo Method
		this.todos[index] = todo;

		*/

		// v4r2: todoList.changeToddo should change the todoText property
		this.todos[index].todoText = todo;
		this.displayTodos();
	},
	deleteTodo: function (index) {
		// v3r5: It should have a deleteTodo method
		this.todos.splice(index, 1);
		this.displayTodos();
	},
	toggleCompleted: function(index) {
		// v4r3: todoList.toggleCompleted should change the Completed property
		var todo = this.todos[index];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		// v6r1: if everything's true, make everything false
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			};
		};

		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			};
		} else { // v6r2: Otherwise, make everything true
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			};
		};

		this.displayTodos();
	}
}