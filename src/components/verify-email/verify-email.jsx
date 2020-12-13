import React from 'react';
import './verify-email.scss';

const VerifyEmail = () => {
    const token = localStorage.token

    return (
        <div className="verify">
            <div className="verify_block">
                <p className="verify_block_text">
                    Շնորհակալություն Ձեր ապրանքը ավելացված է , այն կհաստատվի 24 ժամվա րնթացքում
                </p>
            </div>
        </div>
    )
}
export default VerifyEmail