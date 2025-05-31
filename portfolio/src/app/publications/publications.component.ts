import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
  private readonly conferences = [{
    author : "Thanush A A, Chitra P, Kasinath J, and Surya Prakash R" ,
   title:    "Atmospheric Corrosion rate prediction of low-alloy steel using Machine Learning models",
   booktitle : "International Conference for Materials Science and Engineering (ICMSE'22)",
   year:      "2022",
   month :    "August",
   publisher : "IOPScience",
   doi :      "10.1088/1757-899X/1248/1/012050",
   url :     "https://iopscience.iop.org/article/10.1088/1757-899X/1248/1/012050"
  }]
  private readonly journals = []
}
