import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../src';

const Item = Layout.Item;

const node = <Layout>
    
    <Layout.Item
      id="1"
      left={lib => {
        const width = lib.page().width - lib.get('1').width - lib.get('2').width - 200;
        return parseInt(width / 2);
      }}
      style={{
        background: 'red',
      }}
    >
      <div style={{
        width: 200,
        height: 200,
      }} />
        
    </Layout.Item>


    <Layout.Item
      left={lib => {
        const width = lib.get('1').left + 200 + 200;
        return parseInt(width);
      }}
      id="2"
    >
      <div style={{
        width: 200,
        height: 80,
        background: 'yellow'
      }} />

    </Layout.Item>


    <Layout.Item
      left={lib => {
        const pageWidht = lib.page().width;
        const width1 = (pageWidht - 200 - 200 - 200) / 2;
        const width = (pageWidht - width1 - 200 - 300) / 2 + width1 + 200;
        return width

      }}
      id="2"
      top="100"
    >
      <div style={{
        width: 300,
        height: 80,
        background: 'orange'
      }} />

    </Layout.Item>

</Layout>;
  

ReactDOM.render(node, document.getElementById('root'));
