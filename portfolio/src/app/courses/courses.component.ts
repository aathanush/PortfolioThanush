import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  private readonly courses = [
  {
    "title": "Advanced C# Programming in .NET Core",
    "issuer": "EDUCBA",
    "issueDate": "May 2025",
    "credentialId": "D4FVJBNRL2X6"
  },
  {
    "title": "Google IT Automation with Python",
    "issuer": "Google",
    "issueDate": "May 2025",
    "credentialId": "96ALZ26P8E2C",
    "skills": ["Python (Programming Language)", "Google Cloud Platform (GCP)"]
  },
  {
    "title": "Introduction to Git and GitHub",
    "issuer": "Google",
    "issueDate": "Dec 2024",
    "credentialId": "PA55W5IC77ZV"
  },
  {
    "title": "Troubleshooting and Debugging Techniques",
    "issuer": "Google",
    "issueDate": "Dec 2024",
    "credentialId": "95M95CBE0VTG",
    "skills": ["Problem Solving"]
  },
  {
    "title": "Using Python to Interact with the Operating System",
    "issuer": "Google",
    "issueDate": "Dec 2024",
    "credentialId": "0ASOSV69KXUK",
    "skills": ["Python (Programming Language)"]
  },
  {
    "title": "Angular for Front End Engineers",
    "issuer": "Codio",
    "issueDate": "Jul 2024",
    "credentialId": "6MK6YG5T7CBH",
    "skills": ["Angular"]
  },
  {
    "title": "Crash Course on Python",
    "issuer": "Google",
    "issueDate": "Jul 2024",
    "credentialId": "FAX5ZMM8KVPG"
  },
  {
    "title": "Introduction to Data Visualization in Qlik Sense",
    "issuer": "Coursera Instructor Network",
    "issueDate": "Jul 2024",
    "credentialId": "DB99WWWQ43JC"
  },
  {
    "title": "Terraform Fundamentals",
    "issuer": "Google Cloud",
    "issueDate": "Jun 2024",
    "credentialId": "NYVDFVJQHUCY",
    "skills": ["Google Cloud Platform (GCP)"]
  },
  {
    "title": "Creating New BigQuery Datasets and Visualizing Insights",
    "issuer": "Google Cloud",
    "issueDate": "Feb 2024",
    "credentialId": "365VDQXLZGQ7",
    "skills": ["Looker (Software)", "SQL", "Google BigQuery", "Google Cloud Platform (GCP)"]
  },
  {
    "title": "Exploring and Preparing your Data with BigQuery",
    "issuer": "Google Cloud",
    "issueDate": "Feb 2024",
    "credentialId": "6D97WRJM8FBD",
    "skills": ["Google Cloud Platform (GCP)"]
  },
  {
    "title": "Linear Algebra for Machine Learning and Data Science",
    "issuer": "DeepLearning.AI",
    "issueDate": "Feb 2024",
    "credentialId": "DQSQ5TBDAXMY"
  },
  {
    "title": "Working with BigQuery",
    "issuer": "Coursera Project Network",
    "issueDate": "Feb 2024",
    "credentialId": "V7EB97DHCUBX",
    "skills": ["Google Cloud Platform (GCP)"]
  },
  {
    "title": "The Science of Well-Being",
    "issuer": "Coursera",
    "issueDate": "Jul 2023",
    "credentialId": "FHEDSGRXK9BP",
    "skills": ["Wellness"]
  },
  {
    "title": "Certificate of Participation in The Tri-NIT Hackathon",
    "issuer": "Unstop",
    "issueDate": "Apr 2023",
    "credentialId": "c7151e10-e440-40ba-b672-08e2d873446e",
    "skills": ["Machine Learning", "Teamwork", "Python", "Django"]
  },
  {
    "title": "Introduction to AI",
    "issuer": "University of Helsinki",
    "issueDate": "Jan 2023"
  },
  {
    "title": "CC",
    "issuer": "Spoken Tutorial"
  },
  {
    "title": "C++",
    "issuer": "Spoken Tutorial"
  },
  {
    "title": "Data Science for Engineers",
    "issuer": "NPTEL"
  },
  {
    "title": "Getting started with Robotic Process Automation",
    "issuer": "Automation Anywhere"
  },
  {
    "title": "Intermediate Machine Learning",
    "issuer": "Kaggle"
  },
  {
    "title": "Intro to Machine Learning",
    "issuer": "Kaggle"
  },
  {
    "title": "Java",
    "issuer": "Spoken Tutorial"
  },
  {
    "title": "Python",
    "issuer": "Kaggle"
  },
  {
    "title": "Time Management by Ankur Warikoo",
    "issuer": "WebVeda"
  }
]


}
