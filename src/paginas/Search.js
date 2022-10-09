import "../styles/Search.css";
import Arrow from '../assets/imgs/arrow-left.svg';
import SearchIcon from '../assets/imgs/search.svg';

const Search = () => {
    return (
        <nav>
            <div Class="input-group mb-3">
            <img Class="input-group-text" className="left-arrow" src={Arrow} alt="left arrow" />
                <input type="text" Class="form-control" placeholder="Pesquise o medicamento" aria-describedby="basic-addon1 basic-addon2" />
                <img Class="input-group-text" className="left-arrow" src={SearchIcon} alt="left arrow" />
            </div>
        </nav>
    );
};

export default Search;