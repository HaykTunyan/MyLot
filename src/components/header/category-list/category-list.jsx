import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './category-list.scss';
import { useIntl } from 'react-intl';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { categorySlug_req } from '../../../api/category/category.slug.api';
import { PRODUCT_REDUCER } from '../../../redux/itemReducer';
import { CHANGE_LANGUAGE } from '../../../redux/langReducer';
import { setCookie } from '../../../helpers/cookie.helpers';
import { language } from '../../../redux/action/lang.action';

const CategoryList = ({
    data,
    open,
    setOpen,
    drop,
    setDrop,
    dropSecondAnimation,
    dropFirstAnimation,
    setDropFirstAnimation,
    setDropSecondAnimation,
    closeGorcnker,
    setCloseGorcnker
}) => {
    const [animate, setAnimate] = useState(false)
    const [slugCategory, setSlugCategory] = useState([])
    const [product, setProduct] = useState([])

    const items = useSelector(state => state.itemsReducer)
    let history = useHistory()
    const dispatch = useDispatch()
    const intl = useIntl()

    const onClick = () => {
        setAnimate(!animate)
    }
    const down = () => {
        setDrop(!drop)
    }
    const gorcnkererner = () => {
        setCloseGorcnker(!closeGorcnker)
    }

    const changeLanguage = (lang) => {
        dispatch(language(lang))
    }
    const slugRequest = (slug) => {
        const upSlugCategoryProducts = async () => {
            try {
                const categorySlugList = await categorySlug_req(slug);
                dispatch({ type: PRODUCT_REDUCER, payload: categorySlugList })
                setSlugCategory(categorySlugList);
                setOpen(!open)
                setDropFirstAnimation(0)
                setDropSecondAnimation(0)
                setDrop(!drop)
                history.push({
                    pathname: '/slug/' + categorySlugList.category.data.slug
                })
            } catch (e) {

            }
        };
        upSlugCategoryProducts();
    }
    const dropFirst = (id) => {
        if (id === dropFirstAnimation) {
            setDropFirstAnimation(0)
        } else {
            setDropFirstAnimation(id)
        }
    }
    const dropSecond = (id) => {
        if (id === dropSecondAnimation) {
            setDropSecondAnimation(0)
        } else {
            setDropSecondAnimation(id)
        }
    }
    if (!data || !data.data) {
        return null
    }

    return (
        <React.Fragment>
            <div className="menu-button" open={open} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id={!open ? "category_block_none" : "category_block"} >
                <div className="list-block">
                    <div className="language_menu">
                        <h4 className="language_name">{intl.messages.languages}</h4>
                        <div className="language_img">
                            <img
                                onClick={() => changeLanguage(1)}
                                src={require('../../../assets/images/Language/armenia.png')}
                                alt="ARMENIA"
                            />
                            <img
                                onClick={() => changeLanguage(2)}
                                src={require('../../../assets/images/Language/russia.png')}
                                alt="RUSSIA"
                            />
                            <img
                                src={require('../../../assets/images/Language/english.png')}
                                alt="ENGLISH"
                                onClick={() => changeLanguage(3)}
                            />
                        </div>
                    </div>
                    <div className="category">
                        <h4 className={drop ? "category_name" : "category-name-drop"} onClick={() => down()}>
                            ԿԱՏԵԳՈՐԻԱՆԵՐ
                        </h4>
                        <div className={drop ? "category_list" : "category_list_none"}>
                            {data.data.map(item =>
                                <div key={item.id}>
                                    <div className="list_item">
                                        <div className="list_item_drop">
                                            <ul className="nav flex-column">
                                                {item.child.data && item.child.data.length
                                                    ?
                                                    <li className="nav-item  link_item" onClick={() => dropFirst(item.id)}>
                                                        <a className="nav-link text-white">{item.name}</a>
                                                    </li>
                                                    :
                                                    <li className="nav-item link_item" onClick={() => slugRequest(item.slug)}>
                                                        <a className="nav-link text-white">{item.name}</a>
                                                    </li>
                                                }
                                            </ul>
                                            {/* <div>
                                                {item.child.data && item.child.data.length
                                                    ? 
                                                    <p className="" onClick={() => dropFirst(item.id)}>
                                                        {item.name}
                                                    </p>
                                                    : 
                                                    <p className="link_item" onClick={() => slugRequest(item.slug)}>
                                                        {item.name}
                                                    </p>
                                                }
                                            </div> */}
                                        </div>
                                        {dropFirstAnimation === item.id
                                            && item.child
                                            && item.child.data
                                            && item.child.data.length
                                            && item.child.data.map(child =>
                                                <div key={child.id} className={dropFirstAnimation ? "drop_first" : 'drop_first_none'} >
                                                    <div className="child_drop">
                                                        <ul className="nav flex-column">
                                                            {child.child.data &&
                                                                child.child.data.length
                                                                ?
                                                                <li className="nav-item  link_item" onClick={() => dropSecond(child.id)}>
                                                                    <a className="nav-link text-white">{child.name}</a>
                                                                </li>
                                                                :
                                                                <li className="nav-item link_item py-1" onClick={() => slugRequest(child.slug)}>
                                                                    <a className="nav-link text-white">{child.name}</a>
                                                                </li>
                                                            }
                                                        </ul>
                                                        {/* <div>
                                                            {child.child.data &&
                                                                child.child.data.length
                                                                ? 
                                                                <div onClick={() => dropSecond(child.id)}>
                                                                    {child.name}
                                                                </div>
                                                                : 
                                                                <div className="link_item py-1" onClick={() => slugRequest(child.slug)}>
                                                                    {child.name}
                                                                </div>
                                                            }
                                                        </div> */}
                                                    </div>
                                                    {dropSecondAnimation === child.id
                                                        && child.child
                                                        && child.child.data
                                                        && child.child.data.length
                                                        && child.child.data.map(item =>
                                                            <div key={item.id} className={dropSecondAnimation ? "drop_second" : 'drop_second_none'} >
                                                                <div className="link_item py-1 " onClick={() => slugRequest(item.slug)} open={open}>
                                                                    {item.name}
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                            )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        {drop ? null :
                            <div>
                                <div className={closeGorcnker ? 'gorcnker-mb' : 'about-us'} onClick={() => gorcnkererner()} closeGorcnker={closeGorcnker} setCloseGorcnker={setCloseGorcnker}>
                                    <div className="about-us-text">
                                        Գործընկերներ
                                    </div>
                                    {closeGorcnker
                                        ? <div className="gorcnker-block py-2">
                                            <div className="gorcnker-text">Բանկեր</div>
                                            <div className="gorcnker-text">Խանութներ</div>
                                            <div className="gorcnker-text">Օպերատորներ</div>
                                        </div>
                                        : null
                                    }
                                </div>
                                <div className="about-us" open={open} onClick={() => setOpen(!open)}>
                                    <NavLink to="/about_us" className="about-us-text">
                                        ՄԵՐ ՄԱՍԻՆ
                                    </NavLink>
                                </div>
                                <div className="contact-us" open={open} onClick={() => setOpen(!open)}>
                                    <NavLink to="/contact_us"
                                        className="contact-us-text"
                                        open={open}
                                        onClick={
                                            () => setOpen(!open),
                                            () => setDropSecondAnimation(0),
                                            () => setDropFirstAnimation(0)
                                        }
                                    >
                                        ՀԵՏԱԴԱՐՁ ԿԱՊ
                                    </NavLink>
                                </div>
                                <div className="contact-us" open={open} onClick={() => setOpen(!open)}>
                                    <NavLink to="/help_center" className="contact-us-text">
                                        ՕԳՆՈՒԹՅՈՒՆ
                                    </NavLink>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CategoryList