import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
 
  about : string = `
   Hello! My name is Vako Chologauri, and Im a junior web developer from Georgia.
    I really enjoy working with websites and computers. I started learning web development 
    because I love technology and wanted to build things on the web.

    I know HTML, CSS, JavaScript, TypeScript, and Angular. I can create clean and responsive 
    websites and web apps. I also use tools like GitHub for version control, GitLens to 
    understand code better, and Postman for testing APIs.

    I enjoy learning new things, solving problems, and getting better every day. 
    Im always excited to try new projects and grow as a developer.
  `

  projectLinks = [
    {
      url: 'https://jocular-nougat-a23544.netlify.app/',
      img: 'hotel2.png',
      title: 'Hotel booking website2',
      description: 'A hotel booking website built in Angular using typescript here you can register/login and book the room you want and then cancel the booking if you mmind tho'
    },
    {
      url: 'https://boisterous-cajeta-f8cc81.netlify.app',
      img: 'hotel1.png',
      title: 'Hotel booking website1',
       description: 'A hotel booking website built in html, css and javscript here you can filter room by price and also book the room you want'
    },
    {
      url: 'https://celadon-baklava-5cc6fb.netlify.app/',
      img: 'colour.png',
      title: 'Colour guessing game',
       description: 'this is a color guessing game this game contains multiple round first round is the easiest and the second round gets harder the goal is to get through as many rounds as you can built in html css and javascript'
    },
    {
      url: 'https://stirring-gaufre-9d3761.netlify.app/',
      img: 'todolist.png',
      title: 'Todo list website',
       description: 'this is a todo list a webstide where you cand add things that u need to do its a do to list built in html css and javascript'
    },
    {
      url: 'https://exquisite-torrone-3ebb4f.netlify.app/',
      img: 'calculator.png',
      title: 'Calculator website',
       description: 'this is a simple calculator website where you can do simple math built in html css and javascript'
    },
    {
      url: 'https://splendorous-torte-0c9865.netlify.app/',
      img: 'fastfood.png',
      title: 'Fast food website',
       description: 'this is just a siple fast food app that i built when i didnt had much knowldege this is my first project built in html css and javascript'
    }
  ];
  
  

}
