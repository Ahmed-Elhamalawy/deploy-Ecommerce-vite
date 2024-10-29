import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

const Mainlayout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      {loading ? (
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2">
          <SyncLoader color="#ff324d" />
        </span>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Mainlayout;
