
type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TAcademicSemester = {
  name: "Aumumn" | "Summar" | "Fall";
  code: "01" | "02" | "03";
  year: Date;
  startMonth: TMonth;
  endMonth: TMonth;
};
