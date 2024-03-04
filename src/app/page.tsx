import Signin from "./auth/signin/page";
import CardDataStats from "./components/Cards";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        {/* <Signin /> */}
        {/* Refactor this brick  */}
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
