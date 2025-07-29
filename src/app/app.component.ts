import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { Child } from './child';
import { Comments } from './comments';



// @Component({
//   selector: 'app-user',
//   template: `
//     Username: {{ username }}
//   `,
// })
// export class User {
//   username = 'Umesh Basnet';
// }

// deferrable views
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
      <comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      }
    </div>
  `,
  imports: [Comments],
})

// componnet output properties

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-child (addItemEvent)="addItem($event)" />
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   imports: [Child],
// })

// // component input properties
// @Component({
//   selector: 'app-root',
//   template: `
//     <app-user name="Umesh Basnet" />
//   `,
//   imports: [User],
// })

// event handling
// @Component({
//   selector: 'app-root',
//   template: `
//     <section (mouseover)="onMouseOver()">
//       There's a secret message for you, hover to reveal:
//       {{ message }}
//     </section>
//   `,
// })


// property binding
// @Component({
//   selector: 'app-root',
//   template: `
//     <div [contentEditable]="isEditable"></div>
//   `,
// })

// for loop through an array 
// @Component({
//   selector: 'app-root',
//   template: `
//     @for(user of users; track user.id) {
//     <p>{{ user.name }}</p>
//     }
//   `,
// })




// if conditional rendering
// @Component({
//   selector: 'app-root',
//   template: `
//   @if (isServerRunning) {
//     <span>Yes, the server is running</span>
//     } @else {
//     <span>No, the server is not running</span>
//     }
//   `,
//   imports: [User],
//   styles: `
//     :host {
//       color:  #a144eb;
//     }
//   `,
// })
export class AppComponent {
  city = 'Toronto';
  isServerRunning = true;
  users = [
    { id: 0, name: 'Umesh Basnet' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
  isEditable = true;
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
