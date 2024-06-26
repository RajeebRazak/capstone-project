import React from "react";
import { Link } from "react-router-dom";
import { Pricelist } from "../Price/Pricelist";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

function Cusprice() {
  return (
    <div>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Price List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Pricelist.map((service) => (
              <div key={service.id} className="max-w-sm mx-auto">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    className="w-full h-64 object-cover ml-0"
                    src={service.image}
                    alt="Service"
                  />
                  <div className="p-4">
                    <h5 className="font-bold text-lg mb-2">
                      {service.serviceType}
                    </h5>
                    {service.details && (
                      <p className="text-gray-700 mb-2">
                        {service.details.join(", ")}
                      </p>
                    )}
                    <p className="text-xl font-bold">
                      ${service.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cusprice;
