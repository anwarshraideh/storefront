import React from "react";
import { connect } from 'react-redux';

import {activeCategory , reset } from '../store/CategoriesStore';

const Categories = props => {

    return (
        
        <section>
            <ul>
                { props.categoryreducer.categories.map((category, idx) => {

                  return <li key={idx}  onClick={() => props.activeCategory(category)} > {category.displayName} </li>

                })

                }

            </ul>
            <button onClick={props.reset}>Reset</button>
        </section>
    );
}

const mapStateToProps = state => ({
    categoryreducer: state.categoryreducer,
});

const mapDispatchToProps = { activeCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);