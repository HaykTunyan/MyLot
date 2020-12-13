import React, { useState, useEffect } from 'react';
import Favorites from './favorites';
import { getWishesList_req } from '../../api/wish/wish.api';
import { NavLink } from "react-router-dom";
import { useIntl } from 'react-intl';

const FavoritesContainer = () => {
    const [wish, setWish] = useState([])
    useEffect(() => {
        const WishesList = async () => {
            try {
                const Wish = await getWishesList_req();
                if (Wish && Wish.data) {
                    setWish(Wish);
                }
            } catch (e) {
                console.log('e', e.response);
            }
        };
        WishesList()
    }, []);
    const intl = useIntl();

    return (
        <div className="container">
            {wish.length === 0
                ? <div className="my-5">
                    <nav class="nav py-4">
                        <NavLink to="/home" className="text-dark mr-2">
                            {intl.messages.main_page}
                        </NavLink>
                        <span>&gt;</span>
                        <NavLink to="/favoritesContainer" className="active ml-2">
                            {intl.messages.favorites.favorites_title}
                        </NavLink>
                    </nav>
                    <div className="text-center py-5 card font-18">
                        {intl.messages.favorites.dont_title}
                    </div>
                </div>
                : <Favorites data={wish} />
            }
        </div>
    )
}

export default FavoritesContainer