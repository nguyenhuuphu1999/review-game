import React from 'react';
import Top from '../TopComponent/Top';
import LinkContentItem from './LinkContentItem';

const LinkContent = (props) => {
    return (
        <div>
            <Top name="Bài viết mới"/>
            <LinkContentItem Data={props.Data}/>
          
        </div>
    );
};

export default LinkContent;