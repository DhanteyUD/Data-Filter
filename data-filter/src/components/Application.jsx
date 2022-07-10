/** @format */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Spinner from './Spinner';
import './Application.css';

const APPLICATION_QUERY = `
query {
  launchesPast(limit: 30) {
    mission_name
    details
    id
    launch_date_local
    launch_year
    links {
      wikipedia
    }
    launch_site {
      site_name
    }
  }
}
`;

function Application() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [launches, setLaunches] = useState([]);
  const url = 'https://api.spacex.land/graphql/';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.post(url, {
          query: APPLICATION_QUERY,
        });
        const data = result.data.data.launchesPast;
        setLaunches(data);
        setError(error);
        console.log(data);
      } catch (error) {
        setError(error);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="search-bar">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input className="search-input" type="text" required />
          <span className="search-label">Search</span>
        </div>
        <p className="filter-by">Filter by:</p>
        <div className="filter-btns">
          <button className="filter-btn">Name</button>
          <button className="filter-btn">Date</button>
          <button className="filter-btn">Year</button>
          <button className="filter-btn">Site</button>
          <button className="filter-btn ">Details</button>
        </div>
        {error ? (
          <div className="error-msg">
            {error.message} <span className="error-icon">☹️</span>
          </div>
        ) : loading === true ? (
          <Spinner />
        ) : (
          <div className="body">
            <h1>Date</h1>
            {launches.map((launch) => (
              <div className="data-div" key={launch.id}>
                <div className="data-id">{launch.id}</div>
                <div className="data">
                  <h2 className="data-name">{launch.mission_name}</h2>
                  <p className="data-year">
                    {launch.launch_year}
                    <span className="data-date">
                      {new Date(launch.launch_date_local).toDateString()}
                    </span>
                  </p>
                  <p className="data-details">{launch.details}</p>
                  <p className="data-link">
                    Link -{' '}
                    <a href={launch.links.wikipedia}>
                      {launch.links.wikipedia}
                    </a>
                  </p>
                  <p className="data-site">
                    Site - {launch.launch_site.site_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Application;
