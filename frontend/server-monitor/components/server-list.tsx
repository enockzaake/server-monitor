import Link from "next/link"

const ServerList = () => {
  return (
<div className="container flex flex-col p-2 sm:p-4 text-gray-800">
	<h2 className="ml-[100px] mb-4 text-2xl font-semibold">All servers</h2>
	<div className="overflow-x-auto">
		<table className="min-w-[1300px] text-xs mx-auto">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Server name</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3">Amount</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody>

        {/* <Link href="/server-details" prefetch={false} className=""> */}
        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transition-all">
					<td className="p-3">
						<p>Socila media app</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3">
						<p>$15,792</p>
					</td>
					<td className="p-3">
						<span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
							<span>Pending</span>
						</span>
					</td>
				</tr>
        {/* </Link> */}


        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transition-all">
					<td className="p-3">
						<p>Socila media app</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3">
						<p>$15,792</p>
					</td>
					<td className="p-3">
						<span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
							<span>Pending</span>
						</span>
					</td>
				</tr>

        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transition-all">
					<td className="p-3">
						<p>Socila media app</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3">
						<p>$15,792</p>
					</td>
					<td className="p-3">
						<span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
							<span>Pending</span>
						</span>
					</td>
				</tr>

        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transition-all">
					<td className="p-3">
						<p>Socila media app</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3">
						<p>$15,792</p>
					</td>
					<td className="p-3">
						<span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
							<span>Pending</span>
						</span>
					</td>
				</tr>

        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transition-all">
					<td className="p-3">
						<p>Socila media app</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3">
						<p>$15,792</p>
					</td>
					<td className="p-3">
						<span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
							<span>Pending</span>
						</span>
					</td>
				</tr>

        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transition-all">
					<td className="p-3">
						<p>Socila media app</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3">
						<p>$15,792</p>
					</td>
					<td className="p-3">
						<span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
							<span>Pending</span>
						</span>
					</td>
				</tr>

        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 hover:bg-gray-200 hover:cursor-pointer transition-all">
					<td className="p-3">
						<p>Socila media app</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3">
						<p>$15,792</p>
					</td>
					<td className="p-3">
						<span className="px-3 py-1 font-semibold rounded-md text-gray-50 bg-blue-600">
							<span>Pending</span>
						</span>
					</td>
				</tr>
        

			</tbody>
		</table>
	</div>
</div>
  )
}

export default ServerList
