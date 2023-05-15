import {Component, Input} from '@angular/core';
import { MemberData, WorkStatus } from "../../interfaces/member-data";

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  // @ts-ignore
  @Input data: MemberData


  convertStatus(status_enum: WorkStatus) {
    switch (status_enum) {
      case WorkStatus.Planned:
        return "Planned"
      case WorkStatus.InProgress:
        return "In Progress"
      case WorkStatus.Done:
        return "Done"
    }
  }

  selectBackground(status_enum: WorkStatus) {
    switch (status_enum) {
      case WorkStatus.Done:
        return 'hover:bg-green-950'
      case WorkStatus.InProgress:
        return 'hover:bg-yellow-950'
      case WorkStatus.Planned:
        return "hover:bg-gray-800"
    }
  }
}
