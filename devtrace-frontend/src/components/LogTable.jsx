import React from 'react';

const LogTable = ({ logs, onSelect }) => {
    return (
        <table className="w-full bg-[#1C1C1C] border border-[#2A2A2A] text-[#FFFFFF]">
            <thead>
                <tr className="bg-[#141414] text-left">
                    <th className="p-2">Method</th>
                    <th className="p-2">URL</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Time</th>
                    <th className="p-2">TimeStamp</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log, i) => (
                    <tr key={i} className="border-t border-[#2A2A2A] hover:bg-[#2A2A2A] cursor-pointer" onClick={() => onSelect(log)}>
                        <td className="p-2">{log.method}</td>
                        <td className="p-2">{log.url}</td>
                        <td className="p-2">{log.statusCode}</td>
                        <td className="p-2">{log.duration}ms</td>
                        <td className="p-2">{
                            new Date(log.timestamp).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: true,
                            })
                        }</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default LogTable;