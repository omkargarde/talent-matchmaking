import GigsGrid from "@/components/custom/gigs/GigsGrid";

export default function GigsPage() {
  return (
    <>
      <section className="m-6">
        <h1 className="text-3xl md:text-2xl">Gigs</h1>
        <GigsGrid />
      </section>
    </>
  );
}
