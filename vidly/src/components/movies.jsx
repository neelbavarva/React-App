import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './common/searchbox';

class Movies extends Component {
    state = { 
        movies : [],
        genres: [],
        pageSize : 4,
        currentPage : 1,
        searchQuery: "",
        selectedGenre: null,
        sortColumn:{ path :'title', order:'asc'}
    };

    componentDidMount() {
        const genres = [{_id:"",name:'AllGenres'}, ...getGenres()]
        this.setState({movies: getMovies(), genres: genres});
    }

    handleGenreSelect = genre =>{
       this.setState({selectedGenre:genre, searchQuery: "", currentPage: 1});
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m =>m._id !== movie._id);
        this.setState({movies});
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1});
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index]={...movies[index]};
        movies[index].liked=!movies[index].liked;
        this.setState({movies});
    };

    handlePageChange = page => {
        this.setState({currentPage:page});
    };

    handleSort = sortColumn => {
        
        this.setState({sortColumn});
    };

    getPageddata = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;

        if (searchQuery) {
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        }

        else if (selectedGenre && selectedGenre._id) {
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);
        }

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);
        return { totalCount: filtered.length, data: movies };
    };

    

    render() { 
        const {length: count} = this.state.movies;
        const{pageSize,currentPage, movies:allMovies, selectedGenre, sortColumn, searchQuery} = this.state;

        if(count===0 ) 
            return <h6 className="m-3">There are no movies in the database</h6>
        
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(
            m=>m.genre._id===selectedGenre._id
        ):allMovies;

        const sorted= _.orderBy(filtered,[sortColumn.path], [sortColumn.order]);
        const movies =paginate(sorted,currentPage,pageSize);
        return ( 

            <div>
                 <h6 className="m-4">Showing {filtered.length} movies in the database</h6>
            
            <div className="row">
            <div className="col-2 m-4">
                    <ListGroup 
                        selectedItem={this.state.selectedGenre}
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect} />
            </div>
            <div className="col">
            <Link to="/movies/new"
                className="btn btn-primary"
                style={{marginBottom: 20}}
            >New Movie</Link>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <MoviesTable
                movies={movies}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                sortColumn={sortColumn}
            />

            <div className="m-3">
            <Pagination currentPage={currentPage} itemsCount ={filtered.length}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
            />
            </div>
            </div> 
            </div>
            
        </div>

        );
    }
}
 
export default Movies ;

