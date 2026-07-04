import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../api/securityApi";

export const useEmployee = (guardId) => {
  return useQuery({
    queryKey: ["employee", guardId],
    queryFn: () => getEmployeeById(guardId),
    enabled: !!guardId,
  });
};
