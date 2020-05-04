import React from 'react';
import './styles/main.scss';
import { Tabs } from './components/commons/Tabs';
import Search from './components/Search';
import BookMarks from './components/BookMarks';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer autoClose={5000} />
      <header className="header">
        <h1 className="header__title">Itunes App Index</h1>
      </header>
      <Tabs>
        <Tabs.Tab label="search">Search</Tabs.Tab>
        <Tabs.Tab label="bookmarks">BookMarks</Tabs.Tab>
        <Tabs.Panel label="search">
          <Search />
        </Tabs.Panel>
        <Tabs.Panel label="bookmarks">
          <BookMarks />
        </Tabs.Panel>
      </Tabs>

    </>
  );
}

export default App;
