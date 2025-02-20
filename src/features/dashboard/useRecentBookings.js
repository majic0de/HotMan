import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";

import { getRecentBookings } from "../../services/apiBookings";

export function useRecentBookings() {
  const [serachParams] = useSearchParams();

  const numDays = serachParams.get("last")
    ? Number(serachParams.get("last"))
    : 7;

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isPending, data: bookings } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getRecentBookings(queryDate),
  });

  return { isPending, bookings };
}
