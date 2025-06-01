import { Component } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  imports: [],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css'
})
export class QualificationsComponent {

  readonly qualifications = [
  {
    "institution": "Thiagarajar College of Engineering",
    "degree": "BTech in Computer Science and Business Systems",
    "location": "Madurai, Tamil Nadu, India",
    "completionYear": 2024,
    "gradingSystem": "CGPA",
    "marks": "8.57 / 10"
  },
  {
    "institution": "Kendriya Vidyalaya",
    "degree": "10th Grade",
    "location": "Nagercoil, Kanniyakumari, Tamil Nadu",
    "completionYear": 2018,
    "gradingSystem": "Out of 500",
    "marks": "87.4 / 100"
  },
  {
    "institution": "Kendriya Vidyalaya",
    "degree": "12th Grade",
    "location": "Nagercoil, Kanniyakumari, Tamil Nadu",
    "completionYear": 2020,
    "gradingSystem": "Out of 500",
    "marks": "94.2 / 500"
  }
]


}
