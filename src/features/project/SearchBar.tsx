import { Button, Card, Form, FormControl, FormFloating } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { projectAPI } from "../../services/ProjectService";
import { IProject } from "../../models/IProject";


const SearchBar = () => {

    const [filterData, setFilterData] = useState([] as any);
    const [wordEntered, setWordEntered] = useState("");
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(15);
    // , {skip: wordEntered === ""}

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
            <Form className="d-flex" style={{
                display: "flex",
                // width: "500px",
                // padding: "2px",
                paddingLeft: "10px",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                backgroundColor: "white",
                // backgroundColor:" #fce6ef",
                borderRadius: "5px",
                // border: "1px solid #ffc5dd",
                border: "1px solid green",

            }}>
                <input
                    type="text"
                    // className="   "
                    style={{
                        width: "100%",
                        // height: "54px",
                        background: "none",
                        border: "0",
                        padding: "0",
                        outline: "none",


                    }}
                    // type="search"
                    placeholder="Search"
                    // className="me-2"
                    aria-label="Search"
                    onChange={handleFilter}
                    value={wordEntered}
                />

                <Button variant="secondary"
                    style={{
                        backgroundColor: "white",
                        color: "green",
                        textTransform: "uppercase",
                        borderStyle: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        outline: "none",
                    }}
                    type="button"
                    onClick={clearSearchState}>
                    {wordEntered.length === 0 ? <i className="bi bi-search"></i> : <i className="bi bi-x-lg" ></i>}
                </Button>

            </Form>
            {filterData.length != 0 && (
                <Card className="results" style={{
                    width: "12.1em",
                    overflow: "auto",
                    position: "absolute",
                }}>
                    {filterData.map((project) => <Link to={`/card/${project.id}`} onClick={clearSearchState} style={{ textDecoration: "none" }}>{project.title}</Link>)}
                </Card>
            )
            }
        </div>
    )
}

export default SearchBar
