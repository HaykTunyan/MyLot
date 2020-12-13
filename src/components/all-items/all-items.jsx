import React, { useEffect } from 'react';
import './all-items.scss';
import AllItemsFilter from './all-items-filter/all-items-filter';
import AuctionItem from './auction-item/auction-item';
import { useSelector, useDispatch } from 'react-redux';
import { categorySlug_req } from '../../api/category/category.slug.api';
import { useParams } from 'react-router-dom';
import { PRODUCT_REDUCER } from '../../redux/itemReducer';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';
import NextRight from '../../assets/images/icon/right-arrow.svg';

const AllItems = (props) => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.itemReducer);
  const category = useSelector((state) => state.itemReducer);
  const intl = useIntl();
  const itemLink = category.category;

  useEffect(() => {
    const slugCategory = async () => {
      try {
        const categorySlugList = await categorySlug_req(slug);
        dispatch({ type: PRODUCT_REDUCER, payload: categorySlugList });
      } catch (e) {
        console.log('e', e.response);
      }
    };
    slugCategory();
  }, []);

  return (
    <React.Fragment>
      <div className="p-4 AllItems">
        <div className="auction_item container-fluid">
          <nav class="nav py-4">
            <NavLink to="/home" className="text-dark">
              {intl.messages.main_page}
            </NavLink>
            <img src={NextRight} alt="RIGHT-ARROW" className="mx-2" />
            <NavLink to="/slug" className="active">
              {intl.messages.Category}
            </NavLink>
          </nav>
          <div className="row">
            <div className="col-12 col-lg-3 col-xl-2">
              <AllItemsFilter props={item} state={slug} />
            </div>
            <div className="col-12 col-lg-9 col-xl-10 category-card">
              <AuctionItem data={item.products} props={category} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllItems;
