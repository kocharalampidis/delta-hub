import Signin from "./auth/signin/page";
import DefaultLayout from "./components/Layouts/DefaultLayout";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Signin />
      </DefaultLayout>
    </>
  );
}
