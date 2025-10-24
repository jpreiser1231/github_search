import {useEffect, useState} from 'react'
import './App.css'

function App()
{
    const [val, search] = useState("126")
    const [username, setUsername] = useState<{login:string, avatar_url:string}[]>([]);
    useEffect(() => {
        fetch("https://api.github.com/search/users?q=" + val + "+in:login")
            .then((response) => response.json())
            .then((data) => {
                setUsername(data.items);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, [val]);
return <>
    <div id="search-whole">
        <input id="search-bar" placeholder="Type here to search"></input>
        <button id="search-button" onClick={() => {
            const x = (document.getElementById("search-bar") as HTMLInputElement).value;
            search(x)
        }}>Search
        </button>
    </div>

    {
        username.map((item, index) =>
            <div id="img-and-name" key={index}>
                <img id="profile-picture" src={item.avatar_url}/>
                <text id="username-text"> {item.login}</text>
            </div>)
    }

</>
}

export default App
