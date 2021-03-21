import React from 'react';
import { CategoriesJokes } from './CategoriesJokes';
import { OneJoke } from './OneJoke';

export class ChukNorris extends React.Component {
    state = {}

    render() {
        return <>
            <OneJoke/>
            <CategoriesJokes/>
        </>
    }
}