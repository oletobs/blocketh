import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
		<header>
			<nav class="navbar navbar-inverse">
				<div class="navbar-header">
					<a href="/" class="navbar-brand"> Angular 4 app</a>
				</div>
			</nav>
		</header>
		
		<main>
			<div class="row">
				<div class="col-sm-4">
					<ul class="list-group users-list">
						<li class="list-group-item" *ngFor="let user of users">
							User id: {{user.id}}
							Firstname:{{user.name}}
							Username: {{user.username}}
						</li>
					</ul>
				</div>
				
				<div class="col-sm-8">
					<div class="jumbotron">
						<h1>Welcome!</h1>
						<p> {{ message }} </p>
					</div>
				</div>
			</div>
		</main>

		
		<footer class="text-center">
			lala footer
		</footer>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]
})
export class AppComponent {
	message = 'Hello';
	users = [
		{ id: 25, name: 'Tor', username: 'tore'},
		{ id: 26, name: 'Per', username: 'peer'},
		{ id: 27, name: 'Lisa', username: 'lisa1337'}
	]
	
}