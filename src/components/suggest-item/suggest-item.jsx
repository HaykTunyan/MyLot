import React from 'react';
import './suggest-item.scss'
import { useIntl } from 'react-intl';

const SuggestItem = (suggest) => {
    const intl = useIntl();
    function onChange(e) {
        console.log("check value ", e)
    }
    const radioStyle = {
        display: 'block',
        height: '35px',
        lineHeight: '12px',
        color: '#000000'
    };

    return (
        <div className="p-2 suggest_items">
            <h3 className="text-center mt-3 Monsterrat_Medium suggest_items_text">
                {intl.messages.Desired_product}
            </h3>
        </div>
    );
}

export default SuggestItem