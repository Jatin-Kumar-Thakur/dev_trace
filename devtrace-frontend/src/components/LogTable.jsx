import React from 'react';

const LogTable = ({ logs, onSelect }) => {
    return (
        <table className="w-full bg-gray-500 border">
            <thead>
                <tr className="bg-gray-500 text-left">
                    <th className="p-2">Method</th>
                    <th className="p-2">URL</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Time</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log, i) => (
                    <tr key={i} className="border-t hover:bg-gray-400 cursor-pointer" onClick={() => onSelect(log)}>
                        <td className="p-2">{log.method}</td>
                        <td className="p-2">{log.url}</td>
                        <td className="p-2">{log.statusCode}</td>
                        <td className="p-2">{log.duration}ms</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LogTable;