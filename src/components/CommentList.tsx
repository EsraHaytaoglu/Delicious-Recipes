import React, { FunctionComponent, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';


import { AppState } from '../store';
import { getComments } from '../store/actions/commentActions';


interface ICommentsProps {
    id: Number
}
const CommentList:FunctionComponent<ICommentsProps> = (props) =>  {
    const { id } = props;
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.comments.data);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getComments(id));
      }, []);

    const addComment = () => {
        navigate('/addComment')
    }
    
    return (
        <div className="comment-container card u-clearfix">
            <h3>Comments</h3>
            <button className='right'onClick={addComment}>Add comment</button>
            {data.map((yorum ,i) => (
                <Row key={i} >
                     <div className="card">
                     <h5 className="food">{yorum.author}</h5>
                     <div className="text">{yorum.body}</div>
                     </div>
                </Row>
            ))}
            
        </div>
    )
}

export default CommentList
