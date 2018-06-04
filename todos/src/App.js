import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';


class App extends Component {
  render() {
    return (
      <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input class="new-todo" placeholder="What needs to be done?" autofocus/>
			</header>
			{/* <!-- This section should be hidden by default and shown when there are todos --> */}
			<section class="main">
				<ul class="todo-list">
					{/* <!-- These are here just to show the structure of the list items --> */}
					{/* <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
					<li class="completed">
						<div class="view">
							<input class="toggle" type="checkbox" checked/>
							<label>Taste JavaScript</label>
							<button class="destroy"></button>
						</div>
					</li>
					<li>
						<div class="view">
							<input class="toggle" type="checkbox"/>
							<label>Buy a unicorn</label>
							<button class="destroy"></button>
						</div>
					</li>
				</ul>
			</section>
			{/* <!-- This footer should hidden by default and shown when there are todos --> */}
			<footer class="footer">
				{/* <!-- This should be `0 items left` by default --> */}
				<span class="todo-count"><strong>0</strong> item(s) left</span>
				{/* <!-- Remove this if you don't implement routing --> */}
				{/* <!-- Hidden if no completed items are left ↓ --> */}
				<button class="clear-completed">Clear completed</button>
			</footer>
		</section>
    );
  }
}

export default App;
