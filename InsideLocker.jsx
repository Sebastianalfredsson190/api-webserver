import { useEffect, useState } from 'react';
import './InsideLocker.css';
import { NavLink } from 'react-router-dom'


function InsideLocker({ setCosmetics, cosmetics, filter }) {
    const [rarity, setRarity] = useState("")

    return (
        <div>
            <div className='filter'>
                <NavLink to="/">
                    <BackButton />
                </NavLink>
                <FilterFunctions filter={filter} rarity={rarity} setCosmetics={setCosmetics} cosmetics={cosmetics} />
                <RarityBox rarity={rarity} setRarity={setRarity} />
            </div>

        </div>
    )
}

function RarityBox({ rarity, setRarity }) {


    function handleChange(e) {
        setRarity(e.target.value);
    }

    //rarity är epic här om man har valt det
    return (
        <div class='dropdown'>
            <select name="Filter" id="filter" onClick={handleChange}>
                <option value="">All rarirtys</option>
                <option>legendary</option>
                <option>epic</option>
                <option>rare</option>
                <option>uncommon</option>
            </select>
        </div>
    )
}

function SkinBox({ cosmetics }) {
    return (
        <div className='SkinBox'>
            {cosmetics.map((item, index) =>
                <div class="SkinPicture" key={index}>
                    <img style={{ width: "100px" }} src={item.images.icon} />
                </div>

            )}
        </div>
    )
}

function FilterFunctions({ cosmetics, filter, setRarity, rarity }) {
    var initialCosmetics = cosmetics.filter(item => {
        return item.type.value === filter
    })
    console.log("-------------------------------")
    console.log(rarity)
    console.log("-------------------------------")

    const [filteredCosmetics, setFilteredCosmetics] = useState(initialCosmetics)
    const [filteredRarityCosmetics, setFilteredRarityCosmetics] = useState(initialCosmetics)
    const [filteredSearchCosmetics, setFilteredSearchCosmetics] = useState(initialCosmetics)
    const [FilterSearch, setFilterSearch] = useState("")


    useEffect(() => {
        if (rarity !== "") {
            const filtered = initialCosmetics.filter(item => {
                return item.rarity.value === rarity
            })
            setFilteredRarityCosmetics(filtered)
        }
    }, [rarity]);


    useEffect(() => {
        const filtered = initialCosmetics.filter(item => item.name.toLowerCase().includes(FilterSearch.toLowerCase()));
        setFilteredSearchCosmetics(filtered);
    }, [FilterSearch]);


    useEffect(() => {
        var filtered = filteredRarityCosmetics.filter(item => {
            return item.rarity.value === rarity
        })
        filtered = filteredRarityCosmetics.filter(item => item.name.toLowerCase().includes(FilterSearch.toLowerCase()));
        setFilteredCosmetics(filtered)
    }, [filteredRarityCosmetics.length, filteredSearchCosmetics.length])


    return (
        <div className="">
            <div className='searchbar'>
                <input className='search' type="text" placeholder="Search here" onChange={(e) => {
                    setFilterSearch(e.target.value)
                }} />
            </div>
            <SkinBox cosmetics={filteredCosmetics} />
        </div>
    )
}

function BackButton() {
    return (
        <div className='backButton'>
            Back
        </div>
    )
}
export default InsideLocker;