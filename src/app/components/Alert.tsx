import React, { useEffect, useState } from 'react'

type AlertType = 'success' | 'error' | 'warning' | 'info'
function Alert({ message, title, type }: { message: string, title: string, type: AlertType }) {
    const [colorClasses, setColorClasses] = useState('')
    useEffect(() => {
        switch (type) {
            case 'success':
                setColorClasses('text-green-400 border border-green-400')
                break
            case 'error':
                setColorClasses('text-red-600 border border-red-600')
                break
            case 'warning':
                setColorClasses('text-yellow-500 border border-yellow-500')
                break
            case 'info':
                setColorClasses('text-blue-400 border border-blue-400')
                break
            default:
                setColorClasses('text-green-400 border border-green-400')
        }
    }, [])


    return (

        <div className={`p-4 mb-4 h-40 text-base rounded-lg bg-gray-800 ${colorClasses}`} >
            <span className="font-medium">{title}!</span> {message}
        </div>
    )
}

export default Alert