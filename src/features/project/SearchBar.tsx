import { Button, Card, Form, FormControl, FormFloating } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { projectAPI } from "../../services/ProjectService";
import { IProject } from "../../models/IProject";
// import {slipToken } from "@reduxjs/toolkit/query"



// interface SearchBar{
//     project: IProject
// }

const SearchBar = () => {

    const [filterData, setFilterData] = useState([] as any);
    const [wordEntered, setWordEntered] = useState(""); //<any | null>
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery<{data: IProject[], error, isLoading} >(15
        // , {skip: wordEntered === "" || null || undefined }
        );
    // const { data: projects, error, isLoading } = (wordEntered == "" || "") ? console.log('test') : projectAPI.useFetchAllProjectsQuery<{data: IProject[], error, isLoading} >(15);
    // <{[id: string]: boolean}>
    //update  !
    // console.log('skip', skip: wordEntered.length == 0);

    // console.log('wordEntered', wordEntered);
    // const projects = useAppSelector(state => state.productReducer.projects);
    // const dispatch = useDispatch();

    const handleFilter = (event) => {

        const searchWord = event.target.value;
        setWordEntered(searchWord);

        if (searchWord === "") {
            setFilterData([]);
        } else {
            const newFilter = projects && projects.filter(project => {
                return project.title.toLowerCase().includes(searchWord.toLowerCase())
            });
            setFilterData(newFilter);
        }
    };

    const clearSearchState = () => {
        setFilterData([]);
        setWordEntered("");
    };


    return (
        <div >
            <Form className="d-flex">
                <input
                    type="search"
                    placeholder="Search"
                    // className="me-2"
                    aria-label="Search"
                    onChange={handleFilter}
                    value={wordEntered }
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
                    position: "absolute",
                    
                }}
               
                >
                    {/* {projects.map((project) => <div>{project.title}</div>)} */}
                    {/* obj['name'] */}
                    {filterData.map((project) => <Link to={`/card/${project.id}`} onClick={clearSearchState} style={{textDecoration: "none"}}>{project.title}</Link>)}
                </Card>
            )
            }
        </div>
    )
}

export default SearchBar
