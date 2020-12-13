import React, { useState, useEffect } from 'react';
import './suggested-add-item.scss'
import { suggestedItem_req, getSuggestedItem_req } from '../../api/suggested-item/suggested-item.api';
import ButtonComponent from '../../app-components/button/button.components';
import { useIntl } from 'react-intl';

const SuggestedAddItem = () => {
    const [animate, setAnimate] = useState(false);
    const [state, setState] = useState({
        text: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [item, setItem] = useState([]);
    const intl = useIntl();

    useEffect(() => {
        const getSuggestedItem = async () => {
            try {
                const getItem = await getSuggestedItem_req();
                setItem(getItem);
            } catch (e) {
                console.log('e', e.response);
            }
        };
        getSuggestedItem()
    }, [])
    const animationBlock = () => {
        setAnimate(!animate)
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };

    const suggestedSend = () => {
        let text = state.text
        const sendText = async () => {
            try {
                const sendText = await suggestedItem_req(text);
                setState(sendText)
                setSuccess(true)
            } catch (e) {
                console.log(' error send response ', e.response);
                setError(e.response);
            }
        }
        sendText()
    }
    return (
        <div className="suggested-add-item p-2">
            <div className="suggested-item-list">
                {item && item.data
                    ? item.data.map(item =>
                        <ul>
                            <li>{item.name}</li>
                        </ul>
                    )
                    : null
                }
            </div>
            {!animate
                ? <div className="suggested-animate-one">
                    <div className="suggested-add-block" onClick={animationBlock}>
                        <span>+</span>
                    </div>
                    <ButtonComponent
                        _onClick={() => suggestedSend()}
                        text={intl.messages.Desired_product_send}
                    />
                </div>
                : <div className="suggested-animate-two">
                    <input
                        type='text'
                        name='text'
                        className="suggested-input"
                        placeholder={intl.messages.Desired_product_input}
                        value={state.text}
                        onChange={handleChange}
                    />
                    <ButtonComponent
                        _onClick={() => suggestedSend()}
                        text={intl.messages.Desired_product_button}
                        className="suggested-add"
                    />
                </div>
            }
        </div>
    )
}
export default SuggestedAddItem
