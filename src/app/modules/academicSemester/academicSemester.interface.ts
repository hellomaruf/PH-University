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
export type TAcademicSemesterCode = "01" | "02" | "03";
export type TAcademicSemester = {
  name: "Aumumn" | "Summar" | "Fall";
  code: TAcademicSemesterCode;
  year: String;
  startMonth: TMonth;
  endMonth: TMonth;
};
