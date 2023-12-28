import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar/index"
export default function MinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="" >
<div className="h-[5vh] ">

      <Navbar  />
</div>
      <div className="flex fixed w-full h-[95vh]">
        <Sidebar/>
        <div className=" lg:w-[88%]  w-full overflow-y-auto">
      {children}

        </div>

      </div>
    </main>
  )
}
