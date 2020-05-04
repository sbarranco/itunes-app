# iTunes API index

This SPA allow you to search albums in the iTtunes Store and bookmark them.
This project has been developed for a Frontend technical assignment.

## Screenshoots

![alt text](./screenshot-search.png "Search" )

![alt text](./screenshot-mark.png "Bookmarks" )

## Functional Description

The application contains two sections: First, the **Search section** where contains a search bar to find music in iTunes. Users can search by name, album, song, etc. but only will display by album (with album name, artist name and collection artwork). Secondly, the **BookMark** section, where contains all albums bookmarked by user.

It will display 20 results per page, but there is a pagination component that allows to check more 20 results.


## Technologies

The front-end is created using ReactJS with Hooks(specially mention the Context Hook to store data) and Typescript, 
Project instaled with "create-react-app". Styled compiled with SASS.
Also, the following complementary libraries are used:

"react-toastify" -- notify

 "react-spinners" -- loading spinner

### Components and Pages

- Components:
    - AlbumCard
    - Search
    - SearchResults
    - BookMarks
    - commons:
        - Tabs
        - Notifications
        - Pagination
        - Spinner

## Author

[Silvia Barranco](https://github.com/sbarranco)