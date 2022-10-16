import axios from "axios";
import { Program, ProgramPlan } from "model/model";
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

  static setCookie(cookie: Partial<{ [key: string]: string }>) {
    this.cookies = formatCookie(cookie);
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
