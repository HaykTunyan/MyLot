import React, { useRef, useEffect } from 'react';
import './search.scss';
import { useState } from 'react';
import { search_req } from '../../../api/search/search.api';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Search = () => {
  const [animate, setAnimate] = useState(false)
  const [state, setState] = useState({ search: '' })
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const node = useRef()
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
      [ref, handler],
    );
  };
  useOnClickOutside(node, () => setAnimate(false));
  const onClick = () => {
    setAnimate(true)
  }
  const searchAnimate = () => {
    setAnimate(!animate)
  }
  const handleChange = (event) => {
    const value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value
    });
    if (value.length > 2) {
      let search = state.search
      const searchReq = async () => {
        try {
          const searchForm = await search_req(search);
          setSubmitting(!submitting)
          setState(searchForm)
        } catch (e) {
          console.log(' error eamil response ', e.response);
          setError(e.response);
        }
      }
      searchReq()
    }
  };
  window.scrollTo(0, 0)

  return (
    <React.Fragment>
      <div className="search-block" onClick={onClick} ref={node}>
        {animate
          ? <div>
            <div className="search-animate-input">
              <input
                type="text"
                placeholder="Փնտրել"
                className="search-animate"
                name="search"
                value={state.search}
                onChange={handleChange}
              />
              {state.products ?
                <Link to={{ pathname: "/search-page", state: { props: { state } } }}>
                  <img
                    src={require('../../../assets/images/Header/icons-search.svg')}
                    alt="ICONS-SEARCH"
                    className="search"
                  />
                </Link> : null
              }
            </div>
            <div id="search-icon-div"></div>
          </div>
          :
          <NavLink to="/home">
            <img
              src={require('../../../assets/images/Header/icons-search.svg')}
              alt="ICONS-SEARCH"
              className="search"
            />
          </NavLink>
        }
      </div>
    </React.Fragment>
  )
}

export default Search