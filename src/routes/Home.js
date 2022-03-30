const Home = () => {
  return (
    <>
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
        {/*Metric Card*/}
        <div className="border border-gray-800 rounded shadow p-2">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded p-3 bg-green-600"><i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-400">Total Revenue</h5>
                    <h3 className="font-bold text-3xl text-gray-600">$3249 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
        {/*/Metric Card*/}
    </div>
    </>
  )
}

export default Home