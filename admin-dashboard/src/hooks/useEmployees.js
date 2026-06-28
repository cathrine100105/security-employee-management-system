import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../api/securityApi";

export const useEmployees = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
};
