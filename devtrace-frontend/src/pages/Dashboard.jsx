import React, { useEffect, useState } from 'react';
import API from '../services/api';
import LogTable from '../components/LogTable';
import FilterSidebar from '../components/FilterSidebar';
import LogDetails from '../components/LogDetails';

const Dashboard = () => {
    const [logs, setLogs] = useState([]);
    const [selectedLog, setSelectedLog] = useState(null);
    const [filters, setFilters] = useState({ method: '', statusCode: '' });

    useEffect(() => {
        API.get('/logs')
            .then((res) => setLogs(res.data))
            .catch((err) => console.error('Error fetching logs:', err));
    }, []);

    useEffect(() => {
        console.log(logs);
    },
[logs])

    const filteredLogs = logs.filter((log) => {
        const methodMatch = !filters.method || log.method === filters.method;
        const statusMatch = !filters.statusCode || String(log.statusCode).includes(filters.statusCode);
        return methodMatch && statusMatch;
    });

    return (
        <div className="p-6 bg-[#0D0D0D] min-h-screen text-[#FFFFFF]">
            <h1 className="text-2xl font-bold mb-4">DevTrace Dashboard</h1>
            <div className="flex flex-col sm:flex-row">
                <FilterSidebar filters={filters} setFilters={setFilters} />
                <div className="flex-1">
                    <LogTable logs={filteredLogs} onSelect={setSelectedLog} />
                </div>
            </div>
            <LogDetails log={selectedLog} onClose={() => setSelectedLog(null)} />
        </div>
    );
};

export default Dashboard;