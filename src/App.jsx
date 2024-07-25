import React from 'react';
import useFetch from './hooks/useFetch';
import LoadingScreen from './LoadingScreen';

const App = () => {
  const { data, isInitialLoading, isDataLoading } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (isInitialLoading || isDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="p-4 bg-black">
      <h1 className="text-4xl text-white font-bold mb-4 text-center">Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center align-middle">
        {data.map((item) => (
          <div key={item.id} className="bg-black  overflow-hidden border border-white">
            <div className='flex flex-col justify-center align-middle'>
              <div className='p-20 w-1/4 h-auto flex justify-center align-middle ml-24 mt-8 bg-purple-500 border-emerald-950 border text-white '>600x600</div>
                <h2 className="ml-6 mt-5 mr-6 text-white font-semibold mb-2">{item.title}</h2>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default App;
