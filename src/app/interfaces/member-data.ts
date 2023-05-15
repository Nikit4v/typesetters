export enum WorkStatus {
  Planned,
  InProgress,
  Done
}


export interface MemberWork {
  ordinal: number;
  name: string | null;
  status: WorkStatus
}


export interface MemberData {
  name: string
  works: MemberWork[]
}
