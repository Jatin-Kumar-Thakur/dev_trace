import React, { useEffect, useState } from 'react'

const Switcher1 = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
        updateButtonStatus();
    }

    const getButtonStatus = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/setting/auto-delete`);
            const data = await response.json();
            setIsChecked(data.autoDeleteLogs);
        } catch (error) {
            console.log("Error while getting Delete log button status ", error)
        }
    }
    const updateButtonStatus = async () => {
        const newValue = !isChecked;
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/setting/auto-delete`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ enable: newValue }) // ✅ matches backend

            });
            if (response.ok) {
                setIsChecked(newValue);
            }
        } catch (error) {
            console.log("Error while updating DeleteAutoButton status ", error);
        }
    }
    useEffect(() => {
        getButtonStatus();
    }, [])

    return (
        <div className='flex justify-between items-center'>
            <label className='flex cursor-pointer select-none items-center'>
                <span className='text-red-500 text-md'>Auto-delete old logs (7 days)</span>
                <div className='relative'>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='sr-only'
                    />
                    {/* Track */}
                    <div className={`block h-8 w-14 rounded-full transition-colors duration-300 ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}></div>

                    {/* Toggle dot */}
                    <div
                        className={`dot absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300
              ${isChecked ? 'translate-x-6' : 'translate-x-1'}
            `}
                    ></div>
                </div>
            </label>
        </div>
    )
}

export default Switcher1
