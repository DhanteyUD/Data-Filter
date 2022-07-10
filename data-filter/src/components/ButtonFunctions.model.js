/** @format */

// Name filter function
export const nameHandleSearch = (
  e,
  allData,
  setHeader,
  setFilteredData,
  setDataLength
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Name');
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
  setDataLength
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Date');
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
  setDataLength
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Year');
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
  setDataLength
) => {
  const searchTerm = e.target.value;
  const filteredData = allData
    .filter((item) => {
      setHeader('Site');
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
export const detailHandleSearch = (allData, setHeader, setFilteredData) => {
  const filteredData = allData
    .sort((a, b) => {
      return a.mission_name > b.mission_name ? -1 : 1;
    })
    .reverse();
  setFilteredData(filteredData);
  setHeader('A-Z');
};
