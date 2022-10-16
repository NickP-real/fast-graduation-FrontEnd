export type Program = {
  end_year: number;
  program_id: number;
  program_name_en: string;
  program_name_th: string;
  start_year: number;
};

export type ProgramPlan = {
  id: number;
  min_credit: number;
  name_en: string;
  name_th: string;
  program_id: number;
};
