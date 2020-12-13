import React, { useState } from 'react';
import './item-category.scss';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

const ItemCategory = ({ data }) => {

    const [animate, setAnimate] = useState(false)
    const [dropFirstAnimation, setDropFirstAnimation] = useState(0)
    const [dropSecondAnimation, setDropSecondAnimation] = useState(0)
    const intl = useIntl();
    const [current, setCurrent] = useState(0)

    const onClick = () => {
        setAnimate(!animate)
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
        return <React.Fragment />
    }

    return (
      <React.Fragment>
        <div className="category_block_add">
          <h3 className="category-banner mt-3">
            {intl.messages.add_item.step_one_title}
          </h3>
          <div className="category_list_add">
            <div className="category_list">
              {data.data.map((item) => (
                <div key={item.id}>
                  <div className="list_item">
                    <div className="list_item_drop">
                      <div className="">
                        {item.child.data && item.child.data.length ? (
                          <p
                            onClick={() => dropFirst(item.id)}
                            className="item_child"
                          >
                            {item.name}
                          </p>
                        ) : (
                          <NavLink to={'/addItem/compose/' + item.id}>
                            {item.name}
                          </NavLink>
                        )}
                      </div>
                    </div>
                    {dropFirstAnimation === item.id &&
                      item.child &&
                      item.child.data &&
                      item.child.data.length &&
                      item.child.data.map((child) => (
                        <div
                          key={child.id}
                          className={
                            dropFirstAnimation
                              ? 'drop_first'
                              : 'drop_first_none'
                          }
                        >
                          <div className="child_drop">
                            <div className="">
                              {child.child.data && child.child.data.length ? (
                                <div onClick={() => dropSecond(child.id)}>
                                  {child.name}
                                </div>
                              ) : (
                                <NavLink to={'addItem/compose/' + child.id}>
                                  {child.name}
                                </NavLink>
                              )}
                            </div>
                          </div>
                          {dropSecondAnimation === child.id &&
                            child.child &&
                            child.child.data &&
                            child.child.data.length &&
                            child.child.data.map((item) => (
                              <div
                                key={item.id}
                                className={
                                  dropSecondAnimation
                                    ? 'drop_second'
                                    : 'drop_second_none'
                                }
                              >
                                <div className="drop-second-text">
                                  <NavLink to={'addItem/compose/' + item.id}>
                                    {item.name}
                                  </NavLink>
                                </div>
                              </div>
                            ))}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default ItemCategory