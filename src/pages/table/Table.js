
import {Button, Form, Radio, Space, Switch, Table, Typography} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import useFetch from '../../components/useFetch';
const { Text } = Typography;
  const columns = [
    {
      title: 'Buổi',
      dataIndex: 'number',
    },
    {
      title: 'Ngày dạy',
      dataIndex: 'Time',
    },
    {
      title: 'Phí dạy/ buổi',
      dataIndex: 'money',
    },
  ];

  const defaultTitle = () => 'Lớp Toán Dũng';
    const TableSche = () => {
    const [bordered, setBordered] = useState(true);
    const [size, setSize] = useState('middle');
    const [showTitle, setShowTitle] = useState(true);
    const [showHeader, setShowHeader] = useState(true);
    const [data, setData] = useState([]);
    const [rowSelection, setRowSelection] = useState({});
    const [hasData, setHasData] = useState(true);
    const [tableLayout, setTableLayout] = useState();
    const [top, setTop] = useState('none');
    const [bottom, setBottom] = useState('bottomCenter');
    const [ellipsis, setEllipsis] = useState(true);
    const handleBorderChange = (enable) => {
      setBordered(enable);
    };
   
    const handleSizeChange = (e) => {
      setSize(e.target.value);
    };
    const handleTableLayoutChange = (e) => {
      setTableLayout(e.target.value);
    };
   
    const handleEllipsisChange = (enable) => {
      setEllipsis(enable);
    };
    const handleTitleChange = (enable) => {
      setShowTitle(enable);
    };
    const handleHeaderChange = (enable) => {
      setShowHeader(enable);
    };
    const handleRowSelectionChange = (enable) => {
      setRowSelection(enable ? {} : undefined);
    };
    const handleDataChange = (newHasData) => {
      setHasData(newHasData);
    };
    const scroll = {};
    const tableColumns = columns.map((item) => ({
      ...item,
      ellipsis,
    }));
   
    const tableProps = {
      bordered,
      size,
      title: showTitle ? defaultTitle : undefined,
      showHeader,
      rowSelection,
      scroll,
      tableLayout,
    };
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:5000/list")
        setData(res.data)
      } catch(err) {
        Response.status(404)
      }
    }
    useEffect(() => {
      getdata()
    }, [])
    if (data) {
      return (
        <>
         <Button className='cre__btn' type="link" href='/create'>Tạo buổi mới</Button>  
          <Table
              {...tableProps}
              pagination={{
              position: [top, bottom],
              }}
              summary={(pageData) => {
                let totalmoeny = 0;
                pageData.forEach(({money}) => {
                  totalmoeny +=  money;
                })

                return (
                  <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={3}><p style={{fontWeight: 'bolder', margin: 0}}>Tổng học phí</p></Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                        <Text>{totalmoeny}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                )
              }}
              columns={tableColumns}
              dataSource={hasData ? data : []}
              scroll={scroll}
          />
            
        </>
    );
    }
    
  };

export default TableSche;