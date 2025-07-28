import React from 'react';

const LogDetails = ({ log, onClose }) => {
    if (!log) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl">
                <h2 className="text-xl font-bold mb-4">Log Details</h2>
                <p><strong>Method:</strong> {log.method}</p>
                <p><strong>URL:</strong> {log.url}</p>
                <p><strong>Status Code:</strong> {log.statusCode}</p>
                <p><strong>Duration:</strong> {log.duration}ms</p>
                <p><strong>Timestamp:</strong> {new Date(log.timestamp).toLocaleString()}</p>
                <hr className="my-2" />
                <div>
                    <strong>Headers:</strong>
                    <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{JSON.stringify(log.headers, null, 2)}</pre>
                </div>
                <div>
                    <strong>Request Body:</strong>
                    <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{JSON.stringify(log.requestBody, null, 2)}</pre>
                </div>
                <div>
                    <strong>Response Body:</strong>
                    <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{JSON.stringify(log.responseBody, null, 2)}</pre>
                </div>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default LogDetails;