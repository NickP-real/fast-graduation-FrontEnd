export type Program = {
  end_year: number;
  program_id: number;
  program_name_en: string;
  program_name_th: string;
  start_year: number;
};

export type ProgramPlan = {
  id?: number;
  min_credit: number;
  name_en: string;
  name_th: string;
  program_id: number;
};

export type Course = {
  consent_dept: 0 | 1;
  credit: number;
  description_en: string;
  description_th: string;
  id: number;
  min_year: number | null;
  name_en: string;
  name_th: string;
  term_1: 0 | 1;
  term_2: 0 | 1;
  term_s: 0 | 1;
};
