import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { forgotPassword_req } from '../../api/user-login/user.login.api'

const ResetPasswordPage = () => {
    const location = useLocation()
    const pathLocation = location.pathname.slice(26)
    useEffect(() => {
        const changeResetPassword = async () => {
            try {
                const resetChangePassord = await forgotPassword_req()
            }
            catch (e) { }
        }
        changeResetPassword()
    }, [])
    return (


        <div>

        </div>
    )
}

export default ResetPasswordPage