import Display from "./Display";
import  { useState } from "react";
const data = [
    {name : "Google", Image: "https://storage.googleapis.com/infiflexnew.appspot.com/6295656549318656",author : "Jerry", description : "Google Cloud consists of a set of physical assets, such as computers and hard disk drives, and virtual resources, such as virtual machines (VMs), that are contained in Google's data centers around the globe. Each data center location is in a region."},
    {name : "Amazon", Image: "https://scontent.fcjb6-1.fna.fbcdn.net/v/t39.30808-6/269757833_4570037896366873_6631612107011390481_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=2PoaqRjcOB4AX9YNP_9&_nc_ht=scontent.fcjb6-1.fna&oh=00_AfAgGTQk-9HqAJxJYOjEjw76zfJY9ZeUELSXJC5RPUQUMw&oe=6527A5FF",author : "Tom",  description  : "Azure regions are placed strategically all over the world to cover as large a percentage of the potential cloud customer as possible. Regions include Central U.S., Norway West, Brazil South, West India, South Africa North, Australia East, and everywhere in between."},
];
function AddBlog() {
    const [status, setStatus] = useState(true);
    const [info, setInfo] = useState(data);
    const [searchers, setSearchValue] = useState([]);
    const [user, setUsers] = useState({});
    const [searchStatus, setSearch] = useState(true);
    function storeData(){
        let name = document.getElementById("title").value;
        let url = document.getElementById("url").value;
        let author = document.getElementById("author").value;
        let description = document.getElementById("Description").value;
        function store(){    
            return {
               name:name,
               Image:url,
               author:author,
               description: description,
            }
        }
        let obj = store();
        console.log(obj);
        setUsers(obj);
        data.push(obj);
        setInfo(data);
        setStatus(false);
    }
    function searchData(){
        let target = document.getElementById("searchText").value;
        const ans = info.filter(e => { return e.name === target;});
        setSearch(false);
        setSearchValue(ans);
        console.log(ans);
    }
    return(
        <div className="container">
            <div className="search-control">
                <center >
                    <div class="input-group mb-1">
                        <span class="input-group-text" id="basic-addon1">🔍</span>
                        <input type="text" id="searchText" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                        <button type="button" onClick={searchData} class="btn btn-primary">Search</button>
                    </div>
                    <div>
                        {searchers.map(x=><Display hidden = {searchStatus} name={x.name} Image = {x.Image} author={x.author} des = {x.description}/>)}       
                    </div>   
                </center>
            </div>
            <div className="blogName">
                 <div class="input-group input-group-sm mb-3">
                     <span class="input-group-text" id="inputGroup-sizing-sm">Blog Name: </span>
                     <input id="title" type="text" class="form-control" aria-label="Sizing example input" required aria-describedby="inputGroup-sizing-sm"></input>
                 </div>
             </div>
             <div className="blogImage">
                 <div class="input-group input-group-sm mb-3">
                     <span class="input-group-text" id="inputGroup-sizing-sm">Image URL: </span>
                     <input id="url" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                 </div>
             </div>
             <div className="authorName"> 
                 <div class="input-group mb-3">
                     <span class="input-group-text" id="basic-addon1">Author Name: </span>
                     <input id="author" type="text" required class="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
                 </div>
             </div>
             <div className="blogDescription">
                 <div class="input-group">
                     <span class="input-group-text">Blog Description: </span>
                     <textarea id="Description" class="form-control" aria-label="With textarea" required></textarea>
                 </div>
             </div>
             <div className="createBlog">
                <center><button type="button" onClick={storeData} class="btn btn-primary">Create Blog</button></center> 
             </div>
             <div>
                {info.map(x=><Display name={x.name} Image = {x.Image} author={x.author} des = {x.description}/>)}   
            </div>
             <center>
                <div className="DisplayCenter" hidden = {status}>
                    <Display prop={user}/>
                </div>
             </center>
        </div>
    );
}

export default AddBlog;