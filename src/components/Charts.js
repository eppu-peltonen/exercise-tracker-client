const Charts = ({exercises, user}) => {

  // Get users exercises
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)

  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2">
      <div className="w-full md:w-1/2 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-800 border border-gray-700 rounded shadow">
              <div className="border-b border-gray-700 p-3">
                  <h5 className="font-bold uppercase text-gray-500">Graph</h5>
              </div>
              <div className="p-5">
              {/* TÄHÄN CHART */}
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-800 border border-gray-700 rounded shadow">
              <div className="border-b border-gray-700 p-3">
                  <h5 className="font-bold uppercase text-gray-500">Graph</h5>
              </div>
              <div className="p-5">
                {/* TÄHÄN CHART */}
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-800 border border-gray-700 rounded shadow">
              <div className="border-b border-gray-700 p-3">
                  <h5 className="font-bold uppercase text-gray-500">Graph</h5>
              </div>
              <div className="p-5">
                {/* TÄHÄN CHART */}
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-800 border border-gray-700 rounded shadow">
              <div className="border-b border-gray-700 p-3">
                  <h5 className="font-bold uppercase text-gray-500">Graph</h5>
              </div>
              <div className="p-5">
                {/* TÄHÄN CHART */}
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          {/*Template Card*/}
          <div className="bg-gray-800 border border-gray-700 rounded shadow">
              <div className="border-b border-gray-700 p-3">
                  <h5 className="font-bold uppercase text-gray-500">Graph</h5>
              </div>
              <div className="p-5">
    
              </div>
          </div>
          {/*/Template Card*/}
      </div>
    </div>
  )
}

export default Charts