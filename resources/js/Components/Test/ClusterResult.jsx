import React from "react";

const ClusterResult = ({ cluster }) => {
  const clusterText = Array.isArray(cluster) ? cluster.join(", ") : cluster;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-gray text-white p-6">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-primary-orange mb-6">
          Risultato del Test
        </h1>
        <p className="text-2xl text-white mb-4">
          Il tuo cluster dominante è:
        </p>
        <p className="text-3xl font-bold text-primary-orange capitalize">
          {cluster}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-3 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition"
        >
          Rifai il Test
        </button>
      </div>
    </div>
  );
};

export default ClusterResult;