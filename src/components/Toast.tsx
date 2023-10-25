import React from 'react';
import './Toast.css'

function Toast({ message, type, onDismiss }: { message: string, type: string, onDismiss: () => void }) {
    return (
        <div className={`toast toast-${type}`}>
            {message}
            <button onClick={onDismiss}>X</button>
        </div>
    );
}

export default Toast;