import { useQuery } from "@tanstack/react-query";
import { searchEmployees } from "../api/securityApi";

export const useSearchEmployees = (filters, enabled) => {
  return useQuery({
    queryKey: ["searchEmployees", filters],

    queryFn: () => searchEmployees(filters),

    enabled,
  });
};
