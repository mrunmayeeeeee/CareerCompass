import { Component } from '@angular/core';
import { LoginComponent } from '../../components/ui/login/login.js'; 
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header.js'; 
import { Footer } from '../../components/footer/footer.js'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,LoginComponent,Header,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
