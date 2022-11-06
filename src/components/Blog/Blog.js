import React from 'react';
import {Section, SectionTitle} from '../../styles/GlobalComponents/index'
import {BlogGridContainer, BlogImage, BlogTitle, BlogMeta, BlogDescription, BlogDate } from "./BlogStyle";

function BlogComponent(props) {
    return (
        <Section>
            <SectionTitle>
                Welcome the Tech Blog
            </SectionTitle>
            <BlogGridContainer>
                <BlogImage></BlogImage>
                <BlogTitle></BlogTitle>
                <BlogMeta>
                    <BlogDescription></BlogDescription>
                    <BlogDate></BlogDate>
                </BlogMeta>
            </BlogGridContainer>
        </Section>
    );
}

export default BlogComponent;