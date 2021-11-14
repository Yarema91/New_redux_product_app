import { Button, Card, Form, FormControl, FormFloating } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { projectAPI } from "../../services/ProjectService";

// interface SearchBar{
//     project: IProject
// }

const SearchBar = () => {

    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(15);

    const [filterData, setFilterData] = useState([] as any);
    const [wordEntered, setWordEntered] = useState(""); //<any | null>
    // console.log('wordEntered', wordEntered);
    // const projects = useAppSelector(state => state.productReducer.projects);
    // const dispatch = useDispatch();

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        // console.log('set', setWordEntered);
        
        console.log("searchWord", searchWord);
        console.log("wordEntered", wordEntered);

        const newFilter = projects && projects.filter(project => {
            return project.title.toLowerCase().includes(searchWord.toLowerCase())
        });
        if (searchWord === "") {
            setFilterData([]);
        } else {
            setFilterData(newFilter);
            // setWordEntered()  //clean search input
        }
        
    };
    // setWordEntered("");
    // const clearInput = () => {
    //     setFilterData([]);
    //     setWordEntered("");
    //   };
    return (
        <div >
            <Form className="d-flex" >
                <input
                    type="search"
                    placeholder="Search"
                       // className="me-2"
                       aria-label="Search"
                    onChange={handleFilter}
                value={wordEntered}
                />
                {/* {filterData.length === 0 ? <i className="bi bi-search"></i> : <i className="bi bi-x-lg" onClick={clearInput}></i> } 
                <Button variant="outline-success"><i className="bi bi-search"></i></Button>
                  <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                        <i className="bi bi-search"></i>
                    </button>   */}

            </Form>
            {filterData.length != 0 && (
                <Card className="results" style={{
                    width: "12.1em",
                    overflow: "auto",
                    position: "absolute"
                }}
                //  onChange={handleFilter}
                >
                    {/* {projects.map((project) => <div>{project.title}</div>)} */}
                    {/* obj['name'] */}
                    {filterData.map((project) => <Link to={`/card/${project.id}`}>{project.title}</Link>)}
                </Card>
            )
            }
        </div>
    )
}

export default SearchBar
