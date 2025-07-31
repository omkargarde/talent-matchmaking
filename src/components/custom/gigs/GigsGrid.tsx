import { useAppSelector } from "@/stores/store";
import { getGigs } from "@/stores/gigs/gigsSlice";

export default function GigsGrid() {
  const gigs = useAppSelector(getGigs);

  return (
    <>
      {gigs.map((gig) => (
        <div key={gig.id} className="gigs-grid">
          {gig.city}
        </div>
      ))}
    </>
  );
}
