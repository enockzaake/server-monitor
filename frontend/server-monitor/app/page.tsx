import TestComponent from "@/components/test"

async function getServerData(){
  const res = await fetch("http://localhost:2000")

  return res.json()
}

const page = async () => {
  const data = await getServerData()
  return (
    <div className="">
      <p>FROM SERVER {data}</p>
      <div>AI Server monitor and analytics</div>
      <TestComponent/>
    </div>
  )
}

export default page