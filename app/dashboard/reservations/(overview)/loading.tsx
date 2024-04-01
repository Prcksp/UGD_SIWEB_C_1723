import { ReservationsSkeleton, ReservationsTableSkeleton } from "@/app/ui/skeletons";
 
export default function Loading() {
  return (
    <>
      <ReservationsSkeleton />
      <ReservationsTableSkeleton />
    </>
  );
}