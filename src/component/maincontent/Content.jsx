import React, { useState, useEffect } from "react";
import "./content.css";
import Smallcontent from "../smllcontent/Smallcontent";
import SidebarFilters from "../filter/SidebarFilters";
import { CiHeart } from "react-icons/ci";


const Content = () => {
    const [showFilter, setShowFilter] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div>
            <Smallcontent showFilter={showFilter} setShowFilter={setShowFilter} />

            <div className="layout-container">
                {showFilter && (
                    <div className="filter-sidebar">
                        <div className="filter-section">
                            <label>
                                <input type="checkbox" />
                                <h3>Customizable</h3>
                            </label>
                            <SidebarFilters />
                        </div>
                    </div>
                )}

                <div className="product-display">
                    <div className="grid">
                        {products.map((product) => (
                            <div className="product-card" key={product.id}>
                                <div className="product-img">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <p className="product-name">{product.title}</p>
                                <p className="product-info">
                                    <span className="s">Sign in </span>
                                    or Create an account to see pricing
                                </p>
                                <div className="heart">
                                <CiHeart />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Content;
