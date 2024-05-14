
import "@/styles/cube.css";

const Loading = () => {
 

  return  (
    <div className="bg-background h-screen w-screen flex items-center justify-center">
      <div className="cube-loader">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          <span style={{ "--i": 0 } as any} className="cube-span"></span>
          <span style={{ "--i": 1 } as any} className="cube-span"></span>
          <span style={{ "--i": 2 } as any} className="cube-span"></span>
          <span style={{ "--i": 3 } as any} className="cube-span"></span>
        </div>
      </div>
    </div>
  ) 
}

export default Loading;