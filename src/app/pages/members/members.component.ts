import {Component} from '@angular/core';
import {MemberData, WorkStatus} from "../../interfaces/member-data";
import {MemberCardComponent} from "../../components/member-card/member-card.component";

const repeat = (arr: Array<any>, n: number) => [].concat(...Array(n).fill(arr));

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  members: MemberData[] = repeat([
    {
      name: "Diabl",
      works: [
        {
          ep_ordinal: 1,
          ep_name: null,
          rel_name: "Tonikaku Kawaii",
          status: WorkStatus.Done
        },
        {
          ep_ordinal: 1,
          ep_name: null,
          rel_name: "Isekai wa Smartphone to Tomo ni. 2",
          status: WorkStatus.InProgress
        },
        {
          ep_ordinal: 2,
          ep_name: null,
          rel_name: "Tonikaku Kawaii",
          status: WorkStatus.InProgress
        },
        {
          ep_ordinal: 2,
          name: null,
          rel_name: "Isekai wa Smartphone to Tomo ni. 2",
          status: WorkStatus.Planned
        }
      ]
    },
    {
      name: "Neri",
      works: [
        {
          ep_ordinal: 1,
          ep_name: "Кафе",
          rel_name: "Kawaisuki Crisis",
          status: WorkStatus.Done
        },
        {
          ep_ordinal: 1,
          ep_name: null,
          rel_name: "Lycoris Recoil",
          status: WorkStatus.Done
        },
        {
          ep_ordinal: 2,
          ep_name: "Доброе утро!",
          rel_name: "Kawaisuki Crisis",
          status: WorkStatus.InProgress
        },
        {
          ep_ordinal: 2,
          name: null,
          rel_name: "Lycoris Recoil",
          status: WorkStatus.Planned
        }
      ]
    },
  ], 8);
}
