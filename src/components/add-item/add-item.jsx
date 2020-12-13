import React, { useState, useEffect } from 'react';
import './additem.scss';
import ItemFinish from './item-finish/item-finish';
import ItemCategory from './item-category/item-category';
import ItemComposeContainer from './item-compose/item-compose-container';
import { Route, Switch, Link, useRouteMatch, NavLink } from 'react-router-dom';
import { Steps } from 'antd';
import { getCategory_req } from '../../api/category-list/category.list.api';
import { useIntl } from 'react-intl';

const AddItem = () => {
  const [category, setCategory] = useState([]);
  const intl = useIntl();
  const [current, setCurrent] = useState(3);

  useEffect(() => {
    const categoryList = async () => {
      try {
        const categoryList = await getCategory_req();
        if (categoryList && categoryList.data) {
          setCategory(categoryList);
        }
      } catch (e) {
        console.log('e', e.response);
      }
    };
    categoryList();
  }, []);

  const { Step } = Steps;
  const categoryId = localStorage.category;
  let { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <div className="additem-container py-5">
        <div className="container">
          <nav class="nav py-4">
            <NavLink to="/home" className="text-dark mr-2">
              {intl.messages.main_page}
            </NavLink>
            <span className="lot-color">&gt;</span>
            <NavLink to="/addItem" className="active ml-2">
              {intl.messages.my_lotPage.step_button}
            </NavLink>
          </nav>
          <div className="p-4 additem-card card">
            <Steps current={current}>
              <Step
                title={<Link to={`${url}`}>{intl.messages.Category}</Link>}
              />
              <Step
                title={
                  <Link to={`${url}/compose`}>{intl.messages.About_lot}</Link>
                }
              />
              <Step
                title={
                  <Link to={`${url}/finish`}>{intl.messages.Conclude}</Link>
                }
              />
            </Steps>
            <Switch>
              <Route exact path={path}>
                <ItemCategory data={category} />
              </Route>
              <Route exact path={`${path}/category`}>
                <ItemCategory data={category} current={current} />
              </Route>
              <Route exact path={`${path}/compose/:id`}>
                <ItemComposeContainer current={current} />
              </Route>
              <Route path={`${path}/finish/:id`}>
                <ItemFinish current={current} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddItem;
