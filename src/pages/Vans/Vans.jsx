import {Link, useLoaderData, useSearchParams} from "react-router-dom";
import { getVans } from '../../api';

export function loader(){
    return getVans(null);
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const vans = useLoaderData();

    const filterBy = searchParams.get("type");
    const filteredVans = filterBy ? vans.filter(van => van.type === filterBy) : vans;

    //making handleFilterChange generic so we can use it in the entire application
    //and we can move it to some utility file
    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key);
            }else{
                prevParams.set(key, value);
            }
            return prevParams;
        });
        
    }
    const vanList = filteredVans.map((van, key) => (
                        <div className="product" key={key}>
                            <Link 
                                to={van.id} 
                                state={{
                                    search : `?${searchParams.toString()}`,
                                    type : filterBy
                                }}
                            >
                                <img src={van.imageUrl} alt=""/>
                                <div>
                                    <p className="nom">{van.name}</p>
                                    <p className="prix">{van.price}<span>/day</span></p>
                                </div>
                                <button className={van.type}>{van.type}</button>
                            </Link>
                        </div>
                    ))               

    return (
        <div className="detail-vans">
            <h1>Explore our van options</h1>
            <div className="filters">
                <div>
                    <button 
                        onClick={() => handleFilterChange("type","simple")}
                        className={`simple-btn ${filterBy === 'simple' ? 'selected' : ''}`}
                    >
                        Simple
                        </button>
                    <button 
                        onClick={() => handleFilterChange("type","luxury")}
                        className={`luxury-btn ${filterBy === 'luxury' ? 'selected' : ''}`}

                    >
                        Luxury
                        </button>
                    <button 
                        onClick={() => handleFilterChange("type","rugged")}
                        className={`rugged-btn ${filterBy === 'rugged' ? 'selected' : ''}`}

                    >
                        Rugged
                    </button>
                </div>
                {
                    searchParams.has("type") && 
                    <span 
                        className='clear-filters' 
                        onClick={() =>handleFilterChange("type", null)}
                    >
                        Clear filters
                    </span>
                }
            </div>
            <div className="products">
                {vanList}
            </div>
    </div>
    )
}