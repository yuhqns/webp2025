import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Button, Box, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90  },
  { field: 'title', headerName: '名稱', width: 300 },
  { field: 'location', headerName: '地點', width: 300 },
  { field: 'price', headerName: '票價', width: 150 },
];

function App() {
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6");
      const data = await res.json();
      const dataWithId = data.map((item, index) => ({
        id: index + 1,
        title: item.title,
        location: item.showInfo[0]?.location || '',
        price: item.showInfo[0]?.price || '',
      }));

      setFullData(dataWithId);
      setFilteredData(dataWithId);
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.trim();
    setSearchKeyword(keyword);

    if (keyword === "") {
      setFilteredData(fullData);
    } else {
      const filtered = fullData.filter(item => item.title.includes(keyword));
      setFilteredData(filtered);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>景點觀光展覽資訊</Typography>
      <TextField
        label="輸入關鍵字搜尋"
        variant="outlined"
        value={searchKeyword}
        onChange={handleSearch}
        sx={{ mb: 2, width: 300 }}
      />
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          pagination
        />
      </div>
    </Box>
  );
}

export default App;
