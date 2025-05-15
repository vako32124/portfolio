import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

  

}
