import './Modal.css';
import ReactDOM from "react-dom";

export default function Modal({children}) {
    return ReactDOM.createPortal((
        <div className={'modal-backdrop'}>
            <div className={'modal'} style={{
                border: '4px solid',
                borderColor: '#ff4500',
                textAlign: 'center'
            }}>
                {children}
            </div>
        </div>
    ), document.body)
}

