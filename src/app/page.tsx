import Card from "@/components/Card";
import Navbar from "@/components/Navbar/Navbar";
import TopInfoBar from "@/components/Navbar/TopInfoBar";

export default function Home() {
  return (
    <main className="pb-32">
      <TopInfoBar />
      <Navbar />
      <section className="min-h-[420px] h-full  w-full bg-[url('../assets/images/heroBg.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center flex-col text-white">
        <p className="text-[100px] font-tenor uppercase text-white">sale</p>
        <p className="uppercase font-semibold text-center">up to 75% off</p>
        <button className="mt-10 text-sm">DISCOVER</button>
      </section>
      <section className="grid grid-cols-4 mt-20 px-2 gap-2 mb-20">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <div className="flex items-center justify-center w-full ">
        <button className="border py-2 px-9">SHOW MORE</button>
      </div>
    </main>
  );
}
