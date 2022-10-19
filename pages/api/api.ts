import axios from "axios";
import {
  CategoryAbbr,
  Course,
  EnrollCourse,
  Program,
  ProgramPlan,
  SuggestionResult,
} from "model/model";
import Session from "supertokens-auth-react/recipe/session";
import { formatCookie } from "utils/format_cookie";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

Session.addAxiosInterceptors(api);

export const fetcher = (url: string) => api.get(url).then((res) => res.data);

export class Api {
  static cookies: string;
  static cookiesHeader = { headers: { Cookie: "" } };

  static setCookie(cookie: Partial<{ [key: string]: string }>) {
    this.cookies = formatCookie(cookie);
    this.cookiesHeader.headers.Cookie = this.cookies;
  }

  static async programBrowse() {
    const {
      data: { data: datas },
    } = await api.get<{ data: Program[] }>("/admin/program/browse", {
      headers: {
        Cookie: this.cookies,
      },
    });
    return datas;
  }

  // Program Plan
  static async programPlanBrowse(id: number) {
    const {
      data: { data: datas },
    } = await api.get<{ data: ProgramPlan[] }>(
      `/admin/program_plan/browse/${id}`,
      {
        headers: {
          Cookie: this.cookies,
        },
      }
    );
    return datas;
  }

  static async programPlanAdd(plan: ProgramPlan) {
    const {
      data: { status: res },
    } = await api.post("/admin/program_plan/add", plan);
    return res;
  }

  // Course
  static async courseBrowse() {
    const {
      data: { data: datas },
    } = await api.get<{ data: Course[] }>(`/admin/course/browse`, {
      headers: {
        Cookie: this.cookies,
      },
    });

    return datas;
  }

  static async courseFind(courseId: number) {
    const {
      data: { data: course },
    } = await api.get<{ data: Course }>(
      `/admin/course/edit/${courseId}`,
      this.cookiesHeader
    );

    return course;
  }

  static async courseEdit(courseId: number, body: Course) {
    const {
      data: { status: status },
    } = await api.post(`/admin/course/edit/${courseId}`, body);

    return status;
  }

  static async courseBrowseFromPlan() {
    const {
      data: {
        data: { available_courses: datas, categories: categories },
      },
    } = await api.get<{
      data: { available_courses: Course[]; categories: CategoryAbbr[] };
    }>("/student/browse_course", this.cookiesHeader);

    return { datas, categories };
  }

  static async postUpdateEnrollment(body: EnrollCourse[]) {
    const res = await api.post("/student/update_enrollment", body);
    return res;
  }

  static async getUpdateEnrollment() {
    const {
      data: { data: datas },
    } = await api.get<{ data: EnrollCourse[] }>(
      "/student/update_enrollment",
      this.cookiesHeader
    );
    return datas;
  }

  static async getSuggestion() {
    const {
      data: { term_1, term_2 },
    } = await api.get<SuggestionResult>("/student/suggest", this.cookiesHeader);

    return { term_1, term_2 };
  }
}

export async function catchErrorRedirectLogin<T>(func: () => T) {
  try {
    return await func();
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
}
