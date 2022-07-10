/** @format */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Spinner from './Spinner';
import {
  nameHandleSearch,
  dateHandleSearch,
  yearHandleSearch,
  siteHandleSearch,
  detailHandleSearch,
} from './ButtonFunctions.model';
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
  const [allData, setAllData] = useState([]);
  const [dataLength, setDataLength] = useState('');
  const [header, setHeader] = useState('');
  const [filteredData, setFilteredData] = useState(allData);

  const url = 'https://api.spacex.land/graphql/';

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filteredData = allData
      .filter((item) => {
        setHeader('All');
        return item.mission_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => {
        return a.launch_date_local > b.launch_date_local ? -1 : 1;
      })
      .reverse();
    setFilteredData(filteredData);
    setDataLength(
      filteredData.length > 1
        ? `${filteredData.length} results found`
        : `${filteredData.length} result found`
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.post(url, {
          query: APPLICATION_QUERY,
        });
        const data = result.data.data.launchesPast;
        setAllData(data);
        setFilteredData(data);
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
      <button className="go-to-input">Search</button>
      <div className="container">
        <div className="search-bar">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input
            className="search-input"
            type="search"
            name="search-data"
            id="search-data"
            onChange={
              header === 'Name'
                ? (e) =>
                    nameHandleSearch(
                      e,
                      allData,
                      setHeader,
                      setFilteredData,
                      setDataLength
                    )
                : header === 'Date'
                ? (e) =>
                    dateHandleSearch(
                      e,
                      allData,
                      setHeader,
                      setFilteredData,
                      setDataLength
                    )
                : header === 'Year'
                ? (e) =>
                    yearHandleSearch(
                      e,
                      allData,
                      setHeader,
                      setFilteredData,
                      setDataLength
                    )
                : header === 'Site'
                ? (e) =>
                    siteHandleSearch(
                      e,
                      allData,
                      setHeader,
                      setFilteredData,
                      setDataLength
                    )
                : (e) => handleSearch(e)
            }
            required
          />
          <label htmlFor="search-data" className="search-label">
            Search
          </label>
        </div>
        <p className="filter-by">Filter by:</p>
        <div className="filter-btns">
          <button
            className="filter-btn"
            onClick={(e) =>
              nameHandleSearch(
                e,
                allData,
                setHeader,
                setFilteredData,
                setDataLength
              )
            }
          >
            Name
          </button>
          <button
            className="filter-btn"
            onClick={(e) =>
              dateHandleSearch(
                e,
                allData,
                setHeader,
                setFilteredData,
                setDataLength
              )
            }
          >
            Date
          </button>
          <button
            className="filter-btn"
            onClick={(e) =>
              yearHandleSearch(
                e,
                allData,
                setHeader,
                setFilteredData,
                setDataLength
              )
            }
          >
            Year
          </button>
          <button
            className="filter-btn"
            onClick={(e) =>
              siteHandleSearch(
                e,
                allData,
                setHeader,
                setFilteredData,
                setDataLength
              )
            }
          >
            Site
          </button>
          <button
            className="filter-btn"
            onClick={() =>
              detailHandleSearch(allData, setHeader, setFilteredData)
            }
          >
            A-Z
          </button>
        </div>
        {error ? (
          <div className="error-msg">
            {error.message} <span className="error-icon">☹️</span>
          </div>
        ) : loading === true ? (
          <Spinner />
        ) : (
          <div className="body">
            <h1>{header}</h1>
            <h2 className="search-length">{dataLength}</h2>
            {filteredData.map((launch) => (
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
                    <a className="data-link-a" href={launch.links.wikipedia}>
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
