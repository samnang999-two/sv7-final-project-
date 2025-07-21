import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Home} from './home/home';
import {Banner} from './banner/banner';
import {Product} from './product/product';
import {Contact} from './contact/contact';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet,FormsModule,Home,Banner,Product,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pronang-project-final');
}
