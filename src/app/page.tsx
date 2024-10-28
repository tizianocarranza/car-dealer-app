import Cars from "./ui/cars";
import Loader from "./ui/loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-screen flex flex-col gap-20 pt-10 items-center">
      <h1 className="text-4xl font-bold">Car Dealer App</h1>
      <Suspense fallback={<Loader />}>
        <Cars />
      </Suspense>
    </main>
  );
}
