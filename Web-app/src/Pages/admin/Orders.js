import React from "react";
import AdminHead from "../../components/admin/AdminHead";

const Orders = () => {
  return (
    <>
      <div className="flex">
        <AdminHead />
        <div className="w-full">
          <div className="flex justify-center">
            <div className="w-3/4">
              <div className="flex justify-between">
                <div className="flex">
                  <h1>
                    <span className="text-2xl font-bold">Orders</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
