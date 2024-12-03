import { useLocale } from "next-intl";
import { fetcher } from "./client";
import { API_ENDPOINTS } from "./endpoints";
import { StrapiResponse, NavBarLink } from "./types";

export const getNavBarLinks = async (): Promise<
  StrapiResponse<NavBarLink[]>
> => {
  return fetcher<StrapiResponse<NavBarLink[]>>(API_ENDPOINTS.NAV_LINKS);
};
