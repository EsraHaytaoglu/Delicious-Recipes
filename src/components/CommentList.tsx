import React, { FunctionComponent, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { getComments } from '../store/actions/commentActions';


interface ICommentsProps {
    id: Number
}
const CommentList:FunctionComponent<ICommentsProps> = (props) =>  {
    const { id } = props;
    const dispatch = useDispatch();
    const data = useSelector((state: AppState) => state.comments.data);
    console.log(data);
    

    useEffect(() => {
        dispatch(getComments(id));
      }, []);
    
    return (
        <div className="comment-container card u-clearfix">
            <h3>Comments</h3>
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
