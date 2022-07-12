/** @format */

// Name filter function
export const nameHandleSearch = (
  e,
  allData,
  setHeader,
  setFilteredData,
  setDataLength,
  setHash
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Name');
      setHash('mission_name');
      return item.mission_name.toLowerCase().includes(searchTerm.toLowerCase());
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

// Date filter function
export const dateHandleSearch = (
  e,
  allData,
  setHeader,
  setFilteredData,
  setDataLength,
  setHash
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Date');
      setHash('launch_date_local');
      return new Date(item.launch_date_local)
        .toDateString()
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

// Year filter function
export const yearHandleSearch = (
  e,
  allData,
  setHeader,
  setFilteredData,
  setDataLength,
  setHash
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Year');
      setHash('launch_year');
      return item.launch_year.includes(searchTerm);
    })
    .sort((a, b) => {
      return a.launch_year > b.launch_year ? -1 : 1;
    })
    .reverse();
  setFilteredData(filteredData);
  setDataLength(
    filteredData.length > 1
      ? `${filteredData.length} results found`
      : `${filteredData.length} result found`
  );
};

// Site filter function
export const siteHandleSearch = (
  e,
  allData,
  setHeader,
  setFilteredData,
  setDataLength,
  setHash
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Site');
      setHash('launch_site');
      return item.launch_site.site_name
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

// Detail filter function
export const detailHandleSearch = (
  allData,
  setHeader,
  setFilteredData,
  setHash
) => {
  const filteredData = allData
    .sort((a, b) => {
      return a.mission_name > b.mission_name ? -1 : 1;
    })
    .reverse();
  setFilteredData(filteredData);
  setHeader('A-Z');
  setHash('mission_name');
};
