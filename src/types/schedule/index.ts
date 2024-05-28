export type ISchedule = {
  id?: string;
  startDate: string;
  endDate: string;
};

export type IScheduleFrom = {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
};

export type IScheduleDateTime = {
  id: string;
  startDateTime: string;
  endDateTime: string;
};
