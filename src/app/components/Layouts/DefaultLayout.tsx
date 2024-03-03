import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Page wrapper start*/}
      <div className="flex h-screen overflow-hidden bg-gray-900">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
        {/* Page wrapper end */}
      </div>
    </>
  );
}

export default DefaultLayout;
