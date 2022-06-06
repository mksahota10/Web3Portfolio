import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="w-screen h-screen flex-col items-center justify-center relative bg-primary pb-20">

      {/*Navigation Bar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2x1 flex items-center">
          <p className="text-lg text-slate-200 font-medium">Manpreet Kaur</p>
        </div>
      </nav>




     <div className="relative" id="home">
       <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" />
       
     </div>
    </div>
  );
}

export default App;
