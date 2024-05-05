import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "../Loading";


function Service() {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/form/forms");

        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date Of Booking
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Category Of Vehicle
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Bike Model
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Type Of Service
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Customer Complaints
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {formData.map((data, index) => (
                <tr key={index}>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {data.dateofbooking}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {data.categoryofvehicle}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {data.bikemodel}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">{data.year}</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {data.typeofservice}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {data.customerComplaints
                      ? data.customerComplaints.join(", ")
                      : ""}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span
                      className={
                        data.status === "pending"
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {data.status === "pending" ? "Pending" : "Approved"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Service;
