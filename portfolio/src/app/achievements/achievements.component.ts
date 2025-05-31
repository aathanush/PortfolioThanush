import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  private readonly achievements = [
  {
    "year": 2021,
    "title": "Elite",
    "event": "Data Science for Engineers NPTEL Exam",
    "details": ""
  },
  {
    "year": 2022,
    "title": "Published and Presented Conference Paper",
    "event": "ICMSE’22",
    "details": ""
  },
  {
    "year": 2022,
    "title": "Winner",
    "event": "Smart India Hackathon (SIH)",
    "details": ""
  },
  {
    "year": 2022,
    "title": "Winner",
    "event": "BAICONF’22 Datathon",
    "details": "Organized by IIM‑B and ASI"
  },
  {
    "year": 2023,
    "title": "Among Top 6",
    "event": "DePondFi’23 Challenge",
    "details": "Held as part of NCVPRIPG 2023 (National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics)"
  },
  {
    "year": 2024,
    "title": "Consolation Prize",
    "event": "FAER Scholar Awards",
    "details": "For the academic year 2024–25"
  }
]

}
