import React from 'react';
import styled from "styled-components";

import {Layout} from "../../layout/Layout";
import BlogComponent from "../../components/Blog/Blog";

function Blog(props) {
    return (
        <Layout>
            <BlogComponent />
        </Layout>
    );
}

export default Blog;



