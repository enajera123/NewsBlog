import Dashboard from "./components/Dashboard";
import NewItem from "./components/NewItem";
import SmallPicture from "./components/SmallPicture";

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Dashboard />
        <NewItem />
        <SmallPicture />
      </div>
    </section>
  );
}
